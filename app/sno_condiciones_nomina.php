<?php

namespace sinapsis;

use Illuminate\Database\Eloquent\Model;

class sno_condiciones_nomina extends Model
{
    public function valorall() { 
        return $this->hasOne('sinapsis\sno_valores_personal',"valor","valor"); 
    }
}
