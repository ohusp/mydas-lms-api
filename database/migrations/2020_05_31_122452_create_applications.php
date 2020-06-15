<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateApplications extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('applications', function (Blueprint $table) {
            $table->increments('id');
            $table->string('first_name');
            $table->string('last_name');
            $table->string('middle_name');
            $table->string('email');
            $table->string('telephone');
            $table->string('password');
            $table->integer('title');
            $table->integer('gender');
            $table->string('dob');
            $table->integer('nationality');
            $table->integer('country_of_residence');
            $table->string('district_province_state');
            $table->text('contact_address');
            $table->integer('disabilities');
            $table->string('parent_guardian_name');
            $table->string('parent_guardian_relationship');
            $table->string('parent_guardian_occupation');
            $table->string('parent_guardian_phone');
            $table->string('passport_photograph');
            $table->integer('type_of_identification');
            $table->string('id_passport_number');
            $table->string('id_passport_upload');
            $table->integer('programme_first_choice');
            $table->integer('programme_second_choice');
            $table->integer('programme_third_choice');
            $table->integer('academic_session');
            $table->integer('admission_intake');
            $table->integer('study_mode');
            $table->string('previous_result_transcript');
            $table->integer('status')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('applications');
    }
}
