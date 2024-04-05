# Control flow in javascript

Conditional statements in JavaScript allow you to execute different blocks of code based on whether a condition is true or false.

```javascript
const temperature = 41;

if (temperature === 40) {
  console.log("less than 50");
} else {
  console.log("temperature is greater than 50");
}
```

In this example, the code checks if the temperature is exactly 40. If it is, it prints "less than 50", otherwise, it prints "temperature is greater than 50".

### Multiple Conditions and Block Scope

```javascript
const score = 200;

if (score > 100) {
  const power = "fly";
  console.log(`user power: ${power}`);
}
console.log(`user power: ${power}`);
```

Here, if the score is greater than 100, it sets the power variable to 'fly' and prints it. However, notice that `power` is declared within the `if` block's scope. Therefore, trying to access `power` outside the block will result in an error.

### Chained if-else Statements

```javascript
const balance = 1000;

if (balance > 500) console.log("test"), console.log("test2");
else if (balance < 500) {
  console.log("less than");
} else if (balance < 750) {
  console.log("less than 750");
} else if (balance < 900) {
  console.log("less than 900");
} else {
  console.log("less than 1200");
}
```

This code snippet demonstrates a chained if-else statement. If the balance is greater than 500, it prints "test" and "test2". Otherwise, it checks multiple conditions to determine which range the balance falls into.

### Logical Operators

```javascript
const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2 == 3) {
  console.log("Allow to buy courses");
}

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("User logged in");
}
```

Here, logical operators (`&&`, `||`) are used to combine conditions. The first `if` statement checks if the user is logged in, has a debit card, and an unlikely condition `2 == 3` (which is false), while the second `if` statement checks if the user is logged in either from Google or email.

### Switch Case in JavaScript

Switch statements provide a way to execute different code blocks based on different conditions.

```javascript
const month = "march";

switch (month) {
  case "jan":
    console.log("January");
    break;
  case "feb":
    console.log("Feb");
    break;
  case "march":
    console.log("march");
    break;
  case "april":
    console.log("april");
    break;
  default:
    console.log("default case match");
    break;
}
```

In this example, based on the value of `month`, different cases are evaluated, and corresponding blocks of code are executed. If no match is found, the `default` case is executed.

### Truthy Values and Nullish Coalescing

Truthy values are values that evaluate to `true` in a Boolean context, while falsy values evaluate to `false`. Nullish coalescing (`??`) operator allows you to provide a default value when dealing with null or undefined values.

```javascript
const userEmail = "";

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("don't have user email");
}

if (userEmail.length === 0) {
  console.log("Array is empty");
}

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}

let val1;
val1 = 5 ?? 10; // returns 5
val1 = null ?? 10; // returns 10
val1 = undefined ?? 15; // returns 15
val1 = null ?? 10 ?? 20; // returns 10

console.log(val1);
```

Here, `userEmail` is an empty string, which is a falsy value. Similarly, `emptyObj` has no properties, making it an empty object. The nullish coalescing operator (`??`) is used to provide default values when dealing with null or undefined values.

### Ternary Operator

The ternary operator (`condition ? true : false`) provides a concise way to write conditional statements.

```javascript
const iceTeaPrice = 100;
iceTeaPrice <= 89 ? console.log("less than 80") : console.log("more than 80");
```

In this example, if the price of ice tea is less than or equal to 89, it prints "less than 80", otherwise, it prints "more than 80".

These examples cover various aspects of control flow, conditional statements, switch cases, truthy values, nullish coalescing, and ternary operators in JavaScript. Understanding these concepts is fundamental to writing effective JavaScript code.
