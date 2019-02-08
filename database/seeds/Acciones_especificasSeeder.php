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
                'nombre' => "ACC1.1",
    			'descripcion' => "Dirección y Coordinación de los Gastos de los Trabajadores",
                'fecha' => "2019-01-01",
                'acciones_proyectos_id' => "1",
                
            ],
            [
                'id' => "2",
                'nombre' => "ACC3.1",
                'descripcion' => "Previsión y Protección Social",
                'fecha' => "2019-01-01",
                'acciones_proyectos_id' => "3",
                
            ],[
                'id' => "3",
                'nombre' => "ACC2.1",
                'descripcion' => "Apoyo institucional a las acciones específicas de los proyectos del organismo",
                'fecha' => "2019-01-01",
                'acciones_proyectos_id' => "2",
                
            ],[
                'id' => "4",
                'nombre' => "PR1.1",
                'descripcion' => "Ingreso de estudiantes en Formación de TSU y de Licenciados o su equivalente tanto en PNF como en carreras",
                'fecha' => "2019-01-01",
                'acciones_proyectos_id' => "4",
                  
            ],
            [
                'id' => "5",
                'nombre' => "PR1.2",
                'descripcion' => "Prosecución de estudiantes en Formación de TSU y de Licenciados o su equivalente tanto en PNF como en carreras",
                'fecha' => "2019-01-01",
                'acciones_proyectos_id' => "4",
                  
            ],
            [
                'id' => "6",
                'nombre' => "PR1.3",
                'descripcion' => "Egreso de estudiantes en Formación de TSU y de Licenciados o su equivalente tanto en PNF como en carreras",
                'fecha' => "2019-01-01",
                'acciones_proyectos_id' => "4",
                  
            ],[
                'id' => "7",
                'nombre' => "PR1.4",
                'descripcion' => "Desarrollo de proyectos socio-integradores y socio-comunitarios",
                'fecha' => "2019-01-01",
                'acciones_proyectos_id' => "4",
            ],

            [
                'id' => "8",
                'nombre' => "PR3.1",
                'descripcion' => "Desarrollo de proyectos de investigación",
                'fecha' => "2019-01-01",
                'acciones_proyectos_id' => "5",
            ],
            [
                'id' => "9",
                'nombre' => "PR3.2",
                'descripcion' => "Publicación del conocimiento",
                'fecha' => "2019-01-01",
                'acciones_proyectos_id' => "5",
            ],
            [
                'id' => "10",
                'nombre' => "PR3.3",
                'descripcion' => "Implementación, aplicación y desarrollo de Proyectos Socio-comunitarios y Socio-productivos",
                'fecha' => "2019-01-01",
                'acciones_proyectos_id' => "5",
            ],
            [
                'id' => "11",
                'nombre' => "PR3.4",
                'descripcion' => "Acompañamiento Profesional y Técnico",
                'fecha' => "2019-01-01",
                'acciones_proyectos_id' => "5",
            ],
            [
                'id' => "12",
                'nombre' => "PR4.1",
                'descripcion' => "Servicios de Orientación, Asesoría Académica y Desempeño Estudiantil",
                'fecha' => "2019-01-01",
                'acciones_proyectos_id' => "6",
            ],
            [
                'id' => "13",
                'nombre' => "PR4.2",
                'descripcion' => "SERVICIO, ASISTENCIA Y APOYO ACADÉMICO, TÉCNICO Y PRODUCTIVO",
                'fecha' => "2019-01-01",
                'acciones_proyectos_id' => "6",
            ],
            [
                'id' => "14",
                'nombre' => "PR4.3",
                'descripcion' => "Laboratorios",
                'fecha' => "2019-01-01",
                'acciones_proyectos_id' => "6",
            ],
            [
                'id' => "15",
                'nombre' => "PR4.4",
                'descripcion' => "Bioterios",
                'fecha' => "2019-01-01",
                'acciones_proyectos_id' => "6",
            ],
            [
                'id' => "16",
                'nombre' => "PR4.5",
                'descripcion' => "Estaciones Experimentales",
                'fecha' => "2019-01-01",
                'acciones_proyectos_id' => "6",
            ],
            [
                'id' => "17",
                'nombre' => "PR4.6",
                'descripcion' => "Viveros",
                'fecha' => "2019-01-01",
                'acciones_proyectos_id' => "6",
            ],
            [
                'id' => "18",
                'nombre' => "PR4.7",
                'descripcion' => "Servicio de Tecnología de Información",
                'fecha' => "2019-01-01",
                'acciones_proyectos_id' => "6",
            ],


            [   'id'=>"19",
                'nombre'=>'PR5.1',
                'descripcion' => 'Apoyo Socioeconómico',
                'fecha'=>"2019-01-01",
                'acciones_proyectos_id'=>'7'
            
            ],
            [   'id'=>"20",
                'nombre'=>'PR5.2',
                'descripcion' => 'Apoyo al Sistema de Salud Integral al Estudiante',
                'fecha'=>"2019-01-01",
                'acciones_proyectos_id'=>'7'
            
            ],
            [   'id'=>"21",
                'nombre'=>'PR5.3',
                'descripcion' => 'Comedores Integrales y otros Servicios de Alimentación',
                'fecha'=>"2019-01-01",
                'acciones_proyectos_id'=>'7'
            
            ],
            [   'id'=>"22",
                'nombre'=>'PR5.4',
                'descripcion' => 'Desarrollo de Actividades Deportivas',
                'fecha'=>"2019-01-01",
                'acciones_proyectos_id'=>'7'
            
            ],
            [   'id'=>"23",
                'nombre'=>'PR5.5',
                'descripcion' => 'Desarrollo de Actividades Socio-culturales',
                'fecha'=>"2019-01-01",
                'acciones_proyectos_id'=>'7'
            
            ],
            [   'id'=>"24",
                'nombre'=>'PR5.6',
                'descripcion' => 'Sistema de Transporte Estudiantil',
                'fecha'=>"2019-01-01",
                'acciones_proyectos_id'=>'7'
            
            ],
            [   'id'=>"25",
                'nombre'=>'PR5.7',
                'descripcion' => 'Atención a estudiantes con discapacidad',
                'fecha'=>"2019-01-01",
                'acciones_proyectos_id'=>'7'
            
            ],
            [   'id'=>"26",
                'nombre'=>'PR5.8',
                'descripcion' => 'Cooperación y Solidaridad Estudiantil',
                'fecha'=>"2019-01-01",
                'acciones_proyectos_id'=>'7'
            
            ],
            [   'id'=>"27",
                'nombre'=>'PR6.1',
                'descripcion' => 'Mantenimiento, Conservación, Remodelaciones y adecuaciones',
                'fecha'=>"2019-01-01",
                'acciones_proyectos_id'=>'8'
            
            ],
            [   'id'=>"28",
                'nombre'=>'PR6.2',
                'descripcion' => 'Adecuación de los espacios socio-productivos',
                'fecha'=>"2019-01-01",
                'acciones_proyectos_id'=>'8'
            
            ],
            [   'id'=>"29",
                'nombre'=>'PR6.3',
                'descripcion' => 'Dotación de Insumos',
                'fecha'=>"2019-01-01",
                'acciones_proyectos_id'=>'8'
            
            ],
            [   'id'=>"30",
                'nombre'=>'PR6.4',
                'descripcion' => 'Servicios conexos al mantenimiento de la Infraestructura',
                'fecha'=>"2019-01-01",
                'acciones_proyectos_id'=>'8'
            
            ],
            [   'id'=>"31",
                'nombre'=>'PR6.5',
                'descripcion' => 'Servicios para la Seguridad y Vigilancia de la infraestructura',
                'fecha'=>"2019-01-01",
                'acciones_proyectos_id'=>'8'
            
            ],
            
		]); 
    }
}
