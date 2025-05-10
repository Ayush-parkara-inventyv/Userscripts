### `@name`

**Explanation:**
This metadata key sets the name of the userscript. It's the main title that appears in the Tampermonkey dashboard and installation prompt. It should clearly identify the script for the user.

**Examples:**

```javascript
// @name        YouTube Enhancer
```

```javascript
// @name        Auto Form Filler
```

---
### `@namespace`

**Explanation:**
`@namespace` is used to uniquely identify your script, especially when multiple scripts might have the same `@name`. It's typically a URL (real or fake) used as a unique ID space for scripts.

**Examples:**

```javascript
// @namespace   http://tampermonkey.net/
```

```javascript
// @namespace   https://yourdomain.com/scripts
```
---
### `@copyright`

**Explanation:**
The `@copyright` metadata key specifies the copyright holder for the userscript. This is usually the author's name or the organization responsible for the script, along with the year.

**Examples:**

```javascript
// @copyright   2025 John Doe
```

```javascript
// @copyright   2025 MyCompany, Inc.
```

---
### `@version`

**Explanation:**
`@version` indicates the version number of the userscript. This is helpful for version tracking and updating. It follows the format of `major.minor.patch`, and each update to the script should increment the version number.

**Examples:**

```javascript
// @version     1.0.0
```

```javascript
// @version     1.2.5
```

---
### `@description`

**Explanation:**
`@description` provides a brief summary of what the userscript does. This text is displayed in the Tampermonkey dashboard and helps users understand the script's functionality. It should be concise yet descriptive enough to give users an idea of the script's purpose.

**Examples:**

```javascript
// @description  Enhances YouTube experience by removing ads.
```

```javascript
// @description  Automatically fills out web forms to save time.
```

---
### `@icon`, `@iconURL`, `@defaulticon`

**Explanation:**
These metadata keys set the icon for your userscript in different contexts. Each serves a slightly different purpose:

1. **`@icon`**

   * Specifies the icon using a local path or URL.
   * **Use case:** When you want to point directly to an image either hosted locally or on an external server.

   **Example:**

   ```javascript
   // @icon        https://example.com/icon.png
   ```

2. **`@iconURL`**

   * Similar to `@icon`, but it's specifically used for external URLs to host the icon image. It's commonly used when the image is hosted online.
   * **Use case:** For more flexible and remote hosting of the icon image.

   **Example:**

   ```javascript
   // @iconURL     https://example.com/images/icon64.png
   ```

3. **`@defaulticon`**

   * Specifies the fallback icon if no specific icon is defined or if the others fail to load. This ensures that the script always has an icon to display.
   * **Use case:** To guarantee an icon shows up even if the other icons cannot be loaded.

   **Example:**

   ```javascript
   // @defaulticon  https://example.com/defaulticon.png
   ```

---
### `@icon64`, `@icon64URL`

**Explanation:**
These metadata keys are specifically used for setting **64x64 pixel icons** for your userscript, which are used in certain contexts like the Tampermonkey dashboard or the browser toolbar. They are ideal for high-resolution displays.

1. **`@icon64`**

   * This key sets the 64x64 pixel icon using either a local path or a URL to the image.
   * **Use case:** If you want to provide a high-resolution icon for use on platforms that require a 64x64 size.

   **Example:**

   ```javascript
   // @icon64      https://example.com/icon64.png
   ```

2. **`@icon64URL`**

   * This key also sets the 64x64 icon but it’s specifically used for **URL-based** images. It works similarly to `@icon64` but emphasizes the use of URLs for the 64x64 pixel icon.
   * **Use case:** For hosted images on a server when using a 64x64 resolution.

   **Example:**

   ```javascript
   // @icon64URL   https://example.com/icon64_highres.png
   ```

---
### `@grant`

**Explanation:**
The `@grant` metadata key specifies which Tampermonkey API functions the script requires. By listing specific APIs here, you enable them for your userscript and control which ones it can access. If the script does not require any special Tampermonkey functions, `@grant` can be omitted, but it's often necessary for advanced functionality.

**Examples:**

```javascript
// @grant       GM_setValue
```

```javascript
// @grant       none
```

