<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Students;
use App\Courses;
use App\Countries;
use App\Institutions;
use App\Course_categories;
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

    public function updatePicture(Request $request, $email, $role, $file_key) {
        // return $request;
        $validator = Validator::make($request->all(), [ 
            $file_key => 'mimes:pdf,jpeg,png,jpg|max:512'
        ]);

        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 501);
        }
        
        // get the user_email to update
        $student_data = Students::where('email', '=', $email)->first();

        // delete previous image
        // return $student_data->profile_picture;
        // return Storage::delete($student_data->profile_picture);
        // return File::delete($student_data->profile_picture);
        // return File::delete(public_path('images/uploads/profile_pictures/mendes.paul28@gmail.com/mendes.paul28@gmail.com-1618181052.jpg'));

        // get the file from the request and concartinate time with the name
        $file = $request->file($file_key);

        $fileName = time().'.'.$file->getClientOriginalName();
        $fileName = $email."-".time().".jpg";

        // Path where the file will be saved
        $path = config('global.file_path1') . $file_key.'/'.$email;
        $destinationPath = public_path().$path;
        // return $destinationPath;
  
        // This moved file to server folder
        $file->move($destinationPath,$fileName);

        // save file name in database
        $student_data->$file_key = config('global.file_path2') . $file_key."/".$email."/".$fileName;
        $student_data->save();

        if($student_data){
            $response = ['success'=>true, 'data'=>"upload successful"];
            return response()->json($response, 201);
        }else{
            $response = ['success'=>false, 'data'=>"upload failed"];
            return response()->json($response, 501);
        }
    }

    public function updateDetails(Request $request, $email, $role)
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
            'address'           => 'nullable|string|max:5000', 
            'height'                => 'nullable|string|max:255', 
            'weight'                => 'nullable|string|max:255', 
            'disability_none'       => 'nullable|string|max:255', 
            'disability_hearing'    => 'nullable|string|max:255', 
            'disability_mobility'   => 'nullable|string|max:255', 
            'disability_sight'      => 'nullable|string|max:255', 
            'disability_learning'   => 'nullable|string|max:255', 
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
            $user_data = Students::where('email', '=', $email)->first();
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
        $disability_none       = Sanitizes::my_sanitize_string( $request->disability_none);
        $disability_hearing    = Sanitizes::my_sanitize_string( $request->disability_hearing);
        $disability_mobility   = Sanitizes::my_sanitize_string( $request->disability_mobility);
        $disability_sight      = Sanitizes::my_sanitize_string( $request->disability_sight);
        $disability_learning   = Sanitizes::my_sanitize_string( $request->disability_learning);
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
        $disabilities = array(["disability_none" => $disability_none, "disability_hearing" => $disability_hearing, "disability_mobility" => $disability_mobility, "disability_sight" => $disability_sight, "disability_learning" => $disability_learning, "disability_others" => $disability_others]);

        $user_data->disabilities = $disabilities;

        // merge $disabilities into the request been sent to the db
        // $request->merge(array('disabilities' => ($disabilities)));

        // Remove each disabilities from the array of request so am sending only disability into the db 
        // $request->replace($request->except('disability_none'));
        // $request->replace($request->except('disability_hearing'));
        // $request->replace($request->except('disability_mobility'));
        // $request->replace($request->except('disability_sight'));
        // $request->replace($request->except('disability_learning'));
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

    public function getStatistics()
    {
        //
        $students = Students::all();
        $students = count($students);

        $courses = Courses::where([['category', '279']])->get()->all();
        $courses = count($courses);

        $response = ['success'=>true, 'students'=>$students, 'courses'=>$courses];
        return response()->json($response, 201);
    }

    public function getCourseCategories()
    {
        $countries = Course_categories::all();
        // return $result;
        $response = ['success'=>true, 'data'=>$countries];
        return response()->json($response, 201);
    }

}