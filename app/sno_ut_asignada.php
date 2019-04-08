<?php

namespace sinapsis;

use Illuminate\Database\Eloquent\Model;

class sno_ut_asignada extends Model
{
    public function tabla()
    {
        return $this->hasOne("sinapsis\sno_unidad_tributaria","id","id_ut");
    }
}
