first of all few things are written on the top of the userscript that are required for the purpose of proper loading and executing

the required things at the start is below:
```javascript
// ==UserScript==
// @name         My First Script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  A basic script to learn
// @author       Ayush
// @match        https://example.com/*
// @icon         https://www.google.com/s2/favicons?domain=example.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
})();
```
### The Header (Metadata block)

|Directive|Purpose|
|---|---|
|`@name`|Name shown in the dashboard|
|`@match`|URLs where this script should run|
|`@grant`|Special API access (none for now)|
|`@version`|Script version|
|`@description`|Description for you or others|
|`@namespace`|Identifier (usually your domain or `tampermonkey.net`)|

 Start by replacing the `@match` with the site you want to test on, e.g., `https://example.com/*`

now for example if we want to change the background color of the webpage we can do the same using the background color:
```javascript
//we can do the same using the background color:
document.body.style.backgroundColor = "blue";

//now suppose i want to change the title of the page 
document.title = "this is my title";

//now suppose i want to change all the headings that start from the h1 tag
//first need to make h1 tag and get it and then change it
const h1 = document.querySelector("h1")
//this will search for the h1 tag and store in the h1 element and then
h1.textContent = "This h1 tag is now mine";
//also can be done by another command
document.queryselector("h1").textContent = "Again Changed by me!!";


//if we want to do some alert on the page 
alert("Hey from me!!");

//if i want to enter values in the fields where i am at a user input page i can also do the inputs
document.queryselector("#username").value = "username";
//same for password
document.queryselector("#password").value = "password";

//if want to click on a button 
//first define the button and then click
const btn = document.queryselector("button.submit");
if(btn) btn.click();

//we can also add sleep interval 
//first need to add async and then we can add sleep interval also 

(async => {
	document.body.style.background = "blue";
	await sleep(1000);
	document.body.style.background = "green";
}
)
```


whole code written with basic functionalities 
```javascript
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
    document.title = "this is my title";

    const h1 = document.querySelector("h1");
    if (h1) {
        h1.textContent = "This is me!!!!";
        await sleep(1000);
        document.body.style.background = "green";
    }

    alert('This is mine now!!!!!');
})();

```


another for downloading photo from the website
```js
// ==UserScript==
// @name         My First Script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  A basic script to learn
// @author       Ayush
// @match        https://example.com/*
// @icon         https://www.google.com/s2/favicons?domain=example.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
	const img = document.querySelector("img");
	if(img){
	const a = document.createElement("a");
	a.href = img.src;
	a.download = "downloadimage.png";
	a.click();
	}
})();
```
another downloading video from the website
```js
// ==UserScript==
// @name         My First Script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  A basic script to learn
// @author       Ayush
// @match        https://example.com/*
// @icon         https://www.google.com/s2/favicons?domain=example.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
})();
```