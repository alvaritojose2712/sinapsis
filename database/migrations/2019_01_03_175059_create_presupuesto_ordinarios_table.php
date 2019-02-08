<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePresupuestoOrdinariosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('presupuesto_ordinarios', function (Blueprint $table) {
            $table->engine = 'InnoDB';

            $table->increments('id');
            $table->string('denominacion');
            $table->string('partida',20)->index();
            $table->foreign("partida")->references("codigo")->on("partidas_presupuestarias")
            ->onDelete('cascade')
            ->onUpdate('cascade');
            $table->integer('ae')->unsigned();
            $table->foreign('ae')->references('id')->on('acciones_especificas')
            ->onDelete('cascade')
            ->onUpdate('cascade');
            $table->decimal("monto",15,5);
            $table->date("fecha");
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
        Schema::dropIfExists('presupuesto_ordinarios');
    }
}
