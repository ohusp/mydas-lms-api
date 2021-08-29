<?php
namespace App\Http\Controllers;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Subscription_plans;
use App\Subscriptions;
use App\Students;
use JWTAuth;
use JWTAuthException;
use Mail;
// use App\Mail\SubscriptionPayment;

use Illuminate\Support\Facades\Validator;
use App\Sanitizes\Sanitizes;
use App\Encrypt\Encrypt;
use Illuminate\Support\Facades\Storage;
use File;



class SubscriptionController extends Controller
{   
    
    function __construct()
    {   
        // check if logged in as superadmin
        // $this->middleware('role:superadministrator');

        // This is use to get the token for Users model. it uses the same for user.
        \Config::set('jwt.user', Users::class);
        \Config::set('auth.providers', ['users' => [
                'driver' => 'eloquent',
                'model' => Users::class,
            ]]);
    }

    public function getPlans()
    {
        //
        $plans = Subscription_plans::all();
        // return $result;
        $response = ['success'=>true, 'data'=>$plans];
        return response()->json($response, 201);
    }

    public function pay(Request $waveRequest, $username, $role)
    {   
        $waveRequest->replace($waveRequest->payment_data);
        // return $waveRequest;

        $validator  = Validator::make($waveRequest->all(), [ 
            'amount'        => 'required|regex:/^\d+(\.\d{1,2})?$/|max:255', 
            'username'      => 'required|string|max:255', 
            'planId'        => 'required|integer|max:255',
            'planName'      => 'required|string|max:255',
            'planPrice'     => 'required|regex:/^\d+(\.\d{1,2})?$/|max:255',
            'handlingFee'   => 'required|regex:/^\d+(\.\d{1,2})?$/|max:255',
            'planDuration'  => 'required|integer|max:255',
        ]);

        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 201);
        }

        $amount         = Sanitizes::my_sanitize_string($waveRequest->amount);
        $username       = Sanitizes::my_sanitize_string($waveRequest->username);
        $planId         = Sanitizes::my_sanitize_string($waveRequest->planId);
        $planName       = Sanitizes::my_sanitize_string($waveRequest->planName);
        $planPrice      = Sanitizes::my_sanitize_string($waveRequest->planPrice);
        $handlingFee    = Sanitizes::my_sanitize_string($waveRequest->handlingFee);
        $planDuration   = Sanitizes::my_sanitize_string($waveRequest->planDuration);

        // get expiration date
        $currentDateTime = Carbon::now();
        $expirationTime  = Carbon::now()->addMonths($planDuration);

        $student = \App\Users::where([['username', $username]])->get()->first();
        // return $student->email;

        $saveSubscription = SubscriptionController::saveSubscription($amount, $student->email, $planId, $planName, $planPrice, $handlingFee, $planDuration, $expirationTime);

        if($saveSubscription){
            // $name = $name." (".$username.")";
            // $student = \App\Users::where([['email', $email]])->get()->first();

            //* Prepare our rave request
            $request = [
                'tx_ref' => time(),
                // 'amount' => $amount,
                'amount' => 1,
                // remove - change NGN to USD
                'currency' => 'NGN',
                'payment_options' => 'card',
                'redirect_url' => config('global.api_baseURL') . 'process/subscription_fee',
                'customer' => [
                    'email' => $student->email,
                    'name'  => $student->first_name. " ".$student->last_name,
                ],
                'meta' => [
                    'price'         => $amount,
                    'email'         => $student->email,
                    'first_name'    => $student->first_name,
                    'last_name'     => $student->last_name,
                    'plan_id'       => $planId,
                    'plan_name'     => $planName,
                    'plan_price'    => $planPrice,
                    'handling_fee'  => $handlingFee,
                    'plan_duration'    => $planDuration,
                    'expiration_time'  => $expirationTime,
                ],
                'customizations' => [
                    'title' => 'Mydas Tutors',
                    'description' => 'Subscription fee',
                    'logo' => 'https://cammedics.com/img/favicon.jpg'
                ]
            ];

            //* Ca;; f;iterwave emdpoint
            $curl = curl_init();

            curl_setopt_array($curl, array(
                CURLOPT_URL => 'https://api.flutterwave.com/v3/payments',
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_ENCODING => '',
                CURLOPT_MAXREDIRS => 10,
                CURLOPT_TIMEOUT => 0,
                CURLOPT_FOLLOWLOCATION => true,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST => 'POST',
                CURLOPT_POSTFIELDS => json_encode($request),
                CURLOPT_HTTPHEADER => array(
                    'Authorization: Bearer FLWSECK-68f1d7a23036d4c99bf139c9e9415f3c-X',
                    'Content-Type: application/json'
                ),
            ));

            $response = curl_exec($curl);
            // return $response;

            curl_close($curl);
            // $response = '[{"status":"success","message":"Hosted Link","data":{"link":"https://checkout.flutterwave.com/v3/hosted/pay/844e2ea2e94c39daa702"}}]';
            $res = json_decode($response);

            // return $res;

            if($res->status == 'success')
            {   
                $subscription = \App\Subscriptions::where([['email', $student->email], ['status', 1]])->get()->first();
                $subscription->status = 2;
                $subscription->save();

                $link = $res->data->link;
                // return $link;
                $response = ['success'=>true, 'data'=>$link];
                return response()->json($response, 201);
                // header('Location: '.$link);
            }
            else
            {
                $response = ['success'=>false, 'data'=>'We can not process your payment'];
                return response()->json($response, 201);
            }
        }
    }

    public function process(Request $waveRequest)
    {  
        // return $waveRequest;
        //* check payment status
        if($waveRequest->status == 'cancelled')
        {
            return redirect(config('global.client_baseURL') . "select_plan?{$waveRequest->status}&{$waveRequest->tx_ref}");
        }
        elseif($waveRequest->status == 'successful')
        {
            $txid = $waveRequest->transaction_id;

            $curl = curl_init();
            curl_setopt_array($curl, array(
                CURLOPT_URL => "https://api.flutterwave.com/v3/transactions/{$txid}/verify",
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_ENCODING => "",
                CURLOPT_MAXREDIRS => 10,
                CURLOPT_TIMEOUT => 0,
                CURLOPT_FOLLOWLOCATION => true,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST => "GET",
                CURLOPT_HTTPHEADER => array(
                    "Content-Type: application/json",
                    "Authorization: Bearer FLWSECK-68f1d7a23036d4c99bf139c9e9415f3c-X"
                ),
            ));
                
            $response = curl_exec($curl);
            // return $response;
            if($response == ""){
                return $this->process($waveRequest);
            }
            
            curl_close($curl);
            
            $res = json_decode($response);

            if($res->status == "success")
            {   
                // $response = [ 'success'=>true, 'data'=>$res ];
                // return response()->json($response, 201);
                // validate payment to be sure user paid correct amount
                $amountPaid     = $res->data->charged_amount;
                $amountToPay    = $res->data->meta->price;
                $email          = $res->data->meta->email;
                $first_name     = $res->data->meta->first_name;
                $last_name      = $res->data->meta->last_name;
                $plan_name      = $res->data->meta->plan_name;
                $plan_price     = $res->data->meta->plan_price;
                $handling_fee   = $res->data->meta->handling_fee;
                $plan_duration     = $res->data->meta->plan_duration;
                $expiration_time   = $res->data->meta->expiration_time;

                ////////////Delete /////////////////////////
                $amountToPay = 1;
                // /////////////////////////////////////////
                if($amountPaid  >= $amountToPay)
                {   
                    // $response = [ 'success'=>true, 'data1234567890'=>$res ];
                    // return response()->json($response, 201);
                    // Check if its the amount initiated that was finally paid for
                    $subscription = \App\Subscriptions::where([['email', $email], ['status', 2]])->get()->first();
                    $subscriptionAmount = $subscription->amount;
                    // Delete this below
                    $subscriptionAmount = 1;
                    if($amountPaid >= $subscriptionAmount){
                        $subscription->tx_ref         = $res->data->tx_ref;
                        $subscription->transaction_id = $waveRequest->transaction_id;
                        $subscription->currency       = $res->data->currency;
                        $subscription->charged_amount = $res->data->charged_amount;
                        $subscription->payment_type   = $res->data->payment_type;
                        $subscription->status = 3;
                        $subscription->save();

                        // Send email ////////////////////////////////
                        $emailDetails = [
                            'title'             => 'Mydas Tutors',
                            'first_name'        => $first_name,
                            'amount_paid'       => $amountPaid,
                            'transaction_ref'   => $waveRequest->tx_ref,
                            'plan_name'         => $plan_name,
                            'plan_duration'     => $plan_duration,
                            'expiration_time'   => $expiration_time,
                            'url'               => config('global.client_baseURL')
                        ];

                        $sendEmail = MailController::sendEmail($emailDetails, "SubscriptionPayment");
                
                        // Mail::to($email)->send(new SubscriptionPayment($emailDetails));
                        // /////////////////////////////// SAVE ACTIVITY /////////////////////////////////////////
                        // $paymentDetails = [
                        //     'tx_ref'         =>$res->data->tx_ref,
                        //     'transaction_id' =>$waveRequest->transaction_id,
                        //     'currency'       =>$res->data->currency,
                        //     'charged_amount' =>$res->data->charged_amount,
                        //     'payment_type'   =>$res->data->payment_type,
                        //     'email'          =>$res->data->customer->email,
                        //     'activity'       => 'Transaction successful',
                        // ];
                        // $activitiespayment = new \App\Activitiespayment($paymentDetails);
                        // $activitiespayment->save();
                        // /////////////////////////////// SAVE ACTIVITY /////////////////////////////////////////

                        return redirect(config('global.client_baseURL') . "user_profile?success&{$waveRequest->transaction_id}");
                        //* Continue to give item to the user
                    }else{
                        // /////////////////////////////// SAVE ACTIVITY /////////////////////////////////////////
                        // $paymentDetails = [
                        //     'tx_ref'         =>$res->data->tx_ref,
                        //     'transaction_id' =>$waveRequest->transaction_id,
                        //     'currency'       =>$res->data->currency,
                        //     'charged_amount' =>$res->data->charged_amount,
                        //     'payment_type'   =>$res->data->payment_type,
                        //     'email'          =>$res->data->customer->email,
                        //     'activity'       => 'Fraud transaction detected (Difference btw the amount when number of ticket was clicked and amount paid for)',
                        // ];
                        // $activitiespayment = new \App\Activitiespayment($paymentDetails);
                        // $activitiespayment->save();
                        // /////////////////////////////// SAVE ACTIVITY /////////////////////////////////////////
                        return redirect(config('global.link1') . "user_profile?tampered&{$waveRequest->transaction_id}");
                    }
                }
                else
                {   
                    
                    $status = "5";
                    $email = $res->data->customer->email;
                    $subscription = Subscriptions::where([['amount', $amountPaid], ['email', $email], ['status', 2]])->first();
                    $subscription->tx_ref         = $res->data->tx_ref;
                    $subscription->transaction_id = $waveRequest->transaction_id;
                    $subscription->currency       = $res->data->currency;
                    $subscription->charged_amount = $res->data->charged_amount;
                    $subscription->payment_type   = $res->data->payment_type;
                    $subscription->status         = $status;
                    $subscription->save();
                    // /////////////////////////////// SAVE ACTIVITY /////////////////////////////////////////
                    // $paymentDetails = [
                    //     'tx_ref'         =>$res->data->tx_ref,
                    //     'transaction_id' =>$waveRequest->transaction_id,
                    //     'currency'       =>$res->data->currency,
                    //     'charged_amount' =>$res->data->charged_amount,
                    //     'payment_type'   =>$res->data->payment_type,
                    //     'email'          =>$res->data->customer->email,
                    //     'activity'       => 'Fraud transaction detected',
                    // ];
                    // $activitiespayment = new \App\Activitiespayment($paymentDetails);
                    // $activitiespayment->save();
                    // /////////////////////////////// SAVE ACTIVITY /////////////////////////////////////////

                    return redirect(config('global.client_baseURL') . "#/profile?Fraud&{$waveRequest->transaction_id}");
                }
            }
            else
            { 
                if($res->message == "No transaction was found for this id"){
                    $status = "6";
                    $email = $res->data->customer->email;
                    $subscription = Subscriptions::where([['amount', $amountPaid], ['email', $email], ['status', 2]])->first();
                    $subscription->tx_ref         = $res->data->tx_ref;
                    $subscription->transaction_id = $waveRequest->transaction_id;
                    $subscription->currency       = $res->data->currency;
                    $subscription->charged_amount = $res->data->charged_amount;
                    $subscription->payment_type   = $res->data->payment_type;
                    $subscription->status         = $status;
                    $subscription->save();
                    // /////////////////////////////// SAVE ACTIVITY /////////////////////////////////////////
                    // $paymentDetails = [
                    //     'tx_ref'         =>$res->data->tx_ref,
                    //     'transaction_id' =>$waveRequest->transaction_id,
                    //     'currency'       =>$res->data->currency,
                    //     'charged_amount' =>$res->data->charged_amount,
                    //     'payment_type'   =>$res->data->payment_type,
                    //     'email'          =>$res->data->customer->email,
                    //     'activity'       => 'No transaction was found for this id',
                    // ];
                    // $activitiespayment = new \App\Activitiespayment($paymentDetails);
                    // $activitiespayment->save();
                    // /////////////////////////////// SAVE ACTIVITY /////////////////////////////////////////

                    return redirect(config('global.client_baseURL') . "#/concert?No-transaction&{$waveRequest->transaction_id}");
                }
            }
        }
    }

    public function verify(Request $waveRequest)
    {  
        // return $waveRequest;
        $txid   = $waveRequest->transaction_id;
        $email  = $waveRequest->email;
        // return  $waveRequest->transaction_id;

        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_URL => "https://api.flutterwave.com/v3/transactions/{$txid}/verify",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "GET",
            CURLOPT_HTTPHEADER => array(
                "Content-Type: application/json",
                "Authorization: Bearer FLWSECK-68f1d7a23036d4c99bf139c9e9415f3c-X"
            ),
        ));
            
        $response = curl_exec($curl);
        if($response == ""){
            return $this->verify($waveRequest);
        }
        
        curl_close($curl);
        
        $res = json_decode($response);

        if($res->status == "success")
        {   
            // validate payment to be sure user paid correct amount
            $amountPaid     = $res->data->charged_amount;
            $amountToPay    = $res->data->meta->price;
            if($amountPaid  >= $amountToPay)
            {   
                // /////////////////////////////// SAVE ACTIVITY /////////////////////////////////////////
                // $paymentDetails = [
                //     'tx_ref'         =>$res->data->tx_ref,
                //     'transaction_id' =>$waveRequest->transaction_id,
                //     'currency'       =>$res->data->currency,
                //     'charged_amount' =>$res->data->charged_amount,
                //     'payment_type'   =>$res->data->payment_type,
                //     'email'          =>$res->data->customer->email,
                //     'activity'       => 'Transaction successful',
                // ];
                // $activitiespayment = new \App\Activitiespayment($paymentDetails);
                // $activitiespayment->save();
                // /////////////////////////////// SAVE ACTIVITY /////////////////////////////////////////
                $response = ['success'=>true, 'data'=>'Transaction Successful'];
                return response()->json($response, 201);
            }
            else
            {   
                // /////////////////////////////// SAVE ACTIVITY /////////////////////////////////////////
                // $paymentDetails = [
                //     'tx_ref'         =>$res->data->tx_ref,
                //     'transaction_id' =>$waveRequest->transaction_id,
                //     'currency'       =>$res->data->currency,
                //     'charged_amount' =>$res->data->charged_amount,
                //     'payment_type'   =>$res->data->payment_type,
                //     'email'          =>$res->data->customer->email,
                //     'activity'       => 'Fraud transaction detected',
                // ];
                // $activitiespayment = new \App\Activitiespayment($paymentDetails);
                // $activitiespayment->save();
                // /////////////////////////////// SAVE ACTIVITY /////////////////////////////////////////
                $response = ['success'=>false, 'data'=>'Fraud transaction detected'];
                return response()->json($response, 201);
            }
        }
        else
        { 
            if($res->message == "No transaction was found for this id"){
                // /////////////////////////////// SAVE ACTIVITY /////////////////////////////////////////
                // $paymentDetails = [
                //     'email'          =>$email,
                //     'activity'       => 'No transaction was found for this id',
                // ];
                // $activitiespayment = new \App\Activitiespayment($paymentDetails);
                // $activitiespayment->save();
                // /////////////////////////////// SAVE ACTIVITY /////////////////////////////////////////
                
                $response = ['success'=>false, 'data'=>'No transaction was found'];
                return response()->json($response, 201);
            }
        }
        
    }

    public static function saveSubscription($amount, $email, $planId, $planName, $planPrice, $handlingFee, $planDuration, $expirationTime)
    {   
        // return ($amount ."-". $email."-".$planId."-".$planName."-".$planPrice."-". $handlingFee);
        // check if theres any subscription initiated before that payment was not made. If any update and if none save new information
        $subscription = \App\Subscriptions::where([['email', $email], ['status', 1]])->get()->first();
        
        if($subscription){
            $subscription->amount      = $amount;
            $subscription->email       = $email;
            $subscription->plan_id     = $planId;
            $subscription->plan_name   = $planName;
            $subscription->plan_price       = $planPrice;
            $subscription->handling_fee     = $handlingFee;
            $subscription->plan_duration    = $planDuration;
            $subscription->expiration_time  = $expirationTime;
            $subscription->save();

            // $response = ['success'=>true, 'data'=>['number_ticket'=>$number_ticket, 'total_amount'=>$total_amount]];
            return true;
        }else{
            $payload = [
                'amount'        =>$amount,
                'email'         =>$email,
                'plan_id'       =>$planId,
                'plan_name'     =>$planName,
                'plan_price'    =>$planPrice,
                'handling_fee'  =>$handlingFee,
                'plan_duration'     =>$planDuration,
                'expiration_time'   =>$expirationTime,
            ];
                    
            $subscription = new \App\Subscriptions($payload);
            if ($subscription->save())
            {
                // $response = ['success'=>true, 'data'=>['number_ticket'=>$number_ticket, 'total_amount'=>$total_amount]];
                return true;
            }
        }
    }

    public function getSubscriptions($username, $role)
    {
        $updateSubscriptions = SubscriptionController::updateSubscriptions();

        $user = \App\Users::where([['username', $username]])->get()->first();
        // return $student->email;
        $my_subscriptions = DB::table('subscriptions')
            ->join('subscription_plans', 'subscriptions.plan_id', '=', 'subscription_plans.id')
            ->select('subscriptions.*', 'subscription_plans.name', 'subscription_plans.description', 'subscription_plans.img', 'subscription_plans.price', 'subscription_plans.duration', 'subscription_plans.allowed_students')
            ->where([['subscriptions.email', $user->email], ['subscriptions.status', 3]])
            ->orWhere([['subscriptions.status', 4]])
            ->orWhere([['subscriptions.status', 7]])
            ->get()->all();

        // return $my_subscriptions;

        $student_count = array();
        $mySubscriptionsCount = count($my_subscriptions);
        for ($i=0; $i < $mySubscriptionsCount; $i++){
            $subscription_id  = $my_subscriptions[$i]->id;
            $num_students     = Students::where([['subscription_id', $subscription_id]])->count();
            array_push($student_count, $num_students);
        }
        // return $my_subscriptions;
        $response = ['success'=>true, 'my_subscriptions'=>$my_subscriptions, 'student_count'=>$student_count];
        return response()->json($response, 201);
    }

    public function updateSubscriptions()
    {  
        $subscriptions_data = Subscriptions::where([['status', 3]])
        ->orWhere([['status', 4]])
        ->get()->all();

        $SubscriptionsCount = count($subscriptions_data);
        
        for ($i=0; $i < $SubscriptionsCount; $i++){
            $expirationTime = $subscriptions_data[$i]->expiration_time;
            $expirationTime = explode( " ", $expirationTime );
            $date           = trim($expirationTime[0]," ");

            $expirationDate = date_create($date);
            $today          = date_create(date("Y-m-d"));
            $interval       = date_diff($today, $expirationDate);
            $difference     = $interval->format('%R%a');

            // if it has passed expiration day, seet status to 7
            if($difference < 0) {
                $subscriptions_data[$i]->status = 7;
                $subscriptions_data[$i]->save();
            }
        }
        return;
    }

    // ///////
    public function renewSubscription(Request $waveRequest, $username, $role)
    {   
        $waveRequest->replace($waveRequest->payment_data);
        // return $waveRequest;

        $validator  = Validator::make($waveRequest->all(), [ 
            'amount'         => 'required|regex:/^\d+(\.\d{1,2})?$/|max:255', 
            'username'       => 'required|string|max:255', 
            'subscriptionId' => 'required|integer|max:255',
            'planName'       => 'required|string|max:255',
            'planPrice'      => 'required|regex:/^\d+(\.\d{1,2})?$/|max:255',
            'handlingFee'    => 'required|regex:/^\d+(\.\d{1,2})?$/|max:255',
            'planDuration'   => 'required|integer|max:255',
        ]);

        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 201);
        }

        $amount         = Sanitizes::my_sanitize_string($waveRequest->amount);
        $username       = Sanitizes::my_sanitize_string($waveRequest->username);
        $subscriptionId = Sanitizes::my_sanitize_string($waveRequest->subscriptionId);
        $planName       = Sanitizes::my_sanitize_string($waveRequest->planName);
        $planPrice      = Sanitizes::my_sanitize_string($waveRequest->planPrice);
        $handlingFee    = Sanitizes::my_sanitize_string($waveRequest->handlingFee);
        $planDuration   = Sanitizes::my_sanitize_string($waveRequest->planDuration);

        // get expiration date
        $currentDateTime = Carbon::now();
        $expirationTime  = Carbon::now()->addMonths($planDuration);

        $student = \App\Users::where([['username', $username]])->get()->first();
        // return $student->email;

        // $saveSubscription = SubscriptionController::saveSubscription($amount, $student->email, $planId, $planName, $planPrice, $handlingFee, $planDuration, $expirationTime);

        // if($saveSubscription){
            // $name = $name." (".$username.")";
            // $student = \App\Users::where([['email', $email]])->get()->first();

            //* Prepare our rave request
            $request = [
                'tx_ref' => time(),
                // 'amount' => $amount,
                'amount' => 1,
                // remove - change NGN to USD
                'currency' => 'NGN',
                'payment_options' => 'card',
                'redirect_url' => config('global.api_baseURL') . 'renew/subscription/process',
                'customer' => [
                    'email' => $student->email,
                    'name'  => $student->first_name. " ".$student->last_name,
                ],
                'meta' => [
                    'price'           => $amount,
                    'email'           => $student->email,
                    'first_name'      => $student->first_name,
                    'last_name'       => $student->last_name,
                    'subscription_id' => $subscriptionId,
                    'plan_name'     => $planName,
                    'plan_price'    => $planPrice,
                    'handling_fee'  => $handlingFee,
                    'plan_duration'    => $planDuration,
                    'expiration_time'  => $expirationTime,
                ],
                'customizations' => [
                    'title' => 'Mydas Tutors',
                    'description' => 'Subscription fee',
                    'logo' => 'https://cammedics.com/img/favicon.jpg'
                ]
            ];

            //* Ca;; f;iterwave emdpoint
            $curl = curl_init();

            curl_setopt_array($curl, array(
                CURLOPT_URL => 'https://api.flutterwave.com/v3/payments',
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_ENCODING => '',
                CURLOPT_MAXREDIRS => 10,
                CURLOPT_TIMEOUT => 0,
                CURLOPT_FOLLOWLOCATION => true,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST => 'POST',
                CURLOPT_POSTFIELDS => json_encode($request),
                CURLOPT_HTTPHEADER => array(
                    'Authorization: Bearer FLWSECK-68f1d7a23036d4c99bf139c9e9415f3c-X',
                    'Content-Type: application/json'
                ),
            ));

            $response = curl_exec($curl);
            // return $response;

            curl_close($curl);
            // $response = '[{"status":"success","message":"Hosted Link","data":{"link":"https://checkout.flutterwave.com/v3/hosted/pay/844e2ea2e94c39daa702"}}]';
            $res = json_decode($response);

            // return $res;

            if($res->status == 'success')
            {   
                $subscription = \App\Subscriptions::where([['id', $subscriptionId]])->get()->first();
                $subscription->status = 8;
                $subscription->save();

                $link = $res->data->link;
                // return $link;
                $response = ['success'=>true, 'data'=>$link];
                return response()->json($response, 201);
                // header('Location: '.$link);
            }
            else
            {
                $response = ['success'=>false, 'data'=>'We can not process your payment'];
                return response()->json($response, 201);
            }
        // }
    }

    public function renewSubscriptionProcess(Request $waveRequest)
    {  
        // return $waveRequest;
        //* check payment status
        if($waveRequest->status == 'cancelled')
        {
            return redirect(config('global.client_baseURL') . "user_profile?{$waveRequest->status}&{$waveRequest->tx_ref}");
        }
        elseif($waveRequest->status == 'successful')
        {
            $txid = $waveRequest->transaction_id;

            $curl = curl_init();
            curl_setopt_array($curl, array(
                CURLOPT_URL => "https://api.flutterwave.com/v3/transactions/{$txid}/verify",
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_ENCODING => "",
                CURLOPT_MAXREDIRS => 10,
                CURLOPT_TIMEOUT => 0,
                CURLOPT_FOLLOWLOCATION => true,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST => "GET",
                CURLOPT_HTTPHEADER => array(
                    "Content-Type: application/json",
                    "Authorization: Bearer FLWSECK-68f1d7a23036d4c99bf139c9e9415f3c-X"
                ),
            ));
                
            $response = curl_exec($curl);
            // return $response;
            if($response == ""){
                return $this->process($waveRequest);
            }
            
            curl_close($curl);
            
            $res = json_decode($response);

            if($res->status == "success")
            {   
                // $response = [ 'success'=>true, 'data'=>$res ];
                // return response()->json($response, 201);
                // validate payment to be sure user paid correct amount
                $amountPaid     = $res->data->charged_amount;
                $amountToPay    = $res->data->meta->price;
                $email          = $res->data->meta->email;
                $first_name     = $res->data->meta->first_name;
                $last_name      = $res->data->meta->last_name;
                $subscriptionId = $res->data->meta->subscription_id;
                $plan_name      = $res->data->meta->plan_name;
                $plan_price     = $res->data->meta->plan_price;
                $handling_fee   = $res->data->meta->handling_fee;
                $plan_duration     = $res->data->meta->plan_duration;
                $expiration_time   = $res->data->meta->expiration_time;

                ////////////Delete /////////////////////////
                $amountToPay = 1;
                // /////////////////////////////////////////
                if($amountPaid  >= $amountToPay)
                {   
                    // $response = [ 'success'=>true, 'data1234567890'=>$res ];
                    // return response()->json($response, 201);
                    // Check if its the amount initiated that was finally paid for
                    $subscription = \App\Subscriptions::where([['id', $subscriptionId]])->get()->first();
                    $subscriptionAmount = $subscription->amount;
                    // Delete this below
                    $subscriptionAmount = 1;
                    if($amountPaid >= $subscriptionAmount){
                        $subscription->tx_ref         = $res->data->tx_ref;
                        $subscription->transaction_id = $waveRequest->transaction_id;
                        $subscription->currency       = $res->data->currency;
                        $subscription->charged_amount = $res->data->charged_amount;
                        $subscription->payment_type   = $res->data->payment_type;
                        $subscription->status = 3;
                        $subscription->save();

                        // Send email ////////////////////////////////
                        $emailDetails = [
                            'title'             => 'Mydas Tutors',
                            'first_name'        => $first_name,
                            'amount_paid'       => $amountPaid,
                            'transaction_ref'   => $waveRequest->tx_ref,
                            'plan_name'         => $plan_name,
                            'plan_duration'     => $plan_duration,
                            'expiration_time'   => $expiration_time,
                            'url'               => config('global.client_baseURL')
                        ];

                        $sendEmail = MailController::sendEmail($emailDetails, "RenewSubscriptionPayment");
                
                        return redirect(config('global.client_baseURL') . "user_profile?success&{$waveRequest->transaction_id}");
                        //* Continue to give item to the user
                    }else{
                        return redirect(config('global.link1') . "user_profile?tampered&{$waveRequest->transaction_id}");
                    }
                }
            }
        }
    }

}