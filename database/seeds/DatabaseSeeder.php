<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            CamposSeeder::class, 
            ValoresPersonalSeeder::class, 
            Personal::class,
            Hijos_personalSeeder::class,
            Acciones_proyectosSeeder::class,
            PartidasSeeder::class,
            Acciones_especificasSeeder::class,
            Presupuesto_ordinarioSeeder::class,
            Movimientos_presupuestariosSeeder::class,
            
            SnoTablasSueldos::class, 
            SueldosSeeder::class, 
            UnidadTrubutariaSeeder::class, 
            PrestacionesSeeder::class, 
            FormulasSeeder::class, 
            NominaSeeder::class, 
            FormulasAsignadasSeeder::class, 
            CondicionesFormulasSeeder::class, 
            CondicionesNominaSeeder::class, 
            AdicPersonal::class, 
            AdicFormula::class, 
            DivisionesGlobalSeeder::class, 
            DivisionesFormulasSeeder::class, 
            FormulasVersionesSeeder::class,
        ]);

        
    }
}
