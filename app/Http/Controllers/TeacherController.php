<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Teachers;
use App\Lms_users;
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
        $user = Encrypt::cryptoJsAesDecrypt('where do you go when you by yourself', $request->user);
        // convert array back to laravel request object
        $request = new \Illuminate\Http\Request();
        $request->replace($user);
        
        $validator  = Validator::make($request->all(), [ 
            'email'     => 'required|email|max:255', 
            'password'  => 'required|string|min:8|max:255', 
        ]);

        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 501);
        }

        $email      = Sanitizes::my_sanitize_email( $request->email);
        $password   = Sanitizes::my_sanitize_string( $request->password);

        $teacher_data = \App\Lms_users::where('email', $email)->get()->first();
        if ($teacher_data && \Hash::check($password, $teacher_data->password)) // The passwords match...
        {   
            if($teacher_data->lms_role == 2){
                $role_name = "teacher";

                // send response array to the front
                $response = ['success'=>true, 'data'=>[
                    'auth_token'=>$teacher_data->auth_token,
                    'email'=>$teacher_data->email, 
                    'role'=>$role_name, 
                ]];   
                return response()->json($response, 200);    
            }else{
                $response = ['success'=>false, 'data'=>'Record doesnt exists'];
                return response()->json($response, 401);
            }
        }
        else 
            $response = ['success'=>false, 'data'=>'Record doesnt exists'];
            return response()->json($response, 401);
    }

    public function getDetails($email)
    {   
        $teacher_data = Lms_users::where([['email', $email], ['lms_role',  '2']])->get()->first();
        // return $teacher_data;

        $response = ['success'=>true, 'data'=>[
            'id'            =>$teacher_data->id,
            'username'      =>$teacher_data->username,
            'first_name'    =>$teacher_data->firstname,
            'last_name'     =>$teacher_data->lastname, 
            'middle_name'   =>$teacher_data->middlename,
            'email'         =>$teacher_data->email, 
            'telephone'     =>$teacher_data->phone1, 
            'gender'        =>$teacher_data->gender, 
            'institution'   =>$teacher_data->institution, 
            'department'    =>$teacher_data->department, 
            'country_of_residence'      =>$teacher_data->country, 
            'city'          =>$teacher_data->city,  
            'address'       =>$teacher_data->address
        ]];

        return response()->json($response, 200);
    }

    public function update(Request $request, $email, $role)
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

        // return $request->email;
        $teacher_data = Lms_users::where('email', '=', $request->email)->first();

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

}