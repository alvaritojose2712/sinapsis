<?php

namespace sinapsis;

use Illuminate\Database\Eloquent\Model;

class Acciones_proyecto extends Model
{
    public function especificas()
    {
    	return $this->hasMany('sinapsis\Acciones_especifica',"acciones_proyectos_id");
    }
}
