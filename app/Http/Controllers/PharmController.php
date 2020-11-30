<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Pharmacies;
use JWTAuth;
use JWTAuthException;
use Mail;

use App\Mail\WelcomeMail;

use Illuminate\Support\Facades\Validator;
use App\Sanitizes\Sanitizes;
use App\Encrypt\Encrypt;

class PharmController extends Controller
{   
    function __construct()
    {
        // This is use to get the token for Pharmacies model. it uses the same for user.
        \Config::set('jwt.user', Pharmacies::class);
        \Config::set('auth.providers', ['users' => [
                'driver' => 'eloquent',
                'model' => Pharmacies::class,
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

        $pharm_data = \App\Pharmacies::where('email', $email)->get()->first();
        if ($pharm_data && \Hash::check($password, $pharm_data->password)) // The passwords match...
        {   
            // This gets the user role name and passed into a variable
            $role_name = $pharm_data->roles->pluck('name');
            $role_name = $role_name[0];

            $token = self::getToken($email, $password);
            $pharm_data->auth_token = $token;
            $pharm_data->save();

            // return $disability_none;

            // send response array to the front
            $response = ['success'=>true, 'data'=>[
                'auth_token'=>$pharm_data->auth_token,
                'id'=>$pharm_data->id,
                'name'=>$pharm_data->name,
                'username'=>$pharm_data->username,
                'email'=>$pharm_data->email, 
                'zip_code'=>$pharm_data->zip_code, 
                'telephone'=>$pharm_data->telephone, 
                'pharm_country'=>$pharm_data->pharm_country, 
                'pharm_district_province_state'=>$pharm_data->pharm_district_province_state, 
                'pharm_address'=>$pharm_data->pharm_address, 
                'pharm_logo'=>$pharm_data->pharm_logo, 
                'status'=>$pharm_data->status, 
                'created_at'=>$pharm_data->created_at
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
            'username'  => 'required|string|unique:pharmacies|max:255', 
            'email'     => 'required|email|unique:pharmacies|max:255', 
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
            'username'  =>$username,
            'email'     =>$email,
            'name'      =>$name,
            'auth_token'=> '',
            'ev_code'   =>$ev_code
        ];
                  
        $user = new \App\Pharmacies($payload);
        if ($user->save())
        {
            
            $token = self::getToken($email, $password); // generate user token
            
            if (!is_string($token))  return response()->json(['success'=>false,'data'=>'Token generation failed'], 201);
            
            $user = \App\Pharmacies::where('email', $email)->get()->first();
            
            $user->auth_token = $token; // update user token
            
            $user->save();
            // ///////// ADD ROLE ///////////////////////
            $user->attachRole('user');
            // ////////// SEND MAIL //////////////////////////
            $emailDetails = [
                'title' => 'Welcome to CamMedics',
                'first_name' => $user->name,
                'url' => 'https://dashboard.cammedics.com/#/login_pharm'
            ];
    
            Mail::to($email)->send(new WelcomeMail($emailDetails));

            $response = ['success'=>true, 'data'=>['name'=>$user->name,'id'=>$user->id,'email'=>$email,'auth_token'=>$token]];        
        }
        else
            $response = ['success'=>false, 'data'=>'Couldnt register user'];
            return response()->json($response, 201);
    }
}