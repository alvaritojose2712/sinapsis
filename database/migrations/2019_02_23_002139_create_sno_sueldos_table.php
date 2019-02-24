<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSnoSueldosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sno_sueldos', function (Blueprint $table) {
            $table->increments('id');
            $table->string('categoria')->index();
            $table->foreign("categoria")
            ->references('valor')
            ->on('sno_valores_personals')
            ->onUpdate('cascade');
            $table->string('cargo')->index();
            $table->foreign("cargo")
            ->references('valor')
            ->on('sno_valores_personals')
            ->onUpdate('cascade');
            $table->string('dedicacion')->index();
            $table->foreign("dedicacion")
            ->references('valor')
            ->on('sno_valores_personals')
            ->onUpdate('cascade');
            $table->decimal('salario',10,2);
            $table->date('fecha');
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
        Schema::dropIfExists('sno_sueldos');
    }
}
