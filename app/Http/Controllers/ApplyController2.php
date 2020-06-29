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

        $application_data = Applications::where('id', '=', $id)->first();

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
