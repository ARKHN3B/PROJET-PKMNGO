<?php

class Event extends Model implements JsonSerializable {

    protected $_id;
    protected $_startDate;
    protected $_endDate;
    protected $_type;


    function jsonSerialize(){

        return [

            'dateStart' => $this->_startDate,
            'dateEnd' => $this->_endDate,
            'type' => $this->_type
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
    

    
    public function getStartDate(){
        return $this->_startDate;
    }
    
    public function setStartDate($up_startDate)
    {
            $this->_startDate = $up_startDate;
    }
    

    
    public function getEndDate(){
        return $this->_endDate;
    }
    
    public function setEndDate($up_endDate)
    {
            $this->_endDate = $up_endDate;
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
    
    
}