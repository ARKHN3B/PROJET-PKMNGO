<?php

header('Access-Control-Allow-Origin: *');

session_start();

require "./flight-master/flight/Flight.php";
require "autoload.php";

Flight::set('DbManager', new DbManager);


Flight::route('GET /', function(){

    // Flight::render('Sign');

    $email = Flight::request()->query['email'];
    $password = Flight::request()->query['password'];

    $userRepository = Flight::get('DbManager')->getUserRepository();
    $response = $userRepository->getUser($email, $password);

    if ($response != false) {
        
        $_SESSION['user'] = $response->getId();   
    }

    echo json_encode($response);
});


Flight::route('POST /', function(){

    $request = [

        $email = Flight::request()->data['email'],
        $firstname = Flight::request()->data['firstname'],
        $lastname = Flight::request()->data['lastname'],
        $password = Flight::request()->data['password'],
        $birth = Flight::request()->data['birth']
    ]; 


    $userRepository = Flight::get('DbManager')->getUserRepository();
    $response = $userRepository->createUser($request[0], $request[1], $request[2], $request[3], $request[4]);

    echo json_encode($response);
});


Flight::route('POST /pokemap', function(){

    $data = Flight::request()->data['transmission'];

    $pokedexRepository = Flight::get('DbManager')->getPokedexRepository();
    $response = $pokedexRepository->insert($_SESSION['user'], $data[0], $data[1]);
});


Flight::route('GET /pokemap', function(){

    $session = $_SESSION['user'];

    $pokedexRepository = Flight::get('DbManager')->getPokedexRepository();
    $response = $pokedexRepository->join($session);

    echo json_encode($response);
});


Flight::route('DELETE /addpokemap', function(){

    $mapRepository = Flight::get('DbManager')->getMapRepository();
    $checkTable = $mapRepository->getAllTable();

    if (!empty($checkTable)) {

        $dropTable = $mapRepository->delTable();
    }
});


Flight::route('POST /addpokemap', function(){

    $data = Flight::request()->data['transmission'];

    $mapRepository = Flight::get('DbManager')->getMapRepository();
    $insert = $mapRepository->insert($data[0], $data[1], $data[2], $data[3]);

    $response = $mapRepository->getData();

    echo json_encode($response);
});


Flight::route('POST /addevent', function(){

    $data = Flight::request()->data['transmission'];

    $eventRepository = Flight::get('DbManager')->getEventRepository();
    $insert = $eventRepository->insert($data[0], $data[1], $data[2]);
});


Flight::route('GET /addevent', function(){

    $eventRepository = Flight::get('DbManager')->getEventRepository();
    $response = $eventRepository->readEvent();

    echo json_encode($response);
});


// SLACK SLASH COMMANDS
Flight::route('POST /slackPokedex', function(){

    header("Content-type:application/json");

    $session = 1; // $session = $_SESSION['user'];
    
    $pokedexRepository = Flight::get('DbManager')->getPokedexRepository();
    $response = $pokedexRepository->join($session);

    $arrayfields = [];

    foreach ($response as $res){

        $id = $res->getPokeId();
        $name = $res->getName();
        $type = $res->getType();
        $PC = $res->getPC();

        $array = [
            "title" => "POKEID : " . $id . " NAME : " . $name,
            "value" => "Type : ". $type .", PC :". $PC,
            "short" => false 
        ];

        array_push($arrayfields, $array);
    }

    $date = "User ID : ". $session ." | ". date('M jS, Y \\a\\t g:i');

    $arrayBot = [
        "attachments" => array(
            [
                "pretext" => "Display your pokedex",
                "color" => "#cb3535",
                "title" => "Votre pokedex contient : ",
                "fields" => $arrayfields,
                "footer" => $date
            ]
        )
    ];

    echo json_encode($arrayBot);
});


Flight::start();