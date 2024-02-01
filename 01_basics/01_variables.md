# Understanding JavaScript Variables and Data Types

## JavaScript Data Types

JavaScript is a dynamically-typed language, meaning the data type of a variable is determined at runtime. The primary data types in JavaScript are:

- **Number:** Represents numeric values.
- **String:** Represents textual data.
- **Boolean:** Represents true or false values.
- **Undefined:** Represents the absence of a value.
- **Null:** Represents the intentional absence of any object value.
- **Object:** Represents a collection of key-value pairs (including arrays and functions).
- **Symbol:** Introduced in ECMAScript 6, representing a unique identifier.

## Variables in JavaScript

In JavaScript, variables are used to store and manipulate data. There are three ways to declare variables:

1. **const:** Declares a constant variable whose value cannot be reassigned.
2. **let:** Declares a variable with block scope and allows reassignment of values.
3. **var:** Declares a variable with function scope (or global scope if declared outside any function). However, var has some issues, such as hoisting, and is generally avoided in modern JavaScript.

## Code Explanation

```javascript
const accountId = 13452; // Declaring a constant variable with value 13452
let accountEmail = "shiavm7@gmail.com"; // Declaring a variable with block scope and assigning an initial value
var accountPassword = "98765"; // Declaring a variable with function scope and assigning an initial value
accountCity = "Mumbai"; // Declaring a variable without var, let, or const (implicitly becomes global)
let accountState; // Declaring a variable with block scope without an initial value (undefined)

// Attempting to reassign a value to a constant variable will result in a TypeError
// accountId = 2 // not allowed

accountEmail = "amit@gmail.com"; // Reassigning the value of accountEmail
accountPassword = "54321"; // Reassigning the value of accountPassword
accountCity = "Delhi"; // Reassigning the value of accountCity

console.log(accountId); // Output the value of accountId

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]); // Displaying values in a table format
```

## Explanation of Output

1. **TypeError:** The attempt to reassign a value to a constant variable (`accountId`) results in a TypeError since const variables cannot be reassigned.

2. **Implicit Global Variable:** `accountCity` is declared without var, let, or const, making it an implicitly global variable. This is generally not recommended due to potential issues with global scope pollution.

3. **Undefined Variable:** `accountState` is declared but not assigned an initial value, resulting in its value being undefined when displayed in the console.

4. **Console Output:** The values of `accountId`, `accountEmail`, `accountPassword`, `accountCity`, and `accountState` are displayed in a table format using `console.table`.

## Conclusion

Understanding JavaScript variables and data types is crucial for effective coding. Proper use of const, let, and var helps in managing variable scope and preventing unintended side effects. It's essential to be aware of the nuances of each type and use them appropriately based on the requirements of the code.
