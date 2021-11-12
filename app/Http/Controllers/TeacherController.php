<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Teachers;
use App\Assigned_teachers;
use App\Teacher_accounts;
use App\Students;
use App\Teachers_payments;
use JWTAuth;
use JWTAuthException;
use Mail;
use App\Mail\WelcomeMail;

use Illuminate\Support\Facades\Validator;
use App\Sanitizes\Sanitizes;
use App\Encrypt\Encrypt;



class TeacherController extends Controller
{   
    
    function __construct()
    {   
        // check if logged in as superadmin
        // $this->middleware('role:superadministrator');

        // This is use to get the token for managers model. it uses the same for user.
        \Config::set('jwt.user', Teachers::class);
        \Config::set('auth.providers', ['users' => [
                'driver' => 'eloquent',
                'model' => Teachers::class,
            ]]);
    }

    private function getToken($username, $password)
    {
        $token = null;
        //$credentials = $request->only('username', 'password');
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

        $teacher_data = \App\Teachers::where('username', $usernameEmail)->get()->first();
        // return $teacher_data;
        if ($teacher_data && \Hash::check($password, $teacher_data->password)) // The passwords match...
        {   
            $role_name = "teacher";

            $token = self::getToken($usernameEmail, $password);
            $teacher_data->auth_token = $token;
            $teacher_data->save();

            // send response array to the front
            $response = ['success'=>true, 'data'=>[
                'auth_token'=>$teacher_data->auth_token,
                'username'  =>$teacher_data->username, 
                'role'      =>$role_name, 
            ]];   
            return response()->json($response, 200);    
            
        }
        else 
            $response = ['success'=>false, 'data'=>'Record doesnt exists'];
            return response()->json($response, 401);
    }

