<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Courses;
use App\Lms_users;
use App\Lms_user_enrolments;
use App\Lms_enrol;
use App\Class_shedule;
use JWTAuth;
use JWTAuthException;
use Mail;
use App\Mail\WelcomeMail;

use Illuminate\Support\Facades\Validator;
use App\Sanitizes\Sanitizes;
use App\Encrypt\Encrypt;



class CourseController extends Controller
{   

    public function getCourses()
    {
        // $courses = Courses::all();
        $courses = Courses::where([['category', '279']])->paginate(10);

        if($courses){
            $response = ['success'=>true, 'data'=>$courses];
            return response()->json($response, 201);
        }else{
            $response = ['success'=>false, 'data'=>"error"];
            return response()->json($response, 501);
        }
    }

    public function saveClassSchedule(Request $request, $email, $role)
    {   
        // return $request;
        $request->replace($request->course_data);
        
        // Validate
        $validator = Validator::make($request->all(), [ 
            'course_id'     => 'required|integer|max:999999999999', 
            'class_topic'   => 'required|string|max:255', 
            'startDate'     => 'required|string|max:255', 
            'endDate'       => 'required|string|max:255', 
        ]);
        
        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 501);
        }

        // Sanitize inputs
        $course_id      = Sanitizes::my_sanitize_string( $request->course_id);
        $class_topic    = Sanitizes::my_sanitize_string( $request->class_topic);
        $startDate      = Sanitizes::my_sanitize_string( $request->startDate);
        $endDate        = Sanitizes::my_sanitize_string( $request->endDate);
        $email          = Sanitizes::my_sanitize_string( $email);
        $role           = Sanitizes::my_sanitize_string( $role);

        $payload = [
            'course_id'     =>$course_id,
            'class_topic'   =>$class_topic,
            'startDate'     =>$startDate,
            'endDate'       =>$endDate,
            'created_by'    =>$email,
            'role'          =>$role,
        ];
                  
        $class = new \App\Class_shedule($payload);
        if ($class->save())
        {
            $response = ['success'=>true, 'data'=>'Class scheduled successful'];      
            return response()->json($response, 201);  
        }
        else
            $response = ['success'=>false, 'data'=>'Class schedule failed'];
            return response()->json($response, 501);
    }

    public function getClassSchedule(Request $request)
    {
        // return $request->course_id;
        $class_shedule = Class_shedule::where([['course_id', $request->course_id]])->paginate(10);

        if($class_shedule){
            $response = ['success'=>true, 'data'=>$class_shedule];
            return response()->json($response, 201);
        }else{
            $response = ['success'=>false, 'data'=>"error"];
            return response()->json($response, 501);
        }
    }

    public function getMyCourses($email, $role)
    {
        // array to be use to store course details
        $course_data_array = array();

        // get student id
        $student_data   = Lms_users::where('email', '=', $email)->first();
        if($student_data){
            $student_id     = $student_data->id;

            $enrolment_data = Lms_user_enrolments::where([['userid', $student_id]])->get()->all();
            if($enrolment_data){
                $enrolmentCount = count($enrolment_data);

                for ($i=0; $i < $enrolmentCount; $i++){
                    $enrol_id  = $enrolment_data[$i]->enrolid;

                    // get course id from enrol tbl
                    $enrol_data = Lms_enrol::where('id', '=', $enrol_id)->first();
                    if($enrol_data){
                        $course_id  = $enrol_data->courseid;

                        // get course details using the course id
                        $course_data   = Courses::where('id', '=', $course_id)->first();
                        array_push($course_data_array, $course_data);
                    }else{
                        $response = ['success'=>false, 'data'=>"error"];
                        return response()->json($response, 501);
                    }
                }

                if($course_data_array){
                    $response = ['success'=>true, 'data'=>$course_data_array];
                    return response()->json($response, 201);
                }else{
                    $response = ['success'=>false, 'data'=>"error"];
                    return response()->json($response, 501);
                }
            }else{
                $response = ['success'=>false, 'data'=>"error"];
                return response()->json($response, 501);
            }
        }else{
            $response = ['success'=>false, 'data'=>"error"];
            return response()->json($response, 501);
        }
    }


    // public function enrolCourse(Request $request, $email, $role)
    // {   
    //     // Validate
    //     $validator = Validator::make($request->all(), [ 
    //         'course_id'     => 'required|integer|max:999999999999', 
    //     ]);
        
    //     // Return validation error
    //     if ($validator->fails()) { 
    //         $validationError = $validator->errors(); 
    //         $response = ['success'=>false, 'data'=>$validationError];
    //         return response()->json($response, 501);
    //     }

    //     // Sanitize inputs
    //     $course_id  = Sanitizes::my_sanitize_string( $request->course_id);
    //     $email      = Sanitizes::my_sanitize_email( $email);
    //     $role       = Sanitizes::my_sanitize_string( $role);

    //     $payload = [
    //         'course_id' =>$course_id,
    //         'email'     =>$email,
    //         'role'      =>$role,
    //     ];
                  
    //     $course = new \App\Course_enrolment($payload);
    //     if ($course->save())
    //     {
    //         $response = ['success'=>true, 'data'=>'Enrolment successful'];      
    //         return response()->json($response, 201);  
    //     }
    //     else
    //         $response = ['success'=>false, 'data'=>'Enrolment failed'];
    //         return response()->json($response, 501);
    // }

}