// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2025-05-09
// @description  try to take over the world!
// @author       You
// @match        https://example.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=example.com
// @grant        none
// @run-at       document-end
// ==/UserScript==

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

(async function() {
    'use strict';

    document.body.style.backgroundColor = "blue";
    await sleep(1000);
    document.title = "this is my title";

    const h1 = document.querySelector("h1");
    if (h1) {
        h1.textContent = "This is me!!!!";
        await sleep(1000);
        document.body.style.background = "green";
    }

    alert('This is mine now!!!!!');
})();
