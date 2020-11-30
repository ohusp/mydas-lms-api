<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDoctorbookappointments extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('doctorbookappointments', function (Blueprint $table) {
            $table->increments('id');
            $table->string('date')->nullable();
            $table->string('time')->nullable();
            $table->string('subject')->nullable();
            $table->text('message')->nullable();
            $table->integer('doc_id')->nullable();
            $table->string('doc_username')->nullable();
            $table->string('doc_first_name')->nullable();
            $table->string('doc_last_name')->nullable();
            $table->string('doc_middle_name')->nullable();
            $table->integer('patient_id')->nullable();
            $table->string('patient_username')->nullable();
            $table->string('patient_first_name')->nullable();
            $table->string('patient_last_name')->nullable();
            $table->string('patient_middle_name')->nullable();
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
        Schema::dropIfExists('doctorbookappointments');
    }
}