* **`none`**: If your script doesn't use any special Tampermonkey APIs.
* **Specific API**: Lists specific APIs, such as `GM_setValue`, `GM_getValue`, etc.

---
### `@author`

**Explanation:**
The `@author` metadata key specifies the author(s) of the userscript. This is useful for attribution and to give credit to the script creator. It can list a single person, multiple authors, or even an organization.

**Examples:**

```javascript
// @author      John Doe
```

```javascript
// @author      Jane Doe, John Smith
```

---
### `@homepage`, `@homepageURL`, `@website`, `@source`

**Explanation:**
These metadata keys are used to specify URLs that provide additional information about the userscript. They allow users to easily find more details, updates, and the source code of the script.

1. **`@homepage`**

   * Sets the URL to the homepage of the script. This could be a project page or documentation.

   **Example:**

   ```javascript
   // @homepage    https://example.com/script-homepage
   ```

2. **`@homepageURL`**

   * Synonym for `@homepage` and can be used interchangeably.

   **Example:**

   ```javascript
   // @homepageURL https://example.com/script-homepage
   ```

3. **`@website`**

   * Refers to the website where the script is hosted or where users can find related information, such as a blog or documentation site.

   **Example:**

   ```javascript
   // @website     https://example.com
   ```

4. **`@source`**

   * Provides the URL to the script’s source code (e.g., on GitHub). This is useful for users who want to contribute or report issues.

   **Example:**

   ```javascript
   // @source      https://github.com/username/script-repository
   ```

---
### `@antifeature`

**Explanation:**
The `@antifeature` metadata key specifies a **feature** of the userscript that could be considered undesirable or counter to the user's best interests. It's used to inform users of potentially intrusive or unwanted behavior, such as tracking or altering browser settings. This helps users make informed decisions about using the script.

**Examples:**

```javascript
// @antifeature  Ads
```

```javascript
// @antifeature  Data collection
```

---
### `@require`

**Explanation:**
The `@require` metadata key is used to specify external JavaScript libraries that the userscript needs. This allows you to include libraries from external URLs, which are then available for your script to use. The script will load these dependencies before running.

**Examples:**

```javascript
// @require      https://code.jquery.com/jquery-3.6.0.min.js
```

```javascript
// @require      https://example.com/libs/someLibrary.js
```

---
### `@resource`

**Explanation:**
The `@resource` metadata key is used to include external files (like images, CSS, JSON, or other resources) within the userscript. These resources are downloaded and stored by Tampermonkey, making them accessible by your script without needing to fetch them from the web repeatedly.

**Examples:**

```javascript
// @resource     myImage https://example.com/image.jpg
```

```javascript
// @resource     myCSS https://example.com/styles.css
```

---
### `@include`

**Explanation:**
The `@include` metadata key is used to specify a pattern or URL(s) where the userscript should run. Unlike `@match`, `@include` allows for more flexibility in the URL matching pattern but can also be less strict. It's often used to define broader or more specific rules for where a script should be active.

**Examples:**

```javascript
// @include      https://example.com/*
```

```javascript
// @include      *://*.example.com/*
```

---
### `@match`

**Explanation:**
The `@match` metadata key is used to specify exact URL patterns where the userscript should run. It is more strict and predictable than `@include`, ensuring that the script only executes on URLs that exactly match the pattern. It follows the format `scheme://host/path` and supports wildcards for broader matching.

**Examples:**

```javascript
// @match        https://example.com/*
```

```javascript
// @match        *://*.example.com/*
```

---
### `@exclude`

**Explanation:**
The `@exclude` metadata key is used to specify URL patterns where the userscript **should not** run, even if the URL matches a `@match` or `@include` pattern. This is useful for excluding specific pages or resources from being affected by the script.

**Examples:**

```javascript
// @exclude      https://example.com/ignore-this-page
```

```javascript
// @exclude      *://*.example.com/exclude/*
```

---
### `@run-at`

**Explanation:**
The `@run-at` metadata key specifies when the userscript should be executed relative to the page loading process. It can be set to different values like `document-start`, `document-end`, or `document-idle`, depending on when you want your script to run in relation to the page content.

**Examples:**

```javascript
// @run-at       document-start
```

```javascript
// @run-at       document-end
```

