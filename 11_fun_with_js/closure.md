# Understanding Lexical Scope and Closures in JavaScript

**Introduction:**
In JavaScript, lexical scope and closures are fundamental concepts that play a crucial role in how variables are accessed and maintained within functions. Lexical scope refers to the visibility of variables within nested functions, while closures enable functions to remember and access their lexical environment even after they are executed. Let's explore these concepts through the provided code snippets.

**Snippet 1: init() Function**

```javascript
function init() {
  var name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  displayName();
}
init();
```

**Explanation:**

- In this snippet, the `init()` function defines a variable `name` and a nested function `displayName()`.
- When `displayName()` is invoked inside `init()`, it has access to the `name` variable due to lexical scope.
- This demonstrates how inner functions can access variables from their outer scope even after the outer function has finished executing.

**Snippet 2: outer() Function**

```javascript
function outer() {
  let username = "shivam";
  console.log("OUTER", secret);
  function inner() {
    let secret = "my1234";
    console.log(`INNER ${username}`);
  }
  function innerTwo() {
    console.log(`INNER TWO ${username}`);
    console.log(secret);
  }
  inner();
  innerTwo();
}
outer();
console.log(`OUTER ${username}`);
```

**Explanation:**

- Here, the `outer()` function defines variables `username` and nested functions `inner()` and `innerTwo()`.
- `inner()` and `innerTwo()` both have access to the `username` variable due to lexical scope.
- However, `innerTwo()` tries to access a variable `secret` that is defined within its lexical scope, but it's declared after the console.log statement which causes a ReferenceError.
- This illustrates how lexical scope defines the accessibility of variables within nested functions.

**Snippet 3: makeFunc() Function with Closure**

```javascript
function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();
```

**Explanation:**

- In this snippet, `makeFunc()` returns the `displayName()` function.
- Even though `makeFunc()` has finished executing, `displayName()` retains access to the `name` variable due to closure.
- Closures allow functions to maintain references to their lexical environment even after the outer function has completed execution.

**Snippet 4: Event Handling with Closures**

```javascript
function clickHandler(color) {
  return function () {
    document.body.style.backgroundColor = `${color}`;
  };
}

document.getElementById("orange").onclick = clickHandler("orange");
document.getElementById("green").onclick = clickHandler("green");
```

**Explanation:**

- This snippet defines a `clickHandler()` function that returns a function to handle click events.
- The returned function sets the background color of the document body to the specified color.
- Each time a button is clicked, the corresponding color is passed to `clickHandler()` through closure, maintaining the association between the button and its color.

**Conclusion:**
Lexical scope and closures are powerful features of JavaScript that enable developers to write more expressive and maintainable code by controlling variable accessibility and retaining state within functions. Understanding these concepts is crucial for effective JavaScript programming.
