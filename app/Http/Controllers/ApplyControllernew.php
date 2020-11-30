<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Applicationsnew;
use App\Applications;
use App\Pharmacies;
use JWTAuth;
use JWTAuthException;
use Mail;

use Illuminate\Support\Facades\Validator;
use App\Sanitizes\Sanitizes;

class ApplyControllernew extends Controller
{   
    function __construct()
    {
        // This is use to get the token for Applications model. it uses the same for user.
        \Config::set('jwt.user', Applications::class);
        \Config::set('auth.providers', ['users' => [
                'driver' => 'eloquent',
                'model' => Applications::class,
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






    public function AddNew(Request $request)
    {   
        return $request;
        // Validate
        // $validator = Validator::make($request->all(), [ 
        //     'first_name'=> 'required|string|max:150', 
        //     'last_name' => 'required|string|max:150', 
        //     'email'     => 'required|email|unique:applicationsnew|max:255', 
        //     'password'  => 'required|string|min:8|max:255', 
        // ]);
        
        // // Return validation error
        // if ($validator->fails()) { 
        //     $validationError = $validator->errors(); 
        //     $response = ['success'=>false, 'data'=>$validationError];
        //     return response()->json($response, 201);
        // }

        // Sanitize inputs
        $first_name = Sanitizes::my_sanitize_string( $request->name);
        $last_name  = Sanitizes::my_sanitize_string( $request->category);

        $ev_code = md5(sprintf("%05x%05x",mt_rand(0,0xffff),mt_rand(0,0xffff)));

        $payload = [
            'first_name'=>$first_name,
            'last_name' =>$last_name,
            'auth_token'=> '',
            'ev_code'   =>$ev_code
        ];
                  
        $user = new \App\Applications($payload);
        if ($user->save())
        {
            
            $token = self::getToken($request->email, $request->password); // generate user token
            
            if (!is_string($token))  return response()->json(['success'=>false,'data'=>'Token generation failed'], 201);
            
            $user = \App\Applications::where('email', $request->email)->get()->first();
            
            $user->auth_token = $token; // update user token
            
            $user->save();
            // ///////// ADD ROLE ///////////////////////
            $user->attachRole('user');
            // ////////// SEND MAIL //////////////////////////
            $emailDetails = [
                'title' => 'Welcome Email',
                'first_name' => $user->first_name,
                'url' => 'http://localhost:8000'
            ];
    
            Mail::to($request->email)->send(new WelcomeMail($emailDetails));

            $response = ['success'=>true, 'data'=>['first_name'=>$user->first_name,'last_name'=>$user->last_name,'id'=>$user->id,'email'=>$request->email,'auth_token'=>$token]];        
        }
        else
            $response = ['success'=>false, 'data'=>'Couldnt register user'];
            return response()->json($response, 201);
    }
}