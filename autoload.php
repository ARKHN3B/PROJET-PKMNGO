<?php

function loadMyClass($class)
{
    //Je vérifie si la class n'a pas été déclarée :
    if (class_exists($class) === false) {

        //Si elle n'est pas déclaré, je vérifie quelle est bien dans le dossier "model". 
        $string = './model/class/'. $class .'.php';
        $string1 = './model/repositories/'. $class .'.php';
        $string2 = './model/services/'. $class .'.php';

        if (file_exists($string) === true) { // '===' égal et de même type
            require $string;
        } elseif (file_exists($string2) === true) {
            require $string2;
        } elseif (file_exists($string1) === true) {
            require $string1;
        }
    }
}

spl_autoload_register('loadMyClass');


?>