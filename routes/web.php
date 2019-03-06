<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::resource('/recursoshumanos/personalController', "personalController");
Route::resource('/recursoshumanos/hijos_personal', "hijos_personal");
Route::get('/recursoshumanos/personal', function(){
    return view("recursos_humanos.personal.index");
});


Route::get('/presupuesto/', function(){
    return view("presupuesto.index");
});
Route::resource('/presupuesto/partidas', "partidasController");
Route::resource('/presupuesto/acciones_especificas', "Acciones_especificasController");
Route::resource('/presupuesto/movimientos_presupuestarios', "Movimientos_presupuestariosController");
Route::resource('/presupuesto/acciones_proyectos', "accionesProyectosController");
Route::resource('/presupuesto/presupuesto_ordinario', "presupuestoOrdinarioController");
Route::resource('/presupuesto/credito_adicional', "creditoAdicionalController");

Route::resource('/global/valores', "SnoValoresPersonalController");
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
