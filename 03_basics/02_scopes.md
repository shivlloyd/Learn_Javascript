# Global and local scope in javascript

### Global Scope

In JavaScript, variables declared outside of any function or block have global scope. Global variables can be accessed from anywhere in the code, both within functions and blocks.

### Local Scope

Variables declared within a function or block have local scope. They are accessible only within the function or block in which they are declared.

### Variable Declarations

In the provided code:

```javascript
var c = 500;
let a = 300;
```

- `c` is declared using `var`, making it globally scoped.
- `a` is declared using `let`, also at the global scope.

### Execution Context

When JavaScript runs your code, it creates an execution context for each block or function. This context includes all the variables declared within that block or function.

### Understanding the Code

Let's break down the code:

```javascript
if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
  console.log("Inner: ", a);
}
```

- Inside the `if` block:
  - `let a = 10;` declares a new variable `a` with a value of 10, but it's scoped to the `if` block.
  - `const b = 20;` declares a constant `b` with a value of 20, also scoped to the `if` block.
  - `var c = 30;` reassigns the global variable `c` to 30, affecting its value globally.

### Output Explanation

After the `if` block, we have:

```javascript
console.log(a);
console.log(b);
console.log(c);
```

- `console.log(a);` will output 300 because `a` was declared globally and the `if` block didn't affect the global `a`.
- `console.log(b);` will throw a ReferenceError because `b` is declared with `const` inside the `if` block, so it's not accessible outside of it.
- `console.log(c);` will output 30 because `c` was reassigned inside the `if` block with `var`, affecting its value globally.

### Conclusion

Understanding scopes in JavaScript is crucial for writing clean and bug-free code. Global variables should be used sparingly, and local variables should be preferred whenever possible to avoid unintended side effects.

# Scope level and mini hoisting in javascript

### Understanding Scope and Hoisting in JavaScript

In JavaScript, scope refers to the accessibility of variables and functions in different parts of your code, while hoisting refers to the behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase.

Let's break down the code snippet to understand how scope and hoisting work in JavaScript.

#### 1. Scope and Hoisting in Function `one`

```javascript
function one() {
  const username = "Shivam";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  console.log(website);

  two();
}

one();
```

- **Scope**:
  - `username` is declared within the `one` function, making it accessible only within the `one` function scope.
  - `website` is declared within the `two` function, making it accessible only within the `two` function scope.
- **Hoisting**:
  - Both function declarations (`one` and `two`) are hoisted to the top of their containing scope.
  - Variable declarations (`username` and `website`) are not hoisted because they are declared using `const`.

When `one()` is called:

- `username` is logged within the `two` function, so it outputs `"Shivam"`.
- `website` is accessed outside its scope, resulting in a `ReferenceError`.

#### 2. Scope and Hoisting in Conditional Block

```javascript
if (true) {
  const username = "shivam";
  if (username === "shivam") {
    const website = " youtube";
    console.log(username + website);
  }
  console.log(website);
}
```

- **Scope**:
  - `username` is declared within the first conditional block, making it accessible within that block.
  - `website` is declared within the second conditional block, making it accessible only within that block.
- **Hoisting**:
  - None of the variables are hoisted because they are declared using `const`.

When the condition is met:

- `"shivam youtube"` is logged because both `username` and `website` are accessible within the inner conditional block.
- `console.log(website)` throws a `ReferenceError` because `website` is not accessible outside its scope.

#### 3. Scope Error Outside Functions and Blocks

```javascript
console.log(username);
```

- **Scope**:
  - `username` is not declared in the current scope or any outer scope.
- **Hoisting**:
  - Since `username` is not declared, hoisting doesn't apply, and it results in a `ReferenceError`.

#### 4. Hoisting Function Declarations vs Function Expressions

```javascript
console.log(addone(5));

function addone(num) {
  return num + 1;
}

addTwo(5);

const addTwo = function (num) {
  return num + 2;
};
```

- **Scope**:
  - `addone` is a function declaration, so it's accessible throughout its containing scope.
  - `addTwo` is a function expression assigned to a `const` variable, so it's accessible only after its declaration.
- **Hoisting**:
  - Function declarations (`addone`) are hoisted to the top of their containing scope, allowing them to be called before their actual declaration.
  - Function expressions (`addTwo`) are not hoisted, so attempting to call them before their declaration results in a `TypeError`.

The output:

- `addone(5)` successfully returns `6` because function declarations are hoisted.
- `addTwo(5)` throws a `TypeError` because `addTwo` is not yet defined at the point of the function call.
