class Pokedex {

    constructor(id, name, type, PC, pathImg, pathImgPkdex){
        this.id = id;
        this.name = name;
        this.type = type;
        this.PC = PC;
        this.pathImg = pathImg;
        this.pathImgPkdex = pathImgPkdex;

        // DOM Element
        this.$dom = null;
    }

    display(){

        var display = "<div id=\"display\" class=\"player\">"
                     +"<img src=\""+ this.pathImgPkdex +"\""
                     +"alt=\"\""
                     +"title=\"\""
                     +"id=\"pokemon\">"
                     +"<h3 id=\"type\">"+ this.type +"</h3>"
                     +"</div>"
                     +"<div id=\"divname\">"
                     +"<h2 id=\"name\">"+ this.name +"</h2>"
                     +"<h2 id=\"namecover\">"+ this.name +"</h2>"
                     +"</div>";

        this.$dom = display;

        $('#displayPokedex').after(this.$dom);
    }

    displayList(){
        var display = "<div class=\"pokemonDisplay\">"
                     +"<img src=\""+ this.pathImg +"\" alt=\"\"> <p>"+ this.name +"</p> <p class=\"PC\">PC : "+ this.PC +"</p>"
                     +"</div>";
                     
        $('#displayPokedex').append(display);
    }
}