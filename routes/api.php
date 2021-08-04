<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

// Route::group(['middleware' => 'api-header'], function () {
    Route::post('/student/sign_up', 'StudentController@register');
    Route::put('/student/complete_signup/{email}/{role}', 'StudentController@completeSignup');
    Route::post('/student/sign_in', 'StudentController@login');
    Route::post('/student/forget_password', 'StudentController@forgetPassword');
    Route::get('/student/reset/{code}/{email}','StudentController@reset');
    Route::post('/student/check','StudentController@checkResetPassword');
    Route::post('/student/reset_password','StudentController@resetPassword');

    Route::post('/admin/sign_in', 'AdminController@login');

    Route::post('/manager/sign_in', 'ManagerController@login');
    Route::post('/teacher/sign_in', 'TeacherController@login');
// });

// Route::group(['middleware' => ['jwt.auth','api-header']], function () {
    Route::get('/get/countries', 'GeneralController@getContries');
    Route::get('/get/institutions', 'GeneralController@getInstitutions');
    Route::get('/get/statistics', 'GeneralController@getStatistics');
    Route::get('/get/course/categories', 'GeneralController@getCourseCategories');

    Route::get('/subscription_plans', 'SubscriptionController@getPlans');
    Route::post('/pay/subscription_fee/{email}/{role}', 'SubscriptionController@pay');
    Route::get('/process/subscription_fee', 'SubscriptionController@process');
    Route::post('/verify/subscription_fee/{email}/{role}', 'SubscriptionController@verify');
    
    Route::get('/student/get/{email}/{role}', 'StudentController@getDetails');
    Route::post('/update_file/{email}/{role}/{file_key}', 'GeneralController@updatePicture');
    Route::put('/update_details/{email}/{role}', 'GeneralController@updateDetails');

    Route::get('/get/support/dept', 'SupportController@getSupportDept');
    Route::post('/submit/ticket/{email}/{role}', 'SupportController@submitTicket');
    Route::get('/get/tickets/{email}/{role}', 'SupportController@getTicket');
    Route::get('/get/tickets/reply/{email}/{role}', 'SupportController@getTicketReply');
    Route::post('/get/tickets/reply/by_id/{email}/{role}', 'SupportController@getTicketReplyById');

    Route::post('/submit/ticket/reply/{email}/{role}', 'SupportController@submitTicketReply');

    Route::get('/admin/get/{email}/{role}', 'AdminController@getDetails');
    Route::post('add/manager/{email}/{role}', 'AdminController@addManager');
    Route::get('get/managers/{email}/{role}', 'AdminController@getManagers');
    
    Route::get('get/students/{email}/{role}', 'AdminController@getStudents');
    Route::put('update/student/{email}/{role}', 'AdminController@updateStudent');

    Route::get('/manager/get/{email}/{role}', 'ManagerController@getDetails');
    Route::put('/update/manager/{email}/{role}', 'ManagerController@update');

    Route::get('/get/courses/{email}/{role}', 'CourseController@getCourses');
    Route::post('/save/class/schedule/{email}/{role}', 'CourseController@saveClassSchedule');
    Route::post('/get/class/history/{email}/{role}', 'CourseController@getClassSchedule');
    // Route::post('/enrol/course/{email}/{role}', 'CourseController@enrolCourse');
    Route::get('/get/my_courses/{email}/{role}', 'CourseController@getMyCourses');

    Route::get('/get/teacher/{email}/{role}', 'TeacherController@getDetails');
    Route::put('/update/teacher/{email}/{role}', 'TeacherController@update');


    Route::get('/test/fetch/save', 'ERPConnect@fetchSave');
    Route::post('/get/login_details', 'KiuExamLoginController@getLoginDetails');

    Route::get('/get/test_word', 'KiuExamLoginController@readableRandomString');
    Route::post('/get/password', 'KiuExamLoginController@generatePassword');
// });