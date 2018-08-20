/*
Project 01_06_01

Author: Charley Tran
Date: 8.16.18

Filename: script.js
*/

"use strict";

var formValidity = true;

// This function goes through each input box to make sure that there is some content. If there isn't any content, then the input box background color will change to let the user know that they forgot to enter the input box. There will also be a message letting the user know they forgot to enter information.
function validateRequired() {
    var inputElements = document.getElementsByTagName("input");
    var errorDiv = document.getElementById("errorText");
    var fieldsetValidity = true;
    var currentElement;

    // This loops through the input boxes
    try {
        for (var i = 0; i < inputElements.length; i++) {
            currentElement = inputElements[i];
            if (currentElement.value === "") {
                currentElement.style.background = "rgb(255,233,233)";
                fieldsetValidity = false;
            } else {
                currentElement.style.background = "white";
            }
        }

        // This throws the error message
        if (fieldsetValidity === false) {
            throw "Please complete the rest of the form.";
        } else {
            errorDiv.style.display = "none";
            errorDiv.innerHTML = "";
            formValidity = true;
        }
        // This catches and displays the error message
    } catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        formValidity = false;
    }
    if (formValidity === true) {
        document.getElementsByTagName("form")[0].submit();
    }
}

// Loads the above function to test for validity.
function validateForm(evt) {
    if (evt.preventDefault) {
        evt.preventDefault();
    } else {
        evt.returnValue = false;
    }

    validateRequired();
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