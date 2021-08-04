<?php

use Illuminate\Support\Facades\Route;
use App\Mail\MyTestMail;
use App\Mail\UserRegisteredmail;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


// Route::get('applications', 'Api\ApplicationsController@index');

// Route::get('my-Test-mail','HomeController@myTestMail');
Route::get('my-Test-mail', function(){
    return new MyTestMail();
});

// Route::get('/{path?}', [
//     'uses' => 'PasswordController@show',
//     'as' => 'react',
//     'where' => ['path' => '.*']
// ]);

Route::get('/payment', function() {
    return view('payment');
});

// Laravel 5.1.17 and above
// Route::post('/pay', 'PaymentController@redirectToGateway')->name('pay');

// Route::get('/payment/callback', 'PaymentController@handleGatewayCallback');

// /////////////////////// FLUTTER WAVE /////////////////////////////////////////////////////////
// Route::post('/pay', 'RaveController@initialize')->name('pay');
// Route::post('/rave/callback', 'RaveController@callback')->name('callback');
// ///////////////////////////// QUICK PAY ////////////////////////////////////////////////////////
Route::post('check/username', 'ConcertController@checkUsername');
Route::post('check/email', 'ConcertController@checkEmail');
Route::post('/paypal_quick_pay', 'PaypalController@quickPay');
Route::post('/flutterwave_quick_pay', 'FlutterwaveController@quickPay');
Route::get('/flutterwave_quick_process', 'FlutterwaveController@quickProcess');
Route::post('/flutterwave_quick_verify', 'FlutterwaveController@quickVerify');

////////////////////////////////// CONCERT ////////////////////////////////////////////////////////
Route::post('/number/ticket/{id}', 'ConcertController@numberOfTicket');
Route::post('/paypal_pay', 'PaypalController@pay');
Route::post('/flutterwave_pay', 'FlutterwaveController@pay');
Route::get('/flutterwave_process', 'FlutterwaveController@process');
Route::post('/flutterwave_verify', 'FlutterwaveController@verify');
Route::post('/check/concert/passcode/{id}', 'ConcertController@checkIfExist');
Route::post('/check/concert/{id}', 'ConcertController@checkIfConcertBooked');
Route::post('/nominate/beneficiary/{id}', 'ConcertController@nominateBeneficiary');

// ///////////////////////////// DOCTOR ////////////////////////////////////////////////////////////////
Route::post('/patient/book_doc_appointment_flutterwave_pay/{doctor_id}/{patient_id}', 'FlutterwaveController@docAppointmentPay');
Route::get('/flutterwave_doc_appointment_process', 'FlutterwaveController@docAppointmentProcess');
Route::post('/flutterwave_doc_appointment_verify', 'FlutterwaveController@docAppointmentVerify');

// ///////////////////////////// LAB ////////////////////////////////////////////////////////////////
Route::post('/patient/book_lab_appointment_flutterwave_pay/{lab_id}/{test_id}/{patient_id}', 'FlutterwaveController@labAppointmentPay');
Route::get('/flutterwave_lab_appointment_process', 'FlutterwaveController@labAppointmentProcess');
Route::post('/flutterwave_lab_appointment_verify', 'FlutterwaveController@labAppointmentVerify');

// ///////////////////////////// PORT ////////////////////////////////////////////////////////////////
Route::post('/patient/book_port_appointment_flutterwave_pay/{port_id}/{patient_id}', 'FlutterwaveController@portAppointmentPay');
Route::get('/flutterwave_port_appointment_process', 'FlutterwaveController@portAppointmentProcess');
Route::post('/flutterwave_port_appointment_verify', 'FlutterwaveController@portAppointmentVerify');

// ///////////////////////////// CHECKOUT ////////////////////////////////////////////////////////////////
Route::post('/patient/product/checkout/flutterwave_pay/{pharm_id}/{patient_id}', 'FlutterwaveController@checkoutPay');
Route::get('/flutterwave_checkout_process', 'FlutterwaveController@checkoutProcess');
Route::post('/flutterwave_checkout_verify', 'FlutterwaveController@checkoutVerify');