<?php

class MapRepository extends ModelRepository {

    public function insert($pokemonID, $lat, $lng, $PC)
    {
        $db = $this->_connection;
        $query = 'INSERT INTO map(pokemonID, lat, lng, PC) VALUES (?, ?, ?, ?)';

        $request = $db->prepare($query);
        $request->execute(array(

            $pokemonID,
            $lat, 
            $lng,
            $PC
        ));

        return $request->rowCount();
    }

    public function getAllTable()
    {
        $db = $this->_connection;
        $query = 'SELECT * FROM map';

        $request = $db->query($query);

        $data = $request->fetchAll(PDO::FETCH_ASSOC);

        return $data;
    }

    public function delTable()
    {
        $db = $this->_connection;
        $query = 'TRUNCATE TABLE `PKMNGO`.`map`';

        $request = $db->prepare($query);
        $request->execute();
    }

    public function getData()
    {
        $db = $this->_connection;
        $query = 'SELECT * FROM map 
                  INNER JOIN pokemon AS pkmn
                  WHERE map.pokemonID = pkmn.id';

        $request = $db->query($query);

        $data = $request->fetchAll(PDO::FETCH_ASSOC);

        if (!empty($data)) {
            
            $arrayPokemon = [];

            foreach ($data as $key) {
                
                $pokemon = new Pokemon($key);
                $lat = $key['lat'];
                $lng = $key['lng'];

                $object = array(
                    'pokemon' => $pokemon, 
                    'lat' => $lat,
                    'lng' => $lng
                );

                array_push($arrayPokemon, $object);
            }

            return $arrayPokemon;
        }
    }
}