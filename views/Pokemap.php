<?php
    session_start();
?>

<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>GOLLUM GO APP90'S</title>
        <link rel="icon" type="image/png" href="../assets/_pictures/favicon.png" />
        <!--[if IE]><link rel="shortcut icon" type="image/x-icon" href="favicon.ico" /><![endif]-->
        <link rel="stylesheet" href="../assets/styles/css/jquery-ui.css">
        <link rel="stylesheet" type="text/css" href="../assets/styles/css/styles.css">
        <link rel="stylesheet" type="text/css" href="../assets/styles/css/styles_1920x1080.css">
        <link rel="stylesheet" href="../assets/styles/css/animate.min.css">
        <script src="../assets/scripts/jquery-3.2.1.min.js"></script>
        <script src="../assets/scripts/jquery-ui.min.js"></script>
    </head>

    <body>

        <img src="../assets/_pictures/border.png" 
             alt=""
             title=""
             class="animated bounceIn"
             id="border-map">

        <div id="map"></div>

        <img src="../assets/_pictures/pokedex2.png" 
             alt=""
             title=""
             id="pokedex">

        <div id="displayPokedex" class="player" style="background-image: none; background-color : #00413d"></div>

        <img src="../assets/_pictures/Gollum_Render.png" 
        alt=""
        class="animated bounceInDown"
        id="gollum">

        <button class="animated bounceIn" id="button-pkdex"></button>
        
        <img src="../assets/_pictures/pkball.png" alt="" class="animated infinite tada" id="event" >
        <form action="">
            <select name="" id="">
                    <option value="Feu">Feu</option>
                    <option value="Eau">Eau</option>
                    <option value="Plante">Plante</option>
                    <option value="Poison">Poison</option>
                    <option value="Normal">Normal</option>
                    <option value="Vol">Vol</option>
                </select>
            <input type="text" name="" id="start_date">
            <input type="text" name="" id="end_date">          
            <label for="submit">
                <div><p>Create</p> <p>Create</p></div>
            </label> 
            <input type="submit" id="submit" style="display: none" >
        </form>

        <div id="eventDisplayer">
            <div>
                <h4 id="lastEvent">Last event</h4>
            </div>
            <div>
                <h4 id="currentEvent">Current event</h4>
            </div>
            <div>
                <h4 id="futureEvent">Future event</h4>
            </div>
        </div>

        <script src="../assets/scripts/DatePicker.js"></script>
        <script src="../assets/scripts/Pokemon.js"></script>
        <script src="../assets/scripts/Pokedex.js"></script>
        <script src="../assets/scripts/App.js"></script>
        <script src="../assets/scripts/main.js"></script>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAOEy3C-52CalM14H3eYvplDaJdejHfXRQ&callback=app.initMap&libraries=geometry"  
        async defer></script>
    </body>
</html>