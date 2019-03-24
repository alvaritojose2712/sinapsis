<?php

namespace sinapsis;

use Illuminate\Database\Eloquent\Model;

class Divisiones_formula extends Model
{
    public function division() { 
        return $this->hasOne('sinapsis\Divisiones_global',"id","id_division"); 
    }
}
