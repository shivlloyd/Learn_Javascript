### HTML Structure:

```html
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DOM | Chai aur Code</title>
  </head>
  <body style="background-color: #212121; color: #fff">
    <div class="parent">
      <div class="day">monday</div>
      <div class="day">tuesday</div>
      <div class="day">wednesday</div>
      <div class="day">thursday</div>
    </div>
  </body>
</html>
```

- The HTML document contains a `div` element with a class of "parent", containing four child `div` elements with a class of "day", each representing a day of the week.

### JavaScript Code:

```javascript
<script>
  const parent = document.querySelector(".parent");
  console.log(parent); // Output: <div class="parent">...</div>
  console.log(parent.children); // Output: HTMLCollection [ div.day, div.day, div.day, div.day ]
  console.log(parent.children[1].innerHTML); // Output: tuesday

  for (let i = 0; i < parent.children.length; i++) {
    console.log(parent.children[i].innerHTML); // Output: monday, tuesday, wednesday, thursday
  }

  parent.children[1].style.color = "orange"; // Changes the text color of the second child to orange
  console.log(parent.firstElementChild); // Output: <div class="day">monday</div>
  console.log(parent.lastElementChild); // Output: <div class="day">thursday</div>

  const dayOne = document.querySelector(".day");
  console.log(dayOne); // Output: <div class="day">monday</div>
  console.log(dayOne.parentElement); // Output: <div class="parent">...</div>
  console.log(dayOne.nextElementSibling); // Output: <div class="day">tuesday</div>

  console.log("NODES: ", parent.childNodes); // Output: NodeList [ text, div.day, text, div.day, text, div.day, text, div.day, text ]
</script>
```

- **Selecting the Parent Element:** `const parent = document.querySelector(".parent");` selects the `div` element with the class "parent".
- **Accessing Children:** `parent.children` retrieves a collection of child elements of the parent. `parent.children[1]` selects the second child element.
- **Looping Through Children:** A `for` loop iterates over each child element of the parent and logs their inner HTML content.
- **Styling:** `parent.children[1].style.color = "orange";` changes the text color of the second child element to orange.
- **Accessing First and Last Child:** `parent.firstElementChild` and `parent.lastElementChild` retrieve the first and last child elements of the parent, respectively.
- **Sibling and Parent Nodes:** `dayOne.parentElement` accesses the parent element of `dayOne`, and `dayOne.nextElementSibling` accesses the next sibling element.
- **Node List:** `parent.childNodes` retrieves a list of all child nodes (including text nodes) of the parent element.

This code demonstrates various ways to interact with parent and child elements in the DOM using JavaScript.
