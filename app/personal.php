<?php

namespace sinapsis;

use Illuminate\Database\Eloquent\Model;

class personal extends Model
{
     protected $fillable = [
     		'id',
            "nombre",
            "apellido",
            "cedula",
            "nacionalidad",
            "genero",
            "fecha_nacimiento",
            "telefono_1",
            "telefono_2",
            "correo",
            "categoria",
            "cargo",
            "dedicacion",
            "estado",
            "estatus",
            "grado_instruccion",
            "fecha_ingreso",
            "caja_ahorro",
            "cuenta_bancaria",
            "antiguedad_otros_ieu",
            "hrs_nocturnas",
            "hrs_feriadas",
            "hrs_diurnas",
            "hrs_feriadas_nocturnas",
            "profesion",
            "departamento_adscrito",
            "cargo_desempeñado_departamento",
        ];
    public function hijos() { 
        return $this->hasMany('sinapsis\hijos_personal',"cedula_representante","cedula"); 
    }
}
