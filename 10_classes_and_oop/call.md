# Call and this in javascript

#### Introduction

In JavaScript, the `call` method is used to invoke a function with a specified `this` value and arguments provided individually. It allows you to call a function as if it were a method of an object, specifying the object context explicitly.

#### Code Explanation

Let's dissect the provided code to understand how `call` is utilized.

```javascript
function SetUserName(username) {
  // Compled DB call
  this.username = username;
  console.log("called");
}

function createUser(username, email, password) {
  SetUserName.call(this, username); // Using call to invoke SetUserName function with 'this' context

  this.email = email;
  this.password = password;
}

const chai = new createUser("shivam", "shivam@fb.com", "123");
console.log(chai);
```

#### `SetUserName` Function

- `SetUserName` is a function that takes a `username` parameter.
- It assigns the provided `username` to the `username` property of the object the function is called upon.
- In the provided code, there's a placeholder comment indicating a database call, suggesting this function might be part of a larger application logic.

#### `createUser` Function

- `createUser` function is defined with parameters `username`, `email`, and `password`.
- Inside `createUser`, `SetUserName.call(this, username)` is used.
  - This line invokes the `SetUserName` function, passing `this` (the current context) and `username` as arguments.
  - By using `call`, `SetUserName` is executed in the context of the object created by `new createUser`.
- The function then assigns `email` and `password` to properties of the object created by `new createUser`.

#### Object Instantiation

- `const chai = new createUser("shivam", "shivam@fb.com", "123")` instantiates an object using the `createUser` constructor function with provided arguments.
- This object, named `chai`, contains properties `username`, `email`, and `password`, as assigned within the `createUser` function.

#### Conclusion

- The `call` method in JavaScript allows a function to be invoked with a specified context (`this`) and individual arguments.
- It's particularly useful when you want to reuse functions in different contexts or when dealing with object-oriented programming paradigms.
