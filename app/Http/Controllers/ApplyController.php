<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Applications;
use JWTAuth;
use JWTAuthException;

class ApplyController extends Controller
{   
    function __construct()
    {
        // This is use to get the token for Applications model
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
    public function login(Request $request)
    {
        $user = \App\Applications::where('email', $request->email)->get()->first();
        if ($user && \Hash::check($request->password, $user->password)) // The passwords match...
        {   
            $role_name = $user->roles->pluck('name');
            $role_name = $role_name[0];
            $token = self::getToken($request->email, $request->password);
            $user->auth_token = $token;
            $user->save();
            $response = ['success'=>true, 'data'=>['id'=>$user->id,'auth_token'=>$user->auth_token,'first_name'=>$user->first_name,'last_name'=>$user->last_name, 'email'=>$user->email, 'user_type'=>$role_name]];           
        }
        else 
          $response = ['success'=>false, 'data'=>'Record doesnt exists'];
      

        return response()->json($response, 201);
    }
    public function register(Request $request)
    { 
        $payload = [
            'password'=>\Hash::make($request->password),
            'email'=>$request->email,
            'first_name'=>$request->first_name,
            'last_name'=>$request->last_name,
            'auth_token'=> ''
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
            // /////////////////////////////////////////
            $response = ['success'=>true, 'data'=>['first_name'=>$user->first_name,'last_name'=>$user->last_name,'id'=>$user->id,'email'=>$request->email,'auth_token'=>$token]];        
        }
        else
            $response = ['success'=>false, 'data'=>'Couldnt register user'];
        
        
        return response()->json($response, 201);
    }
}