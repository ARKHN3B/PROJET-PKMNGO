class Pokemon {

    constructor(){
        this.name = null;
        this.type = null;
        this.PC = Math.round(Math.random() * (2500 - 1) + 1);

        this.idRandom = Math.round(Math.random() * (25 - 1) + 1);
        this.pathImg = "../assets/_pictures/PKMN/"+ this.idRandom +".png";
        this.pathImgPkdex = "../assets/_pictures/PKMN/"+ this.idRandom +"B.png";

        this.searchPokemon();
    }

    searchPokemon(){

        if (this.idRandom == 1) {
            this.name = "Bulbizarre";
            this.type = "Plante";
        }

        if (this.idRandom == 2) {
            this.name = "Herbizarre";
            this.type = "Plante";
        }

        if (this.idRandom == 3) {
            this.name = "Florizarre";
            this.type = "Plante";
        }

        if (this.idRandom == 4) {
            this.name = "Salamèche";
            this.type = "Feu";
        }

        if (this.idRandom == 5) {
            this.name = "Reptincel";
            this.type = "Feu";
        }

        if (this.idRandom == 6) {
            this.name = "Dracaufeu";
            this.type = "Feu";
        }

        if (this.idRandom == 7) {
            this.name = "Carapuce";
            this.type = "Eau";
        }

        if (this.idRandom == 8) {
            this.name = "Carabaffe";
            this.type = "Eau";
        }

        if (this.idRandom == 9) {
            this.name = "Tortank";
            this.type = "Eau";
        }

        if (this.idRandom == 10) {
            this.name = "Chenipan";
            this.type = "Insect";
        }
        
        if (this.idRandom == 11) {
            this.name = "Chrysacier";
            this.type = "Insect";
        }

        if (this.idRandom == 12) {
            this.name = "Papilusion";
            this.type = "Insect";
        }

        if (this.idRandom == 13) {
            this.name = "Aspicot";
            this.type = "Insect";
        }

        if (this.idRandom == 14) {
            this.name = "Coconfort";
            this.type = "Insect";
        }

        if (this.idRandom == 15) {
            this.name = "Dardargnan";
            this.type = "Insect";
        }

        if (this.idRandom == 16) {
            this.name = "Roucool";
            this.type = "Vol";
        }

        if (this.idRandom == 17) {
            this.name = "Roucoups";
            this.type = "Vol";
        }

        if (this.idRandom == 18) {
            this.name = "Roucarnage";
            this.type = "Vol";
        }

        if (this.idRandom == 19) {
            this.name = "Rattata";
            this.type = "Normal";
        }

        if (this.idRandom == 20) {
            this.name = "Rattatac";
            this.type = "Normal";
        }

        if (this.idRandom == 21) {
            this.name = "Piafabec";
            this.type = "Vol";
        }

        if (this.idRandom == 22) {
            this.name = "Rapasdepic";
            this.type = "Vol";
        }

        if (this.idRandom == 23) {
            this.name = "Abo";
            this.type = "Poison";
        }

        if (this.idRandom == 24) {
            this.name = "Arbok";
            this.type = "Poison";
        }

        if (this.idRandom == 25) {
            this.name = "Pikachu";
            this.type = "Électrique";
        }
    }
}