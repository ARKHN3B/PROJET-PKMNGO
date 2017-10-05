<?php

abstract class ModelRepository {

    protected $_connection;
    
    public function __construct($connection) {
        $this->_connection = $connection;
    }
}