<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

use App\Pharmacies;
use App\Pharmacist;
use App\Pharmorder;
use App\Productcart;

// namespace App\Http\Controllers;
// use Illuminate\Http\Request;
// use App\User;
use JWTAuth;
use JWTAuthException;

use Illuminate\Support\Facades\Validator;
use App\Sanitizes\Sanitizes;

class PharmController2 extends Controller
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
        $pharmacies = Pharmacies::paginate(10);
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
        $pharm_data = Pharmacies::where('id', '=', $id)->first();

        // return $pharm_data;

        $response = ['success'=>true, 'data'=>[
            'auth_token'=>$pharm_data->auth_token,
            'id'=>$pharm_data->id,
            'name'=>$pharm_data->name,
            'username'=>$pharm_data->username, 
            'email'=>$pharm_data->email, 
            'zip_code'=>$pharm_data->zip_code, 
            'telephone'=>$pharm_data->telephone, 
            'pharm_country'=>$pharm_data->pharm_country, 'pharm_district_province_state'=>$pharm_data->pharm_district_province_state, 'pharm_address'=>$pharm_data->pharm_address,
            'pharm_logo'=>$pharm_data->pharm_logo,
            'medical_license'=>$pharm_data->medical_license,

            'bank_name'=>$pharm_data->bank_name,
            'bank_account_name'=>$pharm_data->bank_account_name,
            'bank_account_number'=>$pharm_data->bank_account_number,
            'status'=>$pharm_data->status, 
            'created_at'=>$pharm_data->created_at
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
            'pharm_country'   => 'required|string|max:255', 
            'pharm_district_province_state'     => 'required|string|max:255', 
            'pharm_address'   => 'required|string|max:65000', 
        ]);

        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 201);
        }
        // Find user with that id
        $pharm_data = Pharmacies::where('id', '=', $id)->first();

        $pharm_data->name        = Sanitizes::my_sanitize_string( $request->name);
        $pharm_data->zip_code    = Sanitizes::my_sanitize_string( $request->zip_code);
        $pharm_data->telephone   = Sanitizes::my_sanitize_string( $request->telephone);
        $pharm_data->pharm_country     = Sanitizes::my_sanitize_string( $request->pharm_country);
        $pharm_data->pharm_district_province_state     = Sanitizes::my_sanitize_string( $request->pharm_district_province_state);
        $pharm_data->pharm_address     = Sanitizes::my_sanitize_string( $request->pharm_address);
        $pharm_data->save();
        
        $response = ['success'=>true, 'data'=>$pharm_data];
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
        $pharm_data = Pharmacies::where('id', '=', $id)->first();

        $pharm_data->bank_name           = Sanitizes::my_sanitize_string( $request->bank_name );
        $pharm_data->bank_account_name   = Sanitizes::my_sanitize_string( $request->bank_account_name );
        $pharm_data->bank_account_number = Sanitizes::my_sanitize_string( $request->bank_account_number );
        $pharm_data->save();

        // $pharm_data->update($request->all());
        $response = ['success'=>true, 'data'=>$pharm_data];
        return response()->json($response, 201);
    }

    public function updateMedHis(Request $request, $id)
    {   
        // return $request;
        // $patient_data = Pharmacies::find($id);
        // $patient_data->first_name = $request->first_name;
        // $patient_data->save();
        // $response = ['success'=>true, 'data'=>$patient_data];
        // return response()->json($response, 201);

        // Find user with that id
        $patient_data = Pharmacies::where('id', '=', $id)->first();

        // return $patient_data;
        
        $patient_data->update($request->all());
        $response = ['success'=>true, 'data'=>$patient_data];
        
        return response()->json($response, 201);
    }

    // upload/update applicant's identity pdf
    public function updateLogo(Request $request, $id) {
        // return $request;
        $validator = Validator::make($request->all(), [ 
            'pharm_logo' => 'mimes:pdf,jpeg,png,jpg|max:500'
        ]);

        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 201);
        }
        
        // get the user_id to update
        $patient_data = Pharmacies::where('id', '=', $id)->first();

        // get the file from the request and concartinate time with the name
        $file = $request->file('pharm_logo');

        $fileName = time().'.'.$file->getClientOriginalName();

        // Path where the file will be saved
        $path = config('global.file_path1') . 'pharmacies/logos/'.$id;
        $destinationPath = public_path().$path;
        // return $destinationPath;
  
        // This moved file to server folder
        $file->move($destinationPath,$fileName);

        // save file name in database
        $patient_data->pharm_logo = config('global.file_path2') . "pharmacies/logos/".$id."/".$fileName;
        // for online
        // $patient_data->pharm_logo = "/dashboard/public/images/uploads/pharmacies/logos/".$id."/".$fileName;
        $patient_data->save();

        // return response
        $response = ['success'=>true, 'data'=>$patient_data];
        return response()->json($response, 201);
    }

    public function shareMedHistory(Request $request, $id)
    {   
        // return $request;
        $share_med_history = $request->share_med_history;

        // Get user id of username. change from patient table to doctor table
        $doc_airport_data   = Pharmacies::where('email', '=', $share_med_history)->first();
        $doc_airport_id     = $doc_airport_data->id;
        
        // Find user with that id
        $patient_data   = Pharmacies::where('id', '=', $id)->first();
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

    public function getPharmacist()
    {
        //
        $pharmacist_data = Pharmacist::paginate(10);
        // return $result;
        $response = ['success'=>true, 'data'=>$pharmacist_data];
        return response()->json($response, 201);
    }

    public function addPharmacist(Request $request, $id)
    {   
        // return $request;
        $validator  = Validator::make($request->all(), [ 
            'name'             => 'required|string|max:255', 
            'qualifications'   => 'required|string|max:65000', 
        ]);

        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 201);
        }
        
        $name           = Sanitizes::my_sanitize_string( $request->name );
        $qualifications = Sanitizes::my_sanitize_string( $request->qualifications );

        $payload = [
            'pharm_id'        =>$id,
            'name'            =>$name,
            'qualifications'  =>$qualifications,
        ];
                
        $pharmacist = new \App\Pharmacist($payload);
        if ($pharmacist->save())
        {
            $response = ['success'=>true, 'data'=>"Pharmacist added successfully"];
            return response()->json($response, 201);
        }else{
            $response = ['success'=>true, 'data'=>"Add pharmacist failed"];
            return response()->json($response, 201);
        }
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
        $pharm_data = Pharmacies::where('id', '=', $id)->first();

        // get the file from the request and concartinate time with the name
        $file = $request->file('medical_license');

        $fileName = $id .'-'. time().'.'.$file->getClientOriginalName();

        // Path where the file will be saved
        $path = config('global.file_path1') . 'pharmacies/medical_license/'.$id;
        $destinationPath = public_path().$path;
        // return $destinationPath;
  
        // This moved file to server folder
        $file->move($destinationPath,$fileName);

        // save file name in database
        $pharm_data->medical_license = config('global.file_path2') . "pharmacies/medical_license/".$id."/".$fileName;
        // for online
        // $pharm_data->medical_license = "/dashboard/public/images/uploads/pharmacies/medical_license/".$id."/".$fileName;
        $pharm_data->save();

        // return response
        $response = ['success'=>true, 'data'=>$pharm_data];
        return response()->json($response, 201);
    }

    public function getOrders($id)
    {   
        // return $id;
        //
        $order_list = Pharmorder::where('pharm_id', '=', $id)->paginate(10);
        // return $result;
        $response = ['success'=>true, 'data'=>$order_list];
        return response()->json($response, 201);
    }


    public function getOrder($id)
    {   
        $cart_data = Productcart::where('pharmorder_no', '=', $id)->get()->all();
        $response = ['success'=>true, 'data'=> $cart_data ];
        return response()->json($response, 201);
    }

    public function productDelivered(Request $request, $patient_id, $pharm_id)
    {   
        // return $request." ".$patient_id." ".$pharm_id; 
        $status = 2;
        DB::table('pharmorders') 
        ->where([['id', $request->order_id], ['pharm_id', $pharm_id], ['status', 1]])
        ->update([ 'status' => $status ]);

        $response = ['success'=>true, 'data'=>"Product delivered successfully"];
        return response()->json($response, 201);
        
    }

    public function orderAccount($id)
    {   
        // return $id;
        //
        $order_list = Pharmorder::where('pharm_id', '=', $id)->paginate(10);
        // return $result;
        $response = ['success'=>true, 'data'=>$order_list];
        return response()->json($response, 201);
    }
}
