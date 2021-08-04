<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Students;
use App\Erp_fetch_save;
use JWTAuth;
use JWTAuthException;
use Mail;
use App\Mail\WelcomeMail;
use App\Mail\ForgetPasswordMail;

use Illuminate\Support\Facades\Validator;
use App\Sanitizes\Sanitizes;
use App\Encrypt\Encrypt;



class ERPConnect extends Controller
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

    public function fetchSave()
    {   
        $students_data = Students::all();
        $studentsCount = count($students_data);
        // return $studentsCount;
        for ($i=0; $i < $studentsCount; $i++){
            // return $students_data[$i];
            // $validator = Validator::make($students_data[$i], [ 
            //     'email'     => 'email|unique:erp_fetch_saves|max:255', 
            // ]);

            $validator = Validator::make(['email' => $students_data[$i]->email], [
                'email' => 'unique:erp_fetch_saves|max:255',
            ]);
            
            // Return validation error
            if ($validator->fails()) { 
            }else{
                $telephone  = Sanitizes::my_sanitize_string($students_data[$i]->telephone);
                $first_name = Sanitizes::my_sanitize_string($students_data[$i]->first_name);
                $email      = Sanitizes::my_sanitize_string($students_data[$i]->email);

                $payload = [
                    'email'     =>$email,
                    'first_name'=>$first_name,
                    'telephone' =>$telephone,
                ];
                        
                $user = new \App\Erp_fetch_save($payload);
                $user->save();
            }
        }
        // return $students;
            
        // $response = ['success'=>true, 'data'=>$students];
        // return response()->json($response, 201);
    }

}