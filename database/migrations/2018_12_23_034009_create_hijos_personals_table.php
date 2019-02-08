<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHijosPersonalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hijos_personals', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('genero_hijo');
            $table->string('nombres_apellidos_hijo');
            $table->string('fecha_nacimiento_hijo');
            $table->boolean('estudiante_hijo');
            $table->boolean('discapacidad_hijo');

            $table->integer('cedula_representante')->index();
            $table->foreign('cedula_representante')
            ->references('cedula')
            ->on('personals')
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
        Schema::dropIfExists('hijos_personals');
    }
}
