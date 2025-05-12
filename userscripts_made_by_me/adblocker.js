// ==UserScript==
// @name         adblocker
// @namespace    http://tampermonkey.net/
// @version      2025-05-12
// @description  try to take over the world!
// @author       You
// @match        https://*/*
// @run-at       document-start
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_webRequest
// ==/UserScript==

// Array of domain patterns to block
    const blockedDomains = [
        'https://ads.servenobid.com/*',
        'https://tracking.example.com/*',
        'https://ads.anotherdomain.com/*',
        'https://googleads.*/*',
        'https://securepubads.*/*',
        'https://pagead2.*/*',
        'https://*.amazon-adsystem.*/*',
        'https://direct.adsrvr.org/*',
        'https://ecurepubads.g.doubleclick.net/*',
        'https://ads.*.*/*',
        'https://tcp.googlesyndication.com/*'


    ];

    // Create webRequest rules from blockedDomains array
    const rules = blockedDomains.map(domain => ({
        selector: domain,
        action: 'cancel'
    }));

    // Register the rules
    GM_webRequest(rules, (info, message, details) => {
        console.log('Blocked request:', info, message, details);
    });

//specific for dictionary.com
//wont work for others as it has different ad sites 
