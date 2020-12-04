<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

use App\Patients;
use App\Doctors;
use App\Ports;
use App\Pharmacies;
use App\Labs;
use App\Hospitals;
use App\Sharedmedrecords;
use App\Sharedmedrecordsport;
use App\Sharedmedprescription;
use App\Sharedmedlabtest;

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
use App\Countries;

use App\Labtests;
use App\Labbookappointment;
use App\Labbookappointmentpayment;
use App\Labresult;

use App\Portbookappointment;
use App\Portbookappointmentpayment;

use App\Product;
use App\Productcart;

// namespace App\Http\Controllers;
// use Illuminate\Http\Request;
// use App\User;
use JWTAuth;
use JWTAuthException;

use Illuminate\Support\Facades\Validator;
use App\Sanitizes\Sanitizes;

class PatientsController2 extends Controller
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
        $patients = Patients::paginate(10);
        // return $result;
        $response = ['success'=>true, 'data'=>$patients];
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
        // return config('global.file_path');
        //
        $patient_data = Patients::where('id', '=', $id)->first();

        // return $patient_data;

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



        $response = ['success'=>true, 'data'=>[
            'auth_token'=>$patient_data->auth_token,
            'id'=>$patient_data->id,
            'username'=>$patient_data->username,
            'first_name'=>$patient_data->first_name,
            'last_name'=>$patient_data->last_name, 
            'middle_name'=>$patient_data->middle_name, 
            'email'=>$patient_data->email, 
            'zip_code'=>$patient_data->zip_code, 
            'telephone'=>$patient_data->telephone, 
            'title'=>$patient_data->title, 
            'gender'=>$patient_data->gender, 
            'dob'=>$patient_data->dob, 
            'nationality'=>$patient_data->nationality, 
            'country_of_residence'=>$patient_data->country_of_residence, 
            'district_province_state'=>$patient_data->district_province_state, 
            'contact_address'=>$patient_data->contact_address,
            'height'=>$patient_data->height,
            'weight'=>$patient_data->weight, 

            'disability_none'       =>$disability_none,
            'disability_hearing'    =>$disability_hearing,
            'disability_mobility'   =>$disability_mobility,
            'disability_sight'      =>$disability_sight,
            'disability_learning'   =>$disability_learning, 
            'disability_others'     =>$disability_others, 

            'next_kin_name'=>$patient_data->next_kin_name, 
            'next_kin_relationship'=>$patient_data->next_kin_relationship, 
            'next_kin_occupation'=>$patient_data->next_kin_occupation, 
            'next_kin_phone'=>$patient_data->next_kin_phone, 
            'next_kin_email'=>$patient_data->next_kin_email, 
            'profile_picture'=>$patient_data->profile_picture, 

            'allow_patient_update_med'=>$patient_data->allow_patient_update_med,
            'status'=>$patient_data->status, 
            'created_at'=>$patient_data->created_at
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
        // return $request;
        $validator  = Validator::make($request->all(), [ 
            'first_name'    => 'required|string|max:255', 
            'last_name'     => 'required|string|max:255', 
            'middle_name'   => 'nullable|string|max:255', 
            'zip_code'      => 'required|string|max:255', 
            'telephone'     => 'required|string|max:255', 
            'gender'        => 'integer|max:255', 
            'gender_others' => 'nullable|max:255', 
            'dob'           => 'string|max:255', 
            'nationality'   => 'required|string|max:255', 
            'country_of_residence'      => 'required|string|max:255', 
            'district_province_state'   => 'required|string|max:255', 
            'contact_address'           => 'required|string|max:65000', 
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
            return response()->json($response, 201);
        }

        // Find user with that id
        $patient_data = Patients::where('id', '=', $id)->first();

        $patient_data->first_name    = Sanitizes::my_sanitize_string( $request->first_name);
        $patient_data->last_name     = Sanitizes::my_sanitize_string( $request->last_name);
        $patient_data->middle_name   = Sanitizes::my_sanitize_string( $request->middle_name);
        $patient_data->zip_code      = Sanitizes::my_sanitize_string( $request->zip_code);
        $patient_data->telephone     = Sanitizes::my_sanitize_string( $request->telephone);
        $patient_data->gender        = Sanitizes::my_sanitize_string( $request->gender);
        $patient_data->gender_others = Sanitizes::my_sanitize_string( $request->gender_others);
        $patient_data->dob           = Sanitizes::my_sanitize_string( $request->dob);
        $patient_data->nationality   = Sanitizes::my_sanitize_string( $request->nationality);
        $patient_data->country_of_residence     = Sanitizes::my_sanitize_string( $request->country_of_residence);
        $patient_data->district_province_state  = Sanitizes::my_sanitize_string( $request->district_province_state);
        $patient_data->contact_address          = Sanitizes::my_sanitize_string( $request->contact_address);
        $patient_data->height                   = Sanitizes::my_sanitize_string( $request->height);
        $patient_data->weight                   = Sanitizes::my_sanitize_string( $request->weight);
        $disability_none       = Sanitizes::my_sanitize_string( $request->disability_none);
        $disability_hearing    = Sanitizes::my_sanitize_string( $request->disability_hearing);
        $disability_mobility   = Sanitizes::my_sanitize_string( $request->disability_mobility);
        $disability_sight      = Sanitizes::my_sanitize_string( $request->disability_sight);
        $disability_learning   = Sanitizes::my_sanitize_string( $request->disability_learning);
        $disability_others     = Sanitizes::my_sanitize_string( $request->disability_others);
        $patient_data->next_kin_name         = Sanitizes::my_sanitize_string( $request->next_kin_name);
        $patient_data->next_kin_relationship = Sanitizes::my_sanitize_string( $request->next_kin_relationship);
        $patient_data->next_kin_occupation   = Sanitizes::my_sanitize_string( $request->next_kin_occupation);
        $patient_data->next_kin_phone        = Sanitizes::my_sanitize_string( $request->next_kin_phone);
        $patient_data->next_kin_email        = Sanitizes::my_sanitize_string( $request->next_kin_email);

        // get each disability, pass as an array into a variable and merge into a single variable called disabilities
        $disabilities = array(["disability_none" => $disability_none, "disability_hearing" => $disability_hearing, "disability_mobility" => $disability_mobility, "disability_sight" => $disability_sight, "disability_learning" => $disability_learning, "disability_others" => $disability_others]);

        $patient_data->disabilities = Sanitizes::my_sanitize_string( $disabilities);
        
        $patient_data->save();

        // merge $disabilities into the request been sent to the db
        // $request->merge(array('disabilities' => ($disabilities)));

        // Remove each disabilities from the array of request so am sending only disability into the db 
        // $request->replace($request->except('disability_none'));
        // $request->replace($request->except('disability_hearing'));
        // $request->replace($request->except('disability_mobility'));
        // $request->replace($request->except('disability_sight'));
        // $request->replace($request->except('disability_learning'));
        // $request->replace($request->except('disability_others'));
        
        // $patient_data->update($request->all());
        $response = ['success'=>true, 'data'=>$patient_data];
        return response()->json($response, 201);
    }

    public function updateMedHis(Request $request, $id)
    {   
        // return $request;
        // $patient_data = Patients::find($id);
        // $patient_data->first_name = $request->first_name;
        // $patient_data->save();
        // $response = ['success'=>true, 'data'=>$patient_data];
        // return response()->json($response, 201);

        // Find user with that id
        $patient_data = Patients::where('id', '=', $id)->first();

        // return $patient_data;
        
        $patient_data->update($request->all());
        $response = ['success'=>true, 'data'=>$patient_data];
        
        return response()->json($response, 201);
    }

    // upload/update applicant's identity pdf
    public function updateProfilePicture(Request $request, $id) {
        // return $request;
        $validator = Validator::make($request->all(), [ 
            'profile_picture' => 'mimes:pdf,jpeg,png,jpg|max:512'
        ]);

        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 201);
        }
        
        // get the user_id to update
        $patient_data = Patients::where('id', '=', $id)->first();

        // get the file from the request and concartinate time with the name
        $file = $request->file('profile_picture');

        $fileName = time().'.'.$file->getClientOriginalName();
        $fileName = $id."-".time().".jpg";

        // return $file;

        // Path where the file will be saved
        $path = config('global.file_path1') . 'profile_pictures/'.$id;
        $destinationPath = public_path().$path;
        // return $destinationPath;
  
        // This moved file to server folder
        $file->move($destinationPath,$fileName);

        // save file name in database
        $patient_data->profile_picture = config('global.file_path2') . "profile_pictures/".$id."/".$fileName;
        // for online
        // $patient_data->profile_picture = "/dashboard/public/images/uploads/profile_pictures/".$id."/".$fileName;
        $patient_data->save();

        // return response
        $response = ['success'=>true, 'data'=>$patient_data];
        return response()->json($response, 201);
    }

    public function shareMedHistoryDoc(Request $request, $id)
    {   
        // return $request;
        $validator  = Validator::make($request->all(), [ 
            'share_med_history_doc' => 'required|string|max:255', 
        ]);

        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 201);
        }
        // doctor's username
        $share_med_history = Sanitizes::my_sanitize_string( $request->share_med_history_doc);

        // Get doctor's id from username
        $doc_data   = Doctors::where('username', '=', $share_med_history)->first();
        if($doc_data){
            $doc_id     = $doc_data->id;
            $doc_username   = $doc_data->username;
            $doc_first_name = $doc_data->first_name;
            $doc_last_name  = $doc_data->last_name;
            $doc_area_of_specialization    = $doc_data->area_of_specialization;

            // Get patients details
            $patient_data       = Patients::where('id', '=', $id)->first();
            $patient_username   = $patient_data->username;
            $patient_first_name = $patient_data->first_name;
            $patient_last_name  = $patient_data->last_name;
            $patient_middle_name= $patient_data->middle_name;

            // check if doctor and patient already exist if it doesn't exist save it
            $exist = \App\Sharedmedrecords::where([['patient_id', $id], ['doc_id', $doc_id]])->get()->first();
            
            if($exist){
                $response = ['success'=>false, 'data'=>"Record already shared"];
                return response()->json($response, 201);
            }else{
                $payload = [
                    'patient_id'        =>$id,
                    'doc_id'            =>$doc_id,
                    'doc_username'      =>$doc_username,
                    'doc_first_name'    =>$doc_first_name,
                    'doc_last_name'     =>$doc_last_name,
                    'doc_area_of_specialization' =>$doc_area_of_specialization,

                    'patient_username'       =>$patient_username,
                    'patient_first_name'     =>$patient_first_name,
                    'patient_last_name'      =>$patient_last_name,
                    'patient_middle_name'    =>$patient_middle_name,
                ];
                        
                $shared = new \App\Sharedmedrecords($payload);
                if ($shared->save())
                {
                    $response = ['success'=>true, 'data'=>"Record sent successfully to doctor"];
                    return response()->json($response, 201);
                }
            }
        }else{
            $response = ['success'=>false, 'data'=>"Record not shared, please make sure username is correct"];
            return response()->json($response, 201);
        }
    }

    public function shareMedHistoryPort(Request $request, $id)
    {   
        // return $request;
        $validator  = Validator::make($request->all(), [ 
            'share_med_history_port' => 'required|string|max:255', 
        ]);

        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 201);
        }

        // doctor or port's username
        $share_med_history = Sanitizes::my_sanitize_string( $request->share_med_history_port);

        // Get port's id from username
        $port_data  = Ports::where('username', '=', $share_med_history)->first();
        if($port_data){
            $port_id    = $port_data->id;
            $port_username   = $port_data->username;
            $port_name       = $port_data->name;

            // Get patients details
            $patient_data       = Patients::where('id', '=', $id)->first();
            $patient_username   = $patient_data->username;
            $patient_first_name = $patient_data->first_name;
            $patient_last_name  = $patient_data->last_name;
            $patient_middle_name= $patient_data->middle_name;

            // check if port and patient already exist if it doesn't exist save it
            $exist = \App\Sharedmedrecordsport::where([['patient_id', $id], ['port_id', $port_id]])->get()->first();
            
            if($exist){
                $response = ['success'=>false, 'data'=>"Record already shared"];
                return response()->json($response, 201);
            }else{

                $payload = [
                    'patient_id' =>$id,
                    'port_id'    =>$port_id,
                    'port_username'   =>$port_username,
                    'port_name'       =>$port_name,
                    
                    'patient_username'       =>$patient_username,
                    'patient_first_name'     =>$patient_first_name,
                    'patient_last_name'      =>$patient_last_name,
                    'patient_middle_name'    =>$patient_middle_name,
                ];
                        
                $shared = new \App\Sharedmedrecordsport($payload);
                if ($shared->save())
                {
                    $response = ['success'=>true, 'data'=>"Record sent successfully to port"];
                    return response()->json($response, 201);
                }
            }
        }else{
            $response = ['success'=>false, 'data'=>"Record not shared, please make sure username is correct"];
            return response()->json($response, 201);
        }
        
    }

    public function SharedMedRecDoc($id)
    {   
        $sharedList = Sharedmedrecords::where('patient_id', '=', $id)->paginate(10);

        // return $result;
        $response = ['success'=>true, 'data'=>$sharedList];
        return response()->json($response, 201);
        
    }

    public function SharedMedRecPort($id)
    {   
        $sharedList = Sharedmedrecordsport::where('patient_id', '=', $id)->paginate(10);

        // return $result;
        $response = ['success'=>true, 'data'=>$sharedList];
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

    public function patientMedRec($patient_id)
    {   
        
        $patient_data           = Patients::where('id', '=', $patient_id)->first();
        $med_currently_using    = Medicationscurrentlyusing::where('patient_id', $patient_id)->get()->all();
        $med_allergies          = Med_allergies::where('patient_id', $patient_id)->get()->all();
        $med_blood_group        = Med_blood_group::where('patient_id', $patient_id)->get()->all();
        $med_diabetic           = Med_diabetic::where('patient_id', $patient_id)->get()->all();
        $med_family_medical_history = Med_family_medical_history::where('patient_id', $patient_id)->get()->all();
        $med_hypertensive           = Med_hypertensive::where('patient_id', $patient_id)->get()->all();
        $med_lab_test               = Med_lab_test::where('patient_id', $patient_id)->get()->all();
        $med_note                   = Med_note::where('patient_id', $patient_id)->get()->all();
        $med_prescription           = Med_prescription::where('patient_id', $patient_id)->get()->all();
        $med_underlying_conditions  = Med_underlying_conditions::where('patient_id', $patient_id)->get()->all();

        $response = ['success'=>true, 
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
        
    }

    public function patientMedRecUpdate(Request $request, $patient_id)
    {   
        // return $request;
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

        $patient_data = Patients::where('id', '=', $patient_id)->first();

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

        $allow_patient_update_med = $patient_data->allow_patient_update_med;
        if($allow_patient_update_med == 1){
            // /////////////////////////////////////////////////////////////////////////
            $medicationscurrentlyusing = [
                'medications'   =>$med_currently_using,
                'patient_id'    =>$patient_id,
                'doc_username'  =>"Patient",
            ];
            $medicationscurrentlyusing = new \App\Medicationscurrentlyusing($medicationscurrentlyusing);
            $medicationscurrentlyusing->save();
            
            // //////////////////////////////////////////////////////////////////////
            $med_allergies = [
                'allergies'     =>$med_allergies,
                'patient_id'    =>$patient_id,
                'doc_username'  =>"Patient",
            ];
            $med_allergies = new \App\Med_allergies($med_allergies);
            $med_allergies->save();

            // ///////////////////////////////////////////////////////////////////////
            $med_blood_group = [
                'blood_group'   =>$med_blood_group,
                'patient_id'    =>$patient_id,
                'doc_username'  =>"Patient",
            ];
            $med_blood_group = new \App\Med_blood_group($med_blood_group);
            $med_blood_group->save();

            // ///////////////////////////////////////////////////////////////////////
            $med_underlying_conditions = [
                'underlying_conditions'   =>$med_underlying_conditions,
                'patient_id'    =>$patient_id,
                'doc_username'  =>"Patient",
            ];
            $med_underlying_conditions = new \App\Med_underlying_conditions($med_underlying_conditions);
            $med_underlying_conditions->save();

            // ///////////////////////////////////////////////////////////////////////
            $med_family_medical_history = [
                'family_medical_history'   =>$med_family_medical_history,
                'patient_id'    =>$patient_id,
                'doc_username'  =>"Patient",
            ];
            $med_family_medical_history = new \App\Med_family_medical_history($med_family_medical_history);
            $med_family_medical_history->save();

            // ///////////////////////////////////////////////////////////////////////
            $med_hypertensive = [
                'hypertensive'  =>$med_hypertensive,
                'patient_id'    =>$patient_id,
                'doc_username'  =>"Patient",
            ];
            $med_hypertensive = new \App\Med_hypertensive($med_hypertensive);
            $med_hypertensive->save();

            // ///////////////////////////////////////////////////////////////////////
            $med_diabetic = [
                'diabetic'   =>$med_diabetic,
                'patient_id'    =>$patient_id,
                'doc_username'  =>"Patient",
            ];
            $med_diabetic = new \App\Med_diabetic($med_diabetic);
            $med_diabetic->save();

            // ///////////////////////////////////////////////////////////////////////
            $med_prescription = [
                'prescription'  =>$med_prescription,
                'patient_id'    =>$patient_id,
                'doc_username'  =>"Patient",
            ];
            $med_prescription = new \App\Med_prescription($med_prescription);
            $med_prescription->save();

            // ///////////////////////////////////////////////////////////////////////
            $med_lab_test = [
                'lab_test'      =>$med_lab_test,
                'patient_id'    =>$patient_id,
                'doc_username'  =>"Patient",
            ];
            $med_lab_test = new \App\Med_lab_test($med_lab_test);
            $med_lab_test->save();

            // ///////////////////////////////////////////////////////////////////////
            $med_note = [
                'note'          =>$med_note,
                'patient_id'    =>$patient_id,
                'doc_username'  =>"Patient",
            ];
            $med_note = new \App\Med_note($med_note);
            $med_note->save();

            $patient_data->allow_patient_update_med = 0;
            $patient_data->save();

            $response = ['success'=>true, 'data'=>'Updated successfully'];
            return response()->json($response, 201);
        }else{
            $response = ['success'=>false, 'data'=>'Medical update not allowed'];
            return response()->json($response, 201);
        }

        
    }

    public function sharePrescription(Request $request, $id)
    {   
        // return $request;
        $validator  = Validator::make($request->all(), [ 
            'share_presecription'       => 'required|string|max:255', 
            'prescription_id'           => 'required|integer|max:255', 
            'prescription_doc_username' => 'required|string|max:255', 
        ]);

        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 201);
        }

        $pharmacy_username  = Sanitizes::my_sanitize_string($request->share_presecription);
        $prescription_id    = Sanitizes::my_sanitize_string($request->prescription_id);
        $doc_username       = Sanitizes::my_sanitize_string($request->prescription_doc_username);

        // Get pharmacy details from username
        $pharmacy_data      = Pharmacies::where('username', '=', $pharmacy_username)->first();
        $pharmacy_id        = $pharmacy_data->id;
        $pharmacy_username  = $pharmacy_data->username;
        $pharmacy_name      = $pharmacy_data->name;

        // Get patients details
        $patient_data       = Patients::where('id', '=', $id)->first();
        $patient_username   = $patient_data->username;
        $patient_first_name = $patient_data->first_name;
        $patient_last_name  = $patient_data->last_name;
        $patient_middle_name= $patient_data->middle_name;

        // check if port and patient already exist if it doesn't exist save it
        $exist = \App\Sharedmedprescription::where([['patient_id', $id], ['pharmacy_username', $pharmacy_username]])->get()->first();
        
        if($exist){
            $response = ['success'=>false, 'data'=>"Record already shared"];
            return response()->json($response, 201);
        }else{

            $payload = [
                'prescription_id'   =>$prescription_id,
                'doc_username'      =>$doc_username,
                'patient_id'        =>$id, 
                'pharmacy_id'       =>$pharmacy_id, 
                'pharmacy_username' =>$pharmacy_username, 
                'pharmacy_name'     =>$pharmacy_name,
                
                'patient_username'       =>$patient_username,
                'patient_first_name'     =>$patient_first_name,
                'patient_last_name'      =>$patient_last_name,
                'patient_middle_name'    =>$patient_middle_name,
            ];
                    
            $shared = new \App\Sharedmedprescription($payload);
            if ($shared->save())
            {
                $response = ['success'=>true, 'data'=>"Record sent successfully to pharmacy"];
                return response()->json($response, 201);
            }
        }
    }

    public function SharedPrescriptions($id)
    {   
        $sharedList = Sharedmedprescription::where('patient_id', '=', $id)->paginate(10);

        // return $result;
        $response = ['success'=>true, 'data'=>$sharedList];
        return response()->json($response, 201);
        
    }

    public function shareLabTest(Request $request, $id)
    {   
        // return $request;
        $validator  = Validator::make($request->all(), [ 
            'share_lab_test'       => 'required|string|max:255', 
            'lab_test_id'           => 'required|integer|max:255', 
            'lab_test_doc_username' => 'required|string|max:255', 
        ]);

        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 201);
        }

        $lab_username   = Sanitizes::my_sanitize_string($request->share_lab_test);
        $lab_test_id    = Sanitizes::my_sanitize_string($request->lab_test_id);
        $doc_username   = Sanitizes::my_sanitize_string($request->lab_test_doc_username);

        // Get pharmacy details from username
        $lab_data      = Labs::where('username', '=', $lab_username)->first();
        $lab_id        = $lab_data->id;
        $lab_username  = $lab_data->username;
        $lab_name      = $lab_data->name;

        // Get patients details
        $patient_data       = Patients::where('id', '=', $id)->first();
        $patient_username   = $patient_data->username;
        $patient_first_name = $patient_data->first_name;
        $patient_last_name  = $patient_data->last_name;
        $patient_middle_name= $patient_data->middle_name;

        // check if port and patient already exist if it doesn't exist save it
        $exist = \App\Sharedmedlabtest::where([['patient_id', $id], ['lab_username', $lab_username]])->get()->first();
        
        if($exist){
            $response = ['success'=>false, 'data'=>"Record already shared"];
            return response()->json($response, 201);
        }else{

            $payload = [
                // id of the test the doctor created the patient should take
                'lab_test_id'  =>$lab_test_id,
                'doc_username' =>$doc_username,
                'patient_id'   =>$id, 
                'lab_id'       =>$lab_id, 
                'lab_username' =>$lab_username, 
                'lab_name'     =>$lab_name,
                
                'patient_username'       =>$patient_username,
                'patient_first_name'     =>$patient_first_name,
                'patient_last_name'      =>$patient_last_name,
                'patient_middle_name'    =>$patient_middle_name,
            ];
                    
            $shared = new \App\Sharedmedlabtest($payload);
            if ($shared->save())
            {
                $response = ['success'=>true, 'data'=>"Record sent successfully to laboratory"];
                return response()->json($response, 201);
            }
        }
    }

    public function SharedLabTests($id)
    {   
        $sharedList = Sharedmedlabtest::where('patient_id', '=', $id)->paginate(10);

        // return $result;
        $response = ['success'=>true, 'data'=>$sharedList];
        return response()->json($response, 201);
        
    }

    public function doctorList($hospital_id)
    {
        $doctors = Doctors::where('status', '=', 1)->paginate(10);
        // return $result;
        $response = ['success'=>true, 'data'=>$doctors];
        return response()->json($response, 201);
    }

    public function hospitalDoctorList($hospital_id)
    {
        //
        $hospitals = Doctors::where([['hospital', $hospital_id], ['status', 1]])->paginate(10);
        // return $result;
        $response = ['success'=>true, 'data'=>$hospitals];
        return response()->json($response, 201);
    }

    public function viewDoctor($doctor_id, $patient_id)
    {   
        $doctor_data = Doctors::where([['id', $doctor_id], ['status', 1]])->first();

        $response = ['success'=>true, 'doctor_data'=> $doctor_data ];
        return response()->json($response, 201);
    }

    public function getDocAppointments($patient_id)
    {   
        $appointment_data = Doctorbookappointment::where('patient_id', '=', $patient_id)->paginate(10);

        $response = ['success'=>true, 'data'=> $appointment_data ];
        return response()->json($response, 201);
    }

    public function bookDocAppointment(Request $request, $doctor_id, $patient_id)
    {   
        // return $request;
        $validator  = Validator::make($request->all(), [  
            'date'      => 'required|string|max:255', 
            'time'      => 'required|string|max:255', 
            'time_zone' => 'required|string|max:255', 
            'subject'   => 'required|string|max:255', 
            'message'   => 'required|string|max:65000', 
        ]);

        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 201);
        }

        $date       = Sanitizes::my_sanitize_string( $request->date );
        $time       = Sanitizes::my_sanitize_string( $request->time );
        $time_zone  = Sanitizes::my_sanitize_string( $request->time_zone );
        $subject    = Sanitizes::my_sanitize_string( $request->subject );
        $message    = Sanitizes::my_sanitize_string( $request->message );

        $billing_amount_currency        = $request->billing_amount_currency;
        $billing_amount_value           = $request->billing_amount_value;
        $billing_doctor_fee             = $request->billing_doctor_fee;
        $billing_country_handling_fee   = $request->billing_country_handling_fee;
        $billing_email_address          = $request->billing_email_address;
        $billing_name                   = $request->billing_name;
        $billing_orderID                = $request->billing_orderID;
        $billing_payerID                = $request->billing_payerID;

        $doc_data       = Doctors::where('id', '=', $doctor_id)->first();
        $doc_username   = $doc_data->username;
        $doc_first_name = $doc_data->first_name;
        $doc_last_name  = $doc_data->last_name;
        $doc_middle_name = $doc_data->middle_name;

        // Get patients details
        $patient_data       = Patients::where('id', '=', $patient_id)->first();
        $patient_username   = $patient_data->username;
        $patient_first_name = $patient_data->first_name;
        $patient_last_name  = $patient_data->last_name;
        $patient_middle_name= $patient_data->middle_name;

        $payload = [
            // id of the test the doctor created the patient should take
            'date'      =>$date,
            'time'      =>$time,
            'time_zone' =>$time_zone,
            'subject'   =>$subject, 
            'message'   =>$message, 

            'doc_id'            =>$doctor_id, 
            'doc_username'      =>$doc_username,
            'doc_first_name'    =>$doc_first_name,
            'doc_last_name'     =>$doc_last_name,
            'doc_middle_name'   =>$doc_middle_name,
            
            'patient_id'            =>$patient_id,
            'patient_username'      =>$patient_username,
            'patient_first_name'    =>$patient_first_name,
            'patient_last_name'     =>$patient_last_name,
            'patient_middle_name'   =>$patient_middle_name,
        ];
                
        $appointment = new \App\Doctorbookappointment($payload);
        if ($appointment->save())
        {
            // $response = ['success'=>true, 'data'=>[
            //     'last_inserted_id'=>$products->id,
            // ]];        
            $paymentDetails = [
                'appointment_id'                =>$appointment->id,
                'doc_id'                        =>$doctor_id,
                'patient_id'                    =>$patient_id,
                'billing_amount_currency'       =>$billing_amount_currency,
                'billing_amount_value'          =>$billing_amount_value,
                'billing_doctor_fee'            =>$billing_doctor_fee,
                'billing_country_handling_fee'  =>$billing_country_handling_fee,
                'billing_email_address'         =>$billing_email_address,
                'billing_name'                  =>$billing_name,
                'billing_orderID'               =>$billing_orderID,
                'billing_payerID'               =>$billing_payerID,
            ];
            $appointmentPayment = new \App\Doctorbookappointmentpayment($paymentDetails);
            if($appointmentPayment->save()){
                $response = ['success'=>true, 'data'=>"Appointment booked successfully"];
                return response()->json($response, 201);
            }
        }
        else
            $response = ['success'=>false, 'data'=>'Appointment booking failed'];
            return response()->json($response, 201);
    }

    public function getDocFee($doctor_id, $patient_id)
    {   
        $doctor_data = Doctors::where('id', '=', $doctor_id)->first();
        $doctor_fee  = $doctor_data->consultation_fee;
        $doctor_country = $doctor_data->country_of_residence;

        // check where country is equal to doctor's country and then get the handling fee
        $country_data = Countries::where('name', '=', $doctor_country)->first();
        $country_handling_fee = $country_data->doctor_handling_fee;

        $handling_fee           = $doctor_fee * ($country_handling_fee / 100);
        $total_fee              = $handling_fee + $doctor_fee;

        $response = ['success'=>true, 
            'doctor_fee'            => $doctor_fee,
            'country_handling_fee'  => $handling_fee,
            'total_fee'             => $total_fee,
        ];

        return response()->json($response, 201);
    }

    public function labList()
    {
        //
        $labs = Labs::where('status', '=', 1)->paginate(10);
        // return $result;
        $response = ['success'=>true, 'data'=>$labs];
        return response()->json($response, 201);
    }

    public function viewLab($lab_id, $patient_id)
    {   
        $lab_data = Labs::where([['id', $lab_id], ['status', 1]])->first();

        $response = ['success'=>true, 'lab_data'=> $lab_data ];
        return response()->json($response, 201);
    }

    public function getLabFee($lab_id, $test_id, $patient_id)
    {   
        $lab_data = Labs::where('id', '=', $lab_id)->first();
        $lab_country = $lab_data->country;

        $test_data = Labtests::where('id', '=', $test_id)->first();
        $test_price = $test_data->price;

        // check where country is equal to lab's country and then get the handling fee
        $country_data = Countries::where('name', '=', $lab_country)->first();
        $country_handling_fee = $country_data->lab_handling_fee;

        $handling_fee   = $test_price * ($country_handling_fee / 100);
        $total_fee      = $handling_fee + $test_price;

        $response = ['success'=>true, 
            'test_fee'              => $test_price,
            'country_handling_fee'  => $handling_fee,
            'total_fee'             => $total_fee,
        ];

        return response()->json($response, 201);
    }

    public function bookTestAppointment(Request $request, $lab_id, $test_id, $patient_id)
    {   
        // return $request;
        $validator  = Validator::make($request->all(), [  
            'date'      => 'required|string|max:255', 
            'time'      => 'required|string|max:255', 
            'time_zone' => 'required|string|max:255', 
            'subject'   => 'required|string|max:255', 
            'message'   => 'required|string|max:65000', 
        ]);

        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 201);
        }

        $date       = Sanitizes::my_sanitize_string( $request->date );
        $time       = Sanitizes::my_sanitize_string( $request->time );
        $time_zone  = Sanitizes::my_sanitize_string( $request->time_zone );
        $subject    = Sanitizes::my_sanitize_string( $request->subject );
        $message    = Sanitizes::my_sanitize_string( $request->message );

        $billing_amount_currency        = $request->billing_amount_currency;
        $billing_amount_value           = $request->billing_amount_value;
        $billing_test_fee               = $request->billing_test_fee;
        $billing_country_handling_fee   = $request->billing_country_handling_fee;
        $billing_email_address          = $request->billing_email_address;
        $billing_name                   = $request->billing_name;
        $billing_orderID                = $request->billing_orderID;
        $billing_payerID                = $request->billing_payerID;

        // Get lab details from username
        $lab_data       = Labs::where('id', '=', $lab_id)->first();
        $lab_username   = $lab_data->username;
        $lab_name       = $lab_data->name;

        // Get patients details
        $patient_data       = Patients::where('id', '=', $patient_id)->first();
        $patient_username   = $patient_data->username;
        $patient_first_name = $patient_data->first_name;
        $patient_last_name  = $patient_data->last_name;
        $patient_middle_name= $patient_data->middle_name;

        $payload = [
            // id of the test the doctor created the patient should take
            'date'      =>$date,
            'time'      =>$time,
            'time_zone' =>$time_zone,
            'subject'   =>$subject, 
            'message'   =>$message, 

            'test_id'       =>$test_id, 
            'lab_id'        =>$lab_id, 
            'lab_username'  =>$lab_username,
            'lab_name'      =>$lab_name,
            
            'patient_id'            =>$patient_id,
            'patient_username'      =>$patient_username,
            'patient_first_name'    =>$patient_first_name,
            'patient_last_name'     =>$patient_last_name,
            'patient_middle_name'   =>$patient_middle_name,
        ];
                
        $appointment = new \App\Labbookappointment($payload);
        if ($appointment->save())
        {
            // $response = ['success'=>true, 'data'=>[
            //     'last_inserted_id'=>$products->id,
            // ]];        
            $paymentDetails = [
                'appointment_id'                =>$appointment->id,
                'lab_id'                        =>$lab_id,
                'test_id'                       =>$test_id,
                'patient_id'                    =>$patient_id,
                'billing_amount_currency'       =>$billing_amount_currency,
                'billing_amount_value'          =>$billing_amount_value,
                'billing_test_fee'              =>$billing_test_fee,
                'billing_country_handling_fee'  =>$billing_country_handling_fee,
                'billing_email_address'         =>$billing_email_address,
                'billing_name'                  =>$billing_name,
                'billing_orderID'               =>$billing_orderID,
                'billing_payerID'               =>$billing_payerID,
            ];
            $appointmentPayment = new \App\Labbookappointmentpayment($paymentDetails);
            if($appointmentPayment->save()){
                $response = ['success'=>true, 'data'=>"Appointment booked successfully"];
                return response()->json($response, 201);
            }
        }
        else
            $response = ['success'=>false, 'data'=>'Appointment booking failed'];
            return response()->json($response, 201);
    }

    public function getLabAppointments($patient_id)
    {   
        $appointment_data = Labbookappointment::where('patient_id', '=', $patient_id)->paginate(10);

        $response = ['success'=>true, 'data'=> $appointment_data ];
        return response()->json($response, 201);
    }

    public function portList()
    {
        //
        $ports = Ports::where('status', '=', 1)->paginate(10);
        // return $result;
        $response = ['success'=>true, 'data'=>$ports];
        return response()->json($response, 201);
    }
    
    public function viewPort($port_id, $patient_id)
    {   
        $port_data = Ports::where([['id', $port_id], ['status', 1]])->first();

        $response = ['success'=>true, 'port_data'=> $port_data ];
        return response()->json($response, 201);
    }

    public function getPortAppointments($patient_id)
    {   
        $appointment_data = portbookappointment::where('patient_id', '=', $patient_id)->paginate(10);

        $response = ['success'=>true, 'data'=> $appointment_data ];
        return response()->json($response, 201);
    }

    public function getPortFee($port_id, $patient_id)
    {   
        $port_data = Ports::where('id', '=', $port_id)->first();
        $port_fee       = $port_data->consultation_fee;
        $port_country   = $port_data->country;

        // check where country is equal to port's country and then get the handling fee
        $country_data = Countries::where('name', '=', $port_country)->first();
        $country_handling_fee = $country_data->port_handling_fee;

        $handling_fee   = $port_fee * ($country_handling_fee / 100);
        $total_fee      = $handling_fee + $port_fee;

        $response = ['success'=>true, 
            'port_fee'              => $port_fee,
            'country_handling_fee'  => $handling_fee,
            'total_fee'             => $total_fee,
        ];

        return response()->json($response, 201);
    }

    public function bookPortAppointment(Request $request, $port_id, $patient_id)
    {   
        // return $request;
        $validator  = Validator::make($request->all(), [  
            'date'      => 'required|string|max:255', 
            'time'      => 'required|string|max:255', 
            'time_zone' => 'required|string|max:255', 
            'subject'   => 'required|string|max:255', 
            'message'   => 'required|string|max:65000', 
        ]);

        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 201);
        }

        $date       = Sanitizes::my_sanitize_string( $request->date );
        $time       = Sanitizes::my_sanitize_string( $request->time );
        $time_zone  = Sanitizes::my_sanitize_string( $request->time_zone );
        $subject    = Sanitizes::my_sanitize_string( $request->subject );
        $message    = Sanitizes::my_sanitize_string( $request->message );

        $billing_amount_currency        = $request->billing_amount_currency;
        $billing_amount_value           = $request->billing_amount_value;
        $billing_port_fee               = $request->billing_port_fee;
        $billing_country_handling_fee   = $request->billing_country_handling_fee;
        $billing_email_address          = $request->billing_email_address;
        $billing_name                   = $request->billing_name;
        $billing_orderID                = $request->billing_orderID;
        $billing_payerID                = $request->billing_payerID;

        // Get pharmacy details from username
        $port_data       = Ports::where('id', '=', $port_id)->first();
        $port_username   = $port_data->username;
        $port_name      = $port_data->name;

        // Get patients details
        $patient_data       = Patients::where('id', '=', $patient_id)->first();
        $patient_username   = $patient_data->username;
        $patient_first_name = $patient_data->first_name;
        $patient_last_name  = $patient_data->last_name;
        $patient_middle_name= $patient_data->middle_name;

        $payload = [
            // id of the test the doctor created the patient should take
            'date'      =>$date,
            'time'      =>$time,
            'time_zone' =>$time_zone,
            'subject'   =>$subject, 
            'message'   =>$message, 

            'port_id'           =>$port_id, 
            'port_username'     =>$port_username,
            'port_name'         =>$port_name,
            
            'patient_id'            =>$patient_id,
            'patient_username'      =>$patient_username,
            'patient_first_name'    =>$patient_first_name,
            'patient_last_name'     =>$patient_last_name,
            'patient_middle_name'   =>$patient_middle_name,
        ];
                
        $appointment = new \App\Portbookappointment($payload);
        if ($appointment->save())
        {
            // $response = ['success'=>true, 'data'=>[
            //     'last_inserted_id'=>$products->id,
            // ]];        
            $paymentDetails = [
                'appointment_id'                =>$appointment->id,
                'port_id'                       =>$port_id,
                'patient_id'                    =>$patient_id,
                'billing_amount_currency'       =>$billing_amount_currency,
                'billing_amount_value'          =>$billing_amount_value,
                'billing_port_fee'              =>$billing_port_fee,
                'billing_country_handling_fee'  =>$billing_country_handling_fee,
                'billing_email_address'         =>$billing_email_address,
                'billing_name'                  =>$billing_name,
                'billing_orderID'               =>$billing_orderID,
                'billing_payerID'               =>$billing_payerID,
            ];
            $appointmentPayment = new \App\Portbookappointmentpayment($paymentDetails);
            if($appointmentPayment->save()){
                $response = ['success'=>true, 'data'=>"Appointment booked successfully"];
                return response()->json($response, 201);
            }
        }
        else
            $response = ['success'=>false, 'data'=>'Appointment booking failed'];
            return response()->json($response, 201);
    }

    public function pharmaciesList()
    {
        //
        $pharmacies = Pharmacies::where('status', '=', 1)->paginate(10);
        // return $result;
        $response = ['success'=>true, 'data'=>$pharmacies];
        return response()->json($response, 201);
    }

    public function viewPharm($pharm_id, $patient_id)
    {   
        $pharm_data = Pharmacies::where([['id', $pharm_id], ['status', 1]])->first();

        $response = ['success'=>true, 'data'=> $pharm_data ];
        return response()->json($response, 201);
    }

    public function pharmaciesProducts($pharm_id)
    {   
        $products = DB::table('products')
            ->join('productcategories', 'products.category', '=', 'productcategories.id')
            ->select('products.*', 'productcategories.name AS catname')
            ->where([['products.pharm_id', $pharm_id], ['status', 1]])
            ->paginate(10);

        // $products = Product::where('pharm_id', '=', $pharm_id)->paginate(10);
        // return $result;
        $response = ['success'=>true, 'data'=>$products];
        return response()->json($response, 201);
    }

    public function viewProduct($product_id, $patient_id)
    {   
        // $product_data = Product::where('id', '=', $product_id)->first();
        $product_data = DB::table('products')
            ->join('productcategories', 'products.category', '=', 'productcategories.id')
            ->select('products.*', 'productcategories.name AS catname')
            ->where('products.id', '=', $product_id)
            ->first();

        $response = ['success'=>true, 'data'=> $product_data ];
        return response()->json($response, 201);
    }

    public function addToCart(Request $request, $patient_id) { 
        $product_id = $request->product_id;
        // $product_data = Product::where('id', '=', $product_id)->get()->first();
        $product_data = DB::table('products')
            ->join('productcategories', 'products.category', '=', 'productcategories.id')
            ->select('products.*', 'productcategories.name AS catname')
            ->where('products.id', '=', $product_id)
            ->first();

        $payload = [
            'product_id'    =>$product_id,
            'patient_id'    =>$patient_id,
            'pharm_id'      =>$product_data->pharm_id,
            'name'          =>$product_data->name,
            'description'   =>$product_data->description, 
            'dosage'        =>$product_data->dosage, 
            'category'      =>$product_data->catname, 
            'price'         =>$product_data->price,
            'product_image' =>$product_data->product_image,
        ];
                
        $productcart = new \App\Productcart($payload);
        if ($productcart->save())
        {
            $response = ['success'=>true, 'data'=>"Added to cart successfully"];
            return response()->json($response, 201);
        }else{
            $response = ['success'=>false, 'data'=>"Failed to add to cart"];
            return response()->json($response, 201);
        }

    }

    public function getCart($patient_id)
    {   
        $cart_data = Productcart::where([['patient_id', $patient_id], ['status', 1]])->count();

        $response = ['success'=>true, 'data'=> $cart_data ];
        return response()->json($response, 201);
    }

    public function getCartAll($patient_id)
    {   
        $cart_data = Productcart::where([['patient_id', $patient_id], ['status', 1]])->get()->all();
        $response = ['success'=>true, 'data'=> $cart_data ];
        return response()->json($response, 201);
    }

    public function updateProductQty(Request $request, $patient_id)
    {   
        // return $request;
        $cart_data = Productcart::where('id', '=', $request->item_id1)->first();
        $cart_data->qty = $request->qty;
        $cart_data->sub_total = $cart_data->price * $request->qty;

        if($cart_data->save()){
            $response = ['success'=>true, 'data'=> "Product updated" ];
            return response()->json($response, 201);
        }else{
            $response = ['success'=>false, 'data'=> "Product update failed" ];
            return response()->json($response, 201);
        }
    }

    public function checkout1($pharm_id, $patient_id)
    {   
        $cart_total     = Productcart::where([['patient_id', $patient_id], ['status', 1]])->sum("sub_total");
        // $cart_data = Productcart::where([['patient_id', $patient_id], ['status', 1]])->get()->all();
        $pharm_data     = Pharmacies::where('id', '=', $pharm_id)->first();
        $pharm_country  = $pharm_data->pharm_country;

        // check where country is equal to doctor's country and then get the handling fee
        $country_data           = Countries::where('name', '=', $pharm_country)->first();
        $country_handling_fee   = $country_data->pharm_handling_fee;

        $handling_fee   = $cart_total * ($country_handling_fee / 100);
        $total_fee      = $handling_fee + $cart_total;

        $response = ['success'=>true, 
            'cart_total'    => $cart_total,
            'handling_fee'  => $handling_fee,
            'total_fee'     => $total_fee,
        ];

        return response()->json($response, 201);
    }

    public function checkout2(Request $request, $pharm_id, $patient_id)
    {   
        // return $request;
        $billing_create_time        = $request->billing_create_time;
        $billing_update_time        = $request->billing_update_time;
        $billing_amount_currency    = $request->billing_amount_currency;
        $billing_amount_value       = $request->billing_amount_value;
        $billing_cart_total         = $request->billing_cart_total;
        $billing_handling_fee       = $request->billing_handling_fee;
        $billing_email_address      = $request->billing_email_address;
        $billing_name               = $request->billing_name;
        $billing_orderID            = $request->billing_orderID;
        $billing_payerID            = $request->billing_payerID;

        // Get pharmacy details from username
        $pharm_data     = Pharmacies::where('id', '=', $pharm_id)->first();
        $pharm_username = $pharm_data->username;
        $pharm_name     = $pharm_data->name;

        // Get patients details
        $patient_data       = Patients::where('id', '=', $patient_id)->first();
        $patient_username   = $patient_data->username;
        $patient_first_name = $patient_data->first_name;
        $patient_last_name  = $patient_data->last_name;
        $patient_middle_name= $patient_data->middle_name;

        $payload = [
            // id of the test the doctor created the patient should take
            'billing_create_time'       =>$billing_create_time,
            'billing_update_time'       =>$billing_update_time,
            'billing_amount_currency'   =>$billing_amount_currency,
            'billing_amount_value'      =>$billing_amount_value,
            'billing_cart_total'        =>$billing_cart_total,
            'billing_handling_fee'      =>$billing_handling_fee,
            'billing_email_address'     =>$billing_email_address,
            'billing_name'              =>$billing_name,
            'billing_orderID'           =>$billing_orderID,
            'billing_payerID'           =>$billing_payerID, 

            'pharm_id'              =>$pharm_id, 
            'pharm_username'        =>$pharm_username,
            'pharm_name'            =>$pharm_name,
            
            'patient_id'            =>$patient_id,
            'patient_username'      =>$patient_username,
            'patient_first_name'    =>$patient_first_name,
            'patient_last_name'     =>$patient_last_name,
            'patient_middle_name'   =>$patient_middle_name,
        ];
                
        $pharmorder = new \App\Pharmorder($payload);
        if ($pharmorder->save())
        {   
            $order_number = $pharmorder->id;
            $status = 2;
            DB::table('productcarts') 
            ->where([['patient_id', $patient_id], ['status', 1]])
            ->update([ 'pharmorder_no' => $order_number ]);
            DB::table('productcarts') 
            ->where([['patient_id', $patient_id], ['status', 1]])
            ->update([ 'status' => $status ]);

            $response = ['success'=>true, 'data'=>"Order successfully"];
            return response()->json($response, 201);
        }
        else
            $response = ['success'=>false, 'data'=>'Order failed'];
            return response()->json($response, 201);
    }

    public function hospitalList()
    {
        //
        $hospitals = Hospitals::where('status', '=', 1)->paginate(10);
        // return $result;
        $response = ['success'=>true, 'data'=>$hospitals];
        return response()->json($response, 201);
    }

    public function getLabResults($patient_id, $lab_id)
    {   
        $lab_result = Labresult::where([['patient_id', $patient_id], ['lab_id', $lab_id]])->paginate(10);

        $response = ['success'=>true, 'data'=> $lab_result ];
        return response()->json($response, 201);
    }

}
