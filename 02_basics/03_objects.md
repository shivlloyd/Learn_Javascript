# Objects in depth in javascript

JavaScript objects are complex data types that allow you to store and organize data in key-value pairs. They are fundamental to the language and are used extensively in web development for representing various entities and structures.

## Object Literals

In JavaScript, you can create objects using object literals, which are a simple way to define and initialize objects. The code snippet you provided demonstrates the creation of a JavaScript object using object literals.

```javascript
const mySym = Symbol("key1");

const JsUser = {
  name: "Shivam",
  "full name": "Shivam Kumar",
  [mySym]: "mykey1",
  age: 24,
  location: "Kolkata",
  email: "shivam@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};
```

In this code:

- We declare a symbol `mySym` for a unique key.
- We define an object `JsUser` using object literal syntax `{}`.
- The object has various key-value pairs representing properties such as `name`, `age`, `location`, etc.
- It also includes a property with a symbol key (`[mySym]`) and a property with a key containing spaces (`"full name"`).

## Accessing Object Properties

You can access object properties using dot notation or bracket notation:

```javascript
console.log(JsUser.email); // Output: shivam@gmail.com
console.log(JsUser["email"]); // Output: shivam@gmail.com
console.log(JsUser["full name"]); // Output: Shivam Kumar
console.log(JsUser[mySym]); // Output: mykey1
```

Both `.` and `[]` notation are used to access the value associated with a particular key in the `JsUser` object.

## Object Mutation and Freezing

JavaScript objects are mutable by default, meaning you can change their properties after creation. However, you can prevent changes to an object by using `Object.freeze()`.

```javascript
JsUser.email = "shivam@chatgpt.com"; // Modifying property
Object.freeze(JsUser); // Freezing the object
JsUser.email = "Shivam@microsoft.com"; // Attempted modification
console.log(JsUser); // Output: Unchanged JsUser object
```

In this code:

- Initially, we modify the `email` property of the `JsUser` object.
- After freezing the object, attempting to modify any property results in no change to the object.

## Adding Methods to Objects

You can also add methods to objects dynamically:

```javascript
JsUser.greeting = function () {
  console.log("Hello JS user");
};

JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
};
```

In this code:

- We add two methods, `greeting` and `greetingTwo`, to the `JsUser` object.
- `greeting` is a simple method that logs a greeting message.
- `greetingTwo` is a method that accesses the `name` property of the object using `this` keyword.

## Output Explanation

```javascript
console.log(JsUser.greeting()); // Output: Hello JS user
console.log(JsUser.greetingTwo()); // Output: Hello JS user, Shivam
```

- `JsUser.greeting()` calls the `greeting` method, which logs "Hello JS user".
- `JsUser.greetingTwo()` calls the `greetingTwo` method, which logs "Hello JS user, Shivam" by accessing the `name` property of the `JsUser` object.
