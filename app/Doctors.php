<?php

namespace App;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Database\Eloquent\Model;
use Laratrust\Traits\LaratrustUserTrait;

class Doctors extends Authenticatable implements JWTSubject

{
    use LaratrustUserTrait;
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'username', 'first_name', 'last_name', 'middle_name', 'email', 'zip_code', 'telephone', 'password', 'auth_token', 'ev_code', 'title', 'gender', 'gender_others', 'dob', 'nationality', 'country_of_residence', 'district_province_state', 'contact_address', 'area_of_specialization', 'available_on_appointment', 'available_on_emergency', 'available_by_time', 
        'share_med_history', 
        'profile_picture', 
        'medical_certificate', 
        'medical_license', 
        'bank_name', 
        'bank_account_name', 'bank_account_number', 
        'consultation_fee', 'hospital', 'status'
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