* **`document-start`**: Runs the script before the document is fully loaded.
* **`document-end`**: Runs after the document is fully loaded.

---
### `@run-in`

**Explanation:**
The `@run-in` metadata key specifies the environment in which the script will execute. This is particularly useful for specifying whether the script runs in a **page context** or a **worker context**. Common values include `browser` or `sandbox`.

**Examples:**

```javascript
// @run-in       browser
```

```javascript
// @run-in       sandbox
```

* **`browser`**: Runs in the standard browser environment.
* **`sandbox`**: Runs in a sandboxed environment, which limits the script's access to certain browser features for security.

---
### `@sandbox`

**Explanation:**
The `@sandbox` metadata key is used to specify that the script should run in a sandboxed environment, restricting its access to certain potentially dangerous features of the browser. It allows you to define a set of restrictions for the script's execution, such as disabling specific JavaScript functions or APIs.

**Examples:**

```javascript
// @sandbox      allow-forms allow-scripts
```

```javascript
// @sandbox      allow-modals allow-popups
```

* **`allow-forms`**: Allows the script to submit forms.
* **`allow-scripts`**: Allows the script to run JavaScript.
* You can combine multiple permissions for a more controlled sandbox.

---
### `@tag`

**Explanation:**
The `@tag` metadata key is used to assign custom tags to a userscript. This is helpful for categorizing scripts in the Tampermonkey dashboard, making it easier for users to find and manage their scripts. Tags are not functional but serve as a metadata organizational tool.

**Examples:**

```javascript
// @tag          Productivity
```

```javascript
// @tag          DarkMode
```

---
### `@connect`

**Explanation:**
The `@connect` metadata key specifies which domains the userscript is allowed to communicate with over the network. It helps ensure that the script can make requests to external domains without violating security policies, such as **CORS** (Cross-Origin Resource Sharing). This key lists the domains that the script can interact with.

**Examples:**

```javascript
// @connect      https://api.example.com
```

```javascript
// @connect      *://*.example.com
```

* **`*://*.example.com`**: Allows the script to connect to any subdomain of `example.com`.

---
### `@noframes`

**Explanation:**
The `@noframes` metadata key is used to specify that the userscript should **not** run inside iframes. If a page contains an iframe and the script is set with `@noframes`, it will only execute on the main page, not within any embedded frames.

**Examples:**

```javascript
// @noframes
```

```javascript
// @noframes     // Ensures script doesn't execute inside any iframes
```

---
### `@updateURL`

**Explanation:**
The `@updateURL` metadata key tells Tampermonkey where to check for script updates. Tampermonkey will periodically fetch this URL to see if a newer version of the script is available (by comparing the `@version` there to the installed version). This is especially useful when hosting your script on a CDN or raw file service separate from its main page.

**Examples:**

```javascript
// @updateURL   https://example.com/userscripts/my-script.meta.js
```

```javascript
// @updateURL   https://raw.githubusercontent.com/username/repo/main/my-script.meta.js
```

---
### `@downloadURL`

**Explanation:**
The `@downloadURL` metadata key specifies the URL from which Tampermonkey should download the actual userscript file when updating or installing the script. It directs Tampermonkey to a location where it can fetch the latest version of the script.

**Examples:**

```javascript
// @downloadURL https://example.com/userscripts/my-script.user.js
```

```javascript
// @downloadURL https://raw.githubusercontent.com/username/repo/main/my-script.user.js
```

---
### `@supportURL`

**Explanation:**
The `@supportURL` metadata key provides a link to a page where users can get support for the script. This could be a help page, FAQ, issue tracker, or contact form. It's useful for directing users to resources where they can report issues or ask for help with the script.

**Examples:**

```javascript
// @supportURL  https://example.com/support
```

```javascript
// @supportURL  https://github.com/username/repo/issues
```

---
### `@webRequest`

**Explanation:**
The `@webRequest` metadata key specifies that the userscript will be able to handle or intercept web requests in the browser. By using this metadata key, you indicate that the script is likely making or modifying HTTP requests, which may involve intercepting or observing network traffic. It's often used in conjunction with webRequest API functions in Tampermonkey.

**Examples:**

```javascript
// @webRequest   *://api.example.com/*
```

```javascript
// @webRequest   *://*.example.com/api/*
```

