// ==UserScript==
// @name         extractallURLS
// @namespace    http://tampermonkey.net/
// @version      2025-05-12
// @description  get all urls and will be popped as alert
// @author       You
// @match        https://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const links = document.querySelectorAll("a[href]");
    const urls = Array.from(links).map(link => link.href);
    alert(urls.join("\n"));
})();