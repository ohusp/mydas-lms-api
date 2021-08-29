<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Timetable;
use JWTAuth;
use JWTAuthException;
use Mail;
use App\Mail\WelcomeMail;

use Illuminate\Support\Facades\Validator;
use App\Sanitizes\Sanitizes;
use App\Encrypt\Encrypt;



class TimetableController extends Controller
{   
    public function saveTimetable(Request $request, $username, $role)
    {   
        // return $request->startTime;
        $validator  = Validator::make($request->all(), [ 
            'student_username' => 'required|string|max:255',
            'teacher_username' => 'required|string|max:255',
            'topic'     => 'required|string|max:255',
            'date'      => 'required|string|max:255',
            'fromHour'  => 'required|string|max:10',
            'fromSec'   => 'required|string|max:10', 
            'toHour'    => 'required|string|max:10', 
            'toSec'     => 'required|string|max:10', 
        ]);

        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 501);
        }
        
        $studentUsername  = Sanitizes::my_sanitize_string( $request->student_username );
        $teacherUsername  = Sanitizes::my_sanitize_string( $request->teacher_username );
        $topic      = Sanitizes::my_sanitize_string( $request->topic );
        $date       = Sanitizes::my_sanitize_string( $request->date );
        $fromHour   = Sanitizes::my_sanitize_string( $request->fromHour );
        $fromSec    = Sanitizes::my_sanitize_string( $request->fromSec );
        $toHour     = Sanitizes::my_sanitize_string( $request->toHour );
        $toSec      = Sanitizes::my_sanitize_string( $request->toSec );

        // $startDateTime  = explode( ",", $startTime );
        // $startDate      =  trim($startDateTime[0]," ");
        // $startTime      =  trim($startDateTime[1]," ");

        // $endDateTime    = explode( ",", $endTime );
        // $endDate        =  trim($endDateTime[0]," ");
        // $endTime        =  trim($endDateTime[1]," ");
        $from = $fromHour.":".$fromSec;
        $to   = $toHour.":".$toSec;

        $payload = [
            'student_username' =>$studentUsername,
            'teacher_username' =>$teacherUsername,
            'topic'     =>$topic,
            'date'      =>$date,
            'time_from' =>$from,
            'time_to'   =>$to,
        ];
                
        $timetable = new \App\Timetable($payload);
        if ($timetable->save())
        {
            $response = ['success'=>true, 'data'=>"Added successfully"];
            return response()->json($response, 200);
        }else{
            $response = ['success'=>true, 'data'=>"Failed"];
            return response()->json($response, 200);
        }
    }

    public function getMyTimetable(Request $request, $username, $role, $requestFor)
    {   
        $updateTimetable = TimetableController::updateTimetable();
        
        // return $request;
        $validator  = Validator::make($request->all(), [ 
            'student_username' => 'required|string|max:255',
            'teacher_username' => 'required|string|max:255',
        ]);

        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 501);
        }
        
        $studentUsername  = Sanitizes::my_sanitize_string( $request->student_username );
        $teacherUsername  = Sanitizes::my_sanitize_string( $request->teacher_username );

        if($requestFor === "teacher") {
            $timetable = Timetable::where([['student_username', $studentUsername], ['teacher_username', $teacherUsername]])->get()->all();
        }else if($requestFor === "user") {
            $timetable = Timetable::where([['student_username', $studentUsername]])->get()->all();
        }
                
        if ($timetable)
        {
            $response = ['success'=>true, 'data'=>$timetable];
            return response()->json($response, 200);
        }else{
            $response = ['success'=>false, 'data'=>"Failed. No timetable"];
            return response()->json($response, 200);
        }
    }

    public function updateTimetable()
    {  
        $timetable_data = Timetable::all();
        $timetableCount = count($timetable_data);
        // return $timetableCount;
        for ($i=0; $i < $timetableCount; $i++){
            $date       = $timetable_data[$i]->date;
            $time_from  = $timetable_data[$i]->time_from;
            $time_to    = $timetable_data[$i]->time_to;

            $classDay   = date_create($date);
            // $target  = date_create('13-10-2021');
            $today      = date_create(date("d-m-Y"));
            $interval   = date_diff($today, $classDay);
            $difference = $interval->format('%R%a');

            // return $difference;
            if($difference >= 1) {
                // return "Not date day yet";
            }else if($difference == +0) {
                // return "It is today";
                $timeFrom  = explode( ":", $time_from );
                $timeFromHour  =  trim($timeFrom[0]," ");
                $timeFromMins  =  trim($timeFrom[1]," ");

                $timeTo  = explode( ":", $time_to );
                $timeToHour  =  trim($timeTo[0]," ");
                $timeToMins  =  trim($timeTo[1]," ");

                if(date("H") > $timeFromHour && date("H") > $timeToHour) {
                    // pass class time// pass class time
                    $timetable_data[$i]->status = 3;
                    $timetable_data[$i]->save();
                }else if(date("H") > $timeFromHour && date("H") < $timeToHour ) {
                    // Class is on
                    $timetable_data[$i]->status = 2;
                    $timetable_data[$i]->save();
                }else if(date("H") > $timeFromHour && date("H") == $timeToHour ) {
                    if(date("i") < $timeToMins) {
                        // Class is on
                        $timetable_data[$i]->status = 2;
                        $timetable_data[$i]->save(); 
                    }else if(date("i") > $timeToMins) {
                        // pass class time
                        $timetable_data[$i]->status = 3;
                        $timetable_data[$i]->save();
                    }
                }else if(date("H") == $timeFromHour) {
                    if(date("i") == $timeToMins) {
                        // Class is on
                        $timetable_data[$i]->status = 2;
                        $timetable_data[$i]->save();
                    }else if(date("i") > $timeToMins) {
                        // Class is on
                        $timetable_data[$i]->status = 2;
                        $timetable_data[$i]->save();
                    }else if(date("i") < $timeToMins) {
                        // not time yet
                    }
                }
            }else if($difference < 0) {
                // return "It is pass";
                $timetable_data[$i]->status = 3;
                $timetable_data[$i]->save();
            }
        }
        return;
    }
}