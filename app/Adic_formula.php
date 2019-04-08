<?php

namespace sinapsis;

use Illuminate\Database\Eloquent\Model;

class Adic_formula extends Model
{
    public function formula() { 
        return $this->hasOne('sinapsis\sno_formulas_versiones',"id","id_formula"); 
    }
}
