# THIS and arrow function in javascript

In JavaScript, `this` refers to the context in which a function is executed. It can be a bit tricky, especially when dealing with arrow functions. Let's dissect the code to understand how `this` behaves with regular functions and arrow functions.

## Context with Regular Functions

```javascript
const user = {
  username: "shivam",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, Welcome to website`);
    console.log(this);
  },
};

user.welcomeMessage();
```

Output:

```
shivam, Welcome to website
{ username: 'shivam', price: 999, welcomeMessage: [Function: welcomeMessage] }
```

In a regular function (`welcomeMessage`), `this` refers to the object calling the function (`user` in this case). So, it logs the username from the `user` object and the entire `user` object itself.

## Changing Context and Re-executing the Function

```javascript
user.username = "sam";
user.welcomeMessage();
```

Output:

```
sam, Welcome to website
{ username: 'sam', price: 999, welcomeMessage: [Function: welcomeMessage] }
```

Even after changing the `username` property of `user`, `this` inside `welcomeMessage` still refers to `user`, reflecting the updated username.

## Global Context and 'this'

```javascript
console.log(this);
```

Output:

```
{}
```

In the global context, `this` refers to the global object (`window` in browsers, or an empty object `{}` in Node.js). It's because this line of code is not enclosed within any object or function.

## Arrow Functions and 'this'

Arrow functions behave differently regarding `this`. They lexically bind `this`, meaning they inherit the `this` value from the enclosing scope. Let's see how they work in different scenarios.

## Arrow Function Inside a Regular Function

```javascript
function chai() {
  let username = "shivam";
  console.log(this.username);
}

chai();
```

Output:

```
undefined
```

Inside `chai`, `this` refers to the global object (`window` in browsers), because `chai` is called in the global scope.

## Arrow Function Assigned to a Variable

```javascript
const chai = () => {
  let username = "shivam";
  console.log(this.username);
};

chai();
```

Output:

```
undefined
```

Again, `this` inside the arrow function `chai` refers to the global object because arrow functions do not have their own `this` context.

## Arrow Function Returning an Object

```javascript
const addTwo = (num1, num2) => ({ username: "Hitesh" });

console.log(addTwo(3, 4));
```

Output:

```
{ username: 'Hitesh' }
```

Arrow functions implicitly return an object here. `this` is not involved, and the returned object is `{ username: 'Hitesh' }`.

## Conclusion

Understanding `this` in JavaScript is crucial for effective programming. Regular functions bind `this` dynamically, depending on the context of invocation, while arrow functions lexically bind `this`, inheriting it from the surrounding code.
