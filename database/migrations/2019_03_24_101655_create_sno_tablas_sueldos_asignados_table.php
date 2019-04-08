<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSnoTablasSueldosAsignadosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sno_tablas_sueldos_asignados', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('id_nomina')->unsigned();
            $table->foreign('id_nomina')
            ->references('id')
            ->on('sno_nominas')
            ->onDelete('cascade')
            ->onUpdate('cascade');
            
            $table->integer('id_tabla_sueldo')->unsigned();
            $table->foreign('id_tabla_sueldo')
            ->references('id')
            ->on('sno_tablas_sueldos')
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
        Schema::dropIfExists('sno_tablas_sueldos_asignados');
    }
}
