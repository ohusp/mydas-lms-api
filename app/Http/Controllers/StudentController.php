<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Students;
use App\Teachers;
use JWTAuth;
use JWTAuthException;
use Mail;
use App\Mail\WelcomeMail;
use App\Mail\ForgetPasswordMail;

use Illuminate\Support\Facades\Validator;
use App\Sanitizes\Sanitizes;
use App\Encrypt\Encrypt;



class StudentController extends Controller
{   
    
    function __construct()
    {   
        // check if logged in as superadmin
        // $this->middleware('role:superadministrator');

        // This is use to get the token for Students model. it uses the same for user.
        \Config::set('jwt.user', Students::class);
        \Config::set('auth.providers', ['users' => [
                'driver' => 'eloquent',
                'model' => Students::class,
            ]]);
    }

    private function getToken($username, $password)
    {
        $token = null;
        //$credentials = $request->only('email', 'password');
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
            'username_email' => 'required|string|max:255', 
            'password'       => 'required|string|max:255', 
        ]);

        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 200);
        }

        $usernameEmail  = Sanitizes::my_sanitize_email( $request->username_email);
        $password       = Sanitizes::my_sanitize_string( $request->password);

        $student_data = \App\Students::where('username', $usernameEmail)->get()->first();
        if ($student_data && \Hash::check($password, $student_data->password)) // The passwords match...
        {   
            // This gets the student role name and passed into a variable
            // $role_name = $student_data->roles->pluck('name');
            $subscription_data = \App\Subscriptions::where('id', $student_data->subscription_id)->get()->first();
            if($subscription_data->status === 3 || $subscription_data->status === 4) {
                $role_name = "student";

                $token = self::getToken($usernameEmail, $password);
                $student_data->auth_token = $token;
                $student_data->save();
                // send response array to the front
                $response = ['success'=>true, 'data'=>[
                    'auth_token'    =>$student_data->auth_token,
                    'username'      =>$student_data->username, 
                    'role'          =>$role_name, 
                    'verification'  =>$student_data->verification
                ]];  
            }else {
                $response = ['success'=>false, 'data'=>'Subscription Expired'];
            }
            return response()->json($response, 200); 
        }
        else 
            $response = ['success'=>false, 'data'=>'Invalid username or password'];
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
        // return $path;
        if(!is_dir($path.$username)){
			mkdir($path.$username);
		}

        $destinationPath = $path.$username;
        \File::put($destinationPath. '/' . $imageName, base64_decode($image));

        $student_data = \App\Students::where('username', $username)->get()->first();
        // save file name in database
        $student_data->verification = $destinationPath. '/' . $imageName;
        $student_data->save();

        if($student_data){
            $response = ['success'=>true, 'data'=>"upload successful"];
            return response()->json($response, 201);
        }else{
            $response = ['success'=>false, 'data'=>"upload failed"];
            return response()->json($response, 202);
        }
    }

    public function getDetails($username)
    {   
        // return $username;
        $student_data = Students::where('username', '=', $username)->first();

        // get the disabilities values and convert to array
        $disabilities_new = $student_data->disabilities;
        $disabilities_new = json_decode($disabilities_new, true);

        if( $disabilities_new == "" || $disabilities_new == "null"){
            $disability_none        = "false";
            $disability_dyslexic    = "false";
            $disability_dyscalculic = "false";
            $disability_mobility    = "false";
            $disability_autistic    = "false";
            $disability_others      = "false";
        }else{
        // Pass each value into an array
            $disability_none        = $disabilities_new[0]["disability_none"];
            $disability_dyslexic    = $disabilities_new[0]["disability_dyslexic"];
            $disability_dyscalculic = $disabilities_new[0]["disability_dyscalculic"];
            $disability_mobility    = $disabilities_new[0]["disability_mobility"];
            $disability_autistic    = $disabilities_new[0]["disability_autistic"];
            $disability_others      = $disabilities_new[0]["disability_others"];
        }

        $response = ['success'=>true, 'data'=>[
            'auth_token'    =>$student_data->auth_token,
            'id'            =>$student_data->id,
            'username'      =>$student_data->username,
            'first_name'    =>$student_data->first_name,
            'last_name'     =>$student_data->last_name, 
            'middle_name'   =>$student_data->middle_name, 
            'email'         =>$student_data->email, 
            'zip_code'      =>$student_data->zip_code, 
            'telephone'     =>$student_data->telephone, 
            'title'         =>$student_data->title, 
            'gender'        =>$student_data->gender, 
            'dob'           =>$student_data->dob, 
            'nationality'   =>$student_data->nationality, 
            'country_of_residence'      =>$student_data->country_of_residence, 
            'district_province_state'   =>$student_data->district_province_state, 
            'address'   =>$student_data->address,
            'height'    =>$student_data->height,
            'weight'    =>$student_data->weight, 

            'disability_none'       =>$disability_none,
            'disability_dyslexic'    =>$disability_dyslexic,
            'disability_dyscalculic' =>$disability_dyscalculic,
            'disability_mobility'      =>$disability_mobility,
            'disability_autistic'   =>$disability_autistic, 
            'disability_others'     =>$disability_others, 

            'next_kin_name'         =>$student_data->next_kin_name, 
            'next_kin_relationship' =>$student_data->next_kin_relationship, 
            'next_kin_occupation'   =>$student_data->next_kin_occupation,
            'next_kin_zip_code'     => $student_data->next_kin_zip_code, 
            'next_kin_phone'        =>$student_data->next_kin_phone, 
            'next_kin_email'        =>$student_data->next_kin_email, 
            'profile_picture'       =>$student_data->profile_picture, 
            'id_passport_upload'    =>$student_data->id_passport_upload, 

            'status'=>$student_data->status, 
            'created_at'=>$student_data->created_at
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

        $email = Sanitizes::my_sanitize_email( $request->email);
        $student = \App\Students::where('email', $email)->get()->first();
        if($student){
            $myEmail = $email;
    
            $emailDetails = [
                'title' => 'Forget Password',
                'url' => config('global.api_baseURL').'student/reset/'.$student->ev_code.'/'.$myEmail,
            ];
            
            $sendEmail = MailController::sendEmail($emailDetails, "ForgetPasswordMail");
            // Mail::to($myEmail)->send(new ForgetPasswordMail($details));
    
            // dd("Mail Send Successfully");
            $response = ['success'=>true, 'data'=>'Email sent successfully'];
            return response()->json($response, 200);
        }else{
            $response = ['success'=>false, 'data'=>'Email not sent'];
            return response()->json($response, 200);
        }
    }

    public function reset($code, $username)
    {   
        $student = Students::where([['ev_code', $code], ['username', $username]])->get()->first();
        if($student){

            // return \View::make("login/myTestMail");
            // update allow password change
            $student->allow_password_change = 1;
            $student->save();
            return redirect(config('global.client_baseURL')."reset-password?u={$student->ev_code}");
        }else{
            // Student does not exist
            return redirect(config('global.client_baseURL')."signin");
        }
    }

    public function checkResetPassword(Request $request)
    {   
        // return $request;
        $ev_code = Sanitizes::my_sanitize_string( $request->user);
        $student = \App\Students::where('ev_code', $ev_code)->get()->first();
        if($student){   
            // check if patient is allowed to change password. This would have been toggled if patient clicks the mail sent to reset password
            $status = $student->allow_password_change;
            if($status == 1){
                $response = ['success'=>true, 'data'=>'reset password'];
            }else{
                $response = ['success'=>false, 'data'=>'Can not reset password'];
            }
        }else{
            $response = ['success'=>false, 'data'=>'Can not reset password'];
        }

        return response()->json($response, 200);
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

        // get student using the ev_code
        $student = \App\Students::where('ev_code', $ev_code)->get()->first();

        // if the student exist hash password and create new ev_code, update password, ev_code and allow_password_change and save else return error
        if($student){
            $password   = \Hash::make($password);
            $ev_code    = md5(sprintf("%05x%05x",mt_rand(0,0xffff),mt_rand(0,0xffff)));

            $student->password = $password;
            $student->ev_code  = $ev_code;
            $student->allow_password_change = 0;
            $student->save();

            $response = ['success'=>true, 'data'=>'password successfully updated'];
        }else{
            // the ev_code is not correct
            $response = ['success'=>false, 'data'=>'error can\'t reset password'];
        }
        return response()->json($response, 200);
    }







    public function addStudent(Request $request, $parentUsername, $subscription_id)
    {   
        // return $request;
        $user = Encrypt::cryptoJsAesDecrypt('where do you go when you by yourself', $request->user);
        // convert array back to laravel request object
        $request = new \Illuminate\Http\Request();
        $request->replace($user);
        // return $request;
        // Validate
        $validator = Validator::make($request->all(), [ 
            'first_name'=> 'required|string|max:150', 
            'last_name' => 'required|string|max:150', 
            'username'  => 'required|string|unique:students|max:150', 
            'email'     => 'required|email|unique:students|max:255', 
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
        $subscription_id = Sanitizes::my_sanitize_string( $subscription_id);

        $ev_code = md5(sprintf("%05x%05x",mt_rand(0,0xffff),mt_rand(0,0xffff)));

        $payload = [
            'password'  =>\Hash::make($password),
            'email'     => $email,
            'first_name'=> $first_name,
            'last_name' => $last_name,
            'username'  => $username,
            'subscription_id' => $subscription_id,
            'parent_username' => $parentUsername,
            'auth_token'=> '',
            'ev_code'   => $ev_code
        ];
                  
        $user = new \App\Students($payload);
        if ($user->save())
        {
            
            $token = self::getToken($username, $password); // generate user token
            
            if (!is_string($token))  return response()->json(['success'=>false,'data'=>'Token generation failed'], 201);
            
            $user = \App\Students::where('email', $email)->get()->first();
            
            $user->auth_token = $token; // update user token
            
            $user->save();
            // ///////// ADD ROLE ///////////////////////
            $user->attachRole('student');

            // ////////// SEND MAIL //////////////////////////
            $emailDetails = [
                'title' => 'Welcome to Digital Innovation and Skills Hub',
                'first_name' => $user->first_name,
                'url' => 'https://dish-portal.kiu.ac.ug/signin'
            ];
            
            $sendEmail = MailController::sendEmail($emailDetails, "WelcomeMail");
            // Mail::to($email)->send(new WelcomeMail($emailDetails));
            // /////////////////////////////////////////////////////

            $response = ['success'=>true, 'data'=>'Registration successful'];      
            return response()->json($response, 201);  
        }
        else
            $response = ['success'=>false, 'data'=>'Couldnt register student'];
            return response()->json($response, 501);
    }

    public function myPlanStudents( $username, $role, $subscription_id )
    {   
        $student = Students::where([['parent_username', $username], ['subscription_id', $subscription_id]])->paginate(10);

        if($student) {
            $response = ['success'=>true, 'data'=>$student];
            return response()->json($response, 200);
        }else {
            $response = ['success'=>false, 'data'=>'Record doesnt exists'];
            return response()->json($response, 200);
        }
       
    }

    public function getStudents($all, $username, $role)
    {   
        if($role == "superadministrator"){
            if($all === "all") {
                $students = Students::all();
            }else {
                $students = Students::paginate(10);
            }
            
            $response = ['success'=>true, 'data'=>$students];
            return response()->json($response, 201);
        }else if($role == "manager"){
            if($all === "all") {
                $students = Students::all();
            }else {
                $students = Students::paginate(10);
            }
            
            $response = ['success'=>true, 'data'=>$students];
            return response()->json($response, 201);
        }
    }

    public function getMyStudents($all, $username, $role, $requestFor)
    {   
        // return $role;
        if($role === "superadministrator" || $role  === "manager" || $role === "teacher" || $role === "user"){
            if($all === "all") {
                if($requestFor === "teacher"){
                    $teacher_data = Teachers::where('username', '=', $username)->first();
                    $teacher_id   = $teacher_data->id;
                    $my_students = DB::table('assigned_teachers')
                        ->join('teachers', 'assigned_teachers.teacher', '=', 'teachers.id')
                        ->join('students', 'assigned_teachers.student', '=', 'students.id')
                        ->select('assigned_teachers.*', 'students.*')
                        ->where([['assigned_teachers.teacher', $teacher_id]])
                        ->get()->all();
                    // return $result;
                    $response = ['success'=>true, 'data'=>$my_students];
                }else if($requestFor === "user") {
                    $my_students = Students::where([['parent_username', $username]])->get()->all();
                    $response = ['success'=>true, 'data'=>$my_students];
                }
                return response()->json($response, 201);
            }else {
                if($requestFor === "teacher") {
                    $teacher_data = Teachers::where('username', '=', $username)->first();
                    $teacher_id   = $teacher_data->id;
                    $my_students = DB::table('assigned_teachers')
                        ->join('teachers', 'assigned_teachers.teacher', '=', 'teachers.id')
                        ->join('students', 'assigned_teachers.student', '=', 'students.id')
                        ->select('assigned_teachers.*', 'students.*')
                        ->where([['assigned_teachers.teacher', $teacher_id]])
                        ->paginate(10);
                    // return $result;
                    $response = ['success'=>true, 'data'=>$my_students];
                }else if($requestFor === "user"){
                    $my_students = Students::where([['parent_username', $username]])->paginate(10);
                    $response = ['success'=>true, 'data'=>$my_students];
                }
                return response()->json($response, 201);
            }

        }else {
            $response = ['success'=>false, 'data'=>"Access denieeled"];
            return response()->json($response, 201);
        }
    }

    public function getAllStudents($username, $role)
    {   
        $my_students = Students::paginate(10);
        $response = ['success'=>true, 'data'=>$my_students];
                
        return response()->json($response, 200);
            
    }

}