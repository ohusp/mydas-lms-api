<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePortreports extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('portreports', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('patient_id')->nullable();
            $table->integer('port_id')->nullable();
            $table->string('age')->nullable();
            $table->string('password_number')->nullable();
            $table->string('vessel')->nullable();
            $table->string('arrival_from')->nullable();
            $table->text('observations')->nullable();
            $table->text('recommendations')->nullable();
            $table->string('name_of_officer')->nullable();
            $table->string('position')->nullable();
            $table->string('date')->nullable();
            $table->string('time')->nullable();
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
        Schema::dropIfExists('portreports');
    }
}
