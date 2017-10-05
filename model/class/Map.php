<?php

class Map extends Model { 

    protected $_id;
    protected $_pokemonID;
    protected $_lat;
    protected $_lng;

    
    public function getId(){
        return $this->_id;
    }
    
    public function setId($up_id)
    {
        $up_id = (int) $up_id;
    
        if (is_int($up_id)) {
            $this->_id = $up_id;
        }
    }

    
    
    public function getPokemonID(){
        return $this->_pokemonID;
    }
    
    public function setPokemonID($up_pokemonID)
    {
        $up_pokemonID = (int) $up_pokemonID;
    
        if (is_int($up_pokemonID)) {
            $this->_pokemonID = $up_pokemonID;
        }
    }
    
    
    
    public function getLat(){
        return $this->_lat;
    }
    
    public function setLat($up_lat)
    {
        $up_lat = (double) $up_lat;
    
        if (is_double($up_lat)) {
            $this->_lat = $up_lat;
        }
    }
    
    
    
    public function getLng(){
        return $this->_lng;
    }
    
    public function setLng($up_lng)
    {
        $up_lng = (double) $up_lng;
    
        if (is_double($up_lng)) {
            $this->_lng = $up_lng;
        }
    }
    
    
    
    
}