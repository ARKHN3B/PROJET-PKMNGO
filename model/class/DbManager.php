<?php

class DbManager {

    protected $_connectionToDatabase;
    protected $_userRepository;
    protected $_pokemonRepository;
    protected $_pokedexRepository;
    protected $_mapRepository;
    protected $_eventRepository;


    public function __construct() {

        $this->_connectionToDatabase = DatabaseConnection::setConnection();
        $this->setUserRepository(new UserRepository($this->_connectionToDatabase));
        $this->setPokemonRepository(new PokemonRepository($this->_connectionToDatabase));
        $this->setPokedexRepository(new PokedexRepository($this->_connectionToDatabase));
        $this->setMapRepository(new MapRepository($this->_connectionToDatabase));
        $this->setEventRepository(new EventRepository($this->_connectionToDatabase));
    }

    
    
    public function getUserRepository(){
        return $this->_userRepository;
    }
    
    public function setUserRepository($up_userRepository)
    {
            $this->_userRepository = $up_userRepository;
    }
    

    
    public function getPokemonRepository(){
        return $this->_pokemonRepository;
    }
    
    public function setPokemonRepository($up_pokemonRepository)
    {
            $this->_pokemonRepository = $up_pokemonRepository;
    }
    

    
    public function getPokedexRepository(){
        return $this->_pokedexRepository;
    }
    
    public function setPokedexRepository($up_pokedexRepository)
    {
            $this->_pokedexRepository = $up_pokedexRepository;
    }



    public function getMapRepository(){
        return $this->_mapRepository;
    }
    
    public function setMapRepository($up_mapRepository)
    {
            $this->_mapRepository = $up_mapRepository;
    }


    public function getEventRepository(){
        return $this->_eventRepository;
    }
    
    public function setEventRepository($up_eventRepository)
    {
            $this->_eventRepository = $up_eventRepository;
    }
}