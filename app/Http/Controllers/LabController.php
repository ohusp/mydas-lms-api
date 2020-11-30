<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Labs;
use JWTAuth;
use JWTAuthException;
use Mail;

use App\Mail\WelcomeMail;

use Illuminate\Support\Facades\Validator;
use App\Sanitizes\Sanitizes;
use App\Encrypt\Encrypt;

class LabController extends Controller
{   
    function __construct()
    {
        // This is use to get the token for Labs model. it uses the same for user.
        \Config::set('jwt.user', Labs::class);
        \Config::set('auth.providers', ['users' => [
                'driver' => 'eloquent',
                'model' => Labs::class,
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

        $lab_data = \App\Labs::where('email', $email)->get()->first();
        if ($lab_data && \Hash::check($password, $lab_data->password)) // The passwords match...
        {   
            // This gets the user role name and passed into a variable
            $role_name = $lab_data->roles->pluck('name');
            $role_name = $role_name[0];

            $token = self::getToken($email, $password);
            $lab_data->auth_token = $token;
            $lab_data->save();

            // return $disability_none;

            // send response array to the front
            $response = ['success'=>true, 'data'=>[
                'auth_token'=>$lab_data->auth_token,
                'id'=>$lab_data->id,
                'username'=>$lab_data->username,
                'name'=>$lab_data->name,
                'email'=>$lab_data->email, 
                'zip_code'=>$lab_data->zip_code, 
                'telephone'=>$lab_data->telephone, 
                'country'=>$lab_data->country, 
                'district_province_state'=>$lab_data->district_province_state, 
                'address'=>$lab_data->address, 
                'test_carried_out'=>$lab_data->test_carried_out,
                'status'=>$lab_data->status, 
                'created_at'=>$lab_data->created_at
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
            'name'=> 'required|string|max:150',  
            'username'  => 'required|string|unique:labs|max:255', 
            'email'     => 'required|email|unique:labs|max:255', 
            'password'  => 'required|string|min:8|max:255', 
        ]);
        
        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 201);
        }

        // Sanitize inputs
        $username   = Sanitizes::my_sanitize_string( $request->username);
        $name       = Sanitizes::my_sanitize_string( $request->name);
        $email      = Sanitizes::my_sanitize_email( $request->email);
        $password   = Sanitizes::my_sanitize_string( $request->password);

        $ev_code = md5(sprintf("%05x%05x",mt_rand(0,0xffff),mt_rand(0,0xffff)));

        $payload = [
            'password'  =>\Hash::make($password),
            'email'     =>$email,
            'username'  =>$username,
            'name'      =>$name,
            'auth_token'=> '',
            'ev_code'   =>$ev_code
        ];
                  
        $user = new \App\Labs($payload);
        if ($user->save())
        {
            
            $token = self::getToken($email, $password); // generate user token
            
            if (!is_string($token))  return response()->json(['success'=>false,'data'=>'Token generation failed'], 201);
            
            $user = \App\Labs::where('email', $email)->get()->first();
            
            $user->auth_token = $token; // update user token
            
            $user->save();
            // ///////// ADD ROLE ///////////////////////
            $user->attachRole('user');
            // ////////// SEND MAIL //////////////////////////
            $emailDetails = [
                'title' => 'Welcome to CamMedics',
                'first_name' => $user->name,
                'url' => 'https://dashboard.cammedics.com/#/login_lab'
            ];
    
            Mail::to($email)->send(new WelcomeMail($emailDetails));

            $response = ['success'=>true, 'data'=>['username'=>$user->username,'name'=>$user->name,'id'=>$user->id,'email'=>$email,'auth_token'=>$token]];        
        }
        else
            $response = ['success'=>false, 'data'=>'Couldnt register user'];
            return response()->json($response, 201);
    }
}