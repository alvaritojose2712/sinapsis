<?php

namespace sinapsis;

use Illuminate\Database\Eloquent\Model;

class sno_tablas_sueldos_asignado extends Model
{
    public function tabla()
    {
        return $this->hasOne("sinapsis\sno_tablas_sueldos","id","id_tabla_sueldo");
    }
}