    public function addTeacher(Request $request, $username, $role)
    {   
        // return $request;
        $user = Encrypt::cryptoJsAesDecrypt('where do you go when you by yourself', $request->user_data);
        // convert array back to laravel request object
        $request = new \Illuminate\Http\Request();
        $request->replace($user);
        
        // Validate
        $validator = Validator::make($request->all(), [ 
            'username'  => 'required|string|unique:teachers|max:255',
            'first_name'=> 'required|string|max:150', 
            'last_name' => 'required|string|max:150', 
            'email'     => 'required|email|unique:teachers|max:255', 
            'password'  => 'required|string|min:8|max:255', 
            'zip_code'       => 'nullable|string|max:150',
            'telephone' => 'nullable|string|max:150',
            'gender'    => 'nullable|string|max:150',
            'institution'               => 'nullable|string|max:250',
            'nationality'               => 'nullable|string|max:150',
            'country_of_residence'      => 'nullable|string|max:150',
            'district_province_state'   => 'nullable|string|max:150',
            'address'                   => 'nullable|string|max:150',
            'class_unit_payment'        => 'required|regex:/^\d+(\.\d{1,2})?$/|max:255',
        ]);
        
        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 501);
        }

        // Sanitize inputs
        $username   = Sanitizes::my_sanitize_string( $request->username);
        $first_name = Sanitizes::my_sanitize_string( $request->first_name);
        $last_name  = Sanitizes::my_sanitize_string( $request->last_name);
        $email      = Sanitizes::my_sanitize_email( $request->email);
        $password   = Sanitizes::my_sanitize_string( $request->password);
        $zip_code       = Sanitizes::my_sanitize_string( $request->zip_code);
        $telephone      = Sanitizes::my_sanitize_string( $request->telephone);
        $gender         = Sanitizes::my_sanitize_string( $request->gender);
        $institution    = Sanitizes::my_sanitize_string( $request->institution);
        $nationality    = Sanitizes::my_sanitize_string( $request->nationality);
        $country_of_residence       = Sanitizes::my_sanitize_string( $request->country_of_residence);
        $district_province_state    = Sanitizes::my_sanitize_string( $request->district_province_state);
        $address                    = Sanitizes::my_sanitize_string( $request->address);
        $class_unit_payment         = Sanitizes::my_sanitize_string( $request->class_unit_payment);

        $ev_code = md5(sprintf("%05x%05x",mt_rand(0,0xffff),mt_rand(0,0xffff)));

        $payload = [
            'password'  =>\Hash::make($password),
            'username'  =>$username,
            'email'     =>$email,
            'first_name'=>$first_name,
            'last_name' =>$last_name,
            'zip_code'  =>$zip_code,
            'telephone' =>$telephone,
            'gender'    =>$gender,
            'institution'               =>$institution,
            'nationality'               =>$nationality,
            'country_of_residence'      =>$country_of_residence,
            'district_province_state'   =>$district_province_state,
            'address'               =>$address,
            'auth_token'            => '',
            'ev_code'               =>$ev_code,
            'class_unit_payment'    => $class_unit_payment
        ];

        // return $payload;
                  
        $user = new \App\Teachers($payload);
        if ($user->save())
        {
            
            $token = self::getToken($username, $password); // generate user token
            
            if (!is_string($token))  return response()->json(['success'=>false,'data'=>'Token generation failed'], 201);
            
            $user = \App\Teachers::where('username', $username)->get()->first();
            
            $user->auth_token = $token; // update user token
            
            $user->save();
            // ///////// ADD ROLE ///////////////////////
            $user->attachRole('manager');
            // ////////// SEND MAIL //////////////////////////
            $emailDetails = [
                'title' => 'Welcome to Mydas Tutors',
                'first_name' => $user->first_name,
                'url' => 'https://dashboard.mydastutors.com/teacher_signin'
            ];
            
            $sendEmail = MailController::sendEmail($emailDetails, "WelcomeMail");
            // Mail::to($email)->send(new WelcomeMail($emailDetails));
            // /////////////////////////////////////////////////////

            $response = ['success'=>true, 'data'=>'Registration successful'];      
            return response()->json($response, 201);  
        }
        else
            $response = ['success'=>false, 'data'=>'Couldnt register user'];
            return response()->json($response, 501);
    }

    public function getDetails($username)
    {   
        $teacher_data = Teachers::where([['username', $username]])->get()->first();
        // return $manager_data;
        if($teacher_data) {
            $response = ['success'=>true, 'data'=> $teacher_data];
            return response()->json($response, 200);
        }else {
            $response = ['success'=>false, 'data'=> "no record found"];
            return response()->json($response, 200);
        }
    }

    public function getTeachers($all, $username, $role)
    {   
        if($role == "superadministrator"){
            if($all === "all") {
                $teachers = Teachers::all();
            }else {
                $teachers = Teachers::paginate(10);
            }
            
            $response = ['success'=>true, 'data'=>$teachers];
            return response()->json($response, 201);
        }else if($role == "manager"){
            if($all === "all") {
                $teachers = Teachers::all();
            }else {
                $teachers = Teachers::paginate(10);
            }
            
            $response = ['success'=>true, 'data'=>$teachers];
            return response()->json($response, 201);
        }
    }

    public function getAssignedTeachers($username, $role)
    {
        // $subscriptions = Subscriptions::where([['username', $username]])->get()->all();

        $assigned_teachers = DB::table('assigned_teachers')
            ->join('teachers', 'assigned_teachers.teacher', '=', 'teachers.id')
            ->join('students', 'assigned_teachers.student', '=', 'students.id')
            ->select('assigned_teachers.*', 
                'teachers.username AS teacher_username', 'teachers.first_name AS teacher_first_name', 'teachers.last_name AS teacher_last_name', 'teachers.email AS teacher_email', 'teachers.zip_code AS teacher_zip_code', 'teachers.telephone AS teacher_telephone', 'teachers.gender AS teacher_gender', 
                'students.username AS student_username', 'students.first_name AS student_first_name', 'students.last_name AS student_last_name', 'students.email AS student_email', 'students.zip_code AS student_zip_code', 'students.telephone AS student_telephone', 'students.gender AS student_gender', 
            )
            // ->where([['subscriptions.email', $email]])
            ->get()->all();
        // return $result;
        $response = ['success'=>true, 'data'=>$assigned_teachers];
        return response()->json($response, 201);
    }

    public function assignTeacher(Request $request, $username, $role)
    {   
        $validator  = Validator::make($request->all(), [ 
            'student'   => 'required|integer|max:255', 
            'teacher'   => 'required|integer|max:255', 
        ]);

        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 501);
        }
        
        $student    = Sanitizes::my_sanitize_string( $request->student );
        $teacher    = Sanitizes::my_sanitize_string( $request->teacher );
        $username   = Sanitizes::my_sanitize_string( $username );
        $role       = Sanitizes::my_sanitize_string( $role );

        // return $support_subject;
        $assign_data = Assigned_teachers::where([['student', $student], ['teacher', $teacher]])->get()->first();
        if($assign_data) {
            $response = ['success'=>true, 'data'=>"Already exist"];
            return response()->json($response, 200);
        }else {
            $payload = [
                'username'  =>$username,
                'role'      =>$role,
                'student'   =>$student,
                'teacher'   =>$teacher,
            ];
                    
            $assign_teacher = new \App\Assigned_teachers($payload);
            if ($assign_teacher->save())
            {
                $response = ['success'=>true, 'data'=>"Added successfully"];
                return response()->json($response, 200);
            }else{
                $response = ['success'=>true, 'data'=>"Failed"];
                return response()->json($response, 200);
            }
        }
    }

    public function getMyTeachers($all, $username, $role)
    {   
        // return $all. "-" .$username. " - " .$role;
        if($role === "superadministrator" || $role  === "manager" || $role === "user" || $role === "student"){
            if($all === "all") {
                $student_data = Students::where('username', '=', $username)->first();
                $student_id   = $student_data->id;
                $my_teachers = DB::table('assigned_teachers')
                    ->join('teachers', 'assigned_teachers.teacher', '=', 'teachers.id')
                    ->join('students', 'assigned_teachers.student', '=', 'students.id')
                    ->select('assigned_teachers.*', 'teachers.*')
                    ->where([['assigned_teachers.student', $student_id]])
                    ->get()->all();
                // return $result;
                $response = ['success'=>true, 'data'=>$my_teachers];
                return response()->json($response, 201);
            }else {
                $student_data = Students::where('username', '=', $username)->first();
                $student_id   = $student_data->id;
                $my_teachers = DB::table('assigned_teachers')
                    ->join('teachers', 'assigned_teachers.teacher', '=', 'teachers.id')
                    ->join('students', 'assigned_teachers.student', '=', 'students.id')
                    ->select('assigned_teachers.*', 'teachers.*')
                    ->where([['assigned_teachers.student', $student_id]])
                    ->paginate(10);
                // return $result;
                $response = ['success'=>true, 'data'=>$my_teachers];
                return response()->json($response, 201);
            }

        }else {
            $response = ['success'=>false, 'data'=>"Access denieeled"];
            return response()->json($response, 201);
        }
    }

    public function getAccount($username, $role)
    {   
        $teacher_data = Teachers::where([['username', $username]])->get()->first();
        // $account_data = Teacher_accounts::where([['username', $username]])->paginate(10);
        $account_data = DB::table('teacher_accounts')
            ->join('timetables', 'teacher_accounts.timetables_id', '=', 'timetables.id')
            ->select('teacher_accounts.*', 'timetables.*')
            ->where([['teacher_accounts.username', $username]])
            ->paginate(10);
        // return $manager_data;
        if($teacher_data) {
            $response = [
                'success'=>true, 
                'account_details'=> ['account_balance' => $teacher_data->account_balance, 'account_name' => $teacher_data->account_name, 'account_number' => $teacher_data->account_number, 'bank' => $teacher_data->bank], 
                'account_data'=>$account_data
            ];
            return response()->json($response, 200);
        }else {
            $response = ['success'=>false, 'data'=> "no record found"];
            return response()->json($response, 200);
        }
    }

    public function getPaymentHistory($username, $role)
    {   
        $payment_data = Teachers_payments::where([['teacher_username', $username]])->paginate(10);
        // $account_data = Teacher_accounts::where([['username', $username]])->paginate(10);
        // $account_data = DB::table('teacher_accounts')
        //     ->join('timetables', 'teacher_accounts.timetables_id', '=', 'timetables.id')
        //     ->select('teacher_accounts.*', 'timetables.*')
        //     ->where([['teacher_accounts.username', $username]])
        //     ->paginate(10);
        // return $manager_data;
        if($payment_data) {
            $response = [
                'success'=>true, 
                'payment_data'=>$payment_data
            ];
            return response()->json($response, 200);
        }else {
            $response = ['success'=>false, 'data'=> "no record found"];
            return response()->json($response, 200);
        }
    }

    public function updateAccountDetails(Request $request)
    {   
        // return $request;
        $username = $request->user_username;
        $request->replace($request->account_data);
        // Validate
        $validator = Validator::make($request->all(), [ 
            'account_name'   => 'required|string|max:150', 
            'account_number' => 'required|string|max:150', 
            'bank'           => 'required|string|max:150', 
        ]);
        
        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 200);
        }

        // return $request->username;
        $teacher_data = Teachers::where('username', '=', $username)->first();

        // Sanitize inputs
        $teacher_data->account_name   = Sanitizes::my_sanitize_string( $request->account_name);
        $teacher_data->account_number = Sanitizes::my_sanitize_string( $request->account_number);
        $teacher_data->bank           = Sanitizes::my_sanitize_string( $request->bank);
                  
        if ($teacher_data->save())
        {
            $response = ['success'=>true, 'data'=>'Update successful'];      
            return response()->json($response, 201);  
        }
        else
            $response = ['success'=>false, 'data'=>'Update failed'];
            return response()->json($response, 501);
    }








    

    

    public function update(Request $request, $username, $role)
    {   
        $request->replace($request->user_data);
        // return $request;
        
        // Validate
        $validator = Validator::make($request->all(), [ 
            'first_name'    => 'required|string|max:150', 
            'last_name'     => 'required|string|max:150', 
            'middle_name'   => 'required|string|max:150', 
            'telephone'     => 'nullable|string|max:150',
            'gender'        => 'nullable|string|max:150',
            'institution'   => 'nullable|string|max:250',
            'department'    => 'nullable|string|max:150',
            'country_of_residence' => 'nullable|string|max:150',
            'city'      => 'nullable|string|max:150',
            'address'   => 'nullable|string|max:150',
        ]);
        
        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 501);
        }

        // return $request->username;
        $teacher_data = Lms_users::where('username', '=', $request->username)->first();

        // Sanitize inputs
        $teacher_data->firstname    = Sanitizes::my_sanitize_string( $request->first_name);
        $teacher_data->lastname     = Sanitizes::my_sanitize_string( $request->last_name);
        $teacher_data->middlename   = Sanitizes::my_sanitize_string( $request->middle_name);
        $teacher_data->phone1       = Sanitizes::my_sanitize_string( $request->telephone);
        $teacher_data->gender       = Sanitizes::my_sanitize_string( $request->gender);
        $teacher_data->institution  = Sanitizes::my_sanitize_string( $request->institution);
        $teacher_data->department   = Sanitizes::my_sanitize_string( $request->department);
        $teacher_data->country      = Sanitizes::my_sanitize_string( $request->country_of_residence);
        $teacher_data->city         = Sanitizes::my_sanitize_string( $request->city);
        $teacher_data->address      = Sanitizes::my_sanitize_string( $request->address);
                  
        if ($teacher_data->save())
        {
            $response = ['success'=>true, 'data'=>'Update successful'];      
            return response()->json($response, 201);  
        }
        else
            $response = ['success'=>false, 'data'=>'Update failed'];
            return response()->json($response, 501);
    }

    public function addPaymentMade(Request $request, $username, $role, $teacherUsername, $amount, $accountName, $accountNumber, $bank) {
        // return $request;
        $validator = Validator::make($request->all(), [ 
            'paymentProof' => 'mimes:pdf,jpeg,png,jpg|max:512'
        ]);

        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>'validationError', 'data'=>$validationError];
            return response()->json($response, 200);
        }

        // get the file from the request and concartinate time with the name
        $file = $request->file('paymentProof');
        // return $file;

        $fileName = time().'.'.$file->getClientOriginalName();
        // $fileName = $teacherUsername."-".time().".pdf";

        // Path where the file will be saved
        $path = config('global.file_path1') . 'paymentProof'.'/'.$teacherUsername;
        $destinationPath = public_path().$path;
        // return $destinationPath;
  
        // This moved file to server folder
        $file->move($destinationPath,$fileName);

        // save file name in database
        $payload = [
            'teacher_username'  =>$teacherUsername,
            'amount'            => $amount,
            'account_name'       => $accountName,
            'account_number'     => $accountNumber,
            'bank'              => $bank,
            'uploader'          => $username,
            'uploader_role'     => $role,
            'proof'             => config('global.file_path2') . 'paymentProof'."/".$teacherUsername."/".$fileName,
        ];
        $user = new \App\Teachers_payments($payload);
        if($user->save()){
            $response = ['success'=>true, 'data'=>"Payment record successful"];
            return response()->json($response, 201);
        }else{
            $response = ['success'=>false, 'data'=>"Payment record failed"];
            return response()->json($response, 200);
        }
    }

}