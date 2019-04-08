<?php

use Illuminate\Database\Seeder;

class AdicPersonal extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table("adic_personals")->insert([
            [
                "id_nomina"=>1,
                "cedula"=>13149202,
                "incluir_excluir" => 1
            ],
            [
                "id_nomina"=>1,
                "cedula"=>9868006,
                "incluir_excluir" => 1
            ],
            [
                "id_nomina"=>1,
                "cedula"=>7119835,
                "incluir_excluir" => 1
            ],
            
        ]);
    }
}
