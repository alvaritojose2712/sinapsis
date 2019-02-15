<?php

namespace sinapsis\Http\Controllers;

use Illuminate\Http\Request;
use sinapsis\Acciones_proyecto;

class accionesProyectosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       return Acciones_proyecto::with(["especificas"=>function($q){
            $q->with(["ordinario"=>function($qq){
                    $qq->with(["movimientos","partida","ae"])->orderBy("fecha","DESC");
                }]);
        }])->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try{
            $AccionesProyectos = new Acciones_proyecto;
            $AccionesProyectos->nombre = $request->nombre;
            $AccionesProyectos->descripcion = $request->descripcion;
            $AccionesProyectos->tipo = $request->tipo;
            $AccionesProyectos->fecha = $request->fecha;           
            
            $AccionesProyectos->save();
            return response(["code"=>200,"msj"=>"¡Éxito al guardar!"],200);
        }catch(\Exception $e){
           return response(["code"=>500,"msj"=>$e->getMessage()],200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Acciones_proyecto::with(["especificas"=>function($q){
            $q->with(["ordinario"=>function($qq){
                $qq->with(["movimientos","partida","ae"])->orderBy("fecha","DESC");
            }]);
        }])->where("nombre","LIKE","$id%")
            ->orWhere("descripcion","LIKE","$id%")
            ->get();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try{
            $AccionesProyectosUpdate = Acciones_proyecto::where("id",$id);
            
            unset($request['especificas']);
            $AccionesProyectosUpdate->update($request->all());

            return response(["code"=>200,"msj"=>"¡Éxito al editar!"],200);
        }catch(\Exception $e){
           return response(["code"=>500,"msj"=>$e->getMessage()],200);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try{
            Acciones_proyecto::where("id",$id)->delete();
            return response(["code"=>200,"msj"=>"¡Éxito al eliminar!"],200);
        }catch(\Exception $e){
           return response(["code"=>500,"msj"=>$e->getMessage()],200);
        }
    }
}