---
### `@unwrap`

**Explanation:**
The `@unwrap` metadata key indicates that the userscript should execute in the **top-level window** of a page, even if it's embedded in an iframe. By default, scripts run within the context of the iframe they are loaded in. This key "unwraps" the script, allowing it to run as if it's part of the main page, overriding any iframe restrictions.

**Examples:**

```javascript
// @unwrap
```

```javascript
// @unwrap       // Forces the script to execute in the top-level window
```

---
### `unsafeWindow`

**Explanation:**
The `unsafeWindow` object allows access to the page's window object from within the userscript. This is typically used to manipulate or interact with the page's JavaScript environment. It grants the script access to the global context of the webpage, but care should be taken, as it could introduce security risks.

**Examples:**

```javascript
// Access a page's global variable
let pageTitle = unsafeWindow.document.title;
```

```javascript
// Modify a page's global function
unsafeWindow.someFunction();
```

---
### `GM\_addElement`

**Explanation:**
The `GM_addElement` function allows userscripts to dynamically create and insert HTML elements into the page. You can specify the tag name, attributes, and even append the element to an existing node. It's useful for adding new DOM elements, such as buttons or other UI components, to the page without directly modifying the page's HTML code.

**Examples:**

```javascript
// Add a new <div> element with a class and text content
GM_addElement('div', { class: 'new-class', innerHTML: 'Hello World' });
```

```javascript
// Add a new <button> element to a specific parent node
let parentNode = document.getElementById('container');
GM_addElement(parentNode, 'button', { innerHTML: 'Click Me' });
```

---
### `GM\_addStyle`

**Explanation:**
The `GM_addStyle` function allows userscripts to inject custom CSS styles into the webpage. This is useful for changing the appearance of a page without modifying the underlying HTML. The function accepts a string of CSS code, which is then applied globally to the page.

**Examples:**

```javascript
// Add a custom background color to the page
GM_addStyle('body { background-color: #f0f0f0; }');
```

```javascript
// Style a specific element with a class
GM_addStyle('.custom-class { color: red; font-size: 16px; }');
```

---
### `GM\_download`

**Explanation:**
The `GM_download` function allows userscripts to download files directly from the internet. It can handle downloading data from a URL and saving it as a file on the local system. This is useful for downloading images, documents, or other resources to the user's machine.

**Examples:**

```javascript
// Download a file from a URL and save it with a specific name
GM_download('https://example.com/file.txt', 'downloaded-file.txt');
```

```javascript
// Download a file from a URL and provide additional settings like save location
GM_download({ url: 'https://example.com/image.png', name: 'image.png', saveAs: true });
```

---
### `GM\_getResourceText`

**Explanation:**
The `GM_getResourceText` function allows userscripts to retrieve the content of a resource that has been defined within the script using the `@resource` metadata key. It is useful for loading and using external data embedded within the script, such as templates, configuration files, or static content.

**Examples:**

```javascript
// Retrieve a text resource named 'configFile' and log it
let configContent = GM_getResourceText('configFile');
console.log(configContent);
```

```javascript
// Load a CSS file embedded as a resource and apply it to the page
let styleContent = GM_getResourceText('styleSheet');
GM_addStyle(styleContent);
```

---
### `GM\_getResourceURL`

**Explanation:**
The `GM_getResourceURL` function is used to retrieve the URL of a resource that has been defined within the userscript using the `@resource` metadata key. This is useful when you want to dynamically access an external resource's URL embedded within the script and use it in HTTP requests or other contexts.

**Examples:**

```javascript
// Get the URL of an embedded resource called 'imageResource'
let imageURL = GM_getResourceURL('imageResource');
console.log(imageURL);
```

```javascript
// Use the URL of a resource to set an image's src attribute
let imageURL = GM_getResourceURL('imageResource');
document.getElementById('myImage').src = imageURL;
```

---
### `GM\_info`

**Explanation:**
The `GM_info` object contains metadata about the userscript itself. It includes details such as the script's name, version, description, and other key information. This can be useful when debugging or logging information about the script during its execution.

**Examples:**

```javascript
// Log the script's name and version
console.log(GM_info.script.name + ' v' + GM_info.script.version);
```

