<?php

use Illuminate\Database\Seeder;

class sno_ut_asignadaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table("sno_ut_asignadas")->insert([
            [
                'id_nomina'=> 1,
                'id_ut'=> 3,
            ],
            [
                'id_nomina'=> 1,
                'id_ut'=> 1,
            ],
            
        ]);
    }
}
