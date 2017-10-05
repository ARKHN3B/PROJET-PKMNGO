<?php

class PokedexRepository extends ModelRepository {

    public function insert($userID, $pokeID, $PC)
    {
        $db = $this->_connection;
        $query = 'INSERT INTO pokedex(userID, pokemonID, PC) VALUES (?, ?, ?)';

        $request = $db->prepare($query);
        $request->execute(array(

            $userID,
            $pokeID, $PC
        ));

        return $request->rowCount();
    }


    public function join($sessionID)
    {
        $db = $this->_connection;
        $query = 'SELECT * FROM pokedex AS pkdx
                  INNER JOIN pokemon AS pkmn
                  WHERE pkdx.userID = ? AND pkdx.pokemonID = pkmn.pokeId';
        $request = $db->prepare($query);
        $request->execute(array(
            
            $sessionID
        ));

        $data = $request->fetchAll(PDO::FETCH_ASSOC);

        if (!empty($data)) {

            $arrayPokedex = [];
            
            foreach ($data as $key) {
                
                 $pokemon = new Pokemon($key);
                 
                 array_push($arrayPokedex, $pokemon);
            }

            return $arrayPokedex;
        }
    }
}