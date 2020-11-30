<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Hospitals;
use JWTAuth;
use JWTAuthException;
use Mail;

use App\Doctors;
use App\Mail\WelcomeMail;

use Illuminate\Support\Facades\Validator;
use App\Sanitizes\Sanitizes;
use App\Encrypt\Encrypt;

class HospitalController extends Controller
{   
    function __construct()
    {
        // This is use to get the token for Hospitals model. it uses the same for user.
        \Config::set('jwt.user', Hospitals::class);
        \Config::set('auth.providers', ['users' => [
                'driver' => 'eloquent',
                'model' => Hospitals::class,
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

        $hospital_data = \App\Hospitals::where('email', $email)->get()->first();
        if ($hospital_data && \Hash::check($password, $hospital_data->password)) // The passwords match...
        {   
            // This gets the user role name and passed into a variable
            $role_name = $hospital_data->roles->pluck('name');
            $role_name = $role_name[0];

            $token = self::getToken($email, $password);
            $hospital_data->auth_token = $token;
            $hospital_data->save();

            // return $disability_none;

            // send response array to the front
            $response = ['success'=>true, 'data'=>[
                'auth_token'=>$hospital_data->auth_token,
                'id'=>$hospital_data->id,
                'name'=>$hospital_data->name,
                'username'=>$hospital_data->username, 
                'email'=>$hospital_data->email, 
                'zip_code'=>$hospital_data->zip_code, 
                'telephone'=>$hospital_data->telephone, 
                'country'=>$hospital_data->country, 
                'district_province_state'=>$hospital_data->district_province_state, 
                'address'=>$hospital_data->address, 
                'test_carried_out'=>$hospital_data->test_carried_out,
                'status'=>$hospital_data->status, 
                'created_at'=>$hospital_data->created_at
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
            'name'=> 'required|string|max:250',  
            'username'  => 'required|string|unique:hospitals|max:255',
            'email'     => 'required|email|unique:hospitals|max:255', 
            'password'  => 'required|string|min:8|max:255', 
        ]);
        
        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 201);
        }

        // Sanitize inputs
        $name       = Sanitizes::my_sanitize_string( $request->name);
        $username   = Sanitizes::my_sanitize_string( $request->username);
        $email      = Sanitizes::my_sanitize_email( $request->email);
        $password   = Sanitizes::my_sanitize_string( $request->password);

        $ev_code = md5(sprintf("%05x%05x",mt_rand(0,0xffff),mt_rand(0,0xffff)));

        $payload = [
            'password'  =>\Hash::make($password),
            'username'  =>$username,
            'email'     =>$email,
            'name'      =>$name,
            'auth_token'=> '',
            'ev_code'   =>$ev_code
        ];
                  
        $user = new \App\Hospitals($payload);
        if ($user->save())
        {
            
            $token = self::getToken($email, $password); // generate user token
            
            if (!is_string($token))  return response()->json(['success'=>false,'data'=>'Token generation failed'], 201);
            
            $user = \App\Hospitals::where('email', $email)->get()->first();
            
            $user->auth_token = $token; // update user token
            
            $user->save();
            // ///////// ADD ROLE ///////////////////////
            $user->attachRole('user');
            // ////////// SEND MAIL //////////////////////////
            $emailDetails = [
                'title' => 'Welcome to CamMedics',
                'first_name' => $user->name,
                'url' => 'https://dashboard.cammedics.com/#/login_hospital'
            ];
    
            Mail::to($email)->send(new WelcomeMail($emailDetails));

            $response = ['success'=>true, 'data'=>['username'=>$user->username,'name'=>$user->name,'id'=>$user->id,'email'=>$email,'auth_token'=>$token]];        
        }
        else
            $response = ['success'=>false, 'data'=>'Couldnt register user'];
            return response()->json($response, 201);
    }

    // public function addDoctor(Request $request, $hospital_id)
    // {   
    //     // return $request;
    //     // Validate
    //     $validator = Validator::make($request->all(), [ 
    //         'area_of_specialization'    => 'required|string|max:65535', 
    //         'contact_address'           => 'required|string|max:65535', 
    //         'country_of_residence'      => 'required|string|max:255', 
    //         'district_province_state'   => 'required|string|max:255', 
    //         'dob'                       => 'required|string|max:255', 
    //         'email'                     => 'required|email|unique:doctors|max:255', 
    //         'first_name'                => 'required|string|max:255', 
    //         'gender'                    => 'required|string|max:255', 
    //         'last_name'                 => 'required|string|max:255', 
    //         'middle_name'               => 'required|string|max:255', 
    //         'password'                  => 'required|string|min:8|max:255', 
    //         'telephone'                 => 'required|string|max:255', 
    //         'username'                  => 'required|string|unique:doctors|max:255',
    //         'zip_code'                  => 'required|string|max:255', 
    //         'consultation_fee'          => 'required|string|max:255', 
    //     ]);
        
    //     // Return validation error
    //     if ($validator->fails()) { 
    //         $validationError = $validator->errors(); 
    //         $response = ['success'=>false, 'data'=>$validationError];
    //         return response()->json($response, 201);
    //     }

    //     // Sanitize inputs
    //     $area_of_specialization     = Sanitizes::my_sanitize_string( $request->area_of_specialization);
    //     $available_by_time          = Sanitizes::my_sanitize_string( $request->available_by_time);
    //     $available_on_appointment   = Sanitizes::my_sanitize_string( $request->available_on_appointment);
    //     $available_on_emergency     = Sanitizes::my_sanitize_string( $request->available_on_emergency);
    //     $contact_address            = Sanitizes::my_sanitize_string( $request->contact_address);
    //     $country_of_residence       = Sanitizes::my_sanitize_string( $request->country_of_residence);
    //     $district_province_state    = Sanitizes::my_sanitize_string( $request->district_province_state);
    //     $dob                        = Sanitizes::my_sanitize_string( $request->dob);
    //     $email                      = Sanitizes::my_sanitize_email( $request->email);
    //     $first_name                 = Sanitizes::my_sanitize_string( $request->first_name);
    //     $gender                     = Sanitizes::my_sanitize_string( $request->gender);
    //     $gender_others              = Sanitizes::my_sanitize_string( $request->gender_others);
    //     $last_name                  = Sanitizes::my_sanitize_string( $request->last_name);
    //     $middle_name                = Sanitizes::my_sanitize_string( $request->middle_name);
    //     $nationality                = Sanitizes::my_sanitize_string( $request->nationality);
    //     $password                   = Sanitizes::my_sanitize_string( $request->password);
    //     $telephone                  = Sanitizes::my_sanitize_number( $request->telephone);
    //     $username                   = Sanitizes::my_sanitize_string( $request->username);
    //     $zip_code                   = Sanitizes::my_sanitize_string( $request->zip_code);
    //     $consultation_fee           = Sanitizes::my_sanitize_number( $request->consultation_fee);
        
    //     $ev_code = md5(sprintf("%05x%05x",mt_rand(0,0xffff),mt_rand(0,0xffff)));

    //     $payload = [
    //         'password'  =>\Hash::make($password),
    //         'auth_token'=> '',
    //         'ev_code'   =>$ev_code,

    //         'area_of_specialization'    => $area_of_specialization, 
    //         'available_by_time'         => $available_by_time, 
    //         'available_on_appointment'  => $available_on_appointment, 
    //         'available_on_emergency'    => $available_on_emergency, 
    //         'contact_address'           => $contact_address, 
    //         'country_of_residence'      => $country_of_residence, 
    //         'district_province_state'   => $district_province_state, 
    //         'dob'                       => $dob, 
    //         'email'                     => $email, 
    //         'first_name'                => $first_name, 
    //         'gender'                    => $gender, 
    //         'gender_others'             => $gender_others, 
    //         'last_name'                 => $last_name, 
    //         'middle_name'               => $middle_name, 
    //         'nationality'               => $nationality, 
    //         'telephone'                 => $telephone, 
    //         'username'                  => $username,
    //         'zip_code'                  => $zip_code, 

    //         'hospital'                  => $hospital_id,
    //         'consultation_fee'          => $consultation_fee,
    //     ];
                  
    //     $user = new \App\Doctors($payload);
    //     if ($user->save())
    //     {
            
    //         $token = self::getToken($request->email, $request->password); // generate user token
            
    //         if (!is_string($token))  return response()->json(['success'=>false,'data'=>'Token generation failed'], 201);
            
    //         $user = \App\Doctors::where('email', $request->email)->get()->first();
            
    //         $user->auth_token = $token; // update user token
            
    //         $user->save();
    //         // ///////// ADD ROLE ///////////////////////
    //         $user->attachRole('user');
    //         // ////////// SEND MAIL //////////////////////////
    //         $emailDetails = [
    //             'title' => 'Welcome to CamMedics',
    //             'first_name' => $user->first_name,
    //             'url' => 'https://dashboard.cammedics.com/#/login_doctor'
    //         ];
    
    //         Mail::to($request->email)->send(new WelcomeMail($emailDetails));

    //         $response = ['success'=>true, 'data'=>['username'=>$user->username,'first_name'=>$user->first_name,'last_name'=>$user->last_name,'id'=>$user->id,'email'=>$request->email,'auth_token'=>$token]];        
    //     }
    //     else
    //         $response = ['success'=>false, 'data'=>'Couldnt register user'];
    //         return response()->json($response, 201);
    // }
}