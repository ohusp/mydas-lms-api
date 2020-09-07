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