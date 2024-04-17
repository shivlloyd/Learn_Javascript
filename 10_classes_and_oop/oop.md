# Object Oriented in Javascript

In JavaScript, Object-Oriented Programming (OOP) allows us to model real-world entities as objects, which encapsulate data (properties) and behavior (methods). Let's break down the code to understand key OOP concepts:

### Objects and Properties

```javascript
const user = {
  username: "Shivam",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    console.log("Got user details from database");
    console.log(`Username: ${this.username}`);
    console.log(this);
  },
};
```

- Here, `user` is an object with properties like `username`, `loginCount`, and `signedIn`.
- It also has a method `getUserDetails()` which logs user details, including the username, retrieved from the database.

### Accessing Properties and Methods

```javascript
console.log(user.username); // Output: Shivam
console.log(user.getUserDetails()); // Output: Logs user details
```

- We can access object properties using dot notation (`object.property`) and call methods similarly.

### The `this` Keyword

```javascript
getUserDetails: function () {
  console.log("Got user details from database");
  console.log(`Username: ${this.username}`);
  console.log(this);
},
```

- In JavaScript, `this` refers to the current object. Inside `getUserDetails()`, `this.username` refers to the `username` property of the `user` object.

### Constructors and `new` Keyword

```javascript
function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  return this;
}

const userOne = new User("Shivam", 24, true);
const userTwo = new User("Geeta", 12, false);
```

- Constructors like `User()` are functions used to create and initialize objects. They define properties and methods for objects.
- The `new` keyword creates an instance of the constructor function, binding `this` to the new object being created.
- `this.username`, `this.loginCount`, and `this.isLoggedIn` set properties for each instance.
- `return this;` ensures that the newly created object is returned when using the constructor.

### Constructor Property

```javascript
console.log(userOne.constructor); // Output: [Function: User]
```

- Every object in JavaScript has a `constructor` property that refers to the function used to create the object.

### Summary

- OOP in JavaScript involves creating objects with properties and methods.
- Constructors help in creating multiple similar objects.
- The `this` keyword refers to the current object, allowing access to its properties and methods.
- The `new` keyword creates instances of constructor functions.

Understanding these concepts is crucial for building scalable and maintainable JavaScript applications.
