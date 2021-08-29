<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Users;
use JWTAuth;
use JWTAuthException;
use Mail;
use App\Mail\WelcomeMail;
use App\Mail\ForgetPasswordMail;

use Illuminate\Support\Facades\Validator;
use App\Sanitizes\Sanitizes;
use App\Encrypt\Encrypt;



class UserController extends Controller
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

    private function getToken($username, $password)
    {
        $token = null;
        //$credentials = $request->only('usernameusername', 'password');
        try {
            if (!$token = JWTAuth::attempt( ['username'=>$username, 'password'=>$password])) {
                return response()->json([
                    'response' => 'error',
                    'message' => 'Password or username is invalid',
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
        // return $request;
        // if($user->hasRole('superadministrator')){
        //     return redirect('/admin');
        // }
        //decrypt request 
        $user = Encrypt::cryptoJsAesDecrypt('where do you go when you by yourself', $request->user);
        // convert array back to laravel request object
        $request = new \Illuminate\Http\Request();
        $request->replace($user);
        
        $validator  = Validator::make($request->all(), [ 
            'username_email'  => 'required|string|max:255', 
            'password'        => 'required|string|min:8|max:255', 
        ]);

        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 501);
        }

        $usernameEmail  = Sanitizes::my_sanitize_string( $request->username_email);
        $password       = Sanitizes::my_sanitize_string( $request->password);

        $user_data = \App\Users::where('username', $usernameEmail)->get()->first();
        if ($user_data && \Hash::check($password, $user_data->password)) // The passwords match...
        {   
            // This gets the user role name and passed into a variable
            // $role_name = $user_data->roles->pluck('name');
            $role_name = "user";

            $token = self::getToken($usernameEmail, $password);
            $user_data->auth_token = $token;
            $user_data->save();

            // return $disability_none;

            // send response array to the front
            $response = ['success'=>true, 'data'=>[
                'auth_token'=>$user_data->auth_token,
                'username'=>$user_data->username, 
                'role'=>$role_name, 
            ]];   
            return response()->json($response, 200); 
                      
        }
        else 
            $response = ['success'=>false, 'data'=>'Record doesnt exists'];
            return response()->json($response, 401);
    }

    public function signup(Request $request)
    {  
        $user = Encrypt::cryptoJsAesDecrypt('where do you go when you by yourself', $request->user);
        // convert array back to laravel request object
        $request = new \Illuminate\Http\Request();
        $request->replace($user);
        // return $request;
        // Validate
        $validator = Validator::make($request->all(), [ 
            'first_name'=> 'required|string|max:150', 
            'last_name' => 'required|string|max:150', 
            'username'  => 'required|string|unique:users|max:150', 
            'email'     => 'required|email|unique:users|max:255', 
            'password'  => 'required|string|min:8|max:255', 
        ]);
        
        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 200);
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
            'email'     =>$email,
            'first_name'=>$first_name,
            'last_name' =>$last_name,
            'username'  =>$username,
            'auth_token'=> '',
            'ev_code'   =>$ev_code
        ];
                  
        $user = new \App\Users($payload);
        if ($user->save())
        {
            
                $token = self::getToken($username, $password); // generate user token
                
                if (!is_string($token))  return response()->json(['success'=>false,'data'=>'Token generation failed'], 201);
                
                $user = \App\Users::where('username', $username)->get()->first();
                
                $user->auth_token = $token; // update user token
                
                $user->save();
                // ///////// ADD ROLE ///////////////////////
                $user->attachRole('user');
                // return $user;

                // ////////// SEND MAIL //////////////////////////
                $emailDetails = [
                    'title' => 'Welcome to Mydas Tutors',
                    'first_name' => $user->first_name,
                    'url' => 'https://mydastutors.com/user_signin'
                ];
                
                $sendEmail = MailController::sendEmail($emailDetails, "WelcomeMail");
                // Mail::to($email)->send(new WelcomeMail($emailDetails));
                // /////////////////////////////////////////////////////

                $response = ['success'=>true, 'data'=>'Registration successful'];      
                return response()->json($response, 200);  
        }
        else
            $response = ['success'=>false, 'data'=>'Couldnt register user'];
            return response()->json($response, 200);
    }

    public function completeSignup(Request $request, $username, $role)
    {   

        $image = $request->file_data;  // your base64 encoded
        $image = str_replace('data:image/png;base64,', '', $image);
        $image = str_replace(' ', '+', $image);
        // $imageName = uniqid().'.'.'jpg';
        $imageName = '1.jpg';

        $path = config('global.verification_file') .'verification/'.$role."/";
        // return $username;
        if(!is_dir($path.$username)){
			mkdir($path.$username);
		}

        $destinationPath = $path.$username;
        \File::put($destinationPath. '/' . $imageName, base64_decode($image));
        
        $user_data = \App\Users::where('username', $username)->get()->first();
        // save file name in database
        $user_data->verification = $destinationPath. '/' . $imageName;
        $user_data->save();

        if($user_data){
            $response = ['success'=>true, 'data'=>"upload successful"];
            return response()->json($response, 200);
        }else{
            $response = ['success'=>false, 'data'=>"upload failed"];
            return response()->json($response, 200);
        }
    }

    public function getDetails($username)
    {   
        // return $username;
        $user_data = Users::where('username', '=', $username)->first();

        // get the disabilities values and convert to array
        $disabilities_new = $user_data->disabilities;
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

        $response = ['success'=>true, 'data'=>[
            'auth_token'    =>$user_data->auth_token,
            'id'            =>$user_data->id,
            'username'      =>$user_data->username,
            'first_name'    =>$user_data->first_name,
            'last_name'     =>$user_data->last_name, 
            'middle_name'   =>$user_data->middle_name, 
            'username'      =>$user_data->username, 
            'zip_code'      =>$user_data->zip_code, 
            'telephone'     =>$user_data->telephone, 
            'title'         =>$user_data->title, 
            'gender'        =>$user_data->gender, 
            'dob'           =>$user_data->dob, 
            'nationality'   =>$user_data->nationality, 
            'country_of_residence'      =>$user_data->country_of_residence, 
            'district_province_state'   =>$user_data->district_province_state, 
            'address'   =>$user_data->address,
            'height'    =>$user_data->height,
            'weight'    =>$user_data->weight, 

            'disability_none'       =>$disability_none,
            'disability_hearing'    =>$disability_hearing,
            'disability_mobility'   =>$disability_mobility,
            'disability_sight'      =>$disability_sight,
            'disability_learning'   =>$disability_learning, 
            'disability_others'     =>$disability_others, 

            'next_kin_name'         =>$user_data->next_kin_name, 
            'next_kin_relationship' =>$user_data->next_kin_relationship, 
            'next_kin_occupation'   =>$user_data->next_kin_occupation,
            'next_kin_zip_code'     =>$user_data->next_kin_zip_code, 
            'next_kin_phone'        =>$user_data->next_kin_phone, 
            'next_kin_email'        =>$user_data->next_kin_email, 
            'profile_picture'       =>$user_data->profile_picture, 

            'status'=>$user_data->status, 
            'created_at'=>$user_data->created_at
        ]];

        return response()->json($response, 200);
    }

    public function forgetPassword(Request $request)
    {   
        // return $request;
        //decrypt request 
        $user = Encrypt::cryptoJsAesDecrypt('where do you go when you by yourself', $request->user);
        // return $user;
        // convert array back to laravel request object
        $request = new \Illuminate\Http\Request();
        $request->replace($user);

        $username = Sanitizes::my_sanitize__string( $request->username);
        $user = \App\Users::where('username', $username)->get()->first();
        if($user){
            $myEmail = $username;
    
            $emailDetails = [
                'title' => 'Forget Password',
                'url' => config('global.api_baseURL').'user/reset/'.$user->ev_code.'/'.$myEmail,
            ];
    
            // Mail::to($myEmail)->send(new ForgetPasswordMail($details));
            $sendEmail = MailController::sendEmail($emailDetails, "ForgetPasswordMail");
    
            // dd("Mail Send Successfully");
            $response = ['success'=>true, 'data'=>'Email sent successfully'];
            return response()->json($response, 201);
        }else{
            $response = ['success'=>true, 'data'=>'Email not sent'];
            return response()->json($response, 201);
        }
    }

    public function reset($code, $username)
    {   
        $user = Users::where([['ev_code', $code], ['username', $usernameusername]])->get()->first();
        if($user){

            // return \View::make("login/myTestMail");
            // update allow password change
            $user->allow_password_change = 1;
            $user->save();
            return redirect(config('global.client_baseURL')."user_reset_password?u={$user->ev_code}");
        }else{
            // Student does not exist
            return redirect(config('global.client_baseURL')."signin");
        }
    }

    public function checkResetPassword(Request $request)
    {   
        // return $request;
        $ev_code = Sanitizes::my_sanitize_string( $request->user);
        $user = \App\Users::where('ev_code', $ev_code)->get()->first();
        if($user){   
            // check if patient is allowed to change password. This would have been toggled if patient clicks the mail sent to reset password
            $status = $user->allow_password_change;
            if($status == 1){
                $response = ['success'=>true, 'data'=>'reset password'];
            }else{
                $response = ['success'=>false, 'data'=>'Can not reset password'];
            }
        }else{
            $response = ['success'=>false, 'data'=>'Can not reset password'];
        }

        return response()->json($response, 201);
    }

    public function resetPassword(Request $request)
    {   
        //decrypt request 
        $user = Encrypt::cryptoJsAesDecrypt('where do you go when you by yourself', $request->user);
        // convert array back to laravel request object
        $request = new \Illuminate\Http\Request();
        $request->replace($user);
        // return $request;

        // Validate
        $validator = Validator::make($request->all(), [  
            'password'  => 'required|string|min:8|max:255', 
        ]);
        
        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 201);
        }

        // sanitize input
        $password   = Sanitizes::my_sanitize_string( $request->password);
        $ev_code    = Sanitizes::my_sanitize_string( $request->url_string);

        // get user using the ev_code
        $user = \App\Users::where('ev_code', $ev_code)->get()->first();

        // if the user exist hash password and create new ev_code, update password, ev_code and allow_password_change and save else return error
        if($user){
            $password   = \Hash::make($password);
            $ev_code    = md5(sprintf("%05x%05x",mt_rand(0,0xffff),mt_rand(0,0xffff)));

            $user->password = $password;
            $user->ev_code  = $ev_code;
            $user->allow_password_change = 0;
            $user->save();

            $response = ['success'=>true, 'data'=>'password successfully updated'];
        }else{
            // the ev_code is not correct
            $response = ['success'=>false, 'data'=>'error can\'t reset password'];
        }
        return response()->json($response, 201);
    }

}