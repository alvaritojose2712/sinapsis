<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class Acciones_especificasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
		DB::table("acciones_especificas")->insert([
    		[   
                'id' => "1",
                'nombre' => "Acción específica 1",
    			'descripcion' => "Descripción de la Acción específica 1",
                'fecha' => "2018-09-09",
                'acciones_proyectos_id' => "1",
                'partida' => "301010101",
            ],
            [
                'id' => "2",
                'nombre' => "Acción específica 2",
                'descripcion' => "Descripción de la Acción específica 2",
                'fecha' => "2018-09-09",
                'acciones_proyectos_id' => "1",
                'partida' => "301010102",
            ],[
                'id' => "3",
                'nombre' => "Acción específica 3",
                'descripcion' => "Descripción de la Acción específica 3",
                'fecha' => "2018-09-09",
                'acciones_proyectos_id' => "1",
                'partida' => "301010103",
            ],[
                'id' => "4",
                'nombre' => "Acción específica 4",
                'descripcion' => "Descripción de la Acción específica 4",
                'fecha' => "2018-09-09",
                'acciones_proyectos_id' => "1",
                'partida' => "301010104",  
            ],
            [
                'id' => "5",
                'nombre' => "Acción específica 5",
                'descripcion' => "Descripción de la Acción específica 5",
                'fecha' => "2018-09-09",
                'acciones_proyectos_id' => "2",
                'partida' => "301010101",  
            ],
            [
                'id' => "6",
                'nombre' => "Acción específica 6",
                'descripcion' => "Descripción de la Acción específica 6",
                'fecha' => "2018-09-09",
                'acciones_proyectos_id' => "2",
                'partida' => "301010101",  
            ],
		]); 
    }
}
