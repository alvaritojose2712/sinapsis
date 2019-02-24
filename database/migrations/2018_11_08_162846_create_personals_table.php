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
            $table->string("nacionalidad")->index();
            $table->foreign('nacionalidad')->references('valor')->on('sno_valores_personals')
            ->onUpdate('cascade');
            $table->string("genero")->index();
            $table->foreign('genero')->references('valor')->on('sno_valores_personals')
            ->onUpdate('cascade');
            $table->string("estado_civil")->index();
            $table->foreign('estado_civil')->references('valor')->on('sno_valores_personals')
            ->onUpdate('cascade');
            $table->text("direccion");
            $table->string("fecha_nacimiento");
            $table->string("telefono_1");
            $table->string("telefono_2");
            $table->string("correo");
            $table->string("categoria")->index();
            $table->foreign('categoria')->references('valor')->on('sno_valores_personals')
            ->onUpdate('cascade');
            $table->string("cargo")->index();
            $table->foreign('cargo')->references('valor')->on('sno_valores_personals')
            ->onUpdate('cascade');
            $table->string("dedicacion")->index();
            $table->foreign('dedicacion')->references('valor')->on('sno_valores_personals')
            ->onUpdate('cascade');
            $table->string("estado")->index();
            $table->foreign('estado')->references('valor')->on('sno_valores_personals')
            ->onUpdate('cascade');
            $table->string("estatus")->index();
            $table->foreign('estatus')->references('valor')->on('sno_valores_personals')
            ->onUpdate('cascade');
            $table->string("grado_instruccion")->index();
            $table->foreign('grado_instruccion')->references('valor')->on('sno_valores_personals')
            ->onUpdate('cascade');
            $table->string("fecha_ingreso");
            $table->boolean("caja_ahorro");
            $table->string("cuenta_bancaria");
            $table->string("antiguedad_otros_ieu");
            $table->integer("hrs_nocturnas");
            $table->integer("hrs_feriadas");
            $table->integer("hrs_diurnas");
            $table->integer("hrs_feriadas_nocturnas");
            $table->string("profesion")->index();
            $table->foreign('profesion')->references('valor')->on('sno_valores_personals')
            ->onUpdate('cascade');
            $table->string("departamento_adscrito")->index();
            $table->foreign('departamento_adscrito')->references('valor')->on('sno_valores_personals')
            ->onUpdate('cascade');
            $table->string("cargo_departamento")->index();
            $table->foreign('cargo_departamento')->references('valor')->on('sno_valores_personals')
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
        Schema::dropIfExists('personals');
    }
}
