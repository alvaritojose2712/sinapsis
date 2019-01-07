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
        	'genero' => "MASCULINO",
            'nombres_apellidos' => "Alvaro Junior",
            'fecha_nacimiento' => "2010-09-09",
            'estudiante' => "0",
            'discapacidad' => "0",
            'cedula_representante' => "26767116"
        ]);
    }
}
