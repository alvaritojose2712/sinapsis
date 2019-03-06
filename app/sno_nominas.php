<?php

namespace sinapsis;

use Illuminate\Database\Eloquent\Model;

class sno_nominas extends Model
{
    public function formulas() { 
        return $this->hasMany('sinapsis\sno_formulas_asignadas',"id_nomina","id"); 
    }
}
