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
            FormulasVersionesSeeder::class,
            FormulasAsignadasSeeder::class, 
            AdicFormula::class, 
            CondicionesFormulasSeeder::class, 
            CondicionesNominaSeeder::class, 
            AdicPersonal::class, 
            DivisionesGlobalSeeder::class, 
            DivisionesFormulasSeeder::class, 
            sno_tablas_sueldos_asignadoSeeder::class,
            sno_ut_asignadaSeeder::class,
        ]);

        
    }
}
