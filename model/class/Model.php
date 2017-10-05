<?php

abstract class Model {

    public function __construct($data = array()) {
        $this->hydrate($data);
    }

    public function hydrate(array $data)
    {
        foreach ($data as $key => $value) {
            
            $key = preg_replace("#_#", "", $key);

            $method = "set".ucfirst($key);

            if (method_exists($this, $method)) {
                
                $this->$method($value);
            }
        }
    }
}