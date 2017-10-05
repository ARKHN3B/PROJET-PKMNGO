<?php

class User extends Model implements JsonSerializable {

    protected $_id;
    protected $_email;
    protected $_firstname;
    protected $_lastname;
    protected $_password;
    protected $_birth;


    function jsonSerialize(){
        return [
            'id' => $this->_id,
            'firstname' => $this->_firstname,
            'lastname' => $this->_lastname
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
    
    
    
    public function getEmail(){
        return $this->_email;
    }
    
    public function setEmail($up_email)
    {
        $up_email = (string) $up_email;
    
        if (is_string($up_email)) {
            $this->_email = $up_email;
        }
    }
    
    
    
    public function getFirstname(){
        return $this->_firstname;
    }
    
    public function setFirstname($up_firstname)
    {
        $up_firstname = (string) $up_firstname;
    
        if (is_string($up_firstname)) {
            $this->_firstname = $up_firstname;
        }
    }
    
    
    
    public function getLastname(){
        return $this->_lastname;
    }
    
    public function setLastname($up_lastname)
    {
        $up_lastname = (string) $up_lastname;
    
        if (is_string($up_lastname)) {
            $this->_lastname = $up_lastname;
        }
    }
    
    
    
    public function getPassword(){
        return $this->_password;
    }
    
    public function setPassword($up_password)
    {
        $up_password = (string) $up_password;
    
        if (is_string($up_password)) {
            $this->_password = $up_password;
        }
    }

    
    
    public function getBirth(){
        return $this->_birth;
    }
    
    public function setBirth($up_birth)
    {
        $up_birth = (string) $up_birth;
    
        if (is_string($up_birth)) {
            $this->_birth = $up_birth;
        }
    }
    
    
    
}