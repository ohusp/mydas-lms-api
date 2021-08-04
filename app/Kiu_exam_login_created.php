<?php

// namespace App;

// // use Illuminate\Contracts\Auth\MustVerifyEmail;
// use Illuminate\Notifications\Notifiable;
// use Illuminate\Foundation\Auth\User as Authenticatable;

// use Tymon\JWTAuth\Contracts\JWTSubject;
// use Illuminate\Database\Eloquent\Model;
// use Laratrust\Traits\LaratrustUserTrait;

// class Generalappointment extends Authenticatable implements JWTSubject
namespace App;
  
use Illuminate\Database\Eloquent\Model;

class Kiu_exam_login_created extends Model
{
    protected $connection = 'mysql2';
    protected $table = 'students_account_created';

    protected $fillable = [
        'firstname',  
        'lastname',  
        'username',
        'password',
        'email',  
    ];
  
}