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
        $personas = personal::all();
        foreach ($personas as $persona) {
            $persona->hijos = personal::find($persona->id)->hijos;
        }
        return $personas;
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
            personal::create($request->all());
            return "¡Se ha insertado con éxito!";
        }catch(\Exception $e){
           // do task when error
           return response($e->getMessage(),200);
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
        $personas =  personal::where("cedula","LIKE","$id%")
            ->orWhere("nombre","LIKE","$id%")
            ->orWhere("apellido","LIKE","$id%")
            ->get();
        foreach ($personas as $persona) {
            $persona->hijos = personal::find($persona->id)->hijos;
        }
        return $personas;

        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return View::make('nerds.edit')
            ->with('user', personal::find($id));
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        personal::find($id)->delete();
        return back();
    }
}
