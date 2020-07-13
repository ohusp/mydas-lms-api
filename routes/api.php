<?php

use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:api')->get('/applications', function (Request $request) {
    return $request->applications();
});

Route::group(['middleware' => ['jwt.auth','api-header']], function () {
    // ///////////////////// ADMIN ////////////////////////////////////////
    // all routes to protected resources are registered here  
    Route::get('users/list', function(){
        $users = App\User::all();
        
        $response = ['success'=>true, 'data'=>$users];
        return response()->json($response, 201);
    });

    Route::get('applications/list', 'Api\ApplicationsController@index');

    // ///////////////////// USER ////////////////////////////////////////
    Route::put('user/update/{id}', 'ApplyController2@update');
    Route::get('user/get/{id}', 'ApplyController2@show');
    Route::post('user/uploadId/{id}','ApplyController2@updateIdentity');
    Route::put('user/updateIdDetails/{id}','ApplyController2@updateIdDetails');
});
Route::group(['middleware' => 'api-header'], function () {
  
    // The registration and login requests doesn't come with tokens 
    // as users at that point have not been authenticated yet
    // Therefore the jwtMiddleware will be exclusive of them
    //////////////////////// ADMIN ///////////////////////////////////// 
    Route::post('admin/login', 'AdminController@login');
    Route::post('admin/register', 'AdminController@register');

    // ////////////////////////////////////////////////////////////////
    Route::post('user/apply', 'ApplyController@register');
    Route::post('user/login', 'ApplyController@login');
    Route::post('user/forgetpassword', 'ApplyController@forgetpassword');
    
});