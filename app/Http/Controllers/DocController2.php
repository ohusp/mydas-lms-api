<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

use App\Doctors;
use App\Patientslist;
use App\Patients;
use App\Sharedmedrecords;

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

use App\Doctorbookappointment;
use App\Doctorbookappointmentpayment;

// namespace App\Http\Controllers;
// use Illuminate\Http\Request;
// use App\User;
use JWTAuth;
use JWTAuthException;

use Illuminate\Support\Facades\Validator;
use App\Sanitizes\Sanitizes;

class DocController2 extends Controller
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
        $pharmacies = Doctors::paginate(10);
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
        $doctor_data = Doctors::where('id', '=', $id)->first();

        // return $pharm_data;

        $response = ['success'=>true, 'data'=>[
            'auth_token'=>$doctor_data->auth_token,
            'id'=>$doctor_data->id,
            'first_name'=>$doctor_data->first_name,
            'last_name'=>$doctor_data->last_name, 
            'middle_name'=>$doctor_data->middle_name, 
            'username'=>$doctor_data->username, 
            'email'=>$doctor_data->email, 
            'zip_code'=>$doctor_data->zip_code, 
            'telephone'=>$doctor_data->telephone, 
            'title'=>$doctor_data->title, 
            'gender'=>$doctor_data->gender, 
            'gender_others'=>$doctor_data->gender_others, 
            'dob'=>$doctor_data->dob, 
            'nationality'=>$doctor_data->nationality, 
            'country_of_residence'=>$doctor_data->country_of_residence, 
            'district_province_state'=>$doctor_data->district_province_state, 
            'contact_address'=>$doctor_data->contact_address, 
            'area_of_specialization'=>$doctor_data->area_of_specialization,
            'available_on_appointment'=>$doctor_data->available_on_appointment,
            'available_on_emergency'=>$doctor_data->available_on_emergency,
            'available_by_time'=>$doctor_data->available_by_time, 
            // 'share_med_history'=>$doctor_data->share_med_history, 
    
            'profile_picture'=>$doctor_data->profile_picture,
            'medical_certificate'=>$doctor_data->medical_certificate,
            'medical_license'=>$doctor_data->medical_license, 

            'consultation_fee'=>$doctor_data->consultation_fee,
            'bank_name'=>$doctor_data->bank_name,
            'bank_account_name'=>$doctor_data->bank_account_name,
            'bank_account_number'=>$doctor_data->bank_account_number,

            'status'=>$doctor_data->status, 
            'created_at'=>$doctor_data->created_at
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
        // return $request->gender;
        $validator  = Validator::make($request->all(), [ 
            'first_name'    => 'required|string|max:255', 
            'last_name'     => 'required|string|max:255', 
            'middle_name'   => 'string|max:255', 
            'zip_code'      => 'required|string|max:255', 
            'telephone'     => 'required|string|max:255', 
            'gender'        => 'integer|max:255', 
            'gender_others' => 'nullable|max:255', 
            'dob'           => 'string|max:255', 
            'nationality'   => 'required|string|max:255', 
            'country_of_residence'      => 'required|string|max:255', 
            'district_province_state'   => 'required|string|max:255', 
            'contact_address'           => 'required|string|max:65000', 
            'area_of_specialization'    => 'required|string|max:255', 
            'available_on_appointment'  => 'nullable|max:255', 
            'available_on_emergency'    => 'nullable|max:255', 
            'available_by_time'         => 'nullable|max:255', 
        ]);

        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 201);
        }

        // Find user with that id
        $doctor_data = Doctors::where('id', '=', $id)->first();
        
        $doctor_data->first_name    = Sanitizes::my_sanitize_string( $request->first_name);
        $doctor_data->last_name     = Sanitizes::my_sanitize_string( $request->last_name);
        $doctor_data->middle_name   = Sanitizes::my_sanitize_string( $request->middle_name);
        $doctor_data->zip_code      = Sanitizes::my_sanitize_string( $request->zip_code);
        $doctor_data->telephone     = Sanitizes::my_sanitize_string( $request->telephone);
        $doctor_data->gender        = Sanitizes::my_sanitize_string( $request->gender);
        $doctor_data->gender_others = Sanitizes::my_sanitize_string( $request->gender_others);
        $doctor_data->dob           = Sanitizes::my_sanitize_string( $request->dob);
        $doctor_data->nationality   = Sanitizes::my_sanitize_string( $request->nationality);
        $doctor_data->country_of_residence      = Sanitizes::my_sanitize_string( $request->country_of_residence);
        $doctor_data->district_province_state   = Sanitizes::my_sanitize_string( $request->district_province_state);
        $doctor_data->contact_address           = Sanitizes::my_sanitize_string( $request->contact_address);
        $doctor_data->area_of_specialization    = Sanitizes::my_sanitize_string( $request->area_of_specialization);
        $doctor_data->available_on_appointment  = Sanitizes::my_sanitize_string( $request->available_on_appointment);
        $doctor_data->available_on_emergency    = Sanitizes::my_sanitize_string( $request->available_on_emergency);
        $doctor_data->available_by_time         = Sanitizes::my_sanitize_string( $request->available_by_time);
        
        $doctor_data->save();
        // $doctor_data->update($request->all());
        $response = ['success'=>true, 'data'=>$doctor_data];
        return response()->json($response, 201);
    }

    public function updateAccountDetails(Request $request, $id)
    {   
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
        // return $request;
        // Find user with that id
        $doc_data = Doctors::where('id', '=', $id)->first();

        $doc_data->consultation_fee       = Sanitizes::my_sanitize_string( $request->consultation_fee );
        $doc_data->bank_name              = Sanitizes::my_sanitize_string( $request->bank_name );
        $doc_data->bank_account_name      = Sanitizes::my_sanitize_string( $request->bank_account_name );
        $doc_data->bank_account_number    = Sanitizes::my_sanitize_string( $request->bank_account_number );
        $doc_data->save();

        // $pharm_data->update($request->all());
        $response = ['success'=>true, 'data'=>$doc_data];
        return response()->json($response, 201);
    }

    public function patientsList($id)
    {   
        $patientslist = Doctorbookappointment::where('doc_id', '=', $id)->paginate(10);

        // return $result;
        $response = ['success'=>true, 'data'=>$patientslist];
        return response()->json($response, 201);
    }

    public function updateMedHis(Request $request, $id)
    {   
        // return $request;
        // $patient_data = Doctors::find($id);
        // $patient_data->first_name = $request->first_name;
        // $patient_data->save();
        // $response = ['success'=>true, 'data'=>$patient_data];
        // return response()->json($response, 201);

        // Find user with that id
        $patient_data = Doctors::where('id', '=', $id)->first();

        // return $patient_data;
        
        $patient_data->update($request->all());
        $response = ['success'=>true, 'data'=>$patient_data];
        
        return response()->json($response, 201);
    }

    // upload/update applicant's identity pdf
    public function updateProfilePicture(Request $request, $id) {
        // return $id;
        $validator = Validator::make($request->all(), [ 
            'profile_picture' => 'mimes:pdf,jpeg,png,jpg|max:500'
        ]);

        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 201);
        }
        
        // get the user_id to update
        $doctor_data = Doctors::where('id', '=', $id)->first();

        // get the file from the request and concartinate time with the name
        $file = $request->file('profile_picture');

        $fileName = $id .'-'. time().'.'.$file->getClientOriginalName();
        // $fileName = $id."-".time().".jpg";

        // Path where the file will be saved
        $path = config('global.file_path1') . 'doctors/profile_pictures/'.$id;
        $destinationPath = public_path().$path;
        // return $destinationPath;
  
        // This moved file to server folder
        $file->move($destinationPath,$fileName);

        // save file name in database
        // for local
        $doctor_data->profile_picture = config('global.file_path2') . "doctors/profile_pictures/".$id."/".$fileName;
        // for online
        // $doctor_data->profile_picture = "/dashboard/public/images/uploads/doctors/profile_pictures/".$id."/".$fileName;
        $doctor_data->save();

        // return response
        $response = ['success'=>true, 'data'=>$doctor_data];
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
        $doctor_data = Doctors::where('id', '=', $id)->first();

        // get the file from the request and concartinate time with the name
        $file = $request->file('medical_certificate');

        $fileName = $id .'-'. time().'.'.$file->getClientOriginalName();

        // Path where the file will be saved
        $path = config('global.file_path1') . 'doctors/medical_certificate/'.$id;
        $destinationPath = public_path().$path;
        // return $destinationPath;
  
        // This moved file to server folder
        $file->move($destinationPath,$fileName);

        // save file name in database
        $doctor_data->medical_certificate = config('global.file_path2') . "doctors/medical_certificate/".$id."/".$fileName;
        // for online
        // $doctor_data->medical_certificate = "/dashboard/public/images/uploads/doctors/medical_certificate/".$id."/".$fileName;
        $doctor_data->save();

        // return response
        $response = ['success'=>true, 'data'=>$doctor_data];
        return response()->json($response, 201);
    }

    public function updateMedicalLicense(Request $request, $id) 
    {
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

        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 201);
        }

        // get the user_id to update
        $doctor_data = Doctors::where('id', '=', $id)->first();

        // get the file from the request and concartinate time with the name
        $file = $request->file('medical_license');

        $fileName = $id .'-'. time().'.'.$file->getClientOriginalName();

        // Path where the file will be saved
        $path = config('global.file_path1') . 'doctors/medical_license/'.$id;
        $destinationPath = public_path().$path;
        // return $destinationPath;
  
        // This moved file to server folder
        $file->move($destinationPath,$fileName);

        // save file name in database
        $doctor_data->medical_license = config('global.file_path2') . "doctors/medical_license/".$id."/".$fileName;
        // for online
        // $doctor_data->medical_license = "/dashboard/public/images/uploads/doctors/medical_license/".$id."/".$fileName;
        $doctor_data->save();

        // return response
        $response = ['success'=>true, 'data'=>$doctor_data];
        return response()->json($response, 201);
    }

    public function shareMedHistory(Request $request, $id)
    {   
        // return $request;
        $share_med_history = $request->share_med_history;

        // Get user id of username. change from patient table to doctor table
        $doc_airport_data   = Doctors::where('email', '=', $share_med_history)->first();
        $doc_airport_id     = $doc_airport_data->id;
        
        // Find user with that id
        $patient_data   = Doctors::where('id', '=', $id)->first();
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

    // get patient medical record
    public function patientMedRec($patient_id, $doctor_id)
    {   
        $status = 1;
        // check if patient and doctor exist to know wether to display record or not i.e patient shared record
        $exist = \App\Sharedmedrecords::where([['patient_id', $patient_id], ['doc_id', $doctor_id], ['status', $status]])->get()->first();
        if($exist){
            $patient_data = Patients::where('id', '=', $patient_id)->first();
            $med_currently_using = Medicationscurrentlyusing::where([['patient_id', $patient_id], ['status', $status]])->get()->all();
            $med_allergies = Med_allergies::where([['patient_id', $patient_id], ['status', $status]])->get()->all();
            $med_blood_group = Med_blood_group::where([['patient_id', $patient_id], ['status', $status]])->get()->all();
            $med_diabetic = Med_diabetic::where([['patient_id', $patient_id], ['status', $status]])->get()->all();
            $med_family_medical_history = Med_family_medical_history::where([['patient_id', $patient_id], ['status', $status]])->get()->all();
            $med_hypertensive = Med_hypertensive::where([['patient_id', $patient_id], ['status', $status]])->get()->all();
            $med_lab_test = Med_lab_test::where([['patient_id', $patient_id], ['status', $status]])->get()->all();
            $med_note = Med_note::where([['patient_id', $patient_id], ['status', $status]])->get()->all();
            $med_prescription = Med_prescription::where([['patient_id', $patient_id], ['status', $status]])->get()->all();
            $med_underlying_conditions = Med_underlying_conditions::where([['patient_id', $patient_id], ['status', $status]])->get()->all();
            
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
                    'title'=>$patient_data->title, 
                    'gender'=>$patient_data->gender, 
                    'dob'=>$patient_data->dob, 
                    'nationality'=>$patient_data->nationality, 'country_of_residence'=>$patient_data->country_of_residence, 'district_province_state'=>$patient_data->district_province_state, 
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

    public function patientMedRecUpdate(Request $request, $patient_id, $doctor_id)
    {   
        // return $request;

        $doc_data       = Doctors::where('id', '=', $doctor_id)->first();
        $doc_username   = $doc_data->username;
        $doc_first_name = $doc_data->first_name;
        $doc_last_name  = $doc_data->last_name;
        $doc_middle_name= $doc_data->middle_name;
        $doc_name       = $doc_first_name." ".$doc_middle_name." ".$doc_last_name;

        $validator  = Validator::make($request->all(), [ 
            'med_currently_using'   => 'nullable|max:255', 
            'med_allergies'         => 'nullable|max:255', 
            'med_blood_group'       => 'nullable|max:255', 
            'med_underlying_conditions'     => 'nullable|max:255', 
            'med_family_medical_history'    => 'nullable|max:255', 
            'med_hypertensive'              => 'nullable|max:255', 
            'med_diabetic'      => 'nullable|max:255', 
            'med_prescription'  => 'nullable|max:255', 
            'med_lab_test'      => 'nullable|max:255', 
            'med_note'          => 'nullable|max:255', 
        ]);

        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 201);
        }
        
        // Find user with that id
        // $patient_data = Patients::where('id', '=', $patient_id)->first();
        $med_currently_using    = Sanitizes::my_sanitize_string($request->med_currently_using);
        $med_allergies          = Sanitizes::my_sanitize_string($request->med_allergies);
        $med_blood_group        = Sanitizes::my_sanitize_string($request->med_blood_group);
        $med_underlying_conditions  = Sanitizes::my_sanitize_string($request->med_underlying_conditions);
        $med_family_medical_history = Sanitizes::my_sanitize_string($request->med_family_medical_history);
        $med_hypertensive   = Sanitizes::my_sanitize_string($request->med_hypertensive);
        $med_diabetic       = Sanitizes::my_sanitize_string($request->med_diabetic);
        $med_prescription   = Sanitizes::my_sanitize_string($request->med_prescription);
        $med_lab_test       = Sanitizes::my_sanitize_string($request->med_lab_test);
        $med_note           = Sanitizes::my_sanitize_string($request->med_note);
        // /////////////////////////////////////////////////////////////////////////
        $medicationscurrentlyusing = [
            'medications'   =>$med_currently_using,
            'patient_id'    =>$patient_id,
            'doc_id'        =>$doctor_id,
            'doc_username'  =>$doc_username,
            'doc_name'      =>$doc_name,
        ];
        $medicationscurrentlyusing = new \App\Medicationscurrentlyusing($medicationscurrentlyusing);
        $medicationscurrentlyusing->save();
        
        // //////////////////////////////////////////////////////////////////////
        $med_allergies = [
            'allergies'     =>$med_allergies,
            'patient_id'    =>$patient_id,
            'doc_id'        =>$doctor_id,
            'doc_username'  =>$doc_username,
            'doc_name'      =>$doc_name,
        ];
        $med_allergies = new \App\Med_allergies($med_allergies);
        $med_allergies->save();

        // ///////////////////////////////////////////////////////////////////////
        $med_blood_group = [
            'blood_group'   =>$med_blood_group,
            'patient_id'    =>$patient_id,
            'doc_id'        =>$doctor_id,
            'doc_username'  =>$doc_username,
            'doc_name'      =>$doc_name,
        ];
        $med_blood_group = new \App\Med_blood_group($med_blood_group);
        $med_blood_group->save();

        // ///////////////////////////////////////////////////////////////////////
        $med_underlying_conditions = [
            'underlying_conditions'   =>$med_underlying_conditions,
            'patient_id'    =>$patient_id,
            'doc_id'        =>$doctor_id,
            'doc_username'  =>$doc_username,
            'doc_name'      =>$doc_name,
        ];
        $med_underlying_conditions = new \App\Med_underlying_conditions($med_underlying_conditions);
        $med_underlying_conditions->save();

        // ///////////////////////////////////////////////////////////////////////
        $med_family_medical_history = [
            'family_medical_history'   =>$med_family_medical_history,
            'patient_id'    =>$patient_id,
            'doc_id'        =>$doctor_id,
            'doc_username'  =>$doc_username,
            'doc_name'      =>$doc_name,
        ];
        $med_family_medical_history = new \App\Med_family_medical_history($med_family_medical_history);
        $med_family_medical_history->save();

        // ///////////////////////////////////////////////////////////////////////
        $med_hypertensive = [
            'hypertensive'  =>$med_hypertensive,
            'patient_id'    =>$patient_id,
            'doc_id'        =>$doctor_id,
            'doc_username'  =>$doc_username,
            'doc_name'      =>$doc_name,
        ];
        $med_hypertensive = new \App\Med_hypertensive($med_hypertensive);
        $med_hypertensive->save();

        // ///////////////////////////////////////////////////////////////////////
        $med_diabetic = [
            'diabetic'      =>$med_diabetic,
            'patient_id'    =>$patient_id,
            'doc_id'        =>$doctor_id,
            'doc_username'  =>$doc_username,
            'doc_name'      =>$doc_name,
        ];
        $med_diabetic = new \App\Med_diabetic($med_diabetic);
        $med_diabetic->save();

        // ///////////////////////////////////////////////////////////////////////
        $med_prescription = [
            'prescription'   =>$med_prescription,
            'patient_id'    =>$patient_id,
            'doc_id'        =>$doctor_id,
            'doc_username'  =>$doc_username,
            'doc_name'      =>$doc_name,
        ];
        $med_prescription = new \App\Med_prescription($med_prescription);
        $med_prescription->save();

        // ///////////////////////////////////////////////////////////////////////
        $med_lab_test = [
            'lab_test'      =>$med_lab_test,
            'patient_id'    =>$patient_id,
            'doc_id'        =>$doctor_id,
            'doc_username'  =>$doc_username,
            'doc_name'      =>$doc_name,
        ];
        $med_lab_test = new \App\Med_lab_test($med_lab_test);
        $med_lab_test->save();

        // ///////////////////////////////////////////////////////////////////////
        $med_note = [
            'note'          =>$med_note,
            'patient_id'    =>$patient_id,
            'doc_id'        =>$doctor_id,
            'doc_username'  =>$doc_username,
            'doc_name'      =>$doc_name,
        ];
        $med_note = new \App\Med_note($med_note);
        $med_note->save();

        $response = ['success'=>true, 'data'=>'Updated successfully'];
        return response()->json($response, 201);
    }

    public function getAppointment(Request $request, $patient_id, $doctor_id)
    {   
        $status = 1;
        $appointment = Doctorbookappointment::where([['patient_id', $patient_id], ['doc_id', $doctor_id]])->get()->first();

        $response = ['success'=>true, 'data'=>$appointment];
        return response()->json($response, 201);
    }

    public function endAppointment(Request $request, $patient_id, $doctor_id, $appointment_id)
    {   
        $status = 1;
        $appointment = Doctorbookappointment::where([['patient_id', $patient_id], ['doc_id', $doctor_id], ['id', $appointment_id]])->get()->first();
        $appointment->status = 2;
        $appointment->save();

        $appointmentPayment = Doctorbookappointmentpayment::where([['patient_id', $patient_id], ['doc_id', $doctor_id], ['appointment_id', $appointment_id]])->get()->first();
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

        $account = DB::table('doctorbookappointmentpayments')
            ->join('doctorbookappointments', 'doctorbookappointmentpayments.appointment_id', '=', 'doctorbookappointments.id')
            ->select('doctorbookappointmentpayments.*', 'doctorbookappointments.*')
            ->where('doctorbookappointmentpayments.doc_id', '=', $id)
            ->paginate(10);

        // return $result;
        $response = ['success'=>true, 'data'=>$account];
        return response()->json($response, 201);
    }

}
