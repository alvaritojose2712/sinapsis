<?php

namespace sinapsis\Http\Controllers;

use Illuminate\Http\Request;
use sinapsis\Acciones_especifica;

class Acciones_especificasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
   public function index()
    {
       return Acciones_especifica::all();
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
            $AccionesEspecificas = new Acciones_especifica;
            $AccionesEspecificas->nombre = $request->nombre;
            $AccionesEspecificas->descripcion = $request->descripcion;
            $AccionesEspecificas->acciones_proyectos_id = $request->acciones_proyectos_id;
            $AccionesEspecificas->fecha = $request->fecha;           
            
            $AccionesEspecificas->save();
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
        return Acciones_especifica::where("nombre","LIKE","$id%")
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
            $AccionesEspecificasUpdate = Acciones_especifica::where("id",$id);
            
            $AccionesEspecificasUpdate->update($request->all());

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
            Acciones_especifica::where("id",$id)->delete();
            return response(["code"=>200,"msj"=>"¡Éxito al eliminar!"],200);
        }catch(\Exception $e){
           return response(["code"=>500,"msj"=>$e->getMessage()],200);
        }
    }
}
