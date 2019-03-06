<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSnoCondicionesFormulasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sno_condiciones_formulas', function (Blueprint $table) {
            $table->increments('id');
            $table->string('valor')->index();
            $table->foreign('valor')
            ->references("valor")
            ->on("sno_valores_personals")
            ->onUpdate("cascade");
            $table->integer("id_formula")->unsigned();
            $table->foreign("id_formula")
            ->references("id")
            ->on("sno_formulas")
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
        Schema::dropIfExists('sno_condiciones_formulas');
    }
}
