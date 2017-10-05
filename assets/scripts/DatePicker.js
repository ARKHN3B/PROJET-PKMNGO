class DatePicker {

    constructor($startDate, $endDate){

        this.$startDate = $startDate;
        this.$endDate = $endDate;
        this.dateStart = new Date();
        this.dateEnd = new Date();
        this.type = null;

        this.initPicker();
    }

    initPicker(){

        var options = {

            dayNames: [ "Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi" ],
            dayNamesMin : [ "Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa" ],
            monthNames: [ "Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre" ],
            monthNamesShort: [ "Jan", "Fév", "Mar", "Avr", "Mai", "Jui", "Jul", "Aoû", "Sep", "Oct", "Nov", "Déc" ],
            firstDay: 1,
            minDate: new Date(),
            beforeShowDay: $.proxy(this.closedDay, this), // !IMPORTANT : Pour ne pas perdre le "this" en tant que this. = App.
            //beforeShowDay: App.closedDay,
            dateFormat: "dd / mm / yy"
        }

        this.$startDate.datepicker(options);
        this.$endDate.datepicker(options);
    }

    

    
}