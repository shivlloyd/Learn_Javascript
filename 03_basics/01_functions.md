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

# Functions with Objects and Arrays in JavaScript

JavaScript allows you to work with functions, objects, and arrays in versatile ways. Let's break down the code to understand how functions interact with objects and arrays, and why the outputs are as they are.

### 1. `calculateCartPrice` Function

```javascript
function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

console.log(calculateCartPrice(200, 400, 500, 2000));
```

- **Explanation**: This function `calculateCartPrice` takes in any number of arguments. The `...num1` syntax is the rest parameter, which collects all remaining arguments into an array called `num1`. The function simply returns this array.
- **Output Explanation**: When `calculateCartPrice` is called with arguments `200, 400, 500, 2000`, it gathers the numbers beyond the first two into an array (`num1`). So, the output will be `[500, 2000]`, as these are the arguments beyond `val1` and `val2`.

### 2. Object and Function Interaction

```javascript
const user = {
  username: "shivam",
  age: 19,
};

function handleObject(anyObject) {
  console.log(`username is ${anyObject.username} and age is ${anyObject.age}`);
}

handleObject(user);

handleObject({
  username: "sam",
  age: 22,
});
```

- **Explanation**: Here, an object `user` is defined with properties `username` and `age`. The function `handleObject` takes an object as an argument and logs a message using properties of that object.

- **Output Explanation**:
  - The first call `handleObject(user)` logs `username is shivam and age is 19`, using the properties of the `user` object.
  - The second call `handleObject({username: "sam", age: 22})` logs `username is sam and age is 22`, using the properties of the object passed directly as an argument.

### 3. Array Indexing

```javascript
const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 200, 300]));
```

- **Explanation**: In this section, there's an array `myNewArray` defined with four elements. The function `returnSecondValue` takes an array as an argument and returns the element at index `1`.

- **Output Explanation**:
  - `returnSecondValue(myNewArray)` returns `400`, which is the second element of `myNewArray`.
  - `returnSecondValue([100, 200, 300])` returns `200`, the second element of the array passed directly as an argument.

Understanding these concepts helps you manipulate data structures effectively in JavaScript.
