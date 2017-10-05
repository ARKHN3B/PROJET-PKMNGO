<?php

class EventRepository extends ModelRepository {
     
    public function insert($start, $end, $type)
    {
        $db = $this->_connection;
        $query = 'INSERT INTO event(startDate, endDate, type) VALUES (?, ?, ?)';

        $request = $db->prepare($query);
        $request->execute(array(

            $start,
            $end,
            $type
        ));

        return $request->rowCount();
    }

    public function readEvent()
    {
        $db = $this->_connection;
        $query = 'SELECT * FROM event';

        $request = $db->query($query);

        $data = $request->fetchAll(PDO::FETCH_ASSOC);

        if (!empty($data)) {
            
            $arrayEvent = [];

            foreach ($data as $key) {
                
                $event = new Event($key);

                array_push($arrayEvent, $event);
            }

            return $arrayEvent;
        }
    }
}