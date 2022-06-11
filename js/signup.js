
"use strict";
$( () => {
    $("#email").next().text("");
    $("#email").focus();
    $("#password").next().text("");
    $("#registration").submit( evt => {

    var isValid = true;

    //Validating Email Address Text Box:    
    var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
    var email = $("#email").val().trim();

    if(email == "") {
        $("#email").next().text("This field is required.");
        isValid = false;
    }
    else if (!emailPattern.test(email)) {
        $("#email").next().text("Must be a valid email address.");
        isValid = false;
    }
    else {
        $("#email").next().text("");
    }

    //Validating Password
    
    var passwordPattern = /\b^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$\b/;
    var password = $("#password").val().trim();

    if(password == "") {
        $("#password").next().text("This field is required.");
        isValid = false;
    }
    else if (!passwordPattern.test(password)) {
        $("#password").next().text("Password must contain minimum eight characters, at least one letter, one number and one special character");
        isValid = false;
    }
    else {
        $("#password").next().text("");
    }

    if(isValid == false) {
        evt.preventDefault(); }
    });
});
    