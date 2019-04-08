<?php

use Illuminate\Database\Seeder;

class sno_tablas_sueldos_asignadoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table("sno_tablas_sueldos_asignados")->insert([
            [
               'id_nomina' => 1,
                'id_tabla_sueldo' => 1,
            ],
            [
                'id_nomina' => 1,
                'id_tabla_sueldo' => 2,
            ],
            [
            'id_nomina' => 1,
                'id_tabla_sueldo' => 4,
            ],
        ]);
    }
}
