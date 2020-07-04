<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Applications;

// namespace App\Http\Controllers;
// use Illuminate\Http\Request;
// use App\User;
use JWTAuth;
use JWTAuthException;

class ApplyController2 extends Controller
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
        $applications = Applications::paginate(10);
        // return $result;
        $response = ['success'=>true, 'data'=>$applications];
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
        $application_data = Applications::where('id', '=', $id)->first();

        // return $application_data;

        // get the disabilities values and convert to array
        $disabilities_new = $application_data->disabilities;
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



        $response = ['success'=>true, 'data'=>['auth_token'=>$application_data->auth_token,'id'=>$application_data->id,'first_name'=>$application_data->first_name,'last_name'=>$application_data->last_name, 'middle_name'=>$application_data->middle_name, 'email'=>$application_data->email, 'zip_code'=>$application_data->zip_code, 'telephone'=>$application_data->telephone, 'title'=>$application_data->title, 'gender'=>$application_data->gender, 'dob'=>$application_data->dob, 'nationality'=>$application_data->nationality, 'country_of_residence'=>$application_data->country_of_residence, 'district_province_state'=>$application_data->district_province_state, 'contact_address'=>$application_data->contact_address, 

            'disability_none'       =>$disability_none,
            'disability_hearing'    =>$disability_hearing,
            'disability_mobility'   =>$disability_mobility,
            'disability_sight'      =>$disability_sight,
            'disability_learning'   =>$disability_learning, 
            'disability_others'     =>$disability_others, 

            'parent_guardian_name'=>$application_data->parent_guardian_name, 'parent_guardian_relationship'=>$application_data->parent_guardian_relationship, 'parent_guardian_occupation'=>$application_data->parent_guardian_occupation, 'parent_guardian_phone'=>$application_data->parent_guardian_phone, 'passport_photograph'=>$application_data->passport_photograph, 'type_of_identification'=>$application_data->type_of_identification, 'id_passport_number'=>$application_data->id_passport_number, 'id_passport_upload'=>$application_data->id_passport_upload, 'programme_first_choice'=>$application_data->programme_first_choice, 'programme_second_choice'=>$application_data->programme_second_choice, 'programme_third_choice'=>$application_data->programme_third_choice, 'academic_session'=>$application_data->academic_session, 'admission_intake'=>$application_data->admission_intake, 'study_mode'=>$application_data->study_mode, 'previous_result_transcript'=>$application_data->previous_result_transcript, 'status'=>$application_data->status, 'created_at'=>$application_data->created_at]];

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
        // $application_data = Applications::find($id);
        // $application_data->first_name = $request->first_name;
        // $application_data->save();
        // $response = ['success'=>true, 'data'=>$application_data];
        // return response()->json($response, 201);

        // Find user with that id
        $application_data = Applications::where('id', '=', $id)->first();

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
        
        $application_data->update($request->all());
        $response = ['success'=>true, 'data'=>$application_data];
        return response()->json($response, 201);
    }

    // upload/update applicant's identity pdf
    public function updateIdentity(Request $request, $id) {
      
        $this->validate($request, [
            // 'name' => 'required',
            // 'details' => 'required',
            // 'product_image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            // Maximum size of 2MB
            'id_passport_upload' => 'mimes:pdf|max:2048',
        ]);
        
        // get the user_id to update
        $application_data = Applications::where('id', '=', $id)->first();

        // get the file from the request and concartinate time with the name
        $file = $request->file('id_passport_upload');
        $fileName = time().'.'.$file->getClientOriginalName();

        // Path where the file will be saved
        $path = '/uploads/identity_uploads/pdf';
        $destinationPath = public_path().$path;
  
        // This moved file to server folder
        $file->move($destinationPath,$fileName);

        // save file name in database
        $application_data->id_passport_upload = $fileName;
        $application_data->save();

        // return response
        $response = ['success'=>true, 'data'=>$application_data];
        return response()->json($response, 201);
    }

    public function updateIdDetails(Request $request, $id)
    {
        // Find user with that id
        $application_data = Applications::where('id', '=', $id)->first();

        // Get parameters to update
        $type_of_identification = $request->type_of_identification;
        $id_passport_number     = $request->id_passport_number;

        // save file name in database
        $application_data->type_of_identification = $type_of_identification;
        $application_data->id_passport_number         = $id_passport_number;
        $application_data->save();

        // return response
        $response = ['success'=>true, 'data'=>$application_data];
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
