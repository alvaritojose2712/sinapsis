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
            ["ACTIVO",1,"igual",0,""],
            ["JUBILADO",1,"igual",0,""],
            ["DOCENTE",1,"igual",0,""],
            ["TIEMPO COMPLETO",1,"igual",0,""],
            ["EXCLUSIVA",1,"igual",0,""],
            [1,1,"igual",1,"discapacidad_hijo"],
            ["ACTIVO",2,"igual",0,""],
            ["ACTIVO",3,"igual",0,""],
            ["ACTIVO",4,"igual",0,""],
            ["ACTIVO",5,"igual",0,""],
            ["ACTIVO",6,"igual",0,""],
            ["ACTIVO",7,"igual",0,""],
            ["ACTIVO",8,"igual",0,""],
            ["ACTIVO",9,"igual",0,""],
            ["ACTIVO",10,"igual",0,""],
            ["ACTIVO",11,"igual",0,""],
            ["ACTIVO",12,"igual",0,""],
            ["ACTIVO",13,"igual",0,""],
            ["ACTIVO",14,"igual",0,""],
            ["ACTIVO",15,"igual",0,""],
            ["ACTIVO",16,"igual",0,""],
            ["ACTIVO",17,"igual",0,""],
            ["ACTIVO",18,"igual",0,""],
            ["ACTIVO",19,"igual",0,""],
            ["ACTIVO",20,"igual",0,""],
            ["ACTIVO",21,"igual",0,""],
            ["ACTIVO",22,"igual",0,""],
            ["ACTIVO",23,"igual",0,""],
            ["ACTIVO",24,"igual",0,""],
            ["ACTIVO",25,"igual",0,""],
            ["ACTIVO",26,"igual",0,""],
        ];
        foreach ($all as $value) {
            array_push($arr,[
                "valor" => $value[0],
                "id_formula" => $value[1],
                "operador" => $value[2],
                "type" => $value[3],
                "campo" => $value[4],
            ]);
        }
        DB::table("sno_condiciones_formulas")->insert($arr);
    }
}
