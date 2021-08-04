<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Subscription_plans;
use App\Subscriptions;
use JWTAuth;
use JWTAuthException;
use Mail;
use App\Mail\SubscriptionPayment;

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

        // This is use to get the token for Students model. it uses the same for user.
        \Config::set('jwt.user', Students::class);
        \Config::set('auth.providers', ['users' => [
                'driver' => 'eloquent',
                'model' => Students::class,
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

    public function pay(Request $waveRequest, $email, $role)
    {   
        // return $request;
        $waveRequest->replace($waveRequest->payment_data);

        $validator  = Validator::make($waveRequest->all(), [ 
            'amount'        => 'required|regex:/^\d+(\.\d{1,2})?$/|max:255', 
            'email'         => 'required|email|max:255', 
            'planId'        => 'required|integer|max:255',
            'planName'      => 'required|string|max:255',
            'planPrice'     => 'required|regex:/^\d+(\.\d{1,2})?$/|max:255',
            'handlingFee'   => 'required|regex:/^\d+(\.\d{1,2})?$/|max:255',
        ]);

        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 201);
        }

        $amount         = Sanitizes::my_sanitize_string($waveRequest->amount);
        $email          = Sanitizes::my_sanitize_string($waveRequest->email);
        $planId         = Sanitizes::my_sanitize_string($waveRequest->planId);
        $planName       = Sanitizes::my_sanitize_string($waveRequest->planName);
        $planPrice      = Sanitizes::my_sanitize_string($waveRequest->planPrice);
        $handlingFee    = Sanitizes::my_sanitize_string($waveRequest->handlingFee);

        $saveSubscription = SubscriptionController::saveSubscription($amount, $email, $planId, $planName, $planPrice, $handlingFee);

        if($saveSubscription){
            // $name = $name." (".$username.")";
            $student = \App\Students::where([['email', $email]])->get()->first();

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
                    'email' => $email,
                    'name'  => $student->first_name. " ".$student->last_name,
                ],
                'meta' => [
                    'price'         => $amount,
                    'email'         => $email,
                    'first_name'    => $student->first_name,
                    'last_name'     => $student->last_name,
                    'plan_id'       => $planId,
                    'plan_name'     => $planName,
                    'plan_price'    => $planPrice,
                    'handling_fee'  => $handlingFee,
                ],
                'customizations' => [
                    'title' => 'Mydas Tutors',
                    'description' => 'Subscription fee',
                    'logo' => 'https://cammedics.com/img/favicon.jpg'
                ]
            ];

            // return $request;

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
                    'Authorization: Bearer FLWSECK-67f55f212a7a2dcf6233e7fbb5341dbe-X',
                    'Content-Type: application/json'
                ),
            ));

            $response = curl_exec($curl);
            // return $response;

            curl_close($curl);
            
            $res = json_decode($response);

            // return $res;

            if($res->status == 'success')
            {   
                $subscription = \App\Subscriptions::where([['email', $email], ['status', 1]])->get()->first();
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
            return redirect(config('global.client_baseURL') . "profile?{$waveRequest->status}&{$waveRequest->tx_ref}");
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
                    "Authorization: Bearer FLWSECK-67f55f212a7a2dcf6233e7fbb5341dbe-X"
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
                // validate payment to be sure user paid correct amount
                $amountPaid     = $res->data->charged_amount;
                $amountToPay    = $res->data->meta->price;
                $number_ticket  = $res->data->meta->number_ticket;
                $email          = $res->data->meta->email;
                $first_name     = $res->data->meta->first_name;
                $last_name      = $res->data->meta->last_name;
                $plan_name      = $res->data->meta->plan_name;
                $plan_price     = $res->data->meta->plan_price;
                $handling_fee   = $res->data->meta->handling_fee;
                if($amountPaid  >= $amountToPay)
                {   
                    // Check if its the amount initiated that was finally paid for
                    $subscription = \App\Subscriptions::where([['email', $email], ['status', 1]])->get()->first();
                    $subscriptionAmount = $subscription->amount;
                    // remove this below
                    // $ticketSalesAmount = 1;
                    if($amountPaid >= $subscriptionAmount){
                        $subscription->tx_ref         = $res->data->tx_ref;
                        $subscription->transaction_id = $waveRequest->transaction_id;
                        $subscription->currency       = $res->data->currency;
                        $subscription->charged_amount = $res->data->charged_amount;
                        $subscription->payment_type   = $res->data->payment_type;
                        $subscription->status = 2;
                        $subscription->save();

                        // Send email ////////////////////////////////
                        $emailDetails = [
                            'title'         => 'Mydas Tutors',
                            'first_name'    => $first_name,
                            'amount_paid'   => $amountPaid,
                            'transaction_ref'=> $$waveRequest->tx_ref,
                            'plan_name'     => $plan_name,
                            'url'           => config('global.client_baseURL')
                        ];
                
                        Mail::to($email)->send(new SubscriptionPayment($emailDetails));
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

                        return redirect(config('global.client_baseURL') . "#/profile?success&{$waveRequest->transaction_id}");
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
                        return redirect(config('global.link1') . "#/concert?tampered&{$waveRequest->transaction_id}");
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
                "Authorization: Bearer FLWSECK-67f55f212a7a2dcf6233e7fbb5341dbe-X"
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

    public static function saveSubscription($amount, $email, $planId, $planName, $planPrice, $handlingFee)
    {   
        // check if theres any subscription initiated before that payment was not made. If any update and if none save new information
        $subscription = \App\Subscriptions::where([['email', $email], ['status', 1]])->get()->first();
        
        if($subscription){
            $subscription->amount      = $amount;
            $subscription->email       = $email;
            $subscription->plan_id     = $planId;
            $subscription->plan_name   = $planName;
            $subscription->plan_price  = $planPrice;
            $subscription->handling_fee= $handlingFee;
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
            ];
                    
            $subscription = new \App\Subscriptions($payload);
            if ($subscription->save())
            {
                // $response = ['success'=>true, 'data'=>['number_ticket'=>$number_ticket, 'total_amount'=>$total_amount]];
                return true;
            }
        }
    }

    public function getSubscriptions()
    {
        $subscriptions = Subscriptions::where([['email', $email]])->get()->all();
        // return $result;
        $response = ['success'=>true, 'data'=>$subscriptions];
        return response()->json($response, 201);
    }

}