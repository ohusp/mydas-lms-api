<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

use App\Doctors;
use App\Hospitals;
use App\Ports;
use App\Pharmacies;
use App\Labs;
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
use App\Portbookappointmentpayment;
use App\Labbookappointmentpayment;

// namespace App\Http\Controllers;
// use Illuminate\Http\Request;
// use App\User;
use JWTAuth;
use JWTAuthException;

use Illuminate\Support\Facades\Validator;
use App\Sanitizes\Sanitizes;

class AdminController2 extends Controller
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
    // //////////////////////////// PATIENTS ///////////////////////////////////////////////////////////
    public function patientsList()
    {   
        $patientslist = Patients::paginate(10);

        // return $result;
        $response = ['success'=>true, 'data'=>$patientslist];
        return response()->json($response, 201);
    }

    public function getPatient($patient_id)
    {   
        $status = 1;
        $patient = Patients::where('id', '=', $patient_id)->first();

        $response = ['success'=>true, 'data'=>$patient];
        return response()->json($response, 201);
    }

    public function patientMedRec($patient_id)
    {   
        $status = 1;

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
            
    }

    public function patientAppointments($patient_id)
    {   
        // $product_data = Product::where('id', '=', $product_id)->first();
        $account = DB::table('doctorbookappointmentpayments')
            ->join('doctorbookappointments', 'doctorbookappointmentpayments.appointment_id', '=', 'doctorbookappointments.id')
            ->select('doctorbookappointmentpayments.billing_amount_currency', 'doctorbookappointmentpayments.billing_amount_value', 'doctorbookappointmentpayments.billing_doctor_fee', 'doctorbookappointmentpayments.billing_payerID', 'doctorbookappointments.*')
            ->where('doctorbookappointmentpayments.patient_id', '=', $patient_id)
            ->paginate(10);

        // return $result;
        $response = ['success'=>true, 'data'=>$account];
        return response()->json($response, 201);
    }

    public function listDoctors()
    {   
        $doctorsList = Doctors::paginate(10);

        // return $result;
        $response = ['success'=>true, 'data'=>$doctorsList];
        return response()->json($response, 201);
    }

    public function getDoctor($doctor_id)
    {   
        $doctor = Doctors::where('id', '=', $doctor_id)->first();
        if($doctor->hospital == 0){
            $response = ['success'=>true, 'data'=>$doctor];
            return response()->json($response, 201);
        }else{
            $doctor = DB::table('doctors')
            ->join('hospitals', 'doctors.hospital', '=', 'hospitals.id')
            ->select('doctors.*', 'hospitals.name')
            ->where('doctors.id', '=', $doctor_id)
            ->first();

            $response = ['success'=>true, 'data'=>$doctor];
            return response()->json($response, 201);
        }
    }

    public function changeDocStatus($doctor_id)
    {
        $doctor_data = Doctors::where('id', '=', $doctor_id)->first();
        $status      = $doctor_data->status;
        if($status == 0){ 
            $doctor_data->status = 1;
            $doctor_data->save();
            $response = ['success'=>true, 'data'=>$doctor_data];
            return response()->json($response, 201);
        }
        if($status == 1){ 
            $doctor_data->status = 0;
            $doctor_data->save();
            $response = ['success'=>true, 'data'=>$doctor_data];
            return response()->json($response, 201);
        }
    }

    public function docAccount($id)
    {   
        $account = DB::table('doctorbookappointmentpayments')
            ->join('doctorbookappointments', 'doctorbookappointmentpayments.appointment_id', '=', 'doctorbookappointments.id')
            ->select('doctorbookappointmentpayments.id', 'doctorbookappointmentpayments.status', 'doctorbookappointmentpayments.billing_doctor_fee', 'doctorbookappointmentpayments.billing_amount_currency', 'doctorbookappointmentpayments.billing_orderID', 'doctorbookappointmentpayments.created_at', 
            'doctorbookappointments.doc_username', 'doctorbookappointments.patient_username', 'doctorbookappointments.patient_first_name', 'doctorbookappointments.patient_last_name', 'doctorbookappointments.patient_middle_name')
            ->where('doctorbookappointmentpayments.doc_id', '=', $id)
            ->paginate(10);

        // return $result;
        $response = ['success'=>true, 'data'=>$account];
        return response()->json($response, 201);
    }

    public function changeDocAccountStatus($account_id)
    {   
        $account_id;
        $account_data   = Doctorbookappointmentpayment::where('id', '=', $account_id)->first();
        $status         = $account_data->status;
        // return $status;
        if($status == 1){ 
            $account_data->status = 3;
            $account_data->save();
            $response = ['success'=>true, 'data'=>"Account updated"];
            return response()->json($response, 201);
        }
        if($status == 2){ 
            $account_data->status = 3;
            $account_data->save();
            $response = ['success'=>true, 'data'=>"Account updated"];
            return response()->json($response, 201);
        }
        if($status == 3){ 
            $account_data->status = 2;
            $account_data->save();
            $response = ['success'=>true, 'data'=>"Account updated"];
            return response()->json($response, 201);
        }
        // if($status == 1){ 
        //     $account_data->status = 0;
        //     $account_data->save();
        //     $response = ['success'=>true, 'data'=>$account_data];
        //     return response()->json($response, 201);
        // }
    }

    public function listHospitals()
    {   
        $doctorsList = Hospitals::paginate(10);

        // return $result;
        $response = ['success'=>true, 'data'=>$doctorsList];
        return response()->json($response, 201);
    }

    public function getHospital($hospital_id)
    {   
        $hospital_data   = Hospitals::where('id', '=', $hospital_id)->first();

        $response = ['success'=>true, 'data'=>$hospital_data];
        return response()->json($response, 201);
    }

    public function changeHospitalStatus($hospital_id)
    {
        $hospital_data = Hospitals::where('id', '=', $hospital_id)->first();
        $status      = $hospital_data->status;
        if($status == 0){ 
            $hospital_data->status = 1;
            $hospital_data->save();
            $response = ['success'=>true, 'data'=>$hospital_data];
            return response()->json($response, 201);
        }
        if($status == 1){ 
            $hospital_data->status = 0;
            $hospital_data->save();
            $response = ['success'=>true, 'data'=>$hospital_data];
            return response()->json($response, 201);
        }
    }

    public function getHospitalDoctors($hospital_id)
    {   
        $doctors = Doctors::where('hospital', '=', $hospital_id)->paginate(10);

        $response = ['success'=>true, 'data'=>$doctors];
        return response()->json($response, 201);   
    }

    public function listPorts()
    {   
        $portsList = Ports::paginate(10);

        // return $result;
        $response = ['success'=>true, 'data'=>$portsList];
        return response()->json($response, 201);
    }

    public function getPort($port_id)
    {   
        $port_data   = Ports::where('id', '=', $port_id)->first();

        $response = ['success'=>true, 'data'=>$port_data];
        return response()->json($response, 201);
    }

    public function portAccount($id)
    {   
        $account = DB::table('portbookappointmentpayments')
            ->join('portbookappointments', 'portbookappointmentpayments.appointment_id', '=', 'portbookappointments.id')
            ->select('portbookappointmentpayments.id', 'portbookappointmentpayments.status', 'portbookappointmentpayments.billing_port_fee', 'portbookappointmentpayments.billing_amount_currency', 'portbookappointmentpayments.billing_orderID', 'portbookappointmentpayments.created_at', 
            'portbookappointments.port_username', 'portbookappointments.patient_username', 'portbookappointments.patient_first_name', 'portbookappointments.patient_last_name', 'portbookappointments.patient_middle_name')
            ->where('portbookappointmentpayments.port_id', '=', $id)
            ->paginate(10);

        // return $result;
        $response = ['success'=>true, 'data'=>$account];
        return response()->json($response, 201);
    }

    public function changePortStatus($port_id)
    {
        $port_data = Ports::where('id', '=', $port_id)->first();
        $status    = $port_data->status;
        if($status == 0){ 
            $port_data->status = 1;
            $port_data->save();
            $response = ['success'=>true, 'data'=>$port_data];
            return response()->json($response, 201);
        }
        if($status == 1){ 
            $port_data->status = 0;
            $port_data->save();
            $response = ['success'=>true, 'data'=>$port_data];
            return response()->json($response, 201);
        }
    }

    public function changePortAccountStatus($account_id)
    {   
        $account_id;
        $account_data   = Portbookappointmentpayment::where('id', '=', $account_id)->first();
        $status         = $account_data->status;
        // return $status;
        if($status == 1){ 
            $account_data->status = 3;
            $account_data->save();
            $response = ['success'=>true, 'data'=>"Account updated"];
            return response()->json($response, 201);
        }
        if($status == 2){ 
            $account_data->status = 3;
            $account_data->save();
            $response = ['success'=>true, 'data'=>"Account updated"];
            return response()->json($response, 201);
        }
        if($status == 3){ 
            $account_data->status = 2;
            $account_data->save();
            $response = ['success'=>true, 'data'=>"Account updated"];
            return response()->json($response, 201);
        }
    }

    public function listPharms()
    {   
        $pharmsList = Pharmacies::paginate(10);

        // return $result;
        $response = ['success'=>true, 'data'=>$pharmsList];
        return response()->json($response, 201);
    }

    public function getPharm($pharm_id)
    {   
        $pharm_data   = Pharmacies::where('id', '=', $pharm_id)->first();

        $response = ['success'=>true, 'data'=>$pharm_data];
        return response()->json($response, 201);
    }

    public function pharmAccount($id)
    {   
        $order_list = Pharmorder::where('pharm_id', '=', $id)->paginate(10);
        // return $result;
        $response = ['success'=>true, 'data'=>$order_list];
        return response()->json($response, 201);
    }

    public function changePharmStatus($pharm_id)
    {
        $pharm_data = Ports::where('id', '=', $pharm_id)->first();
        $status    = $pharm_data->status;
        if($status == 0){ 
            $pharm_data->status = 1;
            $pharm_data->save();
            $response = ['success'=>true, 'data'=>$pharm_data];
            return response()->json($response, 201);
        }
        if($status == 1){ 
            $pharm_data->status = 0;
            $pharm_data->save();
            $response = ['success'=>true, 'data'=>$pharm_data];
            return response()->json($response, 201);
        }
    }

    public function changePharmAccountStatus($account_id)
    {   
        $account_id;
        $account_data   = Pharmorder::where('id', '=', $account_id)->first();
        $status         = $account_data->status;
        // return $status;
        if($status == 1){ 
            $account_data->status = 3;
            $account_data->save();
            $response = ['success'=>true, 'data'=>"Account updated"];
            return response()->json($response, 201);
        }
        if($status == 2){ 
            $account_data->status = 3;
            $account_data->save();
            $response = ['success'=>true, 'data'=>"Account updated"];
            return response()->json($response, 201);
        }
        if($status == 3){ 
            $account_data->status = 2;
            $account_data->save();
            $response = ['success'=>true, 'data'=>"Account updated"];
            return response()->json($response, 201);
        }
    }

    public function listLabs()
    {   
        $labsList = Labs::paginate(10);

        // return $result;
        $response = ['success'=>true, 'data'=>$labsList];
        return response()->json($response, 201);
    }

    public function changeLabStatus($port_id)
    {
        $lab_data = Labs::where('id', '=', $port_id)->first();
        $status    = $lab_data->status;
        if($status == 0){ 
            $lab_data->status = 1;
            $lab_data->save();
            $response = ['success'=>true, 'data'=>$lab_data];
            return response()->json($response, 201);
        }
        if($status == 1){ 
            $lab_data->status = 0;
            $lab_data->save();
            $response = ['success'=>true, 'data'=>$lab_data];
            return response()->json($response, 201);
        }
    }

    public function getLab($port_id)
    {   
        $lab_data   = Labs::where('id', '=', $port_id)->first();

        $response = ['success'=>true, 'data'=>$lab_data];
        return response()->json($response, 201);
    }

    public function labAccount($id)
    {   
        $account = DB::table('labbookappointmentpayments')
            ->join('labbookappointments', 'labbookappointmentpayments.appointment_id', '=', 'labbookappointments.id')
            ->select('labbookappointmentpayments.id', 'labbookappointmentpayments.status', 'labbookappointmentpayments.billing_test_fee', 'labbookappointmentpayments.billing_amount_currency', 'labbookappointmentpayments.billing_orderID', 'labbookappointmentpayments.created_at', 
            'labbookappointments.lab_username', 'labbookappointments.patient_username', 'labbookappointments.patient_first_name', 'labbookappointments.patient_last_name', 'labbookappointments.patient_middle_name')
            ->where('labbookappointmentpayments.lab_id', '=', $id)
            ->paginate(10);

        // return $result;
        $response = ['success'=>true, 'data'=>$account];
        return response()->json($response, 201);
    }

    public function changeLabAccountStatus($account_id)
    {   
        $account_id;
        $account_data   = Labbookappointmentpayment::where('id', '=', $account_id)->first();
        $status         = $account_data->status;
        // return $status;
        if($status == 1){ 
            $account_data->status = 3;
            $account_data->save();
            $response = ['success'=>true, 'data'=>"Account updated"];
            return response()->json($response, 201);
        }
        if($status == 2){ 
            $account_data->status = 3;
            $account_data->save();
            $response = ['success'=>true, 'data'=>"Account updated"];
            return response()->json($response, 201);
        }
        if($status == 3){ 
            $account_data->status = 2;
            $account_data->save();
            $response = ['success'=>true, 'data'=>"Account updated"];
            return response()->json($response, 201);
        }
    }


    // ///////////////////////////////////////////////////////////////////////////////////////////////////
    // //////////////////////////////////////////////////////////////////////////////////////////////////
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

        // Find user with that id
        $pharm_data = Doctors::where('id', '=', $id)->first();
        
        $pharm_data->update($request->all());
        $response = ['success'=>true, 'data'=>$pharm_data];
        return response()->json($response, 201);
    }

    public function updateAccountDetails(Request $request, $id)
    {   
        // return $request;
        // Find user with that id
        $doc_data = Doctors::where('id', '=', $id)->first();

        $doc_data->consultation_fee       = $request->consultation_fee;
        $doc_data->bank_name              = $request->bank_name;
        $doc_data->bank_account_name      = $request->bank_account_name;
        $doc_data->bank_account_number    = $request->bank_account_number;
        $doc_data->save();

        
        // $pharm_data->update($request->all());
        $response = ['success'=>true, 'data'=>$doc_data];
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


    public function patientMedRecUpdate(Request $request, $patient_id, $doctor_id)
    {   
        // return $request;

        $doc_data       = Doctors::where('id', '=', $doctor_id)->first();
        $doc_username   = $doc_data->username;
        $doc_first_name = $doc_data->first_name;
        $doc_last_name  = $doc_data->last_name;
        $doc_middle_name= $doc_data->middle_name;
        $doc_name       = $doc_first_name." ".$doc_middle_name." ".$doc_last_name;
        
        // Find user with that id
        // $patient_data = Patients::where('id', '=', $patient_id)->first();

        // /////////////////////////////////////////////////////////////////////////
        $medicationscurrentlyusing = [
            'medications'   =>$request->med_currently_using,
            'patient_id'    =>$patient_id,
            'doc_id'        =>$doctor_id,
            'doc_username'  =>$doc_username,
            'doc_name'      =>$doc_name,
        ];
        $medicationscurrentlyusing = new \App\Medicationscurrentlyusing($medicationscurrentlyusing);
        $medicationscurrentlyusing->save();
        
        // //////////////////////////////////////////////////////////////////////
        $med_allergies = [
            'allergies'     =>$request->med_allergies,
            'patient_id'    =>$patient_id,
            'doc_id'        =>$doctor_id,
            'doc_username'  =>$doc_username,
            'doc_name'      =>$doc_name,
        ];
        $med_allergies = new \App\Med_allergies($med_allergies);
        $med_allergies->save();

        // ///////////////////////////////////////////////////////////////////////
        $med_blood_group = [
            'blood_group'   =>$request->med_blood_group,
            'patient_id'    =>$patient_id,
            'doc_id'        =>$doctor_id,
            'doc_username'  =>$doc_username,
            'doc_name'      =>$doc_name,
        ];
        $med_blood_group = new \App\Med_blood_group($med_blood_group);
        $med_blood_group->save();

        // ///////////////////////////////////////////////////////////////////////
        $med_underlying_conditions = [
            'underlying_conditions'   =>$request->med_underlying_conditions,
            'patient_id'    =>$patient_id,
            'doc_id'        =>$doctor_id,
            'doc_username'  =>$doc_username,
            'doc_name'      =>$doc_name,
        ];
        $med_underlying_conditions = new \App\Med_underlying_conditions($med_underlying_conditions);
        $med_underlying_conditions->save();

        // ///////////////////////////////////////////////////////////////////////
        $med_family_medical_history = [
            'family_medical_history'   =>$request->med_family_medical_history,
            'patient_id'    =>$patient_id,
            'doc_id'        =>$doctor_id,
            'doc_username'  =>$doc_username,
            'doc_name'      =>$doc_name,
        ];
        $med_family_medical_history = new \App\Med_family_medical_history($med_family_medical_history);
        $med_family_medical_history->save();

        // ///////////////////////////////////////////////////////////////////////
        $med_hypertensive = [
            'hypertensive'   =>$request->med_hypertensive,
            'patient_id'    =>$patient_id,
            'doc_id'        =>$doctor_id,
            'doc_username'  =>$doc_username,
            'doc_name'      =>$doc_name,
        ];
        $med_hypertensive = new \App\Med_hypertensive($med_hypertensive);
        $med_hypertensive->save();

        // ///////////////////////////////////////////////////////////////////////
        $med_diabetic = [
            'diabetic'   =>$request->med_diabetic,
            'patient_id'    =>$patient_id,
            'doc_id'        =>$doctor_id,
            'doc_username'  =>$doc_username,
            'doc_name'      =>$doc_name,
        ];
        $med_diabetic = new \App\Med_diabetic($med_diabetic);
        $med_diabetic->save();

        // ///////////////////////////////////////////////////////////////////////
        $med_prescription = [
            'prescription'   =>$request->med_prescription,
            'patient_id'    =>$patient_id,
            'doc_id'        =>$doctor_id,
            'doc_username'  =>$doc_username,
            'doc_name'      =>$doc_name,
        ];
        $med_prescription = new \App\Med_prescription($med_prescription);
        $med_prescription->save();

        // ///////////////////////////////////////////////////////////////////////
        $med_lab_test = [
            'lab_test'      =>$request->med_lab_test,
            'patient_id'    =>$patient_id,
            'doc_id'        =>$doctor_id,
            'doc_username'  =>$doc_username,
            'doc_name'      =>$doc_name,
        ];
        $med_lab_test = new \App\Med_lab_test($med_lab_test);
        $med_lab_test->save();

        // ///////////////////////////////////////////////////////////////////////
        $med_note = [
            'note'          =>$request->med_note,
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


}
