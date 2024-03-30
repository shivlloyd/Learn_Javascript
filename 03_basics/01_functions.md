# Functions and parameter in javascript

### Introduction to Functions

Functions in JavaScript are blocks of code that perform a specific task. They can take inputs, called parameters, and return outputs. Functions help in organizing code, making it reusable and modular.

#### Code Explanation

```javascript
function sayMyName() {
  console.log("S");
  console.log("H");
  console.log("I");
  console.log("V");
  console.log("A");
  console.log("M");
}

sayMyName();
```

- This defines a function `sayMyName()` which prints each letter of the name "SHIVAM" on separate lines.
- When `sayMyName()` is called, it prints "S", "H", "I", "V", "A", "M" sequentially.

```javascript
function addTwoNumbers(number1, number2) {
  return number1 + number2;
}

const result = addTwoNumbers(3, 5);

console.log(`Result: ${result}`);
```

- This defines a function `addTwoNumbers()` which takes two parameters `number1` and `number2`, and returns their sum.
- It calculates the sum of 3 and 5, assigns it to `result`.
- Then, it prints the result using `console.log()`. The output will be "Result: 8".

```javascript
function loginUserMessage(username = "Sam") {
  if (!username) {
    console.log("Please enter a username");
    return;
  } else {
    return `${username} just logged in`;
  }
}

console.log(loginUserMessage("Dean"));
```

- This defines a function `loginUserMessage()` which takes an optional parameter `username` with a default value of "Sam".
- If `username` is not provided, it defaults to "Sam". If no username is provided, it prints "Sam just logged in".
- If a username is provided, it prints "{username} just logged in". In this case, it prints "Dean just logged in".

#### Output Explanation

- The output will be:

  ```
  Result: 8
  Dean just logged in
  ```

- This is because:
  - The first output "Result: 8" comes from the `addTwoNumbers()` function call, which adds 3 and 5.
  - The second output "Dean just logged in" comes from the `loginUserMessage()` function call with the provided username "Dean".
