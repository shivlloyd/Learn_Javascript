# Events in Javascript

**HTML Structure:**
In this HTML document, we have a list of images contained within an unordered list (`<ul>`) with the id "images". Each list item (`<li>`) contains an image (`<img>`) element with different ids and sources. Additionally, there's a link to Google (`<a>`) with the id "google".

**JavaScript Code:**

1. **Image Click Event:**

   ```javascript
   document.getElementById("owl").onclick = function () {
     alert("owl clicked");
   };
   ```

   This code sets up an event listener for the image with the id "owl". When this image is clicked, an alert saying "owl clicked" will be displayed.

2. **Event Bubbling and Event Listener:**

   ```javascript
   document.getElementById("images").addEventListener(
     "click",
     function (e) {
       console.log(`clicked inside the ul`);
     },
     false
   );
   ```

   This code attaches an event listener to the `<ul>` element with the id "images". Whenever a click event occurs inside this `<ul>`, a message "clicked inside the ul" will be logged to the console.

3. **Event Bubbling and Stopping Propagation:**

   ```javascript
   document.getElementById("owl").addEventListener(
     "click",
     function (e) {
       console.log(`owl clicked`);
       e.stopPropagation();
     },
     false
   );
   ```

   Here, another event listener is added to the image with the id "owl". When this image is clicked, "owl clicked" will be logged to the console. Additionally, `e.stopPropagation()` prevents the click event from bubbling up to its parent elements, stopping further execution of click event listeners.

4. **Preventing Default Action:**

   ```javascript
   document.getElementById("google").addEventListener(
     "click",
     function (e) {
       e.preventDefault();
       e.stopPropagation();
       console.log("google clicked");
     },
     false
   );
   ```

   This code listens for clicks on the Google link. It prevents the default action of the link (navigating to Google) using `e.preventDefault()`. `e.stopPropagation()` is also called to stop further propagation of the click event.

5. **Targeting Specific Elements within the List:**
   ```javascript
   document.querySelector("#images").addEventListener(
     "click",
     function (e) {
       console.log(e.target.tagName);
       if (e.target.tagName === "IMG") {
         let removeIt = e.target.parentNode;
         removeIt.remove();
       }
     },
     false
   );
   ```
   This event listener targets the `<ul>` element with the id "images" and listens for click events. When a click event occurs, it checks if the clicked element is an image (`<img>`). If so, it removes the parent `<li>` element containing the clicked image from the DOM.

**Conclusion:**
In summary, this JavaScript code demonstrates various aspects of handling events in a web page, including attaching event listeners, event bubbling, stopping event propagation, preventing default actions, and targeting specific elements within a container. Understanding these concepts is crucial for building interactive and dynamic web applications.
