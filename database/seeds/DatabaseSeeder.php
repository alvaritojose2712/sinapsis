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
            Personal::class,
            Hijos_personalSeeder::class,
            Acciones_proyectosSeeder::class,
            PartidasSeeder::class,
            Acciones_especificasSeeder::class,
            Presupuesto_ordinarioSeeder::class,
            Movimientos_presupuestariosSeeder::class,
        ]);

        
    }
}
