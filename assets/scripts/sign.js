class Sign {

    constructor(){
        
        // DOM Elements
        this.$year = $('#year');
        this.$day = $('#day');
        this.$form1 = $('#form-1');
        this.$form2 = $('#form-2');

        this.init();
    }

    init(){

        this.selectYear();
        this.selectDay();
        this.signIn();
        this.signUp();
    }

    selectYear(){

        var start = new Date().getFullYear();
        var end = 1900;
        
        var options = "";
    
        for (var year = start; year >= end; year--){
        options += '<option value:\"'+ year +'\">'+ year +'</option>';
        }
    
        this.$year.html(options);
    }

    selectDay(){
        var start = 1;
        var end = 31;
    
        var options = "";
    
        for (var day = start; day <= end; day++) {
            options += '<option value:\"'+ day +'\">'+ day +'</option>';
        }
    
        this.$day.html(options);
    }

    signIn(){

        var app = this;

        $('#submit_label1').click(function(e){

            e.preventDefault();

            var getEmail = $('#getEmail').val();
            var getPassword = sha512($('#getPassword').val());

            if (getEmail.length < 4) {
                alert("Wrong email !");
                return;
            }

            if (getPassword.length < 4) {
                alert("Your password need more than four characters !");
                return;
            }

            $.ajax({

                url : 'http://localhost:8888/API%20REST/PROJET%20PKMNGO/',
                method : 'GET',
                dataType : 'json',

                data : {
                    email : getEmail,
                    password : getPassword
                },

                success : function(data){

                    if (data == null) {

                        alert("Mauvais identifiants !")

                    } else {

                        window.location.replace("http://localhost:8888/API%20REST/PROJET%20PKMNGO/views/Pokemap.php");
                    }
                    console.log(data);
                },

                error : function(error){

                    console.log(error);
                }
            });
        });
    }

    signUp(){

        var app = this;

        $('#submit_label2').click(function(e){
            
            e.preventDefault();

            var email = $('#email').val();
            var firstname = $('#firstname').val();
            var lastname = $('#lastname').val();
            var pass = $('#password').val();
            var pass_confirm = $('#password-confirm').val();
            var month = $('#month').val();
            var day = $('#day').val();
            var year = $('#year').val();

            //Input Vérif plus tard

            if (pass == pass_confirm && pass != "" && pass_confirm != "") {
                var password = sha512(pass);
            }

            var birth = day + "/" + month + "/" + year;

            $.ajax({

                url : 'http://localhost:8888/API%20REST/PROJET%20PKMNGO/',
                method : 'POST',
                dataType : 'json',

                data : {
                    email : email,
                    firstname : firstname,
                    lastname : lastname,
                    password : password,
                    birth : birth
                },

                success : function(data){

                    console.log(data);
                    if (data == 1) {

                        window.location.replace("file:///Applications/MAMP/htdocs/API%20REST/PROJET%20PKMNGO/views/Pokemap.html");
                    }
                },

                error : function(error){

                    console.log(error);
                }
            });
        });
    }
}