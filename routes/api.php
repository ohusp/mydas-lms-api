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

    Route::post('/contact/message', 'GeneralController@submitContact');

    Route::post('/user/sign_up', 'UserController@signup');
    Route::post('/user/complete_signup/{username}/{role}', 'UserController@completeSignup');
    Route::post('/user/signin', 'UserController@login');
    Route::post('/user/forget_password', 'UserController@forgetPassword');
    Route::get('/user/reset/{code}/{username}','UserController@reset');
    Route::post('/user/check','UserController@checkResetPassword');
    Route::post('/user/reset_password','UserController@resetPassword');
    Route::get('/user/details/{username}/{role}', 'UserController@getDetails');

    Route::get('/subscription_plans', 'SubscriptionController@getPlans');
    Route::post('/paypal/successful/{username}/{role}', 'SubscriptionController@paypalSuccessful');

    Route::post('/pay/subscription_fee/{username}/{role}', 'SubscriptionController@pay');
    Route::get('/process/subscription_fee', 'SubscriptionController@process');
    Route::post('/verify/subscription_fee/{username}/{role}', 'SubscriptionController@verify');
    Route::get('/get_subscriptions/{username}/{role}', 'SubscriptionController@getSubscriptions');

    Route::post('/renew/subscription/{username}/{role}', 'SubscriptionController@renewSubscription');
    Route::get('/renew/subscription/process', 'SubscriptionController@renewSubscriptionProcess');
    // Route::post('/verify/subscription_fee/{username}/{role}', 'SubscriptionController@verify');

    Route::post('/add/student/{username}/{subscription_id}', 'StudentController@addStudent');
    Route::get('/my_plan/students/{username}/{role}/{plan_id}', 'StudentController@myPlanStudents');

    Route::post('/student/signin', 'StudentController@login');
    Route::post('/student/complete_signup/{username}/{role}', 'StudentController@completeSignup');
    Route::post('/student/forget_password', 'StudentController@forgetPassword');
    Route::get('/student/reset/{code}/{username}','StudentController@reset');
    Route::post('/student/check','StudentController@checkResetPassword');
    Route::post('/student/reset_password','StudentController@resetPassword');
    Route::get('/student/details/{username}/{role}', 'StudentController@getDetails');
    Route::get('/students/{all}/{username}/{role}', 'StudentController@getStudents');
    Route::get('/my_students/{all}/{username}/{role}/{requestFor}', 'StudentController@getMyStudents');
    Route::get('/all_students/{username}/{role}', 'StudentController@getAllStudents');

    Route::post('/manager/sign_in', 'ManagerController@login');
    Route::get('/manager/get/{username}/{role}', 'ManagerController@getDetails');

    Route::post('/teacher/sign_in', 'TeacherController@login');
    Route::post('/add/teacher/{username}/{role}', 'TeacherController@addTeacher');
    Route::get('/get/teacher/{username}/{role}', 'TeacherController@getDetails');
    Route::get('/get/teacher/account/{username}/{role}', 'TeacherController@getAccount');
    Route::get('/get/teacher/payment/history/{username}/{role}', 'TeacherController@getPaymentHistory');
    Route::post('/update/account/details', 'TeacherController@updateAccountDetails');
    Route::get('/teachers/{all}/{username}/{role}', 'TeacherController@getTeachers');
    Route::get('/assigned_teachers/{username}/{role}', 'TeacherController@getAssignedTeachers');
    Route::post('/assign_teacher/{username}/{role}', 'TeacherController@assignTeacher');
    Route::get('/my_teachers/{all}/{username}/{role}', 'TeacherController@getMyTeachers');

    Route::post('/save_timetable/{username}/{role}', 'TimetableController@saveTimetable');
    Route::post('/my_timetable/{username}/{role}/{requestFor}', 'TimetableController@getMyTimetable');
    Route::get('/all_my_timetable/{username}/{role}', 'TimetableController@getAllMyTimetable');
    Route::post('/teacher_entered_class/{username}/{role}', 'TimetableController@teacherEnteredClass');

    Route::post('/add/payment_made/{username}/{role}/{teacherUsername}/{amount}/{accountName}/{accountNumber}/{bank}', 'TeacherController@addPaymentMade');

    Route::post('/update_transaction', 'SubscriptionController@updateSubscriptions');

    // Route::post('/update_timetable', 'TimetableController@updateTimetable');

    









    
    // Route::post('/student/sign_in', 'StudentController@login');
    Route::post('/student/forget_password', 'StudentController@forgetPassword');
    Route::get('/student/reset/{code}/{username}','StudentController@reset');
    Route::post('/student/check','StudentController@checkResetPassword');
    Route::post('/student/reset_password','StudentController@resetPassword');

    Route::post('/admin/sign_in', 'AdminController@login');

    
// });

// Route::group(['middleware' => ['jwt.auth','api-header']], function () {
    Route::get('/get/countries', 'GeneralController@getContries');
    Route::get('/get/institutions', 'GeneralController@getInstitutions');
    Route::get('/get/teacher/statistics/{username}/{role}', 'GeneralController@getTeacherStatistics');
    Route::get('/get/user/statistics/{username}/{role}', 'GeneralController@getUserStatistics');
    Route::get('/get/course/categories', 'GeneralController@getCourseCategories');

    
    
    Route::post('/update_file/{username}/{role}/{file_key}', 'GeneralController@updatePicture');
    Route::post('/update_details/{username}/{role}', 'GeneralController@updateDetails');

    Route::get('/get/support/dept', 'SupportController@getSupportDept');
    Route::post('/submit/ticket/{username}/{role}', 'SupportController@submitTicket');
    Route::get('/get/tickets/{username}/{role}', 'SupportController@getTicket');

    // Route::get('/get/tickets/reply/{username}/{role}', 'SupportController@getTicketReply');
    Route::post('/get/tickets/reply/by_id/{username}/{role}', 'SupportController@getTicketReplyById');

    Route::post('/submit/ticket/reply/{username}/{role}', 'SupportController@submitTicketReply');
    Route::post('/close/ticket/{username}/{role}', 'SupportController@closeTicket');

    Route::get('/admin/get/{username}/{role}', 'AdminController@getDetails');
    Route::post('add/manager/{username}/{role}', 'AdminController@addManager');
    Route::get('get/managers/{username}/{role}', 'AdminController@getManagers');
    
    
    Route::post('update/student/{username}/{role}', 'AdminController@updateStudent');

    
    Route::post('/update/manager/{username}/{role}', 'ManagerController@update');

    Route::get('/get/courses/{username}/{role}', 'CourseController@getCourses');
    Route::post('/save/class/schedule/{username}/{role}', 'CourseController@saveClassSchedule');
    Route::post('/get/class/history/{username}/{role}', 'CourseController@getClassSchedule');
    // Route::post('/enrol/course/{username}/{role}', 'CourseController@enrolCourse');
    Route::get('/get/my_courses/{username}/{role}', 'CourseController@getMyCourses');

    
    Route::post('/update/teacher/{username}/{role}', 'TeacherController@update');


    Route::get('/test/fetch/save', 'ERPConnect@fetchSave');
    Route::post('/get/login_details', 'KiuExamLoginController@getLoginDetails');

    Route::get('/get/test_word', 'KiuExamLoginController@readableRandomString');
    Route::post('/get/password', 'KiuExamLoginController@generatePassword');
// });