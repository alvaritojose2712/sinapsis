<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAdicPersonalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('adic_personals', function (Blueprint $table) {
            $table->increments('id');
            $table->integer("id_nomina")->unsigned();
            $table->foreign("id_nomina")
            ->references('id')
            ->on('sno_nominas')
            ->onDelete('cascade')
            ->onUpdate('cascade');
            $table->integer('cedula')->index();
            $table->foreign('cedula')
            ->references('cedula')
            ->on('personals')
            ->onDelete('cascade')
            ->onUpdate('cascade');
            $table->boolean("incluir_excluir"); //1=Incluir 0=Excluir
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
        Schema::dropIfExists('adic_personals');
    }
}
