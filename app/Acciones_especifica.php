<?php

namespace sinapsis;

use Illuminate\Database\Eloquent\Model;

class Acciones_especifica extends Model
{
    public function acciones_preyecto()
    {
    	return $this->hasOne('sinapsis\Acciones_proyecto',"id");
    }
}
