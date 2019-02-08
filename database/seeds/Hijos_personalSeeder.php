<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class Hijos_personalSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table("hijos_personals")->insert([
        	['genero_hijo' => "Masculino",
            'nombres_apellidos_hijo' => "Alvaro Junior",
            'fecha_nacimiento_hijo' => "2010-09-09",
            'estudiante_hijo' => "0",
            'discapacidad_hijo' => "0",
            'cedula_representante' => "26767116"],
            ['genero_hijo' => "Femenino",
            'nombres_apellidos_hijo' => "Mariangela",
            'fecha_nacimiento_hijo' => "2014-09-09",
            'estudiante_hijo' => "0",
            'discapacidad_hijo' => "0",
            'cedula_representante' => "26767116"],
        ]);
    }
}
