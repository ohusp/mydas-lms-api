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
        $user = \App\Applications::where('email', $request->email)->get()->first();
        if($user){
            // return $user->ev_code;
        //     // $myEmail = 'mendes.paul25@yahoo.com';
            $myEmail = $email;
    
            $details = [
                'title' => 'Forget Password',
                'url' => 'http://localhost:8000/reset_password/'.$user->ev_code
            ];
    
            Mail::to($myEmail)->send(new ForgetPasswordMail($details));
    
            dd("Mail Send Successfully");
        }else{
            return "User no exist";
        }
    }
}