<?php

use Illuminate\Database\Seeder;

class ValoresPersonalSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Illuminate\Support\Facades\DB::table("sno_valores_personals")->insert([
            
            ["valor"=>"ADMINISTRATIVO","campo"=>"categoria"],
            ["valor"=>"OBRERO","campo"=>"categoria"],
            ["valor"=>"DOCENTE","campo"=>"categoria"],
            ["valor"=>"CATEGORIA","campo"=>"categoria"],

            ["valor"=>"V","campo"=>"nacionalidad"],
            ["valor"=>"E","campo"=>"nacionalidad"],

            ["valor"=>"CARGO","campo"=>"cargo"],
            ["valor"=>"APOYO NIVEL 1","campo"=>"cargo"],
            ["valor"=>"APOYO NIVEL 2","campo"=>"cargo"],
            ["valor"=>"APOYO NIVEL 3","campo"=>"cargo"],
            ["valor"=>"APOYO NIVEL 4","campo"=>"cargo"],
            ["valor"=>"APOYO NIVEL 5","campo"=>"cargo"],
            ["valor"=>"PROFESIONAL NIVEL 11","campo"=>"cargo"],
            ["valor"=>"PROFESIONAL NIVEL 12","campo"=>"cargo"],
            ["valor"=>"PROFESIONAL NIVEL 13","campo"=>"cargo"],
            ["valor"=>"PROFESIONAL NIVEL 14","campo"=>"cargo"],
            ["valor"=>"PROFESIONAL NIVEL 15","campo"=>"cargo"],
            ["valor"=>"TÉCNICO NIVEL 6","campo"=>"cargo"],
            ["valor"=>"TÉCNICO NIVEL 7","campo"=>"cargo"],
            ["valor"=>"TÉCNICO NIVEL 8","campo"=>"cargo"],
            ["valor"=>"TÉCNICO NIVEL 9","campo"=>"cargo"],
            ["valor"=>"TÉCNICO NIVEL 10","campo"=>"cargo"],
            ["valor"=>"1/ 2/ 3","campo"=>"cargo"],
            ["valor"=>"4","campo"=>"cargo"],
            ["valor"=>"5","campo"=>"cargo"],
            ["valor"=>"6","campo"=>"cargo"],
            ["valor"=>"7","campo"=>"cargo"],
            ["valor"=>"AGREGADO","campo"=>"cargo"],
            ["valor"=>"ASISTENTE","campo"=>"cargo"],
            ["valor"=>"ASOCIADO","campo"=>"cargo"],
            ["valor"=>"AUXILIAR DOCENTE I","campo"=>"cargo"],
            ["valor"=>"AUXILIAR DOCENTE II","campo"=>"cargo"],
            ["valor"=>"AUXILIAR DOCENTE III","campo"=>"cargo"],
            ["valor"=>"INSTRUCTOR","campo"=>"cargo"],
            ["valor"=>"TITULAR","campo"=>"cargo"],

            ["valor"=>"DEDICACION","campo"=>"dedicacion"],
            ["valor"=>"TIEMPO COMPLETO","campo"=>"dedicacion"],
            ["valor"=>"EXCLUSIVA","campo"=>"dedicacion"],
            ["valor"=>"MEDIO TIEMPO","campo"=>"dedicacion"],
            ["valor"=>"TCV 2 Hrs","campo"=>"dedicacion"],
            ["valor"=>"TCV 3 Hrs","campo"=>"dedicacion"],
            ["valor"=>"TCV 4 Hrs","campo"=>"dedicacion"],
            ["valor"=>"TCV 5 Hrs","campo"=>"dedicacion"],
            ["valor"=>"TCV 6 Hrs","campo"=>"dedicacion"],
            ["valor"=>"TCV 7 Hrs","campo"=>"dedicacion"],

            ["valor"=>"Ninguno","campo"=>"grado_instruccion"],
            ["valor"=>"Primaria","campo"=>"grado_instruccion"],
            ["valor"=>"Bachiller","campo"=>"grado_instruccion"],
            ["valor"=>"Técnico Superior Universitario","campo"=>"grado_instruccion"],
            ["valor"=>"Universitario","campo"=>"grado_instruccion"],
            ["valor"=>"Maestría","campo"=>"grado_instruccion"],
            ["valor"=>"PostGrado","campo"=>"grado_instruccion"],
            ["valor"=>"Doctorado","campo"=>"grado_instruccion"],

            ["valor"=>"ESTADO","campo"=>"estado"],
            ["valor"=>"ACTIVO","campo"=>"estado"],
            ["valor"=>"JUBILADO","campo"=>"estado"],
            ["valor"=>"PENSIONADO","campo"=>"estado"],
            ["valor"=>"INACTIVO","campo"=>"estado"],

            ["valor"=>"ESTATUS","campo"=>"estatus"],
            ["valor"=>"FIJO","campo"=>"estatus"],
            ["valor"=>"CONTRATADO","campo"=>"estatus"],
            ["valor"=>"ALTO NIVEL","campo"=>"estatus"],

            ["valor"=>"Informático","campo"=>"profesion"],
            ["valor"=>"Ing. Mecánico","campo"=>"profesion"],

            ["valor"=>"PNFI","campo"=>"departamento_adscrito"],
            ["valor"=>"Presupuesto","campo"=>"departamento_adscrito"],

            ["valor"=>"Coordinador","campo"=>"cargo_departamento"],

            ["valor"=>"Soltero","campo"=>"estado_civil"],
            ["valor"=>"Casado","campo"=>"estado_civil"],
            ["valor"=>"Divorciado","campo"=>"estado_civil"],
            ["valor"=>"Viudo","campo"=>"estado_civil"],

            ["valor"=>"Masculino","campo"=>"genero"],
            ["valor"=>"Femenino","campo"=>"genero"],
            
            ["valor"=>0,"campo"=>"boolean"],
            ["valor"=>1,"campo"=>"boolean"],
        ]);
    }
}