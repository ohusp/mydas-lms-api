<?php

namespace App;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Database\Eloquent\Model;
use Laratrust\Traits\LaratrustUserTrait;

class Applicationsnew extends Authenticatable implements JWTSubject

{
    use LaratrustUserTrait;
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name', 'last_name', 'middle_name', 'email', 'zip_code', 'telephone', 'password', 'auth_token', 'ev_code', 'title', 'gender', 'dob', 'nationality', 'country_of_residence', 'district_province_state', 'contact_address', 'disabilities', 'parent_guardian_name', 'parent_guardian_relationship', 'parent_guardian_occupation', 'parent_guardian_phone', 'passport_photograph', 'type_of_identification', 'id_passport_number', 'id_passport_upload', 'programme_first_choice', 'programme_second_choice', 'programme_third_choice', 'academic_session', 'admission_intake', 'study_mode', 'previous_result_transcript', 'status'
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