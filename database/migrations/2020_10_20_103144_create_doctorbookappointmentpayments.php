<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDoctorbookappointmentpayments extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('doctorbookappointmentpayments', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('appointment_id')->nullable();
            $table->string('billing_amount_currency')->nullable();
            $table->integer('billing_amount_value')->nullable();
            $table->string('billing_email_address')->nullable();
            $table->string('billing_name')->nullable();
            $table->string('billing_orderID')->nullable();
            $table->string('billing_payerID')->nullable();
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
        Schema::dropIfExists('doctorbookappointmentpayments');
    }
}
