<?php

namespace sinapsis\Http\Controllers;

use sinapsis\sno_valores_personal;
use Illuminate\Http\Request;

class SnoValoresPersonalController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return sno_valores_personal::all();
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \sinapsis\sno_valores_personal  $sno_valores_personal
     * @return \Illuminate\Http\Response
     */
    public function show(sno_valores_personal $sno_valores_personal)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \sinapsis\sno_valores_personal  $sno_valores_personal
     * @return \Illuminate\Http\Response
     */
    public function edit(sno_valores_personal $sno_valores_personal)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \sinapsis\sno_valores_personal  $sno_valores_personal
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, sno_valores_personal $sno_valores_personal)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \sinapsis\sno_valores_personal  $sno_valores_personal
     * @return \Illuminate\Http\Response
     */
    public function destroy(sno_valores_personal $sno_valores_personal)
    {
        //
    }
}
