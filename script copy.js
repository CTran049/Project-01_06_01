/*
Project 01_06_01

Author: Charley Tran
Date: 8.16.18

Filename: script.js
*/

"use strict";

var formValidity = true;

function validateRequired(fieldsetId) {
    var input = document.getElementsByTagName("#contactinfo input");
    var errorDiv = document.getElementById("errorText");
    var fieldsetValidity = true;
    var currentElement;

    try {
    for (var i = 0; i < input.length; i++) {
        currentElement = input[i];
        if (currentElement.value === "") {
            currentElement.style.background = "rgb(255, 233, 233)";
            fieldsetValidity = false;
        } else {
            currentElement.style.background = "white";
        }

        if (fieldsetValidity == false) {

            errorDiv.style.display = "block";
            formValidity = false;
        }
}
}
}

function validateForm(evt) {
    if (evt.preventDefault) {
        evt.preventDefault();
    } else {
        evt.returnValue = false;
    }
    formValidity = true;

    validateRequired();

    if (formValidity === true) {
        document.getElementsByTagName("form")[0].submit();
    }
}

function createEventListeners() {
    var form = document.getElementsByTagName("form")[0];
    if (form.addEventListener) {
        form.addEventListener("submit", validateForm, false);
    } else if (form.attachEvent) {
        form.attachEvent("onsubmit", validateForm);
    }
}

// Added event listener to load the function createEventListeners.
window.addEventListener("load", createEventListeners);