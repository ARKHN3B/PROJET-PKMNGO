class App {

    constructor(){
        
        // DOM Elements
        this.$map = $('#map');
        this.$button = $('#button-pkdex');
        this.$buttonEvent = $('#event');
        this.$form = $('form');
        this.$select = $('select');
        this.$inputDateStart = $('#start_date');
        this.$inputDateEnd = $('#end_date');
        this.$screenPokedex = $('#displayPokedex');
        this.dom_Flag = false;
        this.pokemonFlag = false;
        this.buttonFlag = false;

        // Standard Variables
        this.map = null;
        this.myPosition = null;
        this.latlngRandom = Math.random() * (180 - (-180)) + (-180);
        this.numberPkmnRandom = Math.round(Math.random() * (100 - 50) + 50);

        // Arrays
        this.arrayPokemon = [];
        this.arrayMarkerPokemon = [];
        this.arrayPokedex = [];
        this.arrayCalendar = [];
        this.arrayPokemonEvent = [];
        this.arrayMarkerPokemonEvent = [];
    }



    // Map initialisation
    initMap(){
        this.map = new google.maps.Map(this.$map[0], {

                   center: {lat: -34.397, lng: 150.644},
                   zoom: 2,
                   styles : [
                                {
                                    "featureType": "all",
                                    "elementType": "labels",
                                    "stylers": [
                                        {
                                            "visibility": "off"
                                        }
                                    ]
                                },
                                {
                                    "featureType": "administrative.locality",
                                    "elementType": "all",
                                    "stylers": [
                                        {
                                            "visibility": "on"
                                        }
                                    ]
                                },
                                {
                                    "featureType": "landscape",
                                    "elementType": "all",
                                    "stylers": [
                                        {
                                            "color": "#AFFFA0"
                                        }
                                    ]
                                },
                                {
                                    "featureType": "poi",
                                    "elementType": "all",
                                    "stylers": [
                                        {
                                            "color": "#EAFFE5"
                                        }
                                    ]
                                },
                                {
                                    "featureType": "poi.business",
                                    "elementType": "all",
                                    "stylers": [
                                        {
                                            "visibility": "on"
                                        }
                                    ]
                                },
                                {
                                    "featureType": "poi.government",
                                    "elementType": "all",
                                    "stylers": [
                                        {
                                            "visibility": "on"
                                        }
                                    ]
                                },
                                {
                                    "featureType": "poi.park",
                                    "elementType": "geometry",
                                    "stylers": [
                                        {
                                            "color": "#f9f8c7"
                                        }
                                    ]
                                },
                                {
                                    "featureType": "poi.park",
                                    "elementType": "labels",
                                    "stylers": [
                                        {
                                            "visibility": "off"
                                        }
                                    ]
                                },
                                {
                                    "featureType": "road",
                                    "elementType": "geometry",
                                    "stylers": [
                                        {
                                            "color": "#59A499"
                                        }
                                    ]
                                },
                                {
                                    "featureType": "road",
                                    "elementType": "geometry.stroke",
                                    "stylers": [
                                        {
                                            "color": "#F0FF8D"
                                        },
                                        {
                                            "weight": 2.2
                                        }
                                    ]
                                },
                                {
                                    "featureType": "transit.line",
                                    "elementType": "geometry",
                                    "stylers": [
                                        {
                                            "visibility": "on"
                                        }
                                    ]
                                },
                                {
                                    "featureType": "transit.station.airport",
                                    "elementType": "geometry.fill",
                                    "stylers": [
                                        {
                                            "color": "#fdfabf"
                                        }
                                    ]
                                },
                                {
                                    "featureType": "water",
                                    "elementType": "all",
                                    "stylers": [
                                        {
                                            "visibility": "on"
                                        },
                                        {
                                            "color": "#1A87D6"
                                        }
                                    ]
                                }
                            ]
        });
        this.main();
    }



    // Geolocation
    centerOnGeolocation(){
        
        var app = this;

        navigator.geolocation.getCurrentPosition(function(position){

            // On va récupérer les coordonnées fournient par l'objet position.
            var pos ={
                lat : position.coords.latitude,
                lng : position.coords.longitude
            }
        
            app.map.setCenter(pos);

            var markerMyPosition = new google.maps.Marker({
                position : pos,
                map : app.map,
                draggable: true, 
                icon : "../assets/_pictures/Gollum.png"
            });

            app.myPosition = markerMyPosition; 

            app.second();
            app.displayPokemon(app.myPosition);
        });

        
    }



    // Generate a Pokemon and his position
    generatePokemon(){

        $.ajax({
            url : 'http://localhost:8888/API%20REST/PROJET%20PKMNGO/addpokemap',
            method : 'DELETE',
            dataType : 'json',

            success : function(data){

                console.log(data);
            },

            error : function(error){

                console.log(error);
            }
        });

        this.numberPkmnRandom = Math.round(Math.random() * (100 - 50) + 50);

        for (this.numberPkmnRandom ; this.numberPkmnRandom > 0 ; this.numberPkmnRandom--){

            var lat = Math.random() * (180 - (-180)) + (-180);
            var lng = Math.random() * (180 - (-180)) + (-180);

           
            var position = {
                lat : lat,
                lng : lng
            }

            var pokemon = new Pokemon();
            
            var getPokemon = [

                pokemon.idRandom,
                pokemon.PC,
            ];

            var transmission = [

                getPokemon[0],
                position.lat,
                position.lng,
                getPokemon[1]
            ];

            $.ajax({
                url : 'http://localhost:8888/API%20REST/PROJET%20PKMNGO/addpokemap',
                method : 'POST',
                dataType : 'json',
                data : {

                    'transmission' : transmission,
                },

                success : function(data){

                    // console.log(data);
                },

                error : function(error){

                    // console.log(error);
                }
            });

            var object = {
                pokemon : pokemon,
                position : position,
                icon : pokemon.pathImg
            }

            this.arrayPokemon.push(object);
        }
    }



    // Add a pokemon on the map
    addPokemonOnMap(){

        var app = this;

        this.arrayPokemon.forEach(function(pokemon){

            var marker = new google.maps.Marker({
                position : pokemon.position,
                icon : pokemon.icon,
                map : app.map,
                pokemon : pokemon.pokemon
            });

            marker.setMap(app.map);
            app.arrayMarkerPokemon.push(marker);

            var content = "Nom : <b>" + pokemon.pokemon.name + "</b><br>"
                         +"Type : <b>" + pokemon.pokemon.type + "</b><br>"
                         +"PC : <b>" +pokemon.pokemon.PC + "</b>";

            app.addInfosPokemon(content, marker);

            app.listenerCapture(marker);
        });
    }



    clearMap(){

        if (this.arrayMarkerPokemon.length > 0) {
            for (var marker of this.arrayMarkerPokemon){
                marker.setMap(null);
                marker = null;
            }
        }
        
        this.arrayMarkerPokemon = [];
        this.arrayPokemon = [];
    }



    intervalSettings(){

        this.clearMap();
        this.generatePokemon();
        this.addPokemonOnMap();
    }



    // Method Info-Bulle
    addInfosPokemon(content, marker){

        var app = this;
        
        var infowindow = new google.maps.InfoWindow({
            content: content
        });

        marker.addListener('click', function(){
            infowindow.open(app.map, marker);
        });
    }



    // Display pokemon on the map with the distance between marker and tracer
    displayPokemon(origin){

        for (var marker of this.arrayMarkerPokemon) {

            //change number for change the visibility
            this.drawMarker(marker, origin, 200000);
        }
    }



    drawMarker(marker, origin, rayon){
        // calcul distance
        var distance = google.maps.geometry.spherical.computeDistanceBetween(origin.getPosition(), marker.getPosition()) / 1000 ;
        // ici on joue sur la visibilité du marker
        var visibility = (distance < rayon);
        // affectation visibility qui va bien
        marker.setVisible(visibility);
        // ajout distance au survol
        var km = (distance).toFixed(3) +' kms';
        marker.setOptions({'title' : km});
    }


 
    capturePokemon(marker){

        marker.setMap(null);
        this.arrayMarkerPokemon.splice(marker, 1);
    }



    removeCapturePokedex(){
        $('#display').remove();
        $('#divname').remove();
    }



    // Open Pokedex
    openPokedex(){

        var app = this;

        this.$button.unbind('append').click(function(){

            if (app.pokemonFlag == true) {
                $('.pokemonDisplay').remove();
            }
            
            if (app.dom_Flag == true) {
                app.removeCapturePokedex();
            } 
            
            app.$screenPokedex.css({
                "background-color" : "white",
                "overflow-y" : "scroll"
            });

            if (app.arrayPokedex.length > 0) {

                for (var pokemon of app.arrayPokedex){
                    
                    pokemon.displayList();
                }
            }

            app.pokemonFlag = true;
        });
    }



    readPokedex(){

        var app = this;

        $.ajax({

            url : 'http://localhost:8888/API%20REST/PROJET%20PKMNGO/pokemap',
            method : 'GET',
            dataType : 'json',

            success : function(data){

                console.log(data);

                if (data == false) {

                    return;

                } else {

                    for (var pokemon of data){

                        var pokedex = new Pokedex(pokemon.pokeID, pokemon.name, pokemon.type, pokemon.PC, pokemon.pathImgMap, pokemon.pathImgPokedex);

                        app.arrayPokedex.push(pokedex);
                    }
                }
            },

            error : function(error){

                console.log(error);
            }
            
        });
    }



    // Display the form with simple click
    displayForm(){
        
        var app = this;

        this.$buttonEvent.on('click', function(){

            if (app.buttonFlag == false) {

                app.buttonFlag = true;
                app.$form.fadeIn(500);
            } else {
                
                app.buttonFlag = false;
                app.$form.fadeOut(200);
            }
        });
    }



    datePicker(){

        var calendar = new DatePicker(this.$inputDateStart, this.$inputDateEnd);

        this.submitForm(calendar);
    }



    submitForm(calendar){

        var app = this;

        this.$form.submit(function(){

            event.preventDefault();

            calendar.dateStart = calendar.$startDate.datepicker('getDate');
            calendar.dateEnd = calendar.$endDate.datepicker('getDate');
            calendar.type = app.$select.val();

            var currentTime = new Date();

            if (calendar.dateStart <= currentTime && currentTime <= calendar.dateEnd) {
                app.generatePokemonEvent(calendar.type);
                app.addPokemonEventOnMap();
            }

            var dateStart = new Date(calendar.dateStart);
            var dayStart = dateStart.getDate();
            var monthStart = dateStart.getMonth();
            var yearStart = dateStart.getFullYear();
            var start = yearStart + "/" + (monthStart + 1) + "/" + dayStart;

            

            var dateEnd = new Date(calendar.dateEnd);
            var dayEnd = dateEnd.getDate();
            var monthEnd = dateEnd.getMonth();
            var yearEnd = dateEnd.getFullYear();
            var end = yearEnd + "/" + (monthEnd + 1) + "/" + dayEnd;

            

            var object = {
                start : start,
                end : end,
                type : calendar.type
            };

            var transmission = [
                object.start,
                object.end,
                object.type
            ];

            $.ajax({

                url : 'http://localhost:8888/API%20REST/PROJET%20PKMNGO/addevent',
                method : 'POST',
                dataType : 'json',
                data : {
                    'transmission' : transmission
                },

                success : function(data){

                    console.log(data);
                },

                error : function(error){

                    console.log(error);
                }
            });
            

            app.arrayCalendar.push(object);

            app.displayDatetimeEventForSubmit(object);
        });
    }



    displayEventCalendar(){

        var app = this;

        if (this.arrayCalendar.length > 0) {

            for (var calendar of this.arrayCalendar){

                var currentTime = new Date();

                var calendarDateStart = calendar.dateStart;
                var calendarDateEnd = calendar.dateEnd;

                if (calendarDateStart <= currentTime && currentTime <= calendarDateEnd) {
                    app.generatePokemonEvent(calendar.type);
                    app.addPokemonEventOnMap();
                }
            }
        }
    }



    readEvent(){

        var app = this;

        $.ajax({

            url : 'http://localhost:8888/API%20REST/PROJET%20PKMNGO/addevent',
            method : 'GET',
            dataType : 'json',

            success : function(data){

                // console.log(data);
                for (var calendar of data){

                    calendar.dateStart = new Date(calendar.dateStart);
                    calendar.dateEnd = new Date(calendar.dateEnd);

                    // console.log(calendar.dateStart);

                    app.arrayCalendar.push(calendar);  
                }
                
                app.displayEventCalendar();
                app.displayDatetimeEvent();
            },

            error : function(error){

                // console.log(error);
            }
        });
    }



    generatePokemonEvent(type){

        this.numberPkmnRandom = Math.round(Math.random() * (500 - 250) + 250);
        
        for (this.numberPkmnRandom ; this.numberPkmnRandom > 0 ; this.numberPkmnRandom--) {

            var lat = Math.random() * (180 - (-180)) + (-180);
            var lng = Math.random() * (180 - (-180)) + (-180);

            var pokemon = new Pokemon();

            if (pokemon.type == type) {

                var position = {
                    lat : lat,
                    lng : lng
                }

                var object = {
                    pokemon : pokemon,
                    position : position,
                    icon : pokemon.pathImg
                }

                this.arrayPokemonEvent.push(object);
            }
        }
    }



    addPokemonEventOnMap(){
        
        var app = this;

        this.arrayPokemonEvent.forEach(function(pokemon){

            var marker = new google.maps.Marker({
                position : pokemon.position,
                icon : pokemon.icon,
                map : app.map,
                pokemon : pokemon.pokemon
            });

            marker.setMap(app.map);
            app.arrayMarkerPokemonEvent.push(marker);

            var content = "Nom : <b>" + pokemon.pokemon.name + "</b><br>"
                            +"Type : <b>" + pokemon.pokemon.type + "</b><br>"
                            +"PC : <b>" +pokemon.pokemon.PC + "</b><br>"
                            +"Event : <b> GENERATE by EVENT</b>";

            app.addInfosPokemon(content, marker);
            app.listenerCapture(marker, pokemon);
        });
    }



    displayDatetimeEvent(){

        if (this.arrayCalendar.length > 0) {

            for (var event of this.arrayCalendar){
                
                var currentTime = new Date();
                var calendarDateStart = event.dateStart;
                var calendarDateEnd = event.dateEnd;
    
                if (calendarDateEnd < currentTime) {
    
                    var p = "<p>" + event.type + "</p>";
                    
                    $('#lastEvent').after(p);
                }
    
                if (calendarDateEnd >= currentTime && currentTime >= calendarDateStart) {
                    
                    var p = "<p>" + event.type + "</p>";
                    
                    $('#currentEvent').after(p);
                }
    
                if (calendarDateStart > currentTime) {
                    
                    var p = "<p>" + event.type + "</p>";
                    
                    $('#futureEvent').after(p);
                }
            }
        }
    }



    displayDatetimeEventForSubmit(object){
                
        var currentTime = new Date();
        var calendarDateStart = new Date(object.start);
        var calendarDateEnd = new Date(object.end);

        if (calendarDateEnd < currentTime) {

            var p = "<p>" + object.type + "</p>";
            
            $('#lastEvent').after(p);
        }

        if (calendarDateEnd >= currentTime && currentTime >= calendarDateStart) {
            
            var p = "<p>" + object.type + "</p>";
            
            $('#currentEvent').after(p);
        }

        if (calendarDateStart > currentTime) {
            
            var p = "<p>" + object.type + "</p>";
            
            $('#futureEvent').after(p);
        }
    }



    captureRandom(marker, pokemon){

        var app = this;

        var randomPlayer = Math.round(Math.random() * (15 - 1) + 1);
        var randomPokemon = Math.round(Math.random() * (10 - 1) + 1);

        if (randomPlayer > randomPokemon) {
            
            var pokedex = new Pokedex(marker.pokemon.idRandom, marker.pokemon.name, marker.pokemon.type, marker.pokemon.PC, marker.pokemon.pathImg, marker.pokemon.pathImgPkdex);
            app.arrayPokedex.push(pokedex);

            var arrayPokedexDB = [
                pokedex.id,
                pokedex.PC
            ];

            $.ajax({

                url : 'http://localhost:8888/API%20REST/PROJET%20PKMNGO/pokemap',
                method : 'POST',
                dataType : 'json',
                data : {
                     transmission : arrayPokedexDB
                },

                success : function(data){

                    console.log(data);
                },

                error : function(error){
                    console.log(error);
                }

            });


            // PUSH TO SLACK (webhook)
            var text = "Vous avez capturé un " + pokedex.name + " !";
            var img = 'http://9601bb82.ngrok.io/API%20REST/PROJET%20PKMNGO/assets/_pictures/PKMN/' + pokedex.id + "B.png";

            var payload = {
                attachments : [
                    {
                        text : text,
                        pretext : 'Capture',
                        image_url: img
                    }
                ]
            }

            $.ajax({

                url : 'https://hooks.slack.com/services/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',
                method : 'POST',
                data : {
                    payload: JSON.stringify( payload )
                },
                dataType : 'json',

                success : function(data){
                    
                    console.log(data);
                },

                error : function(error){

                    console.log(error);
                }
            });

            app.capturePokemon(marker);

            if (app.dom_Flag == false) {
                pokedex.display();
                app.dom_Flag = true;
            } else {
                app.removeCapturePokedex();
                pokedex.display();
                app.dom_Flag = true;
            }

            alert('Pokemon has captured !');

        } 
        
        if (randomPlayer < randomPokemon) {

            alert('Pokemon has lost !');
            app.capturePokemon(marker);
        }
        
        if (randomPlayer == randomPokemon) {

            alert('The Pokemon resists ! Try again');
            app.listenerCapture(marker);

        }
    }


    
    listenerCapture(marker, pokemon){

        marker.addListener('dblclick', function(event) {

            app.captureRandom(marker, pokemon);
            
        });
    }
}