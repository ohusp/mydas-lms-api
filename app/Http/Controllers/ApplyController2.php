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
    public function store(Request $request)
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
