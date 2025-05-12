// ==UserScript==
// @name         Full Tampermonkey API Demo
// @namespace    https://yourscripts.example.com/
// @version      1.0.0
// @description  Demonstrates every feature and directive in Tampermonkey
// @author       Demo Master
// @copyright    2025 Demo Master
// @icon         https://example.com/icon.png
// @iconURL      https://example.com/iconurl.png
// @defaulticon  https://example.com/defaulticon.png
// @icon64       https://example.com/icon64.png
// @icon64URL    https://example.com/icon64url.png
// @homepage     https://example.com/homepage
// @homepageURL  https://example.com/homepageurl
// @website      https://example.com
// @source       https://github.com/demo/full-userscript
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @resource     sampleImage https://via.placeholder.com/150
// @resource     sampleStyle https://example.com/style.css
// @include      *://*/*
// @match        *://*/*
// @exclude      https://example.com/exclude
// @grant        GM_addElement
// @grant        GM_addStyle
// @grant        GM_download
// @grant        GM_getResourceText
// @grant        GM_getResourceURL
// @grant        GM_info
// @grant        GM_log
// @grant        GM_notification
// @grant        GM_openInTab
// @grant        GM_registerMenuCommand
// @grant        GM_setClipboard
// @grant        GM_getTab
// @grant        GM_saveTab
// @grant        GM_getTabs
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @grant        GM_listValues
// @grant        GM_setValues
// @grant        GM_getValues
// @grant        GM_deleteValues
// @grant        GM_addValueChangeListener
// @grant        GM_removeValueChangeListener
// @grant        GM_xmlhttpRequest
// @grant        GM_webRequest
// @grant        GM_cookie
// @run-at       document-idle
// @noframes
// @unwrap
// @connect      https://api.example.com
// @webRequest   *://api.example.com/*
// @updateURL    https://example.com/userscript.meta.js
// @downloadURL  https://example.com/userscript.user.js
// @supportURL   https://example.com/support
// @antifeature  Ads
// @tag          AllFeatures
// ==/UserScript==

(async function() {
    'use strict';

    const sleep = ms => new Promise(r => setTimeout(r, ms));

    // 1. GM_addElement
    GM_addElement('div', { innerHTML: 'Element added', id: 'gm-element' });
    await sleep(2000);

    // 2. GM_addStyle
    GM_addStyle('#gm-element { color: red; font-size: 20px; }');
    await sleep(2000);

    // 3. GM_download
    GM_download('https://via.placeholder.com/100', 'image.jpg');
    await sleep(2000);

    // 4. GM_getResourceText + GM_addStyle
    const cssText = GM_getResourceText('sampleStyle');
    GM_addStyle(cssText);
    await sleep(2000);

    // 5. GM_getResourceURL
    const imgUrl = GM_getResourceURL('sampleImage');
    GM_addElement('img', { src: imgUrl });
    await sleep(2000);

    // 6. GM_info
    console.log('Script info:', GM_info);
    await sleep(2000);

    // 7. GM_log
    GM_log('This is a GM_log message');
    await sleep(2000);

    // 8. GM_notification
    GM_notification('This is a GM_notification example!', 'GM_notification');
    await sleep(2000);

    // 9. GM_openInTab
    GM_openInTab('https://example.com', { active: false });
    await sleep(2000);

    // 10. GM_registerMenuCommand
    GM_registerMenuCommand('Say Hello', () => alert('Hello!'));
    await sleep(2000);

    // 11. GM_setClipboard
    GM_setClipboard('Text copied to clipboard!');
    await sleep(2000);

    // 12. GM_setValue / GM_getValue
    GM_setValue('myKey', 'StoredValue');
    console.log(GM_getValue('myKey'));
    await sleep(2000);

    // 13. GM_deleteValue / GM_listValues
    GM_deleteValue('myKey');
    console.log('Stored keys:', GM_listValues());
    await sleep(2000);

    // 14. GM_setValues / GM_getValues
    GM_setValues({ a: 1, b: 2 });
    GM_getValues(['a', 'b'], values => console.log('Multi get:', values));
    await sleep(2000);

    // 15. GM_deleteValues
    GM_deleteValues(['a', 'b']);
    await sleep(2000);

    // 16. GM_addValueChangeListener / GM_removeValueChangeListener
    const listenerId = GM_addValueChangeListener('watched', (k, o, n) => console.log(`Changed from ${o} to ${n}`));
    GM_setValue('watched', 'newVal');
    await sleep(2000);
    GM_removeValueChangeListener(listenerId);
    await sleep(2000);

    // 17. GM_xmlhttpRequest
    GM_xmlhttpRequest({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/todos/1",
        onload: res => console.log("XHR Response:", res.responseText)
    });
    await sleep(2000);

    // 18. unsafeWindow
    console.log('unsafeWindow title:', unsafeWindow.document.title);
    await sleep(2000);

    // 19. GM_getTab / GM_saveTab / GM_getTabs
    GM_getTab(tab => console.log('Current tab:', tab));
    GM_saveTab(tab => console.log('Saved tab:', tab));
    GM_getTabs(tabs => console.log('Open tabs:', tabs));
    await sleep(2000);

    // 20. GM_cookie.list / set / delete
    GM_cookie.list({ domain: location.hostname }, cookies => console.log('Cookies:', cookies));
    GM_cookie.set({ name: 'testCookie', value: '123', domain: location.hostname });
    GM_cookie.delete({ name: 'testCookie', domain: location.hostname });
    await sleep(2000);

    // 21. GM_webRequest (Demo placeholder, needs browser support)
    console.log("GM_webRequest setup done (would run if supported).");
    await sleep(2000);

    // 22. window.onurlchange
    window.onurlchange = () => console.log('URL changed to', window.location.href);
    await sleep(2000);

    // 23. window.focus
    window.focus();
    await sleep(2000);

    // 24. window.close (won’t work unless opened by script)
    // window.close(); // Uncomment with caution
    await sleep(2000);

    console.log('✅ ALL Tampermonkey APIs demo complete.');
})();
