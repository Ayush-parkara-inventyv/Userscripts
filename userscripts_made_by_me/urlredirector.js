// ==UserScript==
// @name         urlredirector
// @namespace    http://tampermonkey.net/
// @version      2025-05-12
// @description  get all urls and will be popped as alert
// @author       You
// @match        https://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @run-at       document-start
// ==/UserScript==
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
(async function() {
    'use strict';
    const currentUrl = window.location.href;
    const newurl = "https://archive.is/" + encodeURIComponent(currentUrl);
    await sleep(4000);
    window.location.href = newurl;
})();