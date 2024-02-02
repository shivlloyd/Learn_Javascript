# JavaScript Data Types and Code Explanation

## Enabling Strict Mode

```javascript
"use strict";
```

Enabling strict mode at the beginning of the script helps catch common coding errors and encourages better coding practices.

## Console Logging and Code Readability

```javascript
console.log(5 + 6);
```

This line logs the sum of 5 and 6 to the console. It's recommended to maintain code readability by avoiding unnecessary line breaks.

```javascript
console.log("Shivam");
```

Logs the string "Shivam" to the console.

## Variable Declaration and Initialization

```javascript
let name = "Shivam";
let age = 20;
let isLoggedIn = false;
let state;
```

- Declares variables `name`, `age`, `isLoggedIn`, and `state`.
- `name` is assigned a string value.
- `age` is assigned a numeric value.
- `isLoggedIn` is assigned a boolean value.
- `state` is declared without assigning a value, resulting in `undefined`.

## JavaScript Data Types

```javascript
console.log(typeof "shivam"); // Outputs 'string'
console.log(typeof age); // Outputs 'number'
console.log(typeof null); // Outputs 'object' (known quirk in JavaScript)
console.log(typeof undefined); // Outputs 'undefined'
```

Explanation of Data Types:

- **String**: Represents textual data.
- **Number**: Represents numeric values.
- **Boolean**: Represents true or false values.
- **Null**: Represents the intentional absence of any object value.
- **Undefined**: Represents uninitialized variables or missing values.

### Important Notes

- The `typeof` operator helps check variable types at runtime.
- `typeof null` returning 'object' is considered a bug in JavaScript.
- Variables can dynamically change types.
- Two JS documentation to look for [tc39](https://tc39.es/ecma262/) and [MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Conclusion

Understanding JavaScript data types is crucial for proper variable declaration and manipulation.
