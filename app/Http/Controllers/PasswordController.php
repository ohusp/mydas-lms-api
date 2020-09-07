<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\ForgetPasswordMail;
use Mail;

use App\Applications;
use Illuminate\Support\Facades\Validator;
use App\Sanitizes\Sanitizes;

class PasswordController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */

    public function forgetPassword(Request $request)
    {   
        $email = Sanitizes::my_sanitize_email( $request->email);
        // return $request->email;
        // $user = \App\Applications::where('email', $request->email)->get()->first();
        $user = \App\Applications::where('email', $email)->get()->first();
        if($user){
            // return $user->ev_code;
        //     // $myEmail = 'mendes.paul25@yahoo.com';
            $myEmail = $email;
    
            $details = [
                'title' => 'Forget Password',
                'url' => 'http://localhost:8000/api/user/reset/'.$user->ev_code
            ];
    
            Mail::to($myEmail)->send(new ForgetPasswordMail($details));
    
            // dd("Mail Send Successfully");
        }else{
            return "User no exist";
        }
    }

    public function reset($code)
    {   
        // $email = Sanitizes::my_sanitize_email( $request->email);
        // return $request->email;
        $user = \App\Applications::where('ev_code', $code)->get()->first();
        // return $user;
        if($user){

            // return \View::make("login/myTestMail");
            // update allow password change
            $user->allow_password_change = 1;
            $user->save();
            return redirect("/#/resetpassword?u={$user->ev_code}");

            // return $user->ev_code;
        //     // $myEmail = 'mendes.paul25@yahoo.com';
            // $myEmail = $email;
    
            // $details = [
            //     'title' => 'Forget Password',
            //     'url' => 'http://localhost:8000/api/user/reset/'.$user->ev_code
            // ];
    
            // Mail::to($myEmail)->send(new ForgetPasswordMail($details));
    
            // dd("Mail Send Successfully");
        }else{
            return "User no exist";
        }
    }

    public function checkResetPassword(Request $request)
    {   
        $ev_code = Sanitizes::my_sanitize_string( $request->url_string);
        $user = \App\Applications::where('ev_code', $ev_code)->get()->first();
        // return $user;
        if($user){   
            // check if user is allowed to change password. This would have been toggled if user clicks the mail sent to reset password
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
        $user = \App\Applications::where('ev_code', $ev_code)->get()->first();

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