<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Pharmacies;

// namespace App\Http\Controllers;
// use Illuminate\Http\Request;
// use App\User;
use JWTAuth;
use JWTAuthException;

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
        $patient_data = Pharmacies::where('id', '=', $id)->first();

        // return $patient_data;

        $response = ['success'=>true, 'data'=>['auth_token'=>$patient_data->auth_token,'id'=>$patient_data->id,'name'=>$patient_data->name,'username'=>$patient_data->username, 'email'=>$patient_data->email, 'zip_code'=>$patient_data->zip_code, 'telephone'=>$patient_data->telephone, 'pharm_country'=>$patient_data->pharm_country, 'pharm_district_province_state'=>$patient_data->pharm_district_province_state, 'pharm_address'=>$patient_data->pharm_address,
        'pharm_logo'=>$patient_data->pharm_logo,
        'status'=>$patient_data->status, 'created_at'=>$patient_data->created_at]];

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
        $patient_data = Pharmacies::where('id', '=', $id)->first();
        
        $patient_data->update($request->all());
        $response = ['success'=>true, 'data'=>$patient_data];
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
        $this->validate($request, [
            // 'name' => 'required',
            // 'details' => 'required',
            // 'product_image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            // Maximum size of 2MB
            'pharm_logo' => 'mimes:jpeg,png,jpg|max:2048',
        ]);
        
        // get the user_id to update
        $patient_data = Pharmacies::where('id', '=', $id)->first();

        // get the file from the request and concartinate time with the name
        $file = $request->file('pharm_logo');

        $fileName = time().'.'.$file->getClientOriginalName();

        // Path where the file will be saved
        $path = '/../public/images/uploads/pharmacies/logos';
        $destinationPath = public_path().$path;
        // return $destinationPath;
  
        // This moved file to server folder
        $file->move($destinationPath,$fileName);

        // save file name in database
        $patient_data->pharm_logo = "/images/uploads/pharmacies/logos/".$fileName;
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

}