```javascript
// Display the script's description in an alert
alert(GM_info.script.description);
```

---
### `GM\_log`

**Explanation:**
The `GM_log` function is used to output messages to the browser's console for debugging purposes. It is similar to `console.log()` but is specifically intended for userscripts, allowing for better integration with Tampermonkey's debugging tools. It's helpful for logging detailed information or debugging script issues.

**Examples:**

```javascript
// Log a simple message to the console
GM_log('This is a debug message');
```

```javascript
// Log an object or variable for inspection
let userData = { name: 'John', age: 30 };
GM_log(userData);
```

---
### `GM\_notification`

**Explanation:**
The `GM_notification` function allows userscripts to display desktop notifications. This is useful for alerting the user to important events or actions, even if the script is running in the background. Notifications can include a title, text, and an optional icon, and can trigger a callback when the notification is clicked.

**Examples:**

```javascript
// Display a notification with title, text, and an icon
GM_notification('You have a new message', 'New Message', 'https://example.com/icon.png');
```

```javascript
// Display a notification and handle click with a callback
GM_notification({ text: 'Task complete', title: 'Script Alert' }, function() {
  console.log('Notification clicked!');
});
```

---
### `GM\_openInTab`

**Explanation:**
The `GM_openInTab` function opens a URL in a new tab in the browser. It offers options for controlling whether the new tab is opened in the background or foreground. This is useful for userscripts that need to open new pages without interrupting the user's workflow.

**Examples:**

```javascript
// Open a URL in a new tab in the foreground
GM_openInTab('https://example.com', { active: true });
```

```javascript
// Open a URL in a new tab in the background
GM_openInTab('https://example.com', { active: false });
```

---
### `GM\_registerMenuCommand`

**Explanation:**
The `GM_registerMenuCommand` function allows userscripts to add custom commands to the Tampermonkey extension's context menu. This is useful for providing users with a way to interact with the script directly through the extension's UI. The callback function will be triggered when the user selects the command.

**Examples:**

```javascript
// Add a command to the context menu that alerts the user when clicked
GM_registerMenuCommand('Alert Message', function() {
  alert('You clicked the menu command!');
});
```

```javascript
// Add a command that changes the background color of the page
GM_registerMenuCommand('Change Background', function() {
  document.body.style.backgroundColor = 'lightblue';
});
```

---
### `GM\_unregisterMenuCommand`

**Explanation:**
The `GM_unregisterMenuCommand` function is used to remove a previously registered command from the Tampermonkey context menu. You pass the command's ID (which is returned by `GM_registerMenuCommand`) to unregister it. This helps clean up the menu when a command is no longer needed.

**Examples:**

```javascript
// Register a command and store its ID
let commandId = GM_registerMenuCommand('Change Background', function() {
  document.body.style.backgroundColor = 'lightblue';
});

// Later unregister the command using its ID
GM_unregisterMenuCommand(commandId);
```

```javascript
// Unregister a command after certain conditions are met
if (someCondition) {
  GM_unregisterMenuCommand(commandId);
}
```

---
### `GM\_setClipboard`

**Explanation:**
The `GM_setClipboard` function allows userscripts to copy data to the system clipboard. This is useful for automating tasks where you want to easily copy content (like text or a link) to the clipboard without requiring user input.

**Examples:**

```javascript
// Copy simple text to the clipboard
GM_setClipboard('This is some text');
```

```javascript
// Copy a URL to the clipboard
GM_setClipboard('https://example.com');
```

---
### `GM\_getTab`

**Explanation:**
The `GM_getTab` function allows userscripts to retrieve information about a specific tab within the browser. It provides access to details like the tab's URL, title, and more. This can be useful when managing or interacting with specific tabs from within the userscript.

**Examples:**

```javascript
// Retrieve information about the current tab
GM_getTab(function(tab) {
  console.log(tab.url);
});
```

```javascript
// Get the current tab and log its title
GM_getTab(function(tab) {
  console.log(tab.title);
});
```

---
### `GM\_saveTab`

**Explanation:**
The `GM_saveTab` function allows userscripts to save the current tab's state to be retrieved later. This is useful for bookmarking or temporarily storing a tab's information for future use. The function requires a callback to handle the saved tab state.

