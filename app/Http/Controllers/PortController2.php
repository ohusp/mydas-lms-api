<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

use App\Ports;
use App\Patients;
use App\Patientslist;
use App\Sharedmedrecordsport;
use App\Portreport;

use App\Med_allergies;
use App\Med_blood_group;
use App\Med_diabetic;
use App\Med_family_medical_history;
use App\Med_hypertensive;
use App\Med_lab_test;
use App\Med_note;
use App\Med_prescription;
use App\Med_underlying_conditions;
use App\Medicationscurrentlyusing;

use App\Portbookappointment;

// namespace App\Http\Controllers;
// use Illuminate\Http\Request;
// use App\User;
use JWTAuth;
use JWTAuthException;
use Mail;
use App\Mail\PortReportMail;

use Illuminate\Support\Facades\Validator;
use App\Sanitizes\Sanitizes;

class PortController2 extends Controller
{   
    // public function __construct()
    // {
    //     $this->middleware('role:superadministrator');
    // }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $pharmacies = Ports::paginate(10);
        // return $result;
        $response = ['success'=>true, 'data'=>$pharmacies];
        return response()->json($response, 201);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function storeIdentity(Request $request)
    {   
        // 
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $port_data = Ports::where('id', '=', $id)->first();

        // return $pharm_data;

        $response = ['success'=>true, 'data'=>[
            'auth_token'=>$port_data->auth_token,
            'id'=>$port_data->id,
            'username'=>$port_data->username,
            'name'=>$port_data->name,
            'email'=>$port_data->email, 
            'zip_code'=>$port_data->zip_code, 
            'telephone'=>$port_data->telephone, 
            'country'=>$port_data->country, 
            'district_province_state'=>$port_data->district_province_state, 
            'address'=>$port_data->address,
            'consultation_fee'=>$port_data->consultation_fee, 
            'bank_name'=>$port_data->bank_name, 
            'bank_account_name'=>$port_data->bank_account_name, 
            'bank_account_number'=>$port_data->bank_account_number,
            'logo'=>$port_data->logo,
            'medical_license'=>$port_data->certificate,
            'status'=>$port_data->status, 
            'created_at'=>$port_data->created_at
        ]];

        return response()->json($response, 201);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {   
        $validator  = Validator::make($request->all(), [ 
            'name'      => 'required|string|max:255', 
            'zip_code'  => 'required|string|max:255', 
            'telephone' => 'required|string|max:255', 
            'country'   => 'required|string|max:255', 
            'district_province_state'     => 'required|string|max:255', 
            'address'   => 'required|string|max:65000', 
        ]);

        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 201);
        }
        // Find user with that id
        $pharm_data = Ports::where('id', '=', $id)->first();

        $pharm_data->name        = Sanitizes::my_sanitize_string( $request->name);
        $pharm_data->zip_code    = Sanitizes::my_sanitize_string( $request->zip_code);
        $pharm_data->telephone   = Sanitizes::my_sanitize_string( $request->telephone);
        $pharm_data->country     = Sanitizes::my_sanitize_string( $request->country);
        $pharm_data->district_province_state     = Sanitizes::my_sanitize_string( $request->district_province_state);
        $pharm_data->address     = Sanitizes::my_sanitize_string( $request->address);
        $pharm_data->save();
        
