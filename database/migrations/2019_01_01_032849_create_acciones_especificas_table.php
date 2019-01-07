<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAccionesEspecificasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('acciones_especificas', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('nombre');
            $table->text('descripcion');
            $table->date('fecha');
           
            $table->integer('acciones_proyectos_id')->unsigned();
            $table->foreign('acciones_proyectos_id')->references('id')->on('acciones_proyectos');
            $table->string('partida',20)->index();
            $table->foreign('partida')->references('codigo')->on('partidas_presupuestarias');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('acciones_especificas');
    }
}
