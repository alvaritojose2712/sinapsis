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
            'nombre' => "ACC1 | Acción centralizada 1",
            'tipo' => "Acción",
            'descripcion' => "Dirección y Coordinación de los Gastos de los Trabajadores",
            'fecha' => "2019-01-01"],
           
            ['id' => "2",
            'nombre' => "ACC2 | Acción centralizada 2",
            'tipo' => "Acción",
            'descripcion' => "Gestión administrativa",
            'fecha' => "2019-01-01"],
            ['id' => "3",
            'nombre' => "ACC3 | Acción centralizada 3",
            'tipo' => "Acción",
            'descripcion' => "Previsión y Protección Social",
            'fecha' => "2019-01-01"],

            ['id' => "4",
            'nombre' => "PR1 | Proyecto 1",
            'tipo' => "Proyecto",
            'descripcion' => "INGRESO, PROSECUCIÓN Y EGRESO DE LOS ESTUDIANTES EN PREGRADO",
            'fecha' => "2019-01-01"],

            ['id' => "5",
            'nombre' => "PR3 | Proyecto 3",
            'tipo' => "Proyecto",
            'descripcion' => "INVESTIGACIÓN Y CREACIÓN INTELECTUAL",
            'fecha' => "2019-01-01"],

            ['id' => "6",
            'nombre' => "PR4 | Proyecto 4",
            'tipo' => "Proyecto",
            'descripcion' => "SERVICIO, ASISTENCIA Y APOYO ACADÉMICO, TÉCNICO Y PRODUCTIVO",
            'fecha' => "2019-01-01"],

            ['id' => "7",
            'nombre' => "PR5 | Proyecto 5",
            'tipo' => "Proyecto",
            'descripcion' => "SERVICIO DE SOPORTE Y APOYO A LA PROSECUCIÓN ESTUDIANTIL",
            'fecha' => "2019-01-01"],

            ['id' => "8",
            'nombre' => "PR6 | Proyecto 6",
            'tipo' => "Proyecto",
            'descripcion' => "MANTENIMIENTO DE LA INFRAESTRUCTURA Y DOTACIÓN DE INSUMOS DE LAS INSTITUCIONES DE EDUCACIÓN UNIVERSITARIA",
            'fecha' => "2019-01-01"],
            
       ]); 
    }
}
