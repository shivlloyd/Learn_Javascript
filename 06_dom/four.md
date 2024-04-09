# Edit and remove elements in DOM

The HTML and JavaScript code demonstrates various ways to manipulate the Document Object Model (DOM) using JavaScript. Let's break down the code and discuss the different manipulation techniques, specifically focusing on editing and removing elements from the DOM.

**Adding Elements to the DOM**

In the HTML, there's an unordered list (`<ul>`) with the class `language`. Initially, it contains one list item (`<li>`) with the text "Javascript".

Two functions are defined in the JavaScript section to add new languages to this list:

1. `addLanguage(langName)`: This function creates a new list item element, sets its innerHTML to the provided language name, and appends it to the `.language` list.
2. `addOptiLanguage(langName)`: Similar to the first function, but instead of setting `innerHTML`, it creates a text node with the language name and appends it to the list item. This is considered more optimized because it avoids parsing HTML.

**Editing Elements in the DOM**

The code demonstrates two approaches to editing elements in the DOM:

1. **Replacing an Element**:

   - The original code selects the second list item (`<li>`) using `document.querySelector("li:nth-child(2)")`, which is "Javascript" initially.
   - It then replaces the content of this list item with "Mojo" using `secondLang.replaceWith(newli)`. This effectively changes the second list item's content from "Javascript" to "Mojo".

2. **Changing Outer HTML**:
   - Initially, the first list item contains the text "Javascript".
   - The code selects the first list item using `document.querySelector("li:first-child")`.
   - It then replaces the entire HTML content of the first list item with `<li>C++</li>` using `firstLang.outerHTML = "<li>C++</li>"`. This changes the first list item's content to "C++".

**Removing Elements from the DOM**

The code also demonstrates how to remove an element from the DOM:

1. **Removing the Last Child**:
   - Initially, the last list item contains the text "Javascript".
   - The code selects the last list item using `document.querySelector("li:last-child")`.
   - It then removes this element from the DOM using `lastLang.remove()`. This action effectively removes the last list item from the DOM.

These manipulation techniques illustrate common operations performed on the DOM using JavaScript, allowing dynamic changes to web pages based on user interactions or other events.
