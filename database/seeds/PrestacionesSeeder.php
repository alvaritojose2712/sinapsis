<?php

use Illuminate\Database\Seeder;

class PrestacionesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Illuminate\Support\Facades\DB::table("sno_prestaciones")->insert([
            [
                'DIAS_TRABAJADOS_literal_b' => "90",
                'DIAS_DE_PRESTACIONES_literal_b' => "15",
                'MAX_DIAS_ADICIONALES_literal_b' => "30",
                'DIAS_ADICIONALES_literal_b' => "2",
                'DIAS_x_AÑO_literal_c' => "30",
            ]
        ]);
        
    }
}
