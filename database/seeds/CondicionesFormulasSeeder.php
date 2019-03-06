<?php

use Illuminate\Database\Seeder;

class CondicionesFormulasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $arr = [];
        $all = [
            ["ACTIVO",1],
            ["ACTIVO",2],
            ["ACTIVO",3],
            ["ACTIVO",4],
            ["ACTIVO",5],
            ["ACTIVO",6],
            ["ACTIVO",7],
            ["ACTIVO",8],
            ["ACTIVO",9],
            ["ACTIVO",10],
            ["ACTIVO",11],
            ["ACTIVO",12],
            ["ACTIVO",13],
            ["ACTIVO",14],
            ["ACTIVO",15],
            ["ACTIVO",16],
            ["ACTIVO",17],
            ["ACTIVO",18],
            ["ACTIVO",19],
            ["ACTIVO",20],
            ["ACTIVO",21],
            ["ACTIVO",22],
            ["ACTIVO",23],
            ["ACTIVO",24],
            ["ACTIVO",25],
            ["ACTIVO",26],
        ];
        foreach ($all as $value) {
            array_push($arr,[
                "valor" => $value[0],
                "id_formula" => $value[1],
            ]);
        }
        DB::table("sno_condiciones_formulas")->insert($arr);
    }
}
