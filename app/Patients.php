<?php

namespace App;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Database\Eloquent\Model;
use Laratrust\Traits\LaratrustUserTrait;

class Patients extends Authenticatable implements JWTSubject

{
    use LaratrustUserTrait;
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name', 'last_name', 'middle_name', 'email', 'zip_code', 'telephone', 'password', 'auth_token', 'ev_code', 'title', 'gender', 'dob', 'nationality', 'country_of_residence', 'district_province_state', 'contact_address', 'height', 'weight', 'disabilities', 'next_kin_name', 'next_kin_relationship', 'next_kin_occupation', 'next_kin_phone', 'next_kin_email', 'med_currently_using', 'med_allergies', 'med_blood_group', 'med_underlying_conditions', 'med_family_medical_history', 'med_hypertensive', 'med_diabetic', 'profile_picture', 'status'
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