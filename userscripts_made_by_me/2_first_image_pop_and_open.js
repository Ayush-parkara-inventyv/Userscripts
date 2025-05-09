// ==UserScript==
// @name         image downloader
// @namespace    http://tampermonkey.net/
// @version      2025-05-09
// @description  try to take over the world!
// @author       You
// @match        https://doodles.google/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=doodles.google
// @grant        none
// ==/UserScript==


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

(async function() {
    'use strict';
    await sleep(3000);
	const img = document.querySelector("img");
	if(img){
	const a = document.createElement("a");
	a.href = img.src;
	a.download = "downloadimage.png";
	a.click();
	}
})();