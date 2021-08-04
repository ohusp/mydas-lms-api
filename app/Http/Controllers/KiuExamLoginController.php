<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Kiu_exam_login;
use App\Kiu_exam_login_created;
use App\Erp_fetch_save;
use JWTAuth;
use JWTAuthException;
use Mail;
use App\Mail\KIUExaminationLoginDetailsMail;
use App\Mail\ForgetPasswordMail;

use Illuminate\Support\Facades\Validator;
use App\Sanitizes\Sanitizes;
use App\Encrypt\Encrypt;



class KiuExamLoginController extends Controller
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

    public function getLoginDetails(Request $request)
    {   
        return              $password  = \Hash::make($request->reg_no);
        $validator  = Validator::make($request->all(), [ 
            'email'   => 'required|email|max:255', 
            'reg_no'  => 'required|string|max:50', 
        ]);

        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 200);
        }

        $email    = Sanitizes::my_sanitize_email( $request->email);
        $reg_no   = Sanitizes::my_sanitize_string( $request->reg_no);
        $password = date("s").uniqid();

        $student = Kiu_exam_login::where([['username', $reg_no], ['email', $email]])->get()->first();
        if($student){
            $student->password  = \Hash::make($password);
            if ($student->save())
            {   
                // /////////// SAVE STUDENT DETAILS /////////////////
                $payload = [
                    'password'  =>$password,
                    'email'     =>$student->email,
                    'firstname'=>$student->firstname,
                    'lastname' =>$student->lastname,
                    'username'  =>$student->username,
                ];
                          
                $user = new \App\Kiu_exam_login_created($payload);
                $user->save();
                // ////////// SEND MAIL //////////////////////////
                $emailDetails = [
                    'title' => 'Welcome to KIU Online Examiniation',
                    'firstname' => $student->firstname,
                    'username'  => $student->username,
                    'password'  => $password,
                    'url' => 'https://exams.kiu.ac.ug/login'
                ];
        
                Mail::to($email)->send(new KIUExaminationLoginDetailsMail($emailDetails));
                // /////////////////////////////////////////////////////

                $response = ['success'=>true, 'data'=>'Login details sent successful'];      
                return response()->json($response, 201);  
            }else{
                $response = ['success'=>false, 'data'=>'Email not sent'];
                return response()->json($response, 201);
            }
        }else{
            $response = ['success'=>false, 'data'=>'Email not sent'];
            return response()->json($response, 201);
        }
    }

    public function generatePassword(Request $request)
    {   
        $validator  = Validator::make($request->all(), [ 
            'email'   => 'required|email|max:255', 
        ]);

        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 200);
        }

        $email    = Sanitizes::my_sanitize_email( $request->email);

        $student = Kiu_exam_login::where([['email', $email]])->get()->first();
        if($student){
            $password = KiuExamLoginController::readableRandomString();
            $student->password  = \Hash::make($password);
            if ($student->save())
            {   
                // /////////// SAVE STUDENT DETAILS /////////////////
                $payload = [
                    'password'  =>$password,
                    'email'     =>$student->email,
                    'firstname' =>$student->firstname,
                    'lastname'  =>$student->lastname,
                    'username'  =>$student->username,
                ];
                          
                $user = new \App\Kiu_exam_login_created($payload);
                $user->save();

                $response = ['success'=>true, 'data'=>$password];      
                return response()->json($response, 201);  
            }else{
                $response = ['success'=>false, 'data'=>'An error occured'];
                return response()->json($response, 201);
            }
        }else{
            $response = ['success'=>false, 'data'=>'An error occured'];
            return response()->json($response, 201);
        }
    }

    public function readableRandomString($words = 1, $length = 6)
    {  
        $string = '';
        for ($o=1; $o <= $words; $o++) 
        { 
            $vowels = array("a","e","i","o","u");  
            $consonants = array(
                'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 
                'n', 'p', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'
            );  
        
            $word = '';
            for ($i = 1; $i <= $length; $i++)
            {
                $word .= $consonants[rand(0,19)];
                $word .= $vowels[rand(0,4)];
            }
            $string .= mb_substr($word, 0, $length);
            $string .= "-";
        }
        return mb_substr($string, 0, -1);
    }

}