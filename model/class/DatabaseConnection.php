<?php

class DatabaseConnection {

    static protected $_connection;

    static public function setConnection()
    {
        if (empty(self::$_connection)) {
            
            $db = self::$_connection;

            try {
                $db = new PDO('mysql:host=localhost;dbname=PKMNGO;charset=utf8', 'root', 'root');
                $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            }
                catch (PDOException $e){
                    die("ERROR : ". $e->getMessage());
                }
            
            return $db;
        }
    }
}