**Examples:**

```javascript
// Save the current tab's state
GM_saveTab(function(tab) {
  console.log('Tab saved:', tab);
});
```

```javascript
// Save a tab with additional metadata
GM_saveTab(function(tab) {
  tab.metadata = { savedAt: Date.now() };
  console.log('Tab saved with metadata:', tab);
});
```

---
### `GM\_getTabs`

**Explanation:**
The `GM_getTabs` function retrieves an array of all the tabs currently open in the browser. It provides detailed information about each tab, such as the URL and title. This is useful when you need to interact with or gather information from multiple tabs in a userscript.

**Examples:**

```javascript
// Get all open tabs and log their URLs
GM_getTabs(function(tabs) {
  tabs.forEach(tab => {
    console.log(tab.url);
  });
});
```

```javascript
// Get all open tabs and display their titles
GM_getTabs(function(tabs) {
  tabs.forEach(tab => {
    console.log(tab.title);
  });
});
```

---
### `GM\_setValue`

**Explanation:**
The `GM_setValue` function allows userscripts to store key-value pairs in Tampermonkey's persistent storage. This enables saving data between script executions, making it useful for storing user preferences, settings, or state information that should persist across browser sessions.

**Examples:**

```javascript
// Save a user's preference for dark mode
GM_setValue('darkMode', true);
```

```javascript
// Store a value for future use
GM_setValue('lastVisited', 'https://example.com');
```

---
### `GM\_getValue`

**Explanation:**
The `GM_getValue` function retrieves the value associated with a specific key that was previously stored using `GM_setValue`. If the key doesn't exist, it can return a default value, ensuring the script has a fallback value for undefined keys. This is useful for retrieving user settings or preferences.

**Examples:**

```javascript
// Retrieve the dark mode preference and log it
let darkMode = GM_getValue('darkMode', false);
console.log(darkMode);  // false if not set previously
```

```javascript
// Retrieve the last visited URL, with a default if not found
let lastVisited = GM_getValue('lastVisited', 'https://default.com');
console.log(lastVisited);
```

---
### `GM\_deleteValue`

**Explanation:**
The `GM_deleteValue` function removes a stored key-value pair from Tampermonkey's persistent storage. This is useful for clearing out data that is no longer needed, such as when resetting user settings or removing obsolete information.

**Examples:**

```javascript
// Delete the dark mode preference
GM_deleteValue('darkMode');
```

```javascript
// Delete the last visited URL from storage
GM_deleteValue('lastVisited');
```

---
### `GM\_listValues`

**Explanation:**
The `GM_listValues` function returns an array of all the keys currently stored in Tampermonkey's persistent storage. This is useful for inspecting what data is stored and can help with managing or debugging the saved values.

**Examples:**

```javascript
// List all the stored keys and log them
let storedKeys = GM_listValues();
console.log(storedKeys);
```

```javascript
// List all stored keys and check if 'darkMode' is saved
let storedKeys = GM_listValues();
if (storedKeys.includes('darkMode')) {
  console.log('Dark mode setting exists');
}
```

---
### `GM\_setValues`

**Explanation:**
The `GM_setValues` function allows userscripts to store multiple key-value pairs at once in Tampermonkey's persistent storage. This is useful when you need to save multiple pieces of data simultaneously, reducing the number of individual calls to `GM_setValue`.

**Examples:**

```javascript
// Save multiple values at once
GM_setValues({
  darkMode: true,
  lastVisited: 'https://example.com',
  fontSize: '16px'
});
```

```javascript
// Save multiple settings for the user
GM_setValues({
  userName: 'johnDoe',
  theme: 'light',
  notifications: true
});
```

---
### `GM\_getValues`

**Explanation:**
The `GM_getValues` function retrieves multiple values at once from Tampermonkey's persistent storage. You can pass an array of keys, and it will return an object with those key-value pairs. If a key does not exist, it can return a default value.

**Examples:**

```javascript
// Retrieve multiple values at once
GM_getValues(['darkMode', 'lastVisited', 'fontSize'], function(values) {
  console.log(values);
});
```

```javascript
// Retrieve values with defaults
GM_getValues(['darkMode', 'theme', 'notifications'], function(values) {
  let theme = values.theme || 'default';
  console.log(theme);
});
```

