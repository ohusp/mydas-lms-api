<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

use App\Hospitals;
use App\Patientslist;
use App\Doctors;

// namespace App\Http\Controllers;
// use Illuminate\Http\Request;
// use App\User;
use JWTAuth;
use JWTAuthException;

use Illuminate\Support\Facades\Validator;
use App\Sanitizes\Sanitizes;

class HospitalController2 extends Controller
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
        $pharmacies = Hospitals::paginate(10);
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
        $hospital_data = Hospitals::where('id', '=', $id)->first();

        // return $pharm_data;

        $response = ['success'=>true, 'data'=>[
            'auth_token'=>$hospital_data->auth_token,
            'id'=>$hospital_data->id,
            'username'=>$hospital_data->username,
            'name'=>$hospital_data->name,
            'email'=>$hospital_data->email, 
            'zip_code'=>$hospital_data->zip_code, 
            'telephone'=>$hospital_data->telephone, 
            'country'=>$hospital_data->country, 
            'district_province_state'=>$hospital_data->district_province_state, 
            'address'=>$hospital_data->address, 
            'test_carried_out'=>$hospital_data->test_carried_out, 
            'logo'=>$hospital_data->logo,
            'medical_certificate'=>$hospital_data->medical_certificate,
            'medical_license'=>$hospital_data->medical_license, 

            'bank_name'=>$hospital_data->bank_name,
            'bank_account_name'=>$hospital_data->bank_account_name,
            'bank_account_number'=>$hospital_data->bank_account_number,

            'status'=>$hospital_data->status, 
            'created_at'=>$hospital_data->created_at
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
        $hospital_data = Hospitals::where('id', '=', $id)->first();

        $hospital_data->name        = Sanitizes::my_sanitize_string( $request->name);
        $hospital_data->zip_code    = Sanitizes::my_sanitize_string( $request->zip_code);
        $hospital_data->telephone   = Sanitizes::my_sanitize_string( $request->telephone);
        $hospital_data->country     = Sanitizes::my_sanitize_string( $request->country);
        $hospital_data->district_province_state     = Sanitizes::my_sanitize_string( $request->district_province_state);
        $hospital_data->address     = Sanitizes::my_sanitize_string( $request->address);
        $hospital_data->save();
        
        $response = ['success'=>true, 'data'=>$hospital_data];
        return response()->json($response, 201);
    }

    public function updateAccountDetails(Request $request, $id)
    {   
        // return $request;
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
        $hospital_data = Hospitals::where('id', '=', $id)->first();

        $hospital_data->bank_name           = Sanitizes::my_sanitize_string( $request->bank_name );
        $hospital_data->bank_account_name   = Sanitizes::my_sanitize_string( $request->bank_account_name );
        $hospital_data->bank_account_number = Sanitizes::my_sanitize_string( $request->bank_account_number );
        $hospital_data->save();

        // $pharm_data->update($request->all());
        $response = ['success'=>true, 'data'=>$hospital_data];
        return response()->json($response, 201);
    }

    public function patientsList($id)
    {   
        $patientslist = Patientslist::where('doc_airport_id', '=', $id)->paginate(10);

        // return $result;
        $response = ['success'=>true, 'data'=>$patientslist];
        return response()->json($response, 201);
    }

    public function updateMedHis(Request $request, $id)
    {   
        // return $request;
        // $patient_data = Hospitals::find($id);
        // $patient_data->first_name = $request->first_name;
        // $patient_data->save();
        // $response = ['success'=>true, 'data'=>$patient_data];
        // return response()->json($response, 201);

        // Find user with that id
        $patient_data = Hospitals::where('id', '=', $id)->first();

        // return $patient_data;
        
        $patient_data->update($request->all());
        $response = ['success'=>true, 'data'=>$patient_data];
        
        return response()->json($response, 201);
    }

    // upload/update applicant's identity pdf
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
        $hospital_data = Hospitals::where('id', '=', $id)->first();

        // get the file from the request and concartinate time with the name
        $file = $request->file('logo');

        $fileName = $id .'-'. time().'-'.$file->getClientOriginalName();

        // Path where the file will be saved
        $path = config('global.file_path1') . 'hospitals/logo/'.$id;
        $destinationPath = public_path().$path;
        // return $destinationPath;
  
        // This moved file to server folder
        $file->move($destinationPath,$fileName);

        // save file name in database
        $hospital_data->logo = config('global.file_path2') . "hospitals/logo/".$id."/".$fileName;
        // for online
        // $hospital_data->logo = "/dashboard/public/images/uploads/hospitals/logo/".$id."/".$fileName;
        $hospital_data->save();

        // return response
        $response = ['success'=>true, 'data'=>$hospital_data];
        return response()->json($response, 201);
    }

    public function updateMedicalCertificate(Request $request, $id) {
        // return $request;
        $validator = Validator::make($request->all(), [ 
            'medical_certificate' => 'mimes:pdf,jpeg,png,jpg|max:512'
        ]);

        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 201);
        }
        
        // get the user_id to update
        $hospital_data = Hospitals::where('id', '=', $id)->first();

        // get the file from the request and concartinate time with the name
        $file = $request->file('medical_certificate');

        $fileName = $id .'.'. time().'.'.$file->getClientOriginalName();

        // Path where the file will be saved
        $path = config('global.file_path1') . 'hospitals/medical_certificate/'.$id;
        $destinationPath = public_path().$path;
        // return $destinationPath;
  
        // This moved file to server folder
        $file->move($destinationPath,$fileName);

        // save file name in database
        $hospital_data->medical_certificate = config('global.file_path2') . "hospitals/medical_certificate/".$id."/".$fileName;
        // for online
        // $hospital_data->medical_certificate = "/dashboard/public/images/uploads/hospitals/medical_certificate/".$id."/".$fileName;
        $hospital_data->save();

        // return response
        $response = ['success'=>true, 'data'=>$hospital_data];
        return response()->json($response, 201);
    }

    public function updateMedicalLicense(Request $request, $id) {
        // return $request;
        $validator = Validator::make($request->all(), [ 
            'medical_license' => 'mimes:pdf,jpeg,png,jpg|max:512'
        ]);

        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 201);
        }
        
        // get the user_id to update
        $hospital_data = Hospitals::where('id', '=', $id)->first();

        // get the file from the request and concartinate time with the name
        $file = $request->file('medical_license');

        $fileName = time().'.'.$file->getClientOriginalName();

        // Path where the file will be saved
        $path = config('global.file_path1') . 'hospitals/medical_license/'.$id;
        // for online
        // $path = '/dashboard/public/images/uploads/hospitals/medical_license/'.$id;
        $destinationPath = public_path().$path;
        // return $destinationPath;
  
        // This moved file to server folder
        $file->move($destinationPath,$fileName);

        // save file name in database
        $hospital_data->medical_license = config('global.file_path2') . "hospitals/medical_license/".$id."/".$fileName;
        // for online
        // $hospital_data->medical_license = "/dashboard/public/images/uploads/hospitals/medical_license/".$id."/".$fileName;
        $hospital_data->save();

        // return response
        $response = ['success'=>true, 'data'=>$hospital_data];
        return response()->json($response, 201);
    }

    public function shareMedHistory(Request $request, $id)
    {   
        // return $request;
        $share_med_history = $request->share_med_history;

        // Get user id of username. change from patient table to hospital table
        $doc_airport_data   = Hospitals::where('email', '=', $share_med_history)->first();
        $doc_airport_id     = $doc_airport_data->id;
        
        // Find user with that id
        $patient_data   = Hospitals::where('id', '=', $id)->first();
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

    public function listDoctors($hospital_id)
    {   
        $doctorsList = Doctors::where('hospital', '=', $hospital_id)->paginate(10);

        // return $result;
        $response = ['success'=>true, 'data'=>$doctorsList];
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
