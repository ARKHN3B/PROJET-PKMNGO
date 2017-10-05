<?php

class PokemonRepository extends ModelRepository {

    protected $_connection;
    
    public function __construct($connection) {
        $this->_connection = $connection;
    }

    
}