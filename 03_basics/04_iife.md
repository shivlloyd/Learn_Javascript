# Immediately Invoked Function Expressions IIFE

In JavaScript, Immediately Invoked Function Expressions (IIFE) are a way to execute functions immediately after they are defined. They are wrapped inside parentheses to denote that they are a function expression and then immediately invoked using an additional set of parentheses.

#### Code Explanation:

```javascript
// Named IIFE
(function chai() {
  console.log("DB CONNECTED");
})();
```

In this code snippet, we have a named IIFE defined using the function expression `(function chai() {...})`. It's immediately invoked `(function chai() {...})()` after its declaration. When executed, it simply logs "DB CONNECTED" to the console.

```javascript
// Anonymous IIFE with arrow function
((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("shivam");
```

Here, we have an anonymous IIFE defined using an arrow function `((name) => {...})`. This function takes one parameter `name` and logs "DB CONNECTED TWO" followed by the value of `name` passed as an argument. The function is then immediately invoked `((name) => {...})("shivam")`, passing "shivam" as the argument.

#### Output:

```
DB CONNECTED
DB CONNECTED TWO shivam
```

#### Reasoning:

- The first IIFE logs "DB CONNECTED" to the console because it's executed immediately after its declaration.
- The second IIFE with an arrow function logs "DB CONNECTED TWO shivam" because it's immediately invoked with the argument "shivam", resulting in the interpolation of "shivam" into the console log message.
