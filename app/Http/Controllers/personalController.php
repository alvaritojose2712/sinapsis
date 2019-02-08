<?php

namespace sinapsis\Http\Controllers;

use Illuminate\Http\Request;
use sinapsis\personal;
use Illuminate\Support\Facades\Blade;


class personalController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return personal::with("hijos")->get();
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
            $per = personal::create($request->data_padre);
            $per->hijos()->createMany($request->hijos);
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
        return personal::with("hijos")->where("cedula","LIKE","$id%")
            ->orWhere("nombre","LIKE","$id%")
            ->orWhere("apellido","LIKE","$id%")
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
        // return View::make('nerds.edit')
        //     ->with('user', personal::find($id));
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
            $per = personal::find($id);
            #Actualizar representante
            $per->update($request->data_padre);
            #Ingresar hijos
            $per->hijos()->createMany(array_filter($request->hijos,function($val){
                return !isset($val['id'])&&!isset($val['remove']);
            }));
            
            #Actualizar hijos existentes
            $hijos_old = array_filter($request->hijos,function($val){
                return isset($val['id'])&&isset($val['type'])&&!isset($val['remove']);
            });
            foreach ($hijos_old as $val) {
                unset($val['type']);
                unset($val['cedula_representante']);
                $per->hijos()->where("id",$val['id'])->update($val);
            }

            #Borrar hijos
            $hijos_remove = array_filter($request->hijos,function($val){
                return isset($val['remove']);
            });
            foreach ($hijos_remove as $val) {
                $per->hijos()->where("id",$val['id'])->delete();
            }

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
            personal::find($id)->delete();
            return response(["code"=>200,"msj"=>"¡Éxito al eliminar!"],200);
        }catch(\Exception $e){
           return response(["code"=>500,"msj"=>$e->getMessage()],200);
        }
    }
}