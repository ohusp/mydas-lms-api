<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

use App\Labs;
use App\Labtests;
use App\Patients;
use App\Patientslist;

use App\PatientslistLab;
use App\Sharedmedlabtest;
use App\Med_lab_test;
use App\Labresult;

use App\Labbookappointment;
use App\Labbookappointmentpayment;
// namespace App\Http\Controllers;
// use Illuminate\Http\Request;
// use App\User;
use JWTAuth;
use JWTAuthException;

use Illuminate\Support\Facades\Validator;
use App\Sanitizes\Sanitizes;

class LabController2 extends Controller
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
        $pharmacies = Labs::paginate(10);
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
        $lab_data = Labs::where('id', '=', $id)->first();

        // return $pharm_data;

        $response = ['success'=>true, 'data'=>[
            'auth_token'=>$lab_data->auth_token,
                'id'=>$lab_data->id,
                'name'=>$lab_data->name,
                'username'=>$lab_data->username,
                'email'=>$lab_data->email, 
                'zip_code'=>$lab_data->zip_code, 
                'telephone'=>$lab_data->telephone, 
                'country'=>$lab_data->country, 
                'district_province_state'=>$lab_data->district_province_state, 
                'address'=>$lab_data->address, 
                'test_carried_out'=>$lab_data->test_carried_out, 
                'bank_name'=>$lab_data->bank_name, 
                'bank_account_name'=>$lab_data->bank_account_name, 
                'bank_account_number'=>$lab_data->bank_account_number, 
                'medical_license'=>$lab_data->medical_license,
                'logo'=>$lab_data->logo,
                'status'=>$lab_data->status, 
                'created_at'=>$lab_data->created_at
        ]];

        return response()->json($response, 201);
    }

    public function getLabTest($id)
    {
        //
        // $lab_test = Labtests::paginate(10);
        $lab_test = Labtests::where('lab_id', '=', $id)->paginate(10);
        // return $result;
        $response = ['success'=>true, 'data'=>$lab_test];
        return response()->json($response, 201);
    }

    public function addLabTest(Request $request, $id)
    {   
        $validator  = Validator::make($request->all(), [ 
            'name'          => 'required|string|max:255', 
            'description'   => 'required|string|max:65000', 
            'price'         => 'required|string|max:255', 
        ]);

        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 201);
        }

        $name           = Sanitizes::my_sanitize_string( $request->name );
        $description    = Sanitizes::my_sanitize_string( $request->description );
        $price          = Sanitizes::my_sanitize_string( $request->price );
        // //////////////////////// SAVE TO DB /////////////////////////////////////////////
        $lab_test = [
            'lab_id'        =>$id,
            'name'          =>$name,
            'description'   =>$description,
            'price'         =>$price,
        ];
        $lab_test = new \App\Labtests($lab_test);
        if($lab_test->save()){
            $response = ['success'=>true, 'data'=>'Test added successfully'];
            return response()->json($response, 201);
        }else{
            $response = ['success'=>false, 'data'=>'Add test fail'];
            return response()->json($response, 201);
        }
        // ////////////////////////////////////////////////////////////////////////////////////////
    }

    public function patientsList($id)
    {   

        $patientslist = DB::table('labbookappointments')
            ->join('labtests', 'labbookappointments.test_id', '=', 'labtests.id')
            ->select('labbookappointments.*', 'labtests.lab_id', 'labtests.name', 'labtests.description', 'labtests.price' )
            ->where('labbookappointments.lab_id', '=', $id)
            ->paginate(10);

        // return $result;
        $response = ['success'=>true, 'data'=>$patientslist];
        return response()->json($response, 201);
    }

    // get patient medical record
    public function sharedLabTest($patient_id, $lab_id)
    {   
        $status = 1;
        // check if patient has shared any test with lab
        $exist = \App\Sharedmedlabtest::where([['patient_id', $patient_id], ['lab_id', $lab_id], ['status', $status]])->get()->first();
        if($exist){
            $patient_data = Patients::where('id', '=', $patient_id)->first();
            // get the lab test ids shared
            $lab_tests = Sharedmedlabtest::where([['patient_id', $patient_id], ['lab_id', $lab_id]])->get("lab_test_id")->all();

            // declare array. foreach of the lab test id, get the test details
            $allTest = array();
            foreach ($lab_tests as $lab_test) {
                $med_lab_test = Med_lab_test::where('id', '=', $lab_test->lab_test_id)->first();
                array_push($allTest, $med_lab_test);
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

                    'profile_picture'=>$patient_data->profile_picture, 
                    'status'=>$patient_data->status, 
                    'created_at'=>$patient_data->created_at
                ],
                'lab_test'=> $allTest,
            ];

            return response()->json($response, 201);
            
        }else{
            $response = ['success'=>false, 'data'=>"Patient record has not been shared"];
            return response()->json($response, 201);
        }

        
    }

    public function labTestResultSave(Request $request, $patient_id, $lab_id)
    {   
        $validator  = Validator::make($request->all(), [ 
            'lab_test_name'  => 'required|string|max:255', 
            'lab_result'     => 'required|string|max:65000', 
        ]);

        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 201);
        }

        $lab_test_name  = Sanitizes::my_sanitize_string( $request->lab_test_name);
        $lab_result     = Sanitizes::my_sanitize_string( $request->lab_result);

        $lab_data       = Labs::where('id', '=', $lab_id)->first();
        $lab_username   = $lab_data->username;
        $lab_name       = $lab_data->name;
        
        // Find user with that id
        // $patient_data = Patients::where('id', '=', $patient_id)->first();
       
        // ///////////////////////////////////////////////////////////////////////
        $lab_result = [
            'lab_test_name' =>$lab_test_name,
            'lab_result'    =>$lab_result,
            'patient_id'    =>$patient_id,
            'lab_id'        =>$lab_id,
            'lab_username'  =>$lab_username,
            'lab_name'      =>$lab_name,
        ];
        $lab_result = new \App\Labresult($lab_result);
        $lab_result->save();

        $response = ['success'=>true, 'data'=>'Updated successfully'];
        return response()->json($response, 201);
    }

    // get patient lab test results
    public function getLabResults($patient_id, $lab_id)
    {   
        $status = 1;
        // check if patient and doctor exist to know wether to display record or not i.e patient shared record
        // $exist = \App\Labresult::where([['patient_id', $patient_id], ['lab_id', $lab_id], ['status', $status]])->get()->first();
        // if($exist){
        $lab_results = Labresult::where([['patient_id', $patient_id], ['lab_id', $lab_id], ['status', $status]])->get()->all();
        if($lab_results){
            $response = ['success'=>true, 'lab_results'=> $lab_results,  ];
            return response()->json($response, 201);
        }else{
            $response = ['success'=>false, 'data'=> "No result"  ];
            return response()->json($response, 201);
        }
        
            
        // }else{
        //     $response = ['success'=>false, 'data'=>"Patient Record not shared"];
        //     return response()->json($response, 201);
        // }

        
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
            'district_province_state' => 'required|string|max:255', 
            'address'   => 'required|string|max:65000', 
        ]);

        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 201);
        }
        // Find user with that id
        $lab_data = Labs::where('id', '=', $id)->first();

        $lab_data->name        = Sanitizes::my_sanitize_string( $request->name);
        $lab_data->zip_code    = Sanitizes::my_sanitize_string( $request->zip_code);
        $lab_data->telephone   = Sanitizes::my_sanitize_string( $request->telephone);
        $lab_data->country     = Sanitizes::my_sanitize_string( $request->country);
        $lab_data->district_province_state     = Sanitizes::my_sanitize_string( $request->district_province_state);
        $lab_data->address     = Sanitizes::my_sanitize_string( $request->address);
        $lab_data->save();
        
        $response = ['success'=>true, 'data'=>$lab_data];
        return response()->json($response, 201);
    }

    public function updateAccountDetails(Request $request, $id)
    {   
        $validator  = Validator::make($request->all(), [ 
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
        $lab_data = Labs::where('id', '=', $id)->first();

        $lab_data->bank_name           = Sanitizes::my_sanitize_string( $request->bank_name );
        $lab_data->bank_account_name   = Sanitizes::my_sanitize_string( $request->bank_account_name );
        $lab_data->bank_account_number = Sanitizes::my_sanitize_string( $request->bank_account_number );
        $lab_data->save();

        $response = ['success'=>true, 'data'=>$lab_data];
        return response()->json($response, 201);
    }

    public function updateMedHis(Request $request, $id)
    {   
        // return $request;
        // $patient_data = Labs::find($id);
        // $patient_data->first_name = $request->first_name;
        // $patient_data->save();
        // $response = ['success'=>true, 'data'=>$patient_data];
        // return response()->json($response, 201);

        // Find user with that id
        $patient_data = Labs::where('id', '=', $id)->first();

        // return $patient_data;
        
        $patient_data->update($request->all());
        $response = ['success'=>true, 'data'=>$patient_data];
        
        return response()->json($response, 201);
    }

    // upload/update applicant's identity pdf
    public function updateLogo(Request $request, $id) {
        // return $id;
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
        $lab_data = Labs::where('id', '=', $id)->first();

        // get the file from the request and concartinate time with the name
        $file = $request->file('logo');
        // return $file;

        $fileName = $id .'.'. time().'.'.$file->getClientOriginalName();

        // Path where the file will be saved
        $path = config('global.file_path1') . 'labs/logo/'.$id;
        $destinationPath = public_path().$path;
        // return $destinationPath;
  
        // This moved file to server folder
        $file->move($destinationPath,$fileName);

        // save file name in database
        $lab_data->logo = config('global.file_path2') . "labs/logo/".$id."/".$fileName;
        // for online
        // $lab_data->logo = "/dashboard/public/images/uploads/labs/logo/".$id."/".$fileName;
        $lab_data->save();

        // return response
        $response = ['success'=>true, 'data'=>$lab_data];
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
        $patient_data = Labs::where('id', '=', $id)->first();

        // get the file from the request and concartinate time with the name
        $file = $request->file('medical_certificate');

        $fileName = $id .'.'. time().'.'.$file->getClientOriginalName();

        // Path where the file will be saved
        $path = config('global.file_path1') . 'labs/medical_certificate/'.$id;
        $destinationPath = public_path().$path;
        // return $destinationPath;
  
        // This moved file to server folder
        $file->move($destinationPath,$fileName);

        // save file name in database
        $patient_data->pharm_logo = config('global.file_path2') . "labs/medical_certificate/".$id."/".$fileName;
        // for online
        // $patient_data->pharm_logo = "/dashboard/public/images/uploads/labs/medical_certificate/".$id."/".$fileName;
        $patient_data->save();

        // return response
        $response = ['success'=>true, 'data'=>$patient_data];
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
        $lab_data = Labs::where('id', '=', $id)->first();

        // get the file from the request and concartinate time with the name
        $file = $request->file('medical_license');

        $fileName = time().'.'.$file->getClientOriginalName();

        // Path where the file will be saved
        $path = config('global.file_path1') . 'labs/medical_license/'.$id;
        $destinationPath = public_path().$path;
        // return $destinationPath;
  
        // This moved file to server folder
        $file->move($destinationPath,$fileName);

        // save file name in database
        $lab_data->medical_license = config('global.file_path2') . "labs/medical_license/".$id."/".$fileName;
        // for online
        // $lab_data->medical_license = "/dashboard/public/images/uploads/labs/medical_license/".$id."/".$fileName;
        $lab_data->save();

        // return response
        $response = ['success'=>true, 'data'=>$lab_data];
        return response()->json($response, 201);
    }

    public function shareMedHistory(Request $request, $id)
    {   
        // return $request;
        $share_med_history = $request->share_med_history;

        // Get user id of username. change from patient table to lab table
        $doc_airport_data   = Labs::where('email', '=', $share_med_history)->first();
        $doc_airport_id     = $doc_airport_data->id;
        
        // Find user with that id
        $patient_data   = Labs::where('id', '=', $id)->first();
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

    public function getAppointment(Request $request, $patient_id, $lab_id)
    {   
        // $status = 1;
        // $appointment = Labbookappointment::where([['patient_id', $patient_id], ['doc_id', $doctor_id]])->get()->first();

        $appointment = DB::table('labbookappointments')
            ->join('labtests', 'labbookappointments.test_id', '=', 'labtests.id')
            ->select('labbookappointments.*', 'labtests.lab_id', 'labtests.name', 'labtests.description' )
            ->where([['labbookappointments.patient_id', $patient_id], ['labbookappointments.lab_id', $lab_id]])
            // ->where('labbookappointments.lab_id', '=', $id)
            ->get()->first();

        $response = ['success'=>true, 'data'=>$appointment];
        return response()->json($response, 201);
        
    }

    public function account($id)
    {   
        $account = DB::table('labbookappointmentpayments')
            ->join('labbookappointments', 'labbookappointmentpayments.appointment_id', '=', 'labbookappointments.id')
            ->select('labbookappointmentpayments.*', 'labbookappointments.*')
            ->where('labbookappointmentpayments.lab_id', '=', $id)
            ->paginate(10);

        // return $result;
        $response = ['success'=>true, 'data'=>$account];
        return response()->json($response, 201);
    }

    public function endAppointment(Request $request, $patient_id, $lab_id, $appointment_id)
    {   
        $status = 1;
        $appointment = Labbookappointment::where([['patient_id', $patient_id], ['lab_id', $lab_id], ['id', $appointment_id]])->get()->first();
        // return $appointment;
        $appointment->status = 2;
        $appointment->save();

        $appointmentPayment = Labbookappointmentpayment::where([['patient_id', $patient_id], ['lab_id', $lab_id], ['appointment_id', $appointment_id]])->get()->first();
        $appointmentPayment->status = 2;
        $appointmentPayment->save();

        $response = ['success'=>true, 'data'=>"Apointment concluded"];
        return response()->json($response, 201);
    }
}
