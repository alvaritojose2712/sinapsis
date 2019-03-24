<?php 
if (!function_exists('parsePartida')) {
    function parsePartida($id){
        if(preg_match("/[1-9]{1}00000000/",$id)){
            $id = substr($id, 0,1);
        }else if(preg_match("/[1-9]{1}((([1-9]0)|(0[1-9]))|([1-9][1-9]))000000/",$id)){
            $id = substr($id, 0,3);
        }else if(preg_match("/[1-9]{1}((([1-9]0)|(0[1-9]))|([1-9][1-9])){2}0000/",$id)){
            $id = substr($id, 0,5);
        }else if(preg_match("/[1-9]{1}((([1-9]0)|(0[1-9]))|([1-9][1-9])){3}00/",$id)){
            $id = substr($id, 0,7);
        }else if(preg_match("/[1-9]{1}((([1-9]0)|(0[1-9]))|([1-9][1-9])){4}/",$id)){
            $id = substr($id, 0,9);
        }
        return $id;
    }
}
if (!function_exists('lunes')) {
    function lunes(){
        $fecha_datetime = new DateTime();
        $dias_semana = ["0"=>"domingo","1"=>"lunes","2"=>"martes","3"=>"miercoles","4"=>"jueves","5"=>"viernes","6"=>"sabado"];

        $fecha_datetime->modify('last day of this month');
        $lunes_del_mes = 4;
        if ($fecha_datetime->format('d/m/Y')==28) {
            $lunes_del_mes = 4; 
        }else if ($fecha_datetime->format('d/m/Y')==30) {
            switch ($dias_semana[$fecha_datetime->format('w')]) {
                case 'martes':
                    $lunes_del_mes++;
                    break;
                case 'lunes':
                    $lunes_del_mes++;
                    break;
            }
        }else if ($fecha_datetime->format('d/m/Y')==31) {
            switch ($dias_semana[$fecha_datetime->format('w')]) {
                case 'miercoles':
                    $lunes_del_mes++;                  
                    break;
                case 'martes':
                    $lunes_del_mes++;
                    break;                 
                case 'lunes':
                    $lunes_del_mes++;
                    break;
            }
        }
        else if ($fecha_datetime->format('d/m/Y')==29) {
            switch ($dias_semana[$fecha_datetime->format('w')]) {                
                case 'lunes':
                    $lunes_del_mes++;
                    break;
            }
        }
        return $lunes_del_mes;
    }
}
if (!function_exists('s_datediff')) {
    function s_datediff( $str_interval, $dt_menor, $dt_maior, $relative=false){
        
        
        if( is_string( $dt_menor)) $dt_menor = new \DateTime( $dt_menor);
        if( is_string( $dt_maior)) $dt_maior = new \DateTime( $dt_maior);
    
        $diff = date_diff( $dt_menor, $dt_maior, ! $relative);
        
        switch( $str_interval){
            case "y": 
                $total = $diff->y + $diff->m / 12 + $diff->d / 360; break;
            case "m":
                $total= $diff->y * 12 + $diff->m + $diff->d/30 + $diff->h / 24;
                break;
            case "d":
                $DIAS_DEL_AÑO = 360;
                $MESES_DEL_AÑO = 12;
                $DIAS_DEL_MES = 30;

                $a = intval($dt_menor->format("Y"));
                $m = intval($dt_menor->format("m"));
                if ($m>$MESES_DEL_AÑO) {$m=$MESES_DEL_AÑO;}
                $d = intval($dt_menor->format("d"));
                if ($d>$DIAS_DEL_MES) {$d=$DIAS_DEL_MES;}

                $a_end = intval($dt_maior->format("Y"));
                $m_end = intval($dt_maior->format("m"));
                if ($m_end>$MESES_DEL_AÑO) {$m_end=$MESES_DEL_AÑO;}
                $d_end = intval($dt_maior->format("d"));
                if ($d_end>$DIAS_DEL_MES) {$d_end=$DIAS_DEL_MES;}
                $dias_trabajados = 0;
                while (true) {
                    $dias_trabajados++;
                    //Frena el contador de fechas Si llega a la Fecha de Cierre =>
                    if ((new DateTime($a."-".$m."-".$d))==(new DateTime($a_end."-".$m_end."-".$d_end))) {
                        $total = $dias_trabajados; 
                        break;
                    }
                    if ($d<$DIAS_DEL_MES) {
                        $d++;
                    }else{
                        $d=1;
                        if ($m<$MESES_DEL_AÑO) {
                            $m++;
                        }else {
                            $m=1;
                            $a++;
                        }
                    }
                }
                break;
            case "h": 
                $total = ($diff->y * 360 + $diff->m * 30 + $diff->d) * 24 + $diff->h + $diff->i/60;
                break;
            case "i": 
                $total = (($diff->y * 360 + $diff->m * 30 + $diff->d) * 24 + $diff->h) * 60 + $diff->i + $diff->s/60;
                break;
            case "s": 
                $total = ((($diff->y * 360 + $diff->m * 30 + $diff->d) * 24 + $diff->h) * 60 + $diff->i)*60 + $diff->s;
                break;
           }
        if( $diff->invert)
                return -1 * $total;
        else    return $total;
    }
}