<?php   

class Pokemon extends Model implements JsonSerializable {

    protected $_id;
    protected $_pokeId;
    protected $_name;
    protected $_type;
    protected $_PC;
    protected $_imgMap;
    protected $_imgPokedex;


    function jsonSerialize(){
        return [

            'pokeID' => $this->_pokeId,
            'name' => $this->_name,
            'type' => $this->_type,
            'PC' => $this->_PC,
            'pathImgMap' => $this->_imgMap,
            'pathImgPokedex' => $this->_imgPokedex
        ];
    }

    
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
    
    
    
    public function getName(){
        return $this->_name;
    }
    
    public function setName($up_name)
    {
        $up_name = (string) $up_name;
    
        if (is_string($up_name)) {
            $this->_name = $up_name;
        }
    }



    public function getType(){
        return $this->_type;
    }
    
    public function setType($up_type)
    {
        $up_type = (string) $up_type;
    
        if (is_string($up_type)) {
            $this->_type = $up_type;
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
    

    
    public function getImgMap(){
        return $this->_imgMap;
    }
    
    public function setImgMap($up_imgMap)
    {
        $up_imgMap = (string) $up_imgMap;
    
        if (is_string($up_imgMap)) {
            $this->_imgMap = $up_imgMap;
        }
    }
    

    
    public function getImgPokedex(){
        return $this->_imgPokedex;
    }
    
    public function setImgPokedex($up_imgPokedex)
    {
        $up_imgPokedex = (string) $up_imgPokedex;
    
        if (is_string($up_imgPokedex)) {
            $this->_imgPokedex = $up_imgPokedex;
        }
    }
    
    
}