<?php
    session_start();
?>

<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Sign</title>
        <link rel="icon" type="image/png" href="./../assets/_pictures/favicon.png" />
        <link rel="stylesheet" href="./../assets/styles/css/styles_signup.css">
        <script src="./../assets/scripts/jquery-3.2.1.min.js"></script>
        <script src="./../node_modules/js-sha512/build/sha512.min.js"></script>
    </head>

    <body>
        
        <form id="form-1">
            <input type="email" name="" id="getEmail" placeholder="Email">
            <input type="password" name="" id="getPassword" placeholder="Password">
            <input type="submit1" id="submit1" style="display:none"> <label for="submit1" id="submit_label1">Sign in</label>
        </form>

        <form id="form-2">
            <div id="line_or"></div>

            <p id="or">or</p>

            <input type="email" placeholder="Email address" name="email" id="email">

            <input type="text" placeholder="Firstname" name="firstname" id="firstname">
            <input type="text" placeholder="Lastname" name="lastname" id="lastname">
            <input type="password" placeholder="Create a password" name="password" id="password">
            <input type="password" placeholder="Confirm your password" name="confirmpassword" id="password-confirm">

            <div id="birth">
                <label for="">Birthday</label>
                <p>To sign up, you must be 18 or older. Other people won't see your Birthday.</p>
                <div>
                    <div>
                        <select name="month" id="month">
                            <option value="01">January</option>
                            <option value="02">February</option>
                            <option value="03">March</option>
                            <option value="04">April</option>
                            <option value="05">May</option>
                            <option value="06">June</option>
                            <option value="07">July</option>
                            <option value="08">August</option>
                            <option value="09">September</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option>
                        </select>
                        <select name="day" id="day"></select>
                        <select name="year" id="year"></select>
                    </div>
                </div>   
            </div>

            <input type="submit" id="submit2" style="display:none"> <label for="submit2" id="submit_label2">Sign up</label>
        </form>

        <script src="./../assets/scripts/sign.js"></script>
        <script>
            var sign = new Sign();
        </script>
    </body>
</html>