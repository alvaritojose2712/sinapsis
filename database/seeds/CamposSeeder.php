<?php

use Illuminate\Database\Seeder;

class CamposSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Illuminate\Support\Facades\DB::table("sno_campos_personals")->insert([
            ["campo"=>"nacionalidad"],
            ["campo"=>"categoria"],
            ["campo"=>"cargo"],
            ["campo"=>"dedicacion"],
            ["campo"=>"estado"],
            ["campo"=>"estatus"],
            ["campo"=>"grado_instruccion"],
            ["campo"=>"profesion"],
            ["campo"=>"departamento_adscrito"],
            ["campo"=>"cargo_departamento"],
            ["campo"=>"estado_civil"],
            ["campo"=>"genero"],
        ]);
    }
}
