<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Managers;
use App\Students;
use App\Lms_users;
use JWTAuth;
use JWTAuthException;
use Mail;
use App\Mail\WelcomeMail;

use Illuminate\Support\Facades\Validator;
use App\Sanitizes\Sanitizes;
use App\Encrypt\Encrypt;



class ManagerController extends Controller
{   
    
    function __construct()
    {   
        // check if logged in as superadmin
        // $this->middleware('role:superadministrator');

        // This is use to get the token for managers model. it uses the same for user.
        \Config::set('jwt.user', Managers::class);
        \Config::set('auth.providers', ['users' => [
                'driver' => 'eloquent',
                'model' => Managers::class,
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

        $manager_data = \App\Lms_users::where('email', $email)->get()->first();
        if ($manager_data && \Hash::check($password, $manager_data->password)) // The passwords match...
        {   
            if($manager_data->lms_role == 3){
                $role_name = "manager";

                // send response array to the front
                $response = ['success'=>true, 'data'=>[
                    'auth_token'=>$manager_data->auth_token,
                    'email'=>$manager_data->email, 
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
        $manager_data = Lms_users::where([['email', $email], ['lms_role',  '3']])->get()->first();
        // return $manager_data;

        $response = ['success'=>true, 'data'=>[
            'id'            =>$manager_data->id,
            'username'      =>$manager_data->username,
            'first_name'    =>$manager_data->firstname,
            'last_name'     =>$manager_data->lastname, 
            'middle_name'   =>$manager_data->middlename,
            'email'         =>$manager_data->email, 
            'telephone'     =>$manager_data->phone1, 
            'gender'        =>$manager_data->gender, 
            'institution'   =>$manager_data->institution, 
            'department'    =>$manager_data->department, 
            'country_of_residence'      =>$manager_data->country, 
            'city'          =>$manager_data->city,  
            'address'       =>$manager_data->address
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
        $manager_data = Lms_users::where('email', '=', $request->email)->first();

        // Sanitize inputs
        $manager_data->firstname    = Sanitizes::my_sanitize_string( $request->first_name);
        $manager_data->lastname     = Sanitizes::my_sanitize_string( $request->last_name);
        $manager_data->middlename   = Sanitizes::my_sanitize_string( $request->middle_name);
        $manager_data->phone1       = Sanitizes::my_sanitize_string( $request->telephone);
        $manager_data->gender       = Sanitizes::my_sanitize_string( $request->gender);
        $manager_data->institution  = Sanitizes::my_sanitize_string( $request->institution);
        $manager_data->department   = Sanitizes::my_sanitize_string( $request->department);
        $manager_data->country      = Sanitizes::my_sanitize_string( $request->country_of_residence);
        $manager_data->city         = Sanitizes::my_sanitize_string( $request->city);
        $manager_data->address      = Sanitizes::my_sanitize_string( $request->address);
                  
        if ($manager_data->save())
        {
            $response = ['success'=>true, 'data'=>'Update successful'];      
            return response()->json($response, 201);  
        }
        else
            $response = ['success'=>false, 'data'=>'Update failed'];
            return response()->json($response, 501);
    }


}