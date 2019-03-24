<?php

use Illuminate\Database\Seeder;

class SnoTablasSueldos extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table("sno_tablas_sueldos")->insert([
            [
                'id' => 1,
                'descripcion' => "Sueldos en 0",
                'fecha' => "1900-01-01"
            ],
            [
                'id' => 2,
                'descripcion' => "Sueldos septiembre 2017",
                'fecha' => "2017-09-01"
            ],
            [
                'id' => 3,
                'descripcion' => "Sueldos noviembre 2017",
                'fecha' => "2017-11-01"
            ],
            [
                'id' => 4,
                'descripcion' => "Sueldos enero 2018",
                'fecha' => "2018-01-01"
            ],
            [
                'id' => 5,
                'descripcion' => "Sueldos febrero 2018",
                'fecha' => "2018-02-15"
            ],
        ]);
    }
}
