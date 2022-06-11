"use strict";
$( () => {
    $("#name").next().text("");
    $("#name").focus();
    $("#email").next().text("");
    $("#phone").next().text("");
    $("#description").text("");
    $("#description").next("").text("");
    $("#contact_form").submit( evt => {

    var isValid = true;

    //Validating Name
    var name = $("#name").val().trim();
    if (name == "") {
        $("#name").next().text("This field is required.");
        isValid = false;
    } 
    else if (!isNaN(name)) {
        $("#name").next().text("Enter a valid name");
        isValid = false;
    } 
    else {
        $("#name").next().text("");
    }

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

    //Validating Phone Number
    var phone = $("#phone").val().trim();
    if (phone == "") {
        $("#phone").next().text("This field is required.");
        isValid = false;
    } 
    else if (phone.length != 10 || isNaN(phone)) {
        $("#phone").next().text("Enter a 10 digit mobile number");
        isValid = false;
    } 
    else {
        $("#phone").next().text("");
    }

    //Validating Description
    var description = $("#description").val().trim();
    if (description == "") {
        $("#description").next().text("This field is required.");
        isValid = false;
    } 
    else {
        $("#description").next().text("");
    }

    if(isValid == false) {
        evt.preventDefault(); }
    });
});
    