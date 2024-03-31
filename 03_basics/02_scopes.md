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
