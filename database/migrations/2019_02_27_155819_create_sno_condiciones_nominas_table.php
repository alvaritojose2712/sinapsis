<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSnoCondicionesNominasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sno_condiciones_nominas', function (Blueprint $table) {
            $table->increments('id');
            $table->string('valor')->index();
            $table->foreign('valor')
            ->references("valor")
            ->on("sno_valores_personals")
            ->onUpdate("cascade");
            $table->integer("id_nomina")->unsigned();
            $table->foreign("id_nomina")
            ->references("id")
            ->on("sno_nominas")
            ->onUpdate("cascade");
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
        Schema::dropIfExists('sno_condiciones_nominas');
    }
}
