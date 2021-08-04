<?php

namespace App;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Database\Eloquent\Model;
use Laratrust\Traits\LaratrustUserTrait;

class Managers extends Authenticatable implements JWTSubject

{
    use LaratrustUserTrait;
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'username', 
        'first_name', 
        'last_name', 
        'email', 
        'zip_code', 
        'telephone', 
        'password', 
        'auth_token', 
        'ev_code', 
        'allow_password_change', 
        'gender', 
        'dob', 
        'institution',
        'nationality', 
        'country_of_residence', 
        'district_province_state', 
        'address', 
        'profile_picture', 
        'status'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }
}