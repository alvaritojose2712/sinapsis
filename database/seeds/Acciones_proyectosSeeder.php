<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class Acciones_proyectosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       DB::table("acciones_proyectos")->insert([
       		['id' => "1",
            'nombre' => "Accion 1",
            'tipo' => "Accion",
            'descripcion' => "Descripción de la Acción 1",
            'fecha' => "2018-09-09"],
            ['id' => "2",
            'nombre' => "Accion 2",
            'tipo' => "Accion",
            'descripcion' => "Descripción de la Acción 2",
            'fecha' => "2018-09-09"],
            ['id' => "3",
            'nombre' => "Proyecto 1",
            'tipo' => "Proyecto",
            'descripcion' => "Descripción del Proyecto 1",
            'fecha' => "2018-09-09"],
       ]); 
    }
}
