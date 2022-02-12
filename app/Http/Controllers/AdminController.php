<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Admins;
use App\Managers;
use App\Students;
use JWTAuth;
use JWTAuthException;
use Mail;
use App\Mail\WelcomeMail;

use Illuminate\Support\Facades\Validator;
use App\Sanitizes\Sanitizes;
use App\Encrypt\Encrypt;



class AdminController extends Controller
{   
    
    function __construct()
    {   
        // check if logged in as superadmin
        // $this->middleware('role:superadministrator');

        // This is use to get the token for admins model. it uses the same for user.
        \Config::set('jwt.user', Admins::class);
        \Config::set('auth.providers', ['users' => [
                'driver' => 'eloquent',
                'model' => Admins::class,
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
        //decrypt request 
        $user = Encrypt::cryptoJsAesDecrypt('where do you go when you by yourself', $request->user);
        // convert array back to laravel request object
        $request = new \Illuminate\Http\Request();
        $request->replace($user);

        // return $request;
        
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

        $admin_data = \App\Admins::where('username', $usernameEmail)->get()->first();
        if ($admin_data && \Hash::check($password, $admin_data->password)) // The passwords match...
        {   
            // This gets the patient role name and passed into a variable
            // $role_name = $admin_data->roles->pluck('name');
            // $role_name = $role_name[0];
            $role_name = "superadministrator";

            $token = self::getToken($usernameEmail, $password);
            $admin_data->auth_token = $token;
            $admin_data->save();

            // return $disability_none;

            // send response array to the front
            $response = ['success'=>true, 'data'=>[
                'auth_token'=>$admin_data->auth_token,
                'username'=>$admin_data->username, 
                'role'=>$role_name, 
            ]];   
            return response()->json($response, 200);        
        }
        else 
            $response = ['success'=>false, 'data'=>'Record doesnt exists'];
            return response()->json($response, 401);
    }

    public function getDetails($username)
    {   
        // return $username;
        $admin_data = Admins::where('username', '=', $username)->first();

        return $admin_data;

        $response = ['success'=>true, 'data'=>[
            'username'      =>$admin_data->username,
            'auth_token'    =>$admin_data->auth_token,
            'id'            =>$admin_data->id,
            'username'      =>$admin_data->username,
            'first_name'    =>$admin_data->first_name,
            'last_name'     =>$admin_data->last_name, 
            'email'         =>$admin_data->email, 
            'zip_code'      =>$admin_data->zip_code, 
            'telephone'     =>$admin_data->telephone, 
            'title'         =>$admin_data->title, 
            'gender'        =>$admin_data->gender, 
            'nationality'   =>$admin_data->nationality, 
            'country_of_residence'      =>$admin_data->country_of_residence, 
            'district_province_state'   =>$admin_data->district_province_state, 
            'address'   =>$admin_data->address,
            
            'status'=>$admin_data->status, 
            'created_at'=>$admin_data->created_at
        ]];

        return response()->json($response, 200);
    }

    public function addManager(Request $request, $username, $role)
    {   
        // return $request;
        $user = Encrypt::cryptoJsAesDecrypt('where do you go when you by yourself', $request->user_data);
        // convert array back to laravel request object
        $request = new \Illuminate\Http\Request();
        $request->replace($user);

        // return $request;
        
        // Validate
        $validator = Validator::make($request->all(), [ 
            'username'  => 'required|string|max:150', 
            'first_name'=> 'required|string|max:150', 
            'last_name' => 'required|string|max:150', 
            'email'     => 'required|email|unique:managers|max:255', 
            'password'  => 'required|string|min:8|max:255', 
            'zip_code'       => 'nullable|string|max:150',
            'telephone' => 'nullable|string|max:150',
            'gender'    => 'nullable|string|max:150',
            'nationality'               => 'nullable|string|max:150',
            'country_of_residence'      => 'nullable|string|max:150',
            'district_province_state'   => 'nullable|string|max:150',
            'address'                   => 'nullable|string|max:150',
        ]);
        
        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 501);
        }

        // Sanitize inputs
        $username   = Sanitizes::my_sanitize_string( $request->username );
        $first_name = Sanitizes::my_sanitize_string( $request->first_name);
        $last_name  = Sanitizes::my_sanitize_string( $request->last_name);
        $email      = Sanitizes::my_sanitize_email( $request->email);
        $password   = Sanitizes::my_sanitize_string( $request->password);
        $zip_code       = Sanitizes::my_sanitize_string( $request->zip_code);
        $telephone      = Sanitizes::my_sanitize_string( $request->telephone);
        $gender         = Sanitizes::my_sanitize_string( $request->gender);
        $nationality    = Sanitizes::my_sanitize_string( $request->nationality);
        $country_of_residence       = Sanitizes::my_sanitize_string( $request->country_of_residence);
        $district_province_state    = Sanitizes::my_sanitize_string( $request->district_province_state);
        $address                    = Sanitizes::my_sanitize_string( $request->address);

        $ev_code = md5(sprintf("%05x%05x",mt_rand(0,0xffff),mt_rand(0,0xffff)));

        $payload = [
            'password'  =>\Hash::make($password),
            'username'  =>$username,
            'email'     =>$email,
            'first_name'=>$first_name,
            'last_name' =>$last_name,
            'zip_code'       =>$zip_code,
            'telephone' =>$telephone,
            'gender'    =>$gender,
            'nationality'               =>$nationality,
            'country_of_residence'      =>$country_of_residence,
            'district_province_state'   =>$district_province_state,
            'address'       =>$address,
            'auth_token'    => '',
            'ev_code'       =>$ev_code
        ];

        // return $payload;
                  
        $user = new \App\Managers($payload);
        if ($user->save())
        {
            
            $token = self::getToken($username, $password); // generate user token
            
            if (!is_string($token))  return response()->json(['success'=>false,'data'=>'Token generation failed'], 201);
            
            $user = \App\Managers::where('username', $username)->get()->first();
            
            $user->auth_token = $token; // update user token
            
            $user->save();
            // ///////// ADD ROLE ///////////////////////
            $user->attachRole('manager');
            // ////////// SEND MAIL //////////////////////////
            $emailDetails = [
                'title' => 'Welcome to Digital Innovation and Skills Hub',
                'first_name' => $user->first_name,
                'url' => 'https://dashboard.cammedics.com/#/login'
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

    public function getManagers($username, $role)
    {   
        if($role == "superadministrator"){
            //
            // $support_tickets = Support_tickets::all();
            $managers = Managers::paginate(10);
            
            $response = ['success'=>true, 'data'=>$managers];
            return response()->json($response, 201);
        }
    }

    public function updateStudent(Request $request, $username, $role)
    {   
        $request->replace($request->user_data);
        // return $request;
        
        // Validate
        $validator = Validator::make($request->all(), [ 
            'first_name'=> 'required|string|max:150', 
            'last_name' => 'required|string|max:150', 
            'zip_code'       => 'nullable|string|max:150',
            'telephone' => 'nullable|string|max:150',
            'gender'    => 'nullable|string|max:150',
            'nationality'               => 'nullable|string|max:150',
            'country_of_residence'      => 'nullable|string|max:150',
            'district_province_state'   => 'nullable|string|max:150',
            'address'                   => 'nullable|string|max:150',
        ]);
        
        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 501);
        }

        // return $request->email;
        $student_data = Students::where('username', '=', $request->username)->first();
        $ev_code = md5(sprintf("%05x%05x",mt_rand(0,0xffff),mt_rand(0,0xffff)));

        // Sanitize inputs
        $student_data->first_name = Sanitizes::my_sanitize_string( $request->first_name);
        $student_data->last_name  = Sanitizes::my_sanitize_string( $request->last_name);
        $student_data->zip_code       = Sanitizes::my_sanitize_string( $request->zip_code);
        $student_data->telephone      = Sanitizes::my_sanitize_string( $request->telephone);
        $student_data->gender         = Sanitizes::my_sanitize_string( $request->gender);
        $student_data->nationality    = Sanitizes::my_sanitize_string( $request->nationality);
        $student_data->country_of_residence       = Sanitizes::my_sanitize_string( $request->country_of_residence);
        $student_data->district_province_state    = Sanitizes::my_sanitize_string( $request->district_province_state);
        $student_data->address                    = Sanitizes::my_sanitize_string( $request->address);
        $student_data->ev_code                    = Sanitizes::my_sanitize_string( $ev_code);
                  
        if ($student_data->save())
        {
            $response = ['success'=>true, 'data'=>'Update successful'];      
            return response()->json($response, 201);  
        }
        else
            $response = ['success'=>false, 'data'=>'Update failed'];
            return response()->json($response, 501);
    }

}