<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Students;
use App\Users;
use App\Courses;
use App\Countries;
use App\Subscriptions;
use App\Course_categories;
use App\Teachers;
use App\Teacher_accounts;
use App\Teachers_payments;
use JWTAuth;
use JWTAuthException;
use Mail;
use App\Mail\WelcomeMail;

use Illuminate\Support\Facades\Validator;
use App\Sanitizes\Sanitizes;
use App\Encrypt\Encrypt;
use Illuminate\Support\Facades\Storage;
use File;



class GeneralController extends Controller
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

    public function updatePicture(Request $request, $username, $role, $file_key) {
        // return $request->profile_picture;
        // $image = $request->profile_picture;
        // $request = new \Illuminate\Http\Request();
        // $request->replace($image);
        if($file_key === "id_passport_upload") {
            $validator = Validator::make($request->all(), [ 
                $file_key => 'mimes:pdf|max:512'
            ]);
        }else  {
            $validator = Validator::make($request->all(), [ 
                $file_key => 'mimes:pdf,jpeg,png,jpg|max:512'
            ]);   
        }

        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 501);
        }
        
        // get the user_email to update
        if($role == "student") {
            $student_data = Students::where('username', '=', $username)->first();
        }else if($role == "user") {
            $student_data = Users::where('username', '=', $username)->first();
        }

        // delete previous image
        // return $student_data->profile_picture;
        // return Storage::delete($student_data->profile_picture);
        // return File::delete($student_data->profile_picture);
        // return File::delete(public_path('images/uploads/profile_pictures/mendes.paul28@gmail.com/mendes.paul28@gmail.com-1618181052.jpg'));

        // get the file from the request and concartinate time with the name
        $file = $request->file($file_key);

        if($file_key === "id_passport_upload") {
            $fileName = time().'.'.$file->getClientOriginalName();
        }else {
            $fileName = "1.jpg";
        }

        // Path where the file will be saved
        $path = config('global.file_path1') . $file_key.'/'.$username;
        $destinationPath = $path;
        // return $destinationPath;
  
        // This moved file to server folder
        $file->move($destinationPath,$fileName);

        // save file name in database
        $student_data->$file_key = config('global.file_path2') . $file_key."/".$username."/".$fileName;
        $student_data->save();

        if($student_data){
            $response = ['success'=>true, 'data'=>config('global.file_path2') . $file_key."/".$username."/".$fileName];
            return response()->json($response, 201);
        }else{
            $response = ['success'=>false, 'data'=>"upload failed"];
            return response()->json($response, 501);
        }
    }

    public function updateDetails(Request $request, $username, $role)
    {   
        // return $request;
        $user = $request->user_data;
        $request->replace($user);
        // return $request->first_name;

        $validator  = Validator::make($request->all(), [ 
            'first_name'    => 'nullable|string|max:255', 
            'last_name'     => 'nullable|string|max:255', 
            'middle_name'   => 'nullable|string|max:255', 
            'zip_code'      => 'nullable|string|max:255', 
            'telephone'     => 'nullable|string|max:255', 
            'gender'        => 'nullable|string|max:255',
            'dob'           => 'nullable|string|max:255', 
            'nationality'   => 'nullable|string|max:255', 
            'country_of_residence'      => 'nullable|string|max:255', 
            'district_province_state'   => 'nullable|string|max:255', 
            'address'               => 'nullable|string|max:5000', 
            'height'                => 'nullable|string|max:255', 
            'weight'                => 'nullable|string|max:255', 
            'disability_none'       => 'nullable|string|max:255', 
            'disability_dyslexic'    => 'nullable|string|max:255', 
            'disability_dyscalculic' => 'nullable|string|max:255', 
            'disability_mobility'    => 'nullable|string|max:255', 
            'disability_autistic'   => 'nullable|string|max:255', 
            'disability_others'     => 'nullable|string|max:255', 
            'next_kin_name'         => 'nullable|string|max:255',
            'next_kin_relationship' => 'nullable|string|max:255',
            'next_kin_occupation'   => 'nullable|string|max:255',
            'next_kin_phone'        => 'nullable|string|max:255',
            'next_kin_email'        => 'nullable|string|max:255', 
        ]);

        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 501);
        }

        // Find user with that id
        if($role == "student"){
            $user_data = Students::where('username', '=', $username)->first();
        }else if($role == "user") {
            $user_data = Users::where('username', '=', $username)->first();
        }

        $user_data->first_name    = Sanitizes::my_sanitize_string( $request->first_name);
        $user_data->last_name     = Sanitizes::my_sanitize_string( $request->last_name);
        $user_data->middle_name   = Sanitizes::my_sanitize_string( $request->middle_name);
        $user_data->zip_code      = Sanitizes::my_sanitize_string( $request->zip_code);
        $user_data->telephone     = Sanitizes::my_sanitize_string( $request->telephone);
        $user_data->gender        = Sanitizes::my_sanitize_string( $request->gender);
        $user_data->dob           = Sanitizes::my_sanitize_string( $request->dob);
        $user_data->nationality   = Sanitizes::my_sanitize_string( $request->nationality);
        $user_data->country_of_residence     = Sanitizes::my_sanitize_string( $request->country_of_residence);
        $user_data->district_province_state  = Sanitizes::my_sanitize_string( $request->district_province_state);
        $user_data->address          = Sanitizes::my_sanitize_string( $request->address);
        $user_data->height                   = Sanitizes::my_sanitize_string( $request->height);
        $user_data->weight                   = Sanitizes::my_sanitize_string( $request->weight);
        $disability_none        = Sanitizes::my_sanitize_string( $request->disability_none);
        $disability_dyslexic    = Sanitizes::my_sanitize_string( $request->disability_dyslexic);
        $disability_dyscalculic = Sanitizes::my_sanitize_string( $request->disability_dyscalculic);
        $disability_mobility    = Sanitizes::my_sanitize_string( $request->disability_mobility);
        $disability_autistic   = Sanitizes::my_sanitize_string( $request->disability_autistic);
        $disability_others     = Sanitizes::my_sanitize_string( $request->disability_others);
        $user_data->type_of_identification = Sanitizes::my_sanitize_string( $request->type_of_identification);
        $user_data->id_passport_number    = Sanitizes::my_sanitize_string( $request->id_passport_number);
        $user_data->next_kin_name         = Sanitizes::my_sanitize_string( $request->next_kin_name);
        $user_data->next_kin_relationship = Sanitizes::my_sanitize_string( $request->next_kin_relationship);
        $user_data->next_kin_occupation   = Sanitizes::my_sanitize_string( $request->next_kin_occupation);
        $user_data->next_kin_zip_code     = Sanitizes::my_sanitize_string( $request->next_kin_zip_code);
        $user_data->next_kin_phone        = Sanitizes::my_sanitize_string( $request->next_kin_phone);
        $user_data->next_kin_email        = Sanitizes::my_sanitize_string( $request->next_kin_email);

        // get each disability, pass as an array into a variable and merge into a single variable called disabilities
        $disabilities = array(["disability_none" => $disability_none, "disability_dyslexic" => $disability_dyslexic, "disability_dyscalculic" => $disability_dyscalculic, "disability_mobility" => $disability_mobility, "disability_autistic" => $disability_autistic, "disability_others" => $disability_others]);

        $user_data->disabilities = $disabilities;

        // merge $disabilities into the request been sent to the db
        // $request->merge(array('disabilities' => ($disabilities)));

        // Remove each disabilities from the array of request so am sending only disability into the db 
        // $request->replace($request->except('disability_none'));
        // $request->replace($request->except('disability_dyslexic'));
        // $request->replace($request->except('disability_dyscalculic'));
        // $request->replace($request->except('disability_mobility'));
        // $request->replace($request->except('disability_autistic'));
        // $request->replace($request->except('disability_others'));
        
        // $user_data->update($request->all());
        if($user_data->save()){
            $response = ['success'=>true, 'data'=>"Update successful"];
            return response()->json($response, 201);
        }else{
            $response = ['success'=>false, 'data'=>"Update failed"];
            return response()->json($response, 501);
        }
        
    }

    public function getContries()
    {
        //
        $countries = Countries::all();
        // return $result;
        $response = ['success'=>true, 'data'=>$countries];
        return response()->json($response, 201);
    }

    public function getInstitutions()
    {
        //
        $institutions = Institutions::all();
        // return $result;
        $response = ['success'=>true, 'data'=>$institutions];
        return response()->json($response, 201);
    }

    public function getManagerStatistics()
    {
        $students = Students::all();
        $students = count($students);

        $teachers = Teachers::all();
        $teachers = count($teachers);

        $users = Users::all();
        $users = count($users);

        $totalPendingPayments   = Teachers::sum("account_balance");

        $response = [
            'success'=>true, 
            'students'=>$students, 
            'teachers'=>$teachers, 
            'users'=>$users, 
            'totalPendingPayments'=>$totalPendingPayments
        ];
        return response()->json($response, 200);
    }

    public function getTeacherStatistics($username, $role)
    {
        //
        $teacherData = Teachers::where('username', '=', $username)->first();
        $teacherId   = $teacherData->id;
        $myStudents  = DB::table('assigned_teachers')
            ->join('teachers', 'assigned_teachers.teacher', '=', 'teachers.id')
            ->join('students', 'assigned_teachers.student', '=', 'students.id')
            ->select('assigned_teachers.*', 'students.*')
            ->where([['assigned_teachers.teacher', $teacherId]])
            ->get()->all();
        $students = count($myStudents);

        $totalEarned = Teacher_accounts::where([['username', $username]])->sum("total_earned");

        $totalPaid   = Teachers_payments::where([['teacher_username', $username]])->sum("amount");

        $teacherData = Teachers::where('username', '=', $username)->first();
        $accountBalance = $teacherData->account_balance;

        $response = [
            'success'=>true, 
            'students'=>$students, 
            'totalEarned'=>$totalEarned, 
            'totalPaid'=>$totalPaid, 
            'accountBalance'=>$accountBalance
        ];
        return response()->json($response, 200);
    }

    public function getUserStatistics($username, $role)
    {
        $students = Students::where([['parent_username', $username]])->get()->all();
        $students = count($students);

        $userData = Users::where('username', '=', $username)->first();
        $activeSubscriptions = Subscriptions::where([['email', $userData->email], ['status', '3']])->get()->all();
        $activeSubscriptions = count($activeSubscriptions);

        // $teacherId   = $teacherData->id;
        $openTickets  = DB::table('support_tickets')
            ->select('support_tickets.id')
            ->where([['support_tickets.email', $userData->email]])
            ->join('support_tickets_replies', 'support_tickets.id', '!=', 'support_tickets_replies.ticket_id')
            // ->join('students', 'assigned_teachers.student', '=', 'students.id')
            
            // ->whereColumn([
            //         // ['support_tickets.email', '=', $userData->email],
            //         ['support_tickets.id', '=', 'support_tickets_replies.ticket_id'],
            //     ])
            ->get();
        // $students = count($myStudents);
        return $openTickets;


        $teachers = Teachers::all();
        $teachers = count($teachers);

        $users = Users::all();
        $users = count($users);

        $totalPendingPayments   = Teachers::sum("account_balance");

        $response = [
            'success'=>true, 
            'students'=>$students, 
            'teachers'=>$teachers, 
            'users'=>$users, 
            'totalPendingPayments'=>$totalPendingPayments
        ];
        return response()->json($response, 200);
    }

    public function submitContact(Request $request)
    {   
        // return $request;
        // Validate
        $validator  = Validator::make($request->all(), [ 
            'name'      => 'required|string|max:255', 
            'phoneNumber' => 'required|string|max:255', 
            'email'     => 'required|string|max:255', 
            'message'   => 'required|string|max:2550', 
        ]);
        
        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 200);
        }

        // sanitize input
        $name           = Sanitizes::my_sanitize_string( $request->name);
        $phoneNumber    = Sanitizes::my_sanitize_email( $request->phoneNumber);
        $email    = Sanitizes::my_sanitize_email( $request->email);
        $message  = Sanitizes::my_sanitize_string( $request->message);

        $payload = [
            'name'    =>$name,
            'phone'   =>$phoneNumber,
            'email'   =>$email,
            'message' =>$message,
        ];
                  
        $contact = new \App\Contact_messages($payload);
        if ($contact->save())
        {
            $response = ['success'=>true, 'data'=>'Contact message sent'];
        }else{
            $response = ['success'=>false, 'data'=>'Contact message not sent'];
        }
        return response()->json($response, 200);
    }


}