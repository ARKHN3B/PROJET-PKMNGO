<?php       

class UserRepository extends ModelRepository { 


    public function getUser($email, $password)
    {
        $db = $this->_connection;
        $query = 'SELECT * FROM users WHERE email=:email AND password=:password';

        $request = $db->prepare($query);
        $request->execute(array(
            
            'email' => $email,
            'password' => $password
        ));

        $data = $request->fetchAll(PDO::FETCH_ASSOC);

        if (!empty($data)) {

            return new User($data[0]); 
        }
    }


    public function createUser($email, $firstname, $lastname, $password, $birth)
    {
        $db = $this->_connection;
        $query = 'INSERT INTO users(email, firstname, lastname, password, birth) VALUES (?, ?, ?, ?, ?)';

        $request = $db->prepare($query);
        $request->execute(array(
            
            $email,
            $firstname,
            $lastname, 
            $password,
            $birth
        ));

        return $request->rowCount();
    }
}