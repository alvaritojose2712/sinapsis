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
            $table->string('nombre')->unique();
            $table->text('descripcion');
            $table->date('fecha');
           
            $table->integer('acciones_proyectos_id')->unsigned();
            $table->foreign('acciones_proyectos_id')->references('id')
            ->on('acciones_proyectos')
            ->onDelete('cascade')
            ->onUpdate('cascade');
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
        Schema::dropIfExists('acciones_especificas');
    }
}