---
### `GM\_deleteValues`

**Explanation:**
The `GM_deleteValues` function removes multiple key-value pairs from Tampermonkey's persistent storage at once. You pass an array of keys, and the function deletes all of them. This is useful for clearing out several pieces of data efficiently.

**Examples:**

```javascript
// Delete multiple stored values at once
GM_deleteValues(['darkMode', 'lastVisited']);
```

```javascript
// Clear multiple settings when resetting user preferences
GM_deleteValues(['theme', 'notifications', 'userName']);
```

---
### `GM\_addValueChangeListener`

**Explanation:**
The `GM_addValueChangeListener` function listens for changes to a specific key in Tampermonkey's persistent storage. Whenever the value associated with the key changes, the callback function is triggered, which provides the old and new values. This is useful for tracking changes to important settings or preferences.

**Examples:**

```javascript
// Listen for changes to the 'darkMode' setting
let listenerId = GM_addValueChangeListener('darkMode', (key, old_value, new_value) => {
  console.log(`Dark mode changed from ${old_value} to ${new_value}`);
});
```

```javascript
// Listen for changes to multiple keys
let listenerId = GM_addValueChangeListener('theme', (key, old_value, new_value) => {
  console.log(`Theme changed from ${old_value} to ${new_value}`);
});
```

---
### `GM\_removeValueChangeListener`

**Explanation:**
The `GM_removeValueChangeListener` function removes a previously registered value change listener. This is useful when you no longer need to track changes to a specific key or want to stop listening for value updates to avoid unnecessary function calls.

**Examples:**

```javascript
// Remove the listener using its ID
GM_removeValueChangeListener(listenerId);
```

```javascript
// Remove the listener after a certain condition
if (someCondition) {
  GM_removeValueChangeListener(listenerId);
}
```

---
### `GM\_xmlhttpRequest`

**Explanation:**
The `GM_xmlhttpRequest` function is an enhanced version of the standard `XMLHttpRequest` used in userscripts to make HTTP requests. It offers additional features, such as allowing cross-origin requests and working within the sandboxed environment of Tampermonkey. It's useful for fetching data from external APIs or servers while bypassing some of the restrictions of traditional browser requests.

**Examples:**

```javascript
// Make a simple GET request
GM_xmlhttpRequest({
  method: 'GET',
  url: 'https://api.example.com/data',
  onload: function(response) {
    console.log(response.responseText);
  }
});
```

```javascript
// Make a POST request with data
GM_xmlhttpRequest({
  method: 'POST',
  url: 'https://api.example.com/submit',
  headers: {
    'Content-Type': 'application/json'
  },
  data: JSON.stringify({ name: 'John', age: 30 }),
  onload: function(response) {
    console.log('Data submitted successfully');
  }
});
```

---
### `GM\_webRequest`

**Explanation:**
The `GM_webRequest` function provides an advanced way to interact with web requests. It allows userscripts to hook into network requests and modify or inspect them before they are sent or after they are received. This is useful for tasks like intercepting API calls, modifying headers, or controlling the request flow based on certain conditions.

**Examples:**

```javascript
// Hook into all GET requests and modify them
GM_webRequest({
  rules: [
    { url: '*://api.example.com/*', type: 'GET' }
  ],
  listener: function(details) {
    console.log('Intercepted GET request:', details.url);
    // Modify request or prevent it if necessary
  }
});
```

```javascript
// Block certain requests based on URL
GM_webRequest({
  rules: [
    { url: '*://example.com/block/*', type: 'GET' }
  ],
  listener: function(details) {
    console.log('Blocking request to:', details.url);
    return { cancel: true };
  }
});
```

---
### `GM\_cookie.list`

**Explanation:**
The `GM_cookie.list` function retrieves a list of all cookies associated with a specific domain. It returns an array of cookies, each containing information like the cookie's name, value, domain, and expiration. This function is useful for managing or inspecting cookies set by websites, particularly when working with web automation or scraping.

**Examples:**

```javascript
// List all cookies for the current domain
GM_cookie.list({ domain: 'example.com' }, function(cookies) {
  console.log(cookies);
});
```

