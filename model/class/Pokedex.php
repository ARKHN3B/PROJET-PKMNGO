<?php

class Pokedex extends Model {

    protected $_id;
    protected $_pokeId;
    protected $_PC;

    
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
    
    
    
    public function getPokeId(){
        return $this->_pokeId;
    }
    
    public function setPokeId($up_pokeId)
    {
        $up_pokeId = (int) $up_pokeId;
    
        if (is_int($up_pokeId)) {
            $this->_pokeId = $up_pokeId;
        }
    }
    
    
    
    public function getPC(){
        return $this->_PC;
    }
    
    public function setPC($up_PC)
    {
        $up_PC = (int) $up_PC;
    
        if (is_int($up_PC)) {
            $this->_PC = $up_PC;
        }
    }
    
    
}