"use strict";

function validateForm() {

    var form = document.forms["myForm"];
    
    var uname = document.forms["myForm"]["username"].value;

    var age = document.forms["myForm"]["age"].value;

    var residency = document.forms["myForm"]["residency"].value;
    
    var accountType = document.querySelectorAll('input[name=acctype]:checked');
    
    var nationality = document.forms["myForm"]["nationality"].value;

    if (uname.length < 6) {
        alert("Username neeeds 6 chars")
        return false;
    } else {
        var selectedAccounts = [];

        for (let i = 0; i < accountType.length; i++) {
            selectedAccounts.push(accountType[i].value);
        }

        var alertMsg =  "The details supplied: " +
                        "\nUsername : "+ uname +
                        "\nAge: "+ age +
                        "\Residency: " + residency +
                        "\nAccounts Selected: " + selectedAccounts + 
                        "\nNationality index: " + nationality; 
        alert(alertMsg);
        return true;
    }
}
