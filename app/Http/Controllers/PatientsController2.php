<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Patients;

// namespace App\Http\Controllers;
// use Illuminate\Http\Request;
// use App\User;
use JWTAuth;
use JWTAuthException;

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



        $response = ['success'=>true, 'data'=>['auth_token'=>$patient_data->auth_token,'id'=>$patient_data->id,'first_name'=>$patient_data->first_name,'last_name'=>$patient_data->last_name, 'middle_name'=>$patient_data->middle_name, 'email'=>$patient_data->email, 'zip_code'=>$patient_data->zip_code, 'telephone'=>$patient_data->telephone, 'title'=>$patient_data->title, 'gender'=>$patient_data->gender, 'dob'=>$patient_data->dob, 'nationality'=>$patient_data->nationality, 'country_of_residence'=>$patient_data->country_of_residence, 'district_province_state'=>$patient_data->district_province_state, 'contact_address'=>$patient_data->contact_address,
        'height'=>$patient_data->height,
        'weight'=>$patient_data->weight, 

            'disability_none'       =>$disability_none,
            'disability_hearing'    =>$disability_hearing,
            'disability_mobility'   =>$disability_mobility,
            'disability_sight'      =>$disability_sight,
            'disability_learning'   =>$disability_learning, 
            'disability_others'     =>$disability_others, 

            'next_kin_name'=>$patient_data->next_kin_name, 'next_kin_relationship'=>$patient_data->next_kin_relationship, 'next_kin_occupation'=>$patient_data->next_kin_occupation, 'next_kin_phone'=>$patient_data->next_kin_phone, 'next_kin_email'=>$patient_data->next_kin_email, 'med_currently_using'=>$patient_data->med_currently_using, 'med_allergies'=>$patient_data->med_allergies, 'med_blood_group'=>$patient_data->med_blood_group, 'med_underlying_conditions'=>$patient_data->med_underlying_conditions, 'med_family_medical_history'=>$patient_data->med_family_medical_history, 'med_hypertensive'=>$patient_data->med_hypertensive, 'med_diabetic'=>$patient_data->med_diabetic, 
            'profile_picture'=>$patient_data->profile_picture, 
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
        // return $request;
        // $patient_data = Patients::find($id);
        // $patient_data->first_name = $request->first_name;
        // $patient_data->save();
        // $response = ['success'=>true, 'data'=>$patient_data];
        // return response()->json($response, 201);

        // Find user with that id
        $patient_data = Patients::where('id', '=', $id)->first();

        // get each disability, pass as an array into a variable and merge into a single variable called disabilities
        $disabilities = array(["disability_none" => $request->disability_none, "disability_hearing" => $request->disability_hearing, "disability_mobility" => $request->disability_mobility, "disability_sight" => $request->disability_sight, "disability_learning" => $request->disability_learning, "disability_others" => $request->disability_others]);

        // merge $disabilities into the request been sent to the db
        $request->merge(array('disabilities' => ($disabilities)));

        // Remove each disabilities from the array of request so am sending only disability into the db 
        $request->replace($request->except('disability_none'));
        $request->replace($request->except('disability_hearing'));
        $request->replace($request->except('disability_mobility'));
        $request->replace($request->except('disability_sight'));
        $request->replace($request->except('disability_learning'));
        $request->replace($request->except('disability_others'));
        
        $patient_data->update($request->all());
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
        $this->validate($request, [
            // 'name' => 'required',
            // 'details' => 'required',
            // 'product_image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            // Maximum size of 2MB
            'profile_picture' => 'mimes:jpeg,png,jpg|max:2048',
        ]);
        
        // get the user_id to update
        $patient_data = Patients::where('id', '=', $id)->first();

        // get the file from the request and concartinate time with the name
        $file = $request->file('profile_picture');

        $fileName = time().'.'.$file->getClientOriginalName();

        // Path where the file will be saved
        $path = '/../public/images/uploads/profile_pictures';
        $destinationPath = public_path().$path;
        // return $destinationPath;
  
        // This moved file to server folder
        $file->move($destinationPath,$fileName);

        // save file name in database
        $patient_data->profile_picture = "/images/uploads/profile_pictures/".$fileName;
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
        $doc_airport_data   = Patients::where('email', '=', $share_med_history)->first();
        $doc_airport_id     = $doc_airport_data->id;
        
        // Find user with that id
        $patient_data   = Patients::where('id', '=', $id)->first();
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