```javascript
// List cookies for a specific URL
GM_cookie.list({ url: 'https://example.com' }, function(cookies) {
  cookies.forEach(cookie => {
    console.log(cookie.name, cookie.value);
  });
});
```

---
### `GM\_cookie.set`

**Explanation:**
The `GM_cookie.set` function allows userscripts to set a cookie for a specified domain or URL. You can define various cookie properties such as the cookie's name, value, expiration date, path, and domain. This function provides more flexibility than regular browser cookies, allowing for cross-origin cookies or setting cookies on sites that would normally block them.

**Examples:**

```javascript
// Set a cookie for the current domain
GM_cookie.set({
  name: 'userPreferences',
  value: 'darkMode=true',
  domain: 'example.com',
  path: '/',
  expirationDate: Date.now() + 3600 * 1000  // 1 hour from now
});
```

```javascript
// Set a session cookie
GM_cookie.set({
  name: 'sessionID',
  value: 'abc123xyz',
  domain: 'example.com',
  path: '/',
  expirationDate: 0  // Session cookie
});
```

---
### `GM\_cookie.delete`

**Explanation:**
The `GM_cookie.delete` function removes a cookie for a specific domain or URL. You can specify the cookie's name and, if necessary, its domain, path, and other properties. This function is useful for clearing out cookies when they are no longer needed, such as during user logout or when resetting preferences.

**Examples:**

```javascript
// Delete the 'userPreferences' cookie
GM_cookie.delete({
  name: 'userPreferences',
  domain: 'example.com',
  path: '/'
});
```

```javascript
// Delete the 'sessionID' cookie for the current domain
GM_cookie.delete({
  name: 'sessionID',
  domain: 'example.com'
});
```

---
### `window\.onurlchange`

**Explanation:**
The `window.onurlchange` event listener is triggered whenever the URL of the page changes. This can occur when navigating to a new page, when the hash part of the URL changes, or when the page is reloaded. This event is useful for detecting changes in the page's URL and responding to them, such as for tracking page navigation or performing specific actions based on the current URL.

**Examples:**

```javascript
// Listen for URL changes on the current window
window.onurlchange = function() {
  console.log('The URL has changed to:', window.location.href);
};
```

```javascript
// Use onurlchange to log the new URL when navigating
window.onurlchange = () => {
  console.log('Page URL changed: ' + window.location.href);
};
```

---
### `window\.close`

**Explanation:**
The `window.close` function closes the current browser window. This can be used in userscripts to close a pop-up or an opened tab that was opened by the script. However, for security reasons, modern browsers may restrict closing windows that were not opened by a script, so this function might not work in all cases.

**Examples:**

```javascript
// Close the current window
window.close();
```

```javascript
// Close the current tab if certain conditions are met
if (window.location.href === 'https://example.com/close-me') {
  window.close();
}
```

---
### `window.focus`

**Explanation:**  
The `window.focus` function brings the current browser window or tab to the foreground. It is useful when your userscript opens a new tab or needs to refocus on a particular window after performing background operations. Browsers may restrict its use unless triggered by user interaction for security reasons.

**Examples:**

```javascript
// Focus the current window
window.focus();
```

```javascript
// Open a new window and bring it to the foreground
let win = window.open('https://example.com');
win.focus();
```

---
### `<![CDATA[...]]>`

**Explanation:**  
`<![CDATA[...]]>` is a syntax block used to include character data (CDATA) in XML or XML-like languages without the need for escaping special characters like `<`, `>`, or `&`. In the context of userscripts, it allows embedding large sections of JavaScript or HTML within metadata blocks or resources without breaking the XML structure.

> Note: Most modern userscripts do **not** require `<![CDATA[...]]>` unless you're embedding your script in an XML file (e.g., for XUL or XHTML compatibility).

**Examples:**

```xml
// Used in metadata blocks (rare)
<userscript>
  <![CDATA[
    console.log("This is safe from XML parsing issues.");
  ]]>
</userscript>
```

```javascript
// Not commonly used in pure .user.js files
// But might be seen in legacy XML formats
```

---








### References:
	https://openuserjs.org/about/Userscript-Beginners-HOWTO
	
	https://www.tampermonkey.net/faq.php
	
	https://scratchaddons.com/docs/develop/userscripts
	 