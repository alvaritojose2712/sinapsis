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
            $table->string('genero');
            $table->string('nombres_apellidos');
            $table->string('fecha_nacimiento');
            $table->boolean('estudiante');
            $table->boolean('discapacidad');

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
