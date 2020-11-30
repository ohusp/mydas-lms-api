<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Patients;
use JWTAuth;
use JWTAuthException;
use Mail;

use App\Mail\WelcomeMail;

use Illuminate\Support\Facades\Validator;
use App\Sanitizes\Sanitizes;
use App\Encrypt\Encrypt;

class PatientsController extends Controller
{   
    function __construct()
    {
        // This is use to get the token for Patients model. it uses the same for user.
        \Config::set('jwt.user', Patients::class);
        \Config::set('auth.providers', ['users' => [
                'driver' => 'eloquent',
                'model' => Patients::class,
            ]]);
    }

    private function getToken($email, $password)
    {
        $token = null;
        //$credentials = $request->only('email', 'password');
        try {
            if (!$token = JWTAuth::attempt( ['email'=>$email, 'password'=>$password])) {
                return response()->json([
                    'response' => 'error',
                    'message' => 'Password or email is invalid',
                    'token'=>$token
                ]);
            }
        } catch (JWTAuthException $e) {
            return response()->json([
                'response' => 'error',
                'message' => 'Token creation failed',
            ]);
        }
        return $token;
    }
    public function login(Request $request)
    {   
        //decrypt request 
        $user = Encrypt::cryptoJsAesDecrypt('where do you go when you by yourself', $request->user);
        // convert array back to laravel request object
        $request = new \Illuminate\Http\Request();
        $request->replace($user);
        $user = $request;
        
        $validator  = Validator::make($user->all(), [ 
            'email'     => 'required|email|max:255', 
            'password'  => 'required|string|min:8|max:255', 
        ]);

        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 201);
        }

        $email      = Sanitizes::my_sanitize_email( $user->email);
        $password   = Sanitizes::my_sanitize_string( $user->password);

        $patient_data = \App\Patients::where('email', $email)->get()->first();
        if ($patient_data && \Hash::check($password, $patient_data->password)) // The passwords match...
        {   
            // This gets the patient role name and passed into a variable
            $role_name = $patient_data->roles->pluck('name');
            $role_name = $role_name[0];

            $token = self::getToken($email, $password);
            $patient_data->auth_token = $token;
            $patient_data->save();

            // get the disabilities values and convert to array
            $disabilities_new = $patient_data->disabilities;
            $disabilities_new = json_decode($disabilities_new, true);

            if( $disabilities_new == "" || $disabilities_new == "null"){
                $disability_none        = "false";
                $disability_hearing     = "false";
                $disability_mobility    = "false";
                $disability_sight       = "false";
                $disability_learning    = "false";
                $disability_others      = "false";
            }else{
            // Pass each value into an array
                $disability_none        = $disabilities_new[0]["disability_none"];
                $disability_hearing     = $disabilities_new[0]["disability_hearing"];
                $disability_mobility    = $disabilities_new[0]["disability_mobility"];
                $disability_sight       = $disabilities_new[0]["disability_sight"];
                $disability_learning    = $disabilities_new[0]["disability_learning"];
                $disability_others      = $disabilities_new[0]["disability_others"];
            }

            // return $disability_none;

            // send response array to the front
            $response = ['success'=>true, 'data'=>[
                'auth_token'=>$patient_data->auth_token,
                'id'=>$patient_data->id,
                'username'=>$patient_data->username,
                'first_name'=>$patient_data->first_name,'last_name'=>$patient_data->last_name, 'middle_name'=>$patient_data->middle_name, 'email'=>$patient_data->email, 'zip_code'=>$patient_data->zip_code, 'telephone'=>$patient_data->telephone, 'title'=>$patient_data->title, 'gender'=>$patient_data->gender, 'dob'=>$patient_data->dob, 'nationality'=>$patient_data->nationality, 'country_of_residence'=>$patient_data->country_of_residence, 'district_province_state'=>$patient_data->district_province_state, 'contact_address'=>$patient_data->contact_address,
                'height'=>$patient_data->height,
                'weight'=>$patient_data->weight, 

                'disability_none'       =>$disability_none,
                'disability_hearing'    =>$disability_hearing,
                'disability_mobility'   =>$disability_mobility,
                'disability_sight'      =>$disability_sight,
                'disability_learning'   =>$disability_learning, 
                'disability_others'     =>$disability_others, 

                'next_kin_name'=>$patient_data->next_kin_name, 'next_kin_relationship'=>$patient_data->next_kin_relationship, 'next_kin_occupation'=>$patient_data->next_kin_occupation, 'next_kin_phone'=>$patient_data->next_kin_phone, 
                'next_kin_email'=>$patient_data->next_kin_email, 'med_currently_using'=>$patient_data->med_currently_using, 'med_allergies'=>$patient_data->med_allergies, 
                'med_blood_group'=>$patient_data->med_blood_group, 'med_underlying_conditions'=>$patient_data->med_underlying_conditions, 'med_family_medical_history'=>$patient_data->med_family_medical_history, 'med_hypertensive'=>$patient_data->med_hypertensive, 
                'med_diabetic'=>$patient_data->med_diabetic, 
                'profile_picture'=>$patient_data->profile_picture, 
                'status'=>$patient_data->status, 
                'created_at'=>$patient_data->created_at
            ]];           
        }
        else 
          $response = ['success'=>false, 'data'=>'Record doesnt exists'];
      
        return response()->json($response, 201);
    }

    public function register(Request $request)
    {   
        // return $request;
        $user = Encrypt::cryptoJsAesDecrypt('where do you go when you by yourself', $request->user);
        // convert array back to laravel request object
        $request = new \Illuminate\Http\Request();
        $request->replace($user);
        // Validate
        $validator = Validator::make($request->all(), [ 
            'first_name'=> 'required|string|max:150', 
            'last_name' => 'required|string|max:150', 
            'username'  => 'required|string|unique:patients|max:255', 
            'email'     => 'required|email|unique:patients|max:255', 
            'password'  => 'required|string|min:8|max:255', 
        ]);
        
        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 201);
        }

        // Sanitize inputs
        $first_name = Sanitizes::my_sanitize_string( $request->first_name);
        $last_name  = Sanitizes::my_sanitize_string( $request->last_name);
        $username   = Sanitizes::my_sanitize_string( $request->username);
        $email      = Sanitizes::my_sanitize_email( $request->email);
        $password   = Sanitizes::my_sanitize_string( $request->password);

        $ev_code = md5(sprintf("%05x%05x",mt_rand(0,0xffff),mt_rand(0,0xffff)));

        $payload = [
            'password'  =>\Hash::make($password),
            'username'  =>$username,
            'email'     =>$email,
            'first_name'=>$first_name,
            'last_name' =>$last_name,
            'auth_token'=> '',
            'ev_code'   =>$ev_code
        ];
                  
        $user = new \App\Patients($payload);
        if ($user->save())
        {
            
            $token = self::getToken($email, $password); // generate user token
            
            if (!is_string($token))  return response()->json(['success'=>false,'data'=>'Token generation failed'], 201);
            
            $user = \App\Patients::where('email', $email)->get()->first();
            
            $user->auth_token = $token; // update user token
            
            $user->save();
            // ///////// ADD ROLE ///////////////////////
            $user->attachRole('user');
            // ////////// SEND MAIL //////////////////////////
            $emailDetails = [
                'title' => 'Welcome to CamMedics',
                'first_name' => $user->first_name,
                'url' => 'https://dashboard.cammedics.com/#/login'
            ];
    
            Mail::to($email)->send(new WelcomeMail($emailDetails));

            $response = ['success'=>true, 'data'=>['username'=>$user->username,'first_name'=>$user->first_name,'last_name'=>$user->last_name,'id'=>$user->id,'email'=>$email,'auth_token'=>$token]];        
        }
        else
            $response = ['success'=>false, 'data'=>'Couldnt register user'];
            return response()->json($response, 201);
    }
}