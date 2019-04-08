<?php

use Illuminate\Database\Seeder;

class AdicFormula extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table("adic_formulas")->insert([
            [
                "id_nomina"=>1,
                "cedula"=>13149202,
                "id_formula" => 53,
            ],
            [
                "id_nomina"=>1,
                "cedula"=>9868006,
                "id_formula" => 53,
            ],
            [
                "id_nomina"=>1,
                "cedula"=>9868006,
                "id_formula" => 54,
            ],
            
        ]);
    }
}
