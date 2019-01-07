<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePersonalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('personals', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string("nombre");
            $table->string("apellido");
            $table->integer("cedula")->unique();
            $table->string("nacionalidad");
            $table->string("genero");
            $table->string("fecha_nacimiento");
            $table->string("telefono_1");
            $table->string("telefono_2");
            $table->string("correo")->unique();
            $table->string("categoria");
            $table->string("cargo");
            $table->string("dedicacion");
            $table->string("estado");
            $table->string("estatus");
            $table->string("grado_instruccion");
            $table->string("fecha_ingreso");
            $table->boolean("caja_ahorro");
            $table->string("cuenta_bancaria");
            $table->string("antiguedad_otros_ieu");
            $table->integer("hrs_nocturnas");
            $table->integer("hrs_feriadas");
            $table->integer("hrs_diurnas");
            $table->integer("hrs_feriadas_nocturnas");
            $table->string("profesion");
            $table->string("departamento_adscrito");
            $table->string("cargo_desempeñado_departamento");
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
        Schema::dropIfExists('personals');
    }
}
