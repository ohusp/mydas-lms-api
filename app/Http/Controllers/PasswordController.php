<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\ForgetPasswordMail;
use Mail;

use App\Patients;
use Illuminate\Support\Facades\Validator;
use App\Sanitizes\Sanitizes;
use App\Encrypt\Encrypt;

class PasswordController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    // /////////////////////////// PATIENT //////////////////////////////////////////////////////////////////
    public function forgetPasswordPatient(Request $request)
    {   
        // return $request;
        //decrypt request 
        $user = Encrypt::cryptoJsAesDecrypt('where do you go when you by yourself', $request->email);
        // return $user;
        // convert array back to laravel request object
        $request = new \Illuminate\Http\Request();
        $request->replace($user);

        $email = Sanitizes::my_sanitize_email( $request->email);
        $patient = \App\Patients::where('email', $email)->get()->first();
        if($patient){
            $myEmail = $email;
    
            $details = [
                'title' => 'Forget Password',
                'url' => 'http://localhost:8000/api/patient/reset/'.$patient->ev_code
            ];
    
            Mail::to($myEmail)->send(new ForgetPasswordMail($details));
    
            // dd("Mail Send Successfully");
            $response = ['success'=>true, 'data'=>'Email sent successfully'];
            return response()->json($response, 201);
        }else{
            $response = ['success'=>true, 'data'=>'Email not sent'];
            return response()->json($response, 201);
        }
    }

    public function resetPatient($code)
    {   
        $patient = \App\Patients::where('ev_code', $code)->get()->first();
        if($patient){

            // return \View::make("login/myTestMail");
            // update allow password change
            $patient->allow_password_change = 1;
            $patient->save();
            return redirect("/#/resetpassword_patient?u={$patient->ev_code}");
        }else{
            return "Patient no exist";
        }
    }

    public function checkResetPasswordPatient(Request $request)
    {   
        $ev_code = Sanitizes::my_sanitize_string( $request->url_string);
        $patient = \App\Patients::where('ev_code', $ev_code)->get()->first();
        if($patient){   
            // check if patient is allowed to change password. This would have been toggled if patient clicks the mail sent to reset password
            $status = $patient->allow_password_change;
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

    public function resetPasswordPatient(Request $request)
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

        // get patient using the ev_code
        $patient = \App\Patients::where('ev_code', $ev_code)->get()->first();

        // if the patient exist hash password and create new ev_code, update password, ev_code and allow_password_change and save else return error
        if($patient){
            $password   = \Hash::make($password);
            $ev_code    = md5(sprintf("%05x%05x",mt_rand(0,0xffff),mt_rand(0,0xffff)));

            $patient->password = $password;
            $patient->ev_code  = $ev_code;
            $patient->allow_password_change = 0;
            $patient->save();
            $response = ['success'=>true, 'data'=>'password successfully updated'];
        }else{
            // the ev_code is not correct
            $response = ['success'=>false, 'data'=>'error can\'t reset password'];
        }
        return response()->json($response, 201);
    }

    // /////////////////////////// DOCTOR //////////////////////////////////////////////////////////////////
    public function forgetPasswordDoctor(Request $request)
    {   
        //decrypt request 
        $user = Encrypt::cryptoJsAesDecrypt('where do you go when you by yourself', $request->email);
        // convert array back to laravel request object
        $request = new \Illuminate\Http\Request();
        $request->replace($user);

        $email = Sanitizes::my_sanitize_email( $request->email);
        $doctor = \App\Doctors::where('email', $email)->get()->first();
        if($doctor){
            $myEmail = $email;
    
            $details = [
                'title' => 'Forget Password',
                'url' => 'http://localhost:8000/api/doctor/reset/'.$doctor->ev_code
            ];
    
            Mail::to($myEmail)->send(new ForgetPasswordMail($details));
    
            // dd("Mail Send Successfully");
        }else{
            return "Doctor no exist";
        }
    }

    public function resetDoctor($code)
    {   
        $doctor = \App\Doctors::where('ev_code', $code)->get()->first();
        if($doctor){

            // return \View::make("login/myTestMail");
            // update allow password change
            $doctor->allow_password_change = 1;
            $doctor->save();
            return redirect("/#/resetpassword?u={$doctor->ev_code}");
        }else{
            return "Doctor no exist";
        }
    }

    public function checkResetPasswordDoctor(Request $request)
    {   
        $ev_code = Sanitizes::my_sanitize_string( $request->url_string);
        $doctor = \App\Doctors::where('ev_code', $ev_code)->get()->first();
        if($doctor){   
            // check if doctor is allowed to change password. This would have been toggled if doctor clicks the mail sent to reset password
            $status = $doctor->allow_password_change;
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

    public function resetPasswordDoctor(Request $request)
    {   
        //decrypt request 
        $user = Encrypt::cryptoJsAesDecrypt('where do you go when you by yourself', $request->user);
        // convert array back to laravel request object
        $request = new \Illuminate\Http\Request();
        $request->replace($user);

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

        // get doctor using the ev_code
        $doctor = \App\Doctors::where('ev_code', $ev_code)->get()->first();

        // if the doctor exist hash password and create new ev_code, update password, ev_code and allow_password_change and save else return error
        if($doctor){
            $password   = \Hash::make($password);
            $ev_code    = md5(sprintf("%05x%05x",mt_rand(0,0xffff),mt_rand(0,0xffff)));

            $doctor->password = $password;
            $doctor->ev_code  = $ev_code;
            $doctor->allow_password_change = 0;
            $doctor->save();
            $response = ['success'=>true, 'data'=>'password successfully updated'];
        }else{
            // the ev_code is not correct
            $response = ['success'=>false, 'data'=>'error can\'t reset password'];
        }
        return response()->json($response, 201);
    }

    // /////////////////////////// HOSPITAL //////////////////////////////////////////////////////////////////
    public function forgetPasswordHospital(Request $request)
    {   
        //decrypt request 
        $user = Encrypt::cryptoJsAesDecrypt('where do you go when you by yourself', $request->email);
        // convert array back to laravel request object
        $request = new \Illuminate\Http\Request();
        $request->replace($user);

        $email = Sanitizes::my_sanitize_email( $request->email);
        $hospital = \App\Hospitals::where('email', $email)->get()->first();
        if($hospital){
            $myEmail = $email;
    
            $details = [
                'title' => 'Forget Password',
                'url' => 'http://localhost:8000/api/hospital/reset/'.$hospital->ev_code
            ];
    
            Mail::to($myEmail)->send(new ForgetPasswordMail($details));
    
            // dd("Mail Send Successfully");
        }else{
            return "Hospital no exist";
        }
    }

    public function resetHospital($code)
    {   
        $hospital = \App\Hospitals::where('ev_code', $code)->get()->first();
        if($hospital){

            // return \View::make("login/myTestMail");
            // update allow password change
            $hospital->allow_password_change = 1;
            $hospital->save();
            return redirect("/#/resetpassword?u={$hospital->ev_code}");
        }else{
            return "Hospital no exist";
        }
    }

    public function checkResetPasswordHospital(Request $request)
    {   
        $ev_code = Sanitizes::my_sanitize_string( $request->url_string);
        $hospital = \App\Hospitals::where('ev_code', $ev_code)->get()->first();
        if($hospital){   
            // check if hospital is allowed to change password. This would have been toggled if hospital clicks the mail sent to reset password
            $status = $hospital->allow_password_change;
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

    public function resetPasswordHospital(Request $request)
    {   
        //decrypt request 
        $user = Encrypt::cryptoJsAesDecrypt('where do you go when you by yourself', $request->user);
        // convert array back to laravel request object
        $request = new \Illuminate\Http\Request();
        $request->replace($user);

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

        // get hospital using the ev_code
        $hospital = \App\Hospitals::where('ev_code', $ev_code)->get()->first();

        // if the hospital exist hash password and create new ev_code, update password, ev_code and allow_password_change and save else return error
        if($hospital){
            $password   = \Hash::make($password);
            $ev_code    = md5(sprintf("%05x%05x",mt_rand(0,0xffff),mt_rand(0,0xffff)));

            $hospital->password = $password;
            $hospital->ev_code  = $ev_code;
            $hospital->allow_password_change = 0;
            $hospital->save();
            $response = ['success'=>true, 'data'=>'password successfully updated'];
        }else{
            // the ev_code is not correct
            $response = ['success'=>false, 'data'=>'error can\'t reset password'];
        }
        return response()->json($response, 201);
    }

    // /////////////////////////// PORT //////////////////////////////////////////////////////////////////
    public function forgetPasswordPort(Request $request)
    {   
        //decrypt request 
        $user = Encrypt::cryptoJsAesDecrypt('where do you go when you by yourself', $request->email);
        // convert array back to laravel request object
        $request = new \Illuminate\Http\Request();
        $request->replace($user);

        $email = Sanitizes::my_sanitize_email( $request->email);
        $port = \App\Ports::where('email', $email)->get()->first();
        if($port){
            $myEmail = $email;
    
            $details = [
                'title' => 'Forget Password',
                'url' => 'http://localhost:8000/api/port/reset/'.$port->ev_code
            ];
    
            Mail::to($myEmail)->send(new ForgetPasswordMail($details));
    
            // dd("Mail Send Successfully");
        }else{
            return "port no exist";
        }
    }

    public function resetPort($code)
    {   
        $port = \App\Ports::where('ev_code', $code)->get()->first();
        if($port){

            // return \View::make("login/myTestMail");
            // update allow password change
            $port->allow_password_change = 1;
            $port->save();
            return redirect("/#/resetpassword?u={$port->ev_code}");
        }else{
            return "Port no exist";
        }
    }

    public function checkResetPasswordPort(Request $request)
    {   
        $ev_code = Sanitizes::my_sanitize_string( $request->url_string);
        $port = \App\Ports::where('ev_code', $ev_code)->get()->first();
        if($port){   
            // check if port is allowed to change password. This would have been toggled if port clicks the mail sent to reset password
            $status = $port->allow_password_change;
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

    public function resetPasswordPort(Request $request)
    {   
        //decrypt request 
        $user = Encrypt::cryptoJsAesDecrypt('where do you go when you by yourself', $request->user);
        // convert array back to laravel request object
        $request = new \Illuminate\Http\Request();
        $request->replace($user);

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

        // get port using the ev_code
        $port = \App\Ports::where('ev_code', $ev_code)->get()->first();

        // if the port exist hash password and create new ev_code, update password, ev_code and allow_password_change and save else return error
        if($port){
            $password   = \Hash::make($password);
            $ev_code    = md5(sprintf("%05x%05x",mt_rand(0,0xffff),mt_rand(0,0xffff)));

            $port->password = $password;
            $port->ev_code  = $ev_code;
            $port->allow_password_change = 0;
            $port->save();
            $response = ['success'=>true, 'data'=>'password successfully updated'];
        }else{
            // the ev_code is not correct
            $response = ['success'=>false, 'data'=>'error can\'t reset password'];
        }
        return response()->json($response, 201);
    }

    // /////////////////////////// PHARM //////////////////////////////////////////////////////////////////
    public function forgetPasswordPharm(Request $request)
    {   
        //decrypt request 
        $user = Encrypt::cryptoJsAesDecrypt('where do you go when you by yourself', $request->email);
        // convert array back to laravel request object
        $request = new \Illuminate\Http\Request();
        $request->replace($user);

        $email = Sanitizes::my_sanitize_email( $request->email);
        $pharm = \App\Pharmacies::where('email', $email)->get()->first();
        if($pharm){
            $myEmail = $email;
    
            $details = [
                'title' => 'Forget Password',
                'url' => 'http://localhost:8000/api/pharm/reset/'.$pharm->ev_code
            ];
    
            Mail::to($myEmail)->send(new ForgetPasswordMail($details));
    
            // dd("Mail Send Successfully");
        }else{
            return "pharm no exist";
        }
    }

    public function resetPharm($code)
    {   
        $pharm = \App\Pharmacies::where('ev_code', $code)->get()->first();
        if($pharm){

            // return \View::make("login/myTestMail");
            // update allow password change
            $pharm->allow_password_change = 1;
            $pharm->save();
            return redirect("/#/resetpassword?u={$pharm->ev_code}");
        }else{
            return "pharm no exist";
        }
    }

    public function checkResetPasswordPharm(Request $request)
    {   
        $ev_code = Sanitizes::my_sanitize_string( $request->url_string);
        $pharm = \App\Pharmacies::where('ev_code', $ev_code)->get()->first();
        if($pharm){   
            // check if pharm is allowed to change password. This would have been toggled if pharm clicks the mail sent to reset password
            $status = $pharm->allow_password_change;
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

    public function resetPasswordPharm(Request $request)
    {   
        //decrypt request 
        $user = Encrypt::cryptoJsAesDecrypt('where do you go when you by yourself', $request->user);
        // convert array back to laravel request object
        $request = new \Illuminate\Http\Request();
        $request->replace($user);

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

        // get pharm using the ev_code
        $pharm = \App\Pharmacies::where('ev_code', $ev_code)->get()->first();

        // if the pharm exist hash password and create new ev_code, update password, ev_code and allow_password_change and save else return error
        if($pharm){
            $password   = \Hash::make($password);
            $ev_code    = md5(sprintf("%05x%05x",mt_rand(0,0xffff),mt_rand(0,0xffff)));

            $pharm->password = $password;
            $pharm->ev_code  = $ev_code;
            $pharm->allow_password_change = 0;
            $pharm->save();
            $response = ['success'=>true, 'data'=>'password successfully updated'];
        }else{
            // the ev_code is not correct
            $response = ['success'=>false, 'data'=>'error can\'t reset password'];
        }
        return response()->json($response, 201);
    }

    // /////////////////////////// LAB //////////////////////////////////////////////////////////////////
    public function forgetPassword(Request $request)
    {   
        //decrypt request 
        $user = Encrypt::cryptoJsAesDecrypt('where do you go when you by yourself', $request->email);
        // convert array back to laravel request object
        $request = new \Illuminate\Http\Request();
        $request->replace($user);

        $email = Sanitizes::my_sanitize_email( $request->email);
        $lab = \App\Labs::where('email', $email)->get()->first();
        if($lab){
            $myEmail = $email;
    
            $details = [
                'title' => 'Forget Password',
                'url' => 'http://localhost:8000/api/lab/reset/'.$lab->ev_code
            ];
    
            Mail::to($myEmail)->send(new ForgetPasswordMail($details));
    
            // dd("Mail Send Successfully");
        }else{
            return "lab no exist";
        }
    }

    public function reset($code)
    {   
        $lab = \App\Labs::where('ev_code', $code)->get()->first();
        if($lab){

            // return \View::make("login/myTestMail");
            // update allow password change
            $lab->allow_password_change = 1;
            $lab->save();
            return redirect("/#/resetpassword?u={$lab->ev_code}");
        }else{
            return "lab no exist";
        }
    }

    public function checkResetPassword(Request $request)
    {   
        $ev_code = Sanitizes::my_sanitize_string( $request->url_string);
        $lab = \App\Labs::where('ev_code', $ev_code)->get()->first();
        if($lab){   
            // check if lab is allowed to change password. This would have been toggled if lab clicks the mail sent to reset password
            $status = $lab->allow_password_change;
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

        // get lab using the ev_code
        $lab = \App\Labs::where('ev_code', $ev_code)->get()->first();

        // if the lab exist hash password and create new ev_code, update password, ev_code and allow_password_change and save else return error
        if($lab){
            $password   = \Hash::make($password);
            $ev_code    = md5(sprintf("%05x%05x",mt_rand(0,0xffff),mt_rand(0,0xffff)));

            $lab->password = $password;
            $lab->ev_code  = $ev_code;
            $lab->allow_password_change = 0;
            $lab->save();
            $response = ['success'=>true, 'data'=>'password successfully updated'];
        }else{
            // the ev_code is not correct
            $response = ['success'=>false, 'data'=>'error can\'t reset password'];
        }
        return response()->json($response, 201);
    }


}