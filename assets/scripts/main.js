var app = new App();

app.$form.hide();

app.main = function(){

    app.centerOnGeolocation();
    app.generatePokemon();
    app.addPokemonOnMap();

    // ## Change the number of Interval to set the Spawn of Pokemon:
    
    // setInterval app.initGame, et non app.initGame(). Paramètre qui attend une fonction et non un retour de fonction.
    // !ATTENTION AU PERTE DU THIS !!!
    setInterval($.proxy(app.intervalSettings, app), 15000000);    
    // setInterval(function(){app.intervalSettings()}, 1000); // Seconde manière de l'écrire sans le proxy


    app.readEvent();
    app.readPokedex();
    
    app.second = function(){
        // console.log(app.myPosition);
        app.myPosition.addListener('dragend', function(){ //drag
            app.displayPokemon(app.myPosition);
        });

        app.openPokedex();
    }

    app.displayForm();
    app.datePicker();
};

window.onbeforeunload = function(){
    app.saveEvent();

    // localStorage.removeItem("Date_Event");
    // app.arrayCalendar = [];
    // app.arrayPokemonEvent = [];
    // app.arrayPokedex = [];
    // localStorage.removeItem("Pokedex");
}