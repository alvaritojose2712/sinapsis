<?php

namespace sinapsis;

use Illuminate\Database\Eloquent\Model;

class Acciones_especifica extends Model
{
    public function acciones_proyecto()
    {
    	return $this->belongsTo('sinapsis\Acciones_proyecto',"acciones_proyectos_id","id");
    }
    public function ordinario()
    {
    	return $this->hasMany('sinapsis\Presupuesto_ordinario',"ae");
    }
}