        $response = ['success'=>true, 'data'=>$pharm_data];
        return response()->json($response, 201);
    }

    public function updateAccountDetails(Request $request, $id)
    {   
        // return $request;
        $validator  = Validator::make($request->all(), [ 
            'consultation_fee'      => 'required|integer|max:255', 
            'bank_name'             => 'required|string|max:255', 
            'bank_account_name'     => 'required|string|max:255', 
            'bank_account_number'   => 'required|string|max:255', 
        ]);

        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 201);
        }
        // Find user with that id
        $port_data = Ports::where('id', '=', $id)->first();

        $port_data->consultation_fee    = Sanitizes::my_sanitize_string( $request->consultation_fee );
        $port_data->bank_name           = Sanitizes::my_sanitize_string( $request->bank_name );
        $port_data->bank_account_name   = Sanitizes::my_sanitize_string( $request->bank_account_name );
        $port_data->bank_account_number = Sanitizes::my_sanitize_string( $request->bank_account_number );
        $port_data->save();

        // $pharm_data->update($request->all());
        $response = ['success'=>true, 'data'=>$port_data];
        return response()->json($response, 201);
    }

    public function patientsList($id)
    {   
        $patientslist = Portbookappointment::where('port_id', '=', $id)->paginate(10);

        // return $result;
        $response = ['success'=>true, 'data'=>$patientslist];
        return response()->json($response, 201);
    }

    // get patient medical record
    public function patientMedRec($patient_id, $port_id)
    {   
        $status = 1;
        // check if patient and doctor exist to know wether to display record or not i.e patient shared record
        $exist = \App\Sharedmedrecordsport::where([['patient_id', $patient_id], ['port_id', $port_id], ['status', $status]])->get()->first();
        if($exist){
            $patient_data = Patients::where('id', '=', $patient_id)->first();
            $med_currently_using = Medicationscurrentlyusing::where('patient_id', '=', $patient_id)->get()->all();
            $med_allergies = Med_allergies::where('patient_id', '=', $patient_id)->get()->all();
            $med_blood_group = Med_blood_group::where('patient_id', '=', $patient_id)->get()->all();
            $med_diabetic = Med_diabetic::where('patient_id', '=', $patient_id)->get()->all();
            $med_family_medical_history = Med_family_medical_history::where('patient_id', '=', $patient_id)->get()->all();
            $med_hypertensive = Med_hypertensive::where('patient_id', '=', $patient_id)->get()->all();
            $med_lab_test = Med_lab_test::where('patient_id', '=', $patient_id)->get()->all();
            $med_note = Med_note::where('patient_id', '=', $patient_id)->get()->all();
            $med_prescription = Med_prescription::where('patient_id', '=', $patient_id)->get()->all();
            $med_underlying_conditions = Med_underlying_conditions::where('patient_id', '=', $patient_id)->get()->all();
            
            // get the disabilities values and convert to array
            $disabilities_new = $patient_data->disabilities;
            $disabilities_new = json_decode($disabilities_new, true);

            if( $disabilities_new == "" || $disabilities_new == "null"){
                $disability_none        = "false";
                $disability_hearing     = "false";
                $disability_mobility    = "false";
                $disability_sight       = "false";
                $disability_learning    = "false";
                $disability_others      = "false";
            }else{
            // Pass each value into an array
                $disability_none        = $disabilities_new[0]["disability_none"];
                $disability_hearing     = $disabilities_new[0]["disability_hearing"];
                $disability_mobility    = $disabilities_new[0]["disability_mobility"];
                $disability_sight       = $disabilities_new[0]["disability_sight"];
                $disability_learning    = $disabilities_new[0]["disability_learning"];
                $disability_others      = $disabilities_new[0]["disability_others"];
            }

            $response = ['success'=>true, 
                'personal_data'=>[
                    'id'=>$patient_data->id,
                    'username'=>$patient_data->username,
                    'first_name'=>$patient_data->first_name,
                    'last_name'=>$patient_data->last_name, 
                    'middle_name'=>$patient_data->middle_name, 
                    'email'=>$patient_data->email,
                    'title'=>$patient_data->title, 
                    'gender'=>$patient_data->gender, 
                    'gender_others'=>$patient_data->gender_others,
                    'dob'=>$patient_data->dob, 
                    'nationality'=>$patient_data->nationality, 
                    'country_of_residence'=>$patient_data->country_of_residence, 
                    'district_province_state'=>$patient_data->district_province_state, 
                    'height'=>$patient_data->height,
                    'weight'=>$patient_data->weight, 

                    'disability_none'       =>$disability_none,
                    'disability_hearing'    =>$disability_hearing,
                    'disability_mobility'   =>$disability_mobility,
                    'disability_sight'      =>$disability_sight,
                    'disability_learning'   =>$disability_learning, 
                    'disability_others'     =>$disability_others, 

                    'profile_picture'=>$patient_data->profile_picture, 
                    'status'=>$patient_data->status, 
                    'created_at'=>$patient_data->created_at
                ],
                'med_currently_using'=> $med_currently_using,
                'med_allergies'=>       $med_allergies,
                'med_blood_group'=>     $med_blood_group,
                'med_diabetic'=>        $med_diabetic,
                'med_family_medical_history'=>  $med_family_medical_history,
                'med_hypertensive'=>            $med_hypertensive,
                'med_lab_test'=>                $med_lab_test,
                'med_note'=>                    $med_note,
                'med_prescription'=>            $med_prescription,
                'med_underlying_conditions'=>   $med_underlying_conditions,
            ];

            return response()->json($response, 201);
            
        }else{
            $response = ['success'=>false, 'data'=>"Patient Record not shared"];
            return response()->json($response, 201);
        }

        
    }

    // public function patientMedRecUpdate(Request $request, $patient_id, $doctor_id)
    // {   
    //     // return $request;

    //     $doc_data       = Doctors::where('id', '=', $doctor_id)->first();
    //     $doc_username   = $doc_data->username;
    //     $doc_first_name = $doc_data->first_name;
    //     $doc_last_name  = $doc_data->last_name;
    //     $doc_middle_name= $doc_data->middle_name;
    //     $doc_name       = $doc_first_name." ".$doc_middle_name." ".$doc_last_name;
        
    //     // Find user with that id
    //     // $patient_data = Patients::where('id', '=', $patient_id)->first();

    //     // /////////////////////////////////////////////////////////////////////////
    //     $medicationscurrentlyusing = [
    //         'medications'   =>$request->med_currently_using,
    //         'patient_id'    =>$patient_id,
    //         'doc_id'        =>$doctor_id,
    //         'doc_username'  =>$doc_username,
    //         'doc_name'      =>$doc_name,
    //     ];
    //     $medicationscurrentlyusing = new \App\Medicationscurrentlyusing($medicationscurrentlyusing);
    //     $medicationscurrentlyusing->save();
        
    //     // //////////////////////////////////////////////////////////////////////
    //     $med_allergies = [
    //         'allergies'     =>$request->med_allergies,
    //         'patient_id'    =>$patient_id,
    //         'doc_id'        =>$doctor_id,
    //         'doc_username'  =>$doc_username,
    //         'doc_name'      =>$doc_name,
    //     ];
    //     $med_allergies = new \App\Med_allergies($med_allergies);
    //     $med_allergies->save();

    //     // ///////////////////////////////////////////////////////////////////////
    //     $med_blood_group = [
    //         'blood_group'   =>$request->med_blood_group,
    //         'patient_id'    =>$patient_id,
    //         'doc_id'        =>$doctor_id,
    //         'doc_username'  =>$doc_username,
    //         'doc_name'      =>$doc_name,
    //     ];
    //     $med_blood_group = new \App\Med_blood_group($med_blood_group);
    //     $med_blood_group->save();

    //     // ///////////////////////////////////////////////////////////////////////
    //     $med_underlying_conditions = [
    //         'underlying_conditions'   =>$request->med_underlying_conditions,
    //         'patient_id'    =>$patient_id,
    //         'doc_id'        =>$doctor_id,
    //         'doc_username'  =>$doc_username,
    //         'doc_name'      =>$doc_name,
    //     ];
    //     $med_underlying_conditions = new \App\Med_underlying_conditions($med_underlying_conditions);
    //     $med_underlying_conditions->save();

    //     // ///////////////////////////////////////////////////////////////////////
    //     $med_family_medical_history = [
    //         'family_medical_history'   =>$request->med_family_medical_history,
    //         'patient_id'    =>$patient_id,
    //         'doc_id'        =>$doctor_id,
    //         'doc_username'  =>$doc_username,
    //         'doc_name'      =>$doc_name,
    //     ];
    //     $med_family_medical_history = new \App\Med_family_medical_history($med_family_medical_history);
    //     $med_family_medical_history->save();

    //     // ///////////////////////////////////////////////////////////////////////
    //     $med_hypertensive = [
    //         'hypertensive'   =>$request->med_hypertensive,
    //         'patient_id'    =>$patient_id,
    //         'doc_id'        =>$doctor_id,
    //         'doc_username'  =>$doc_username,
    //         'doc_name'      =>$doc_name,
    //     ];
    //     $med_hypertensive = new \App\Med_hypertensive($med_hypertensive);
    //     $med_hypertensive->save();

    //     // ///////////////////////////////////////////////////////////////////////
    //     $med_diabetic = [
    //         'diabetic'   =>$request->med_diabetic,
    //         'patient_id'    =>$patient_id,
    //         'doc_id'        =>$doctor_id,
    //         'doc_username'  =>$doc_username,
    //         'doc_name'      =>$doc_name,
    //     ];
    //     $med_diabetic = new \App\Med_diabetic($med_diabetic);
    //     $med_diabetic->save();

    //     // ///////////////////////////////////////////////////////////////////////
    //     $med_prescription = [
    //         'prescription'   =>$request->med_prescription,
    //         'patient_id'    =>$patient_id,
    //         'doc_id'        =>$doctor_id,
    //         'doc_username'  =>$doc_username,
    //         'doc_name'      =>$doc_name,
    //     ];
    //     $med_prescription = new \App\Med_prescription($med_prescription);
    //     $med_prescription->save();

    //     // ///////////////////////////////////////////////////////////////////////
    //     $med_lab_test = [
    //         'lab_test'      =>$request->med_lab_test,
    //         'patient_id'    =>$patient_id,
    //         'doc_id'        =>$doctor_id,
    //         'doc_username'  =>$doc_username,
    //         'doc_name'      =>$doc_name,
    //     ];
    //     $med_lab_test = new \App\Med_lab_test($med_lab_test);
    //     $med_lab_test->save();

    //     // ///////////////////////////////////////////////////////////////////////
    //     $med_note = [
    //         'note'          =>$request->med_note,
    //         'patient_id'    =>$patient_id,
    //         'doc_id'        =>$doctor_id,
    //         'doc_username'  =>$doc_username,
    //         'doc_name'      =>$doc_name,
    //     ];
    //     $med_note = new \App\Med_note($med_note);
    //     $med_note->save();

    //     $response = ['success'=>true, 'data'=>'Updated successfully'];
    //     return response()->json($response, 201);
    // }

    public function portReportGet($patient_id, $port_id)
    {   
        $portReport = Portreport::where([['patient_id', $patient_id], ['port_id', $port_id]])->paginate(10);

        // return $result;
        $response = ['success'=>true, 'data'=>$portReport];
        return response()->json($response, 201);
        
    }

    public function portReportSave(Request $request, $patient_id, $port_id)
    {   
        $validator  = Validator::make($request->all(), [ 
            'age'               => 'required|string|max:255', 
            'passport_number'   => 'required|string|max:255', 
            'vessel'            => 'required|string|max:255', 
            'arrival_from'      => 'required|string|max:255', 
            'observations'      => 'required|string|max:65000', 
            'recommendations'   => 'required|string|max:65000', 
            'name_of_officer'   => 'required|string|max:255', 
            'position'          => 'required|string|max:255', 
            'date'              => 'required|string|max:255', 
            'time'              => 'required|string|max:255', 
        ]);

        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 201);
        }
        
        $age             = Sanitizes::my_sanitize_string( $request->age );
        $passport_number = Sanitizes::my_sanitize_string( $request->passport_number );
        $vessel          = Sanitizes::my_sanitize_string( $request->vessel );
        $arrival_from    = Sanitizes::my_sanitize_string( $request->arrival_from );
        $observations    = Sanitizes::my_sanitize_string( $request->observations );
        $recommendations = Sanitizes::my_sanitize_string( $request->recommendations );
        $name_of_officer = Sanitizes::my_sanitize_string( $request->name_of_officer );
        $position        = Sanitizes::my_sanitize_string( $request->position );
        $date            = Sanitizes::my_sanitize_string( $request->date );
        $time            = Sanitizes::my_sanitize_string( $request->time );

        $port_data   = Ports::where('id', '=', $port_id)->first();
        $port_name   = $port_data->name;
        $port_logo   = $port_data->profile_picture;

        $patient_data  = Patients::where('id', '=', $patient_id)->first();
        $first_name    = $patient_data->first_name;
        $last_name     = $patient_data->last_name;
        $middle_name   = $patient_data->middle_name;
        $nationality   = $patient_data->nationality;
        $email         = $patient_data->email;
        // //////////////////////// SAVE TO DB /////////////////////////////////////////////
        $port_report = [
            'patient_id'        =>$patient_id,
            'port_id'           =>$port_id,
            'patient_name'      => $first_name." ".$middle_name." ".$last_name,
            'age'               =>$age,
            'passport_number'   =>$passport_number,
            'vessel'            =>$vessel,
            'arrival_from'      =>$arrival_from,
            'observations'      =>$observations,
            'recommendations'   =>$recommendations,
            'name_of_officer'   =>$name_of_officer,
            'position'          =>$position,
            'date'              =>$date,
            'time'              =>$time,
        ];
        $port_report = new \App\Portreport($port_report);
        $port_report->save();

        // $email = "mendes.paul28@gmail.com";

        // ////////// SEND MAIL //////////////////////////
        $emailDetails = [
            'title' => $port_name.' Medical Report',
            'patient_name'  => $first_name." ".$middle_name." ".$last_name,
            'age'           => $age,
            'nationality'   => $nationality,
            'passport_number' => $passport_number,
            'vessel'          => $vessel,
            'arrival_from'    => $arrival_from,
            'observations'    => $observations,
            'recommendations' => $recommendations,
            'name_of_officer' => $name_of_officer,
            'position'        => $position,
            'date'            => $date,
            'time'            => $time,
            'footer'          => 'Powered by: CamMedics'
        ];

        Mail::to($email)->send(new PortReportMail($emailDetails));

        // ////////////////////////////////////////////////////////////////////////////////////////

        $response = ['success'=>true, 'data'=>'Updated successfully'];
        return response()->json($response, 201);
    }

    public function updateMedHis(Request $request, $id)
    {   
        // return $request;
        // $patient_data = Ports::find($id);
        // $patient_data->first_name = $request->first_name;
        // $patient_data->save();
        // $response = ['success'=>true, 'data'=>$patient_data];
        // return response()->json($response, 201);

        // Find user with that id
        $patient_data = Ports::where('id', '=', $id)->first();

        // return $patient_data;
        
        $patient_data->update($request->all());
        $response = ['success'=>true, 'data'=>$patient_data];
        
        return response()->json($response, 201);
    }

   

    public function updateMedicalCertificate(Request $request, $id) {
        // return $request;
        $validator = Validator::make($request->all(), [ 
            'medical_certificate' => 'mimes:pdf,jpeg,png,jpg|max:500'
        ]);

        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 201);
        }
        
        // get the user_id to update
        $port_data = Ports::where('id', '=', $id)->first();

        // get the file from the request and concartinate time with the name
        $file = $request->file('medical_certificate');

        $fileName = $id .'.'. time().'.'.$file->getClientOriginalName();

        // Path where the file will be saved
        $path = config('global.file_path1') . 'ports/medical_certificate/'.$id;
        $destinationPath = public_path().$path;
        // return $destinationPath;
  
        // This moved file to server folder
        $file->move($destinationPath,$fileName);

        // save file name in database
        $port_data->certificate = config('global.file_path2') . "ports/medical_certificate/".$id."/".$fileName;
        // for online
        // $port_data->certificate = "/dashboard/public/images/uploads/ports/medical_certificate/".$id."/".$fileName;
        $port_data->save();

        // return response
        $response = ['success'=>true, 'data'=>$port_data];
        return response()->json($response, 201);
    }

    public function updateMedicalLicense(Request $request, $id) {
        // return $request;
        $validator = Validator::make($request->all(), [ 
            'medical_license' => 'mimes:pdf,jpeg,png,jpg|max:500'
        ]);

        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 201);
        }
        
        // get the user_id to update
        $port_data = Ports::where('id', '=', $id)->first();

        // get the file from the request and concartinate time with the name
        $file = $request->file('medical_license');

        $fileName = time().'.'.$file->getClientOriginalName();

        // Path where the file will be saved
        $path = config('global.file_path1') . 'ports/medical_license/'.$id;
        $destinationPath = public_path().$path;
        // return $destinationPath;
  
        // This moved file to server folder
        $file->move($destinationPath,$fileName);

        // save file name in database
        $port_data->certificate = config('global.file_path2') . "ports/medical_license/".$id."/".$fileName;
        // for online
        // $patient_data->pharm_logo = "/dashboard/public/images/uploads/ports/medical_license/".$id."/".$fileName;
        $port_data->save();

        // return response
        $response = ['success'=>true, 'data'=>$port_data];
        return response()->json($response, 201);
    }

    public function shareMedHistory(Request $request, $id)
    {   
        // return $request;
        $share_med_history = $request->share_med_history;

        // Get user id of username. change from patient table to port table
        $doc_airport_data   = Ports::where('email', '=', $share_med_history)->first();
        $doc_airport_id     = $doc_airport_data->id;
        
        // Find user with that id
        $patient_data   = Ports::where('id', '=', $id)->first();
        $shared_med_his = $patient_data->share_med_history;
        // return $shared_med_his;

        // Get parameters to update
        // $share_med_history = $request->share_med_history;
        // $id_passport_number     = $request->id_passport_number;

        // save file name in database
        if($shared_med_his == ""){
            $patient_data->share_med_history = $doc_airport_id;
            $patient_data->save();
        }else{
            $patient_data->share_med_history = $shared_med_his.",".$doc_airport_id;
            $patient_data->save();
        }
        

        // return response
        $response = ['success'=>true, 'data'=>$patient_data];
        return response()->json($response, 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function getAppointment(Request $request, $patient_id, $port_id)
    {   
        $status = 1;
        $appointment = Portbookappointment::where([['patient_id', $patient_id], ['port_id', $port_id]])->get()->first();

        $response = ['success'=>true, 'data'=>$appointment];
        return response()->json($response, 201);
    }

    public function endAppointment(Request $request, $patient_id, $port_id, $appointment_id)
    {   
        $status = 1;
        $appointment = Portbookappointment::where([['patient_id', $patient_id], ['port_id', $port_id], ['id', $appointment_id]])->get()->first();
        $appointment->status = 2;
        $appointment->save();

        $appointmentPayment = Portbookappointmentpayment::where([['patient_id', $patient_id], ['port_id', $port_id], ['appointment_id', $appointment_id]])->get()->first();
        $appointmentPayment->status = 2;
        $appointmentPayment->save();

        $response = ['success'=>true, 'data'=>"Apointment concluded"];
        return response()->json($response, 201);
    }

    public function account($id)
    {   
        // $account = Doctorbookappointmentpayment::where('doc_id', '=', $id)->paginate(10);
        // $appointment_id = $account->appointment_id;

        // $appointment = Doctorbookappointment::where('appointment_id', '=', $appointment_id)->paginate(10);

        $account = DB::table('portbookappointmentpayments')
            ->join('portbookappointments', 'portbookappointmentpayments.appointment_id', '=', 'portbookappointments.id')
            ->select('portbookappointmentpayments.*', 'portbookappointments.*')
            ->where('portbookappointmentpayments.port_id', '=', $id)
            ->paginate(10);

        // return $result;
        $response = ['success'=>true, 'data'=>$account];
        return response()->json($response, 201);
    }

    public function updateLogo(Request $request, $id) {
        // return $request;
        $validator = Validator::make($request->all(), [ 
            'logo' => 'mimes:pdf,jpeg,png,jpg|max:512'
        ]);

        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 201);
        }
        
        // get the user_id to update
        $port_data = Ports::where('id', '=', $id)->first();

        // get the file from the request and concartinate time with the name
        $file = $request->file('logo');

        $fileName = time().'.'.$file->getClientOriginalName();

        // Path where the file will be saved
        $path = config('global.file_path1') . 'ports/logos/'.$id;
        $destinationPath = public_path().$path;
        // return $destinationPath;
  
        // This moved file to server folder
        $file->move($destinationPath,$fileName);

        // save file name in database
        $port_data->logo = config('global.file_path2') . "ports/logos/".$id."/".$fileName;
        // for online
        // $port_data->logo = "/dashboard/public/images/uploads/ports/logos/".$id."/".$fileName;
        $port_data->save();

        // return response
        $response = ['success'=>true, 'data'=>$port_data];
        return response()->json($response, 201);
    }

}
