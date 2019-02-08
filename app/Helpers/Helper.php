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
