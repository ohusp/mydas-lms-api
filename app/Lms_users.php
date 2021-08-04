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

class Lms_users extends Model
{
    protected $connection = 'mysql2';
    protected $table = 'mdl_user';

    protected $fillable = [
        'firstname',  
        'lastname',  
        'middlename',  
        'phone1',    
        'gender',   
        'institution',  
        'department',   
        'country',     
        'city',   
        'address', 
    ];
  
}