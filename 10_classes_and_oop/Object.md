# Prototypes, 'this', and 'new' in JavaScript

**1. Prototypes in JavaScript:**
Prototypes are the mechanism through which JavaScript objects inherit properties and methods from other objects. Every JavaScript object has a prototype property, which references another object. When you attempt to access a property or method of an object that doesn't exist on the object itself, JavaScript looks for it in the object's prototype chain. This concept is fundamental to understanding inheritance in JavaScript.

**2. 'this' Keyword:**
In JavaScript, 'this' refers to the object it belongs to. It has different values depending on where it is used:

- In a method, 'this' refers to the owner object.
- Alone, 'this' refers to the global object.
- In a function, 'this' refers to the global object (in strict mode, it is undefined).
- In an event, 'this' refers to the element that received the event.
- In a constructor function, 'this' refers to the instance being created.

**3. 'new' Keyword:**
The 'new' keyword in JavaScript is used to create instances of user-defined object types or constructor functions. When 'new' is used:

- A new object is created.
- The prototype of the newly created object is linked to the constructor function's prototype property.
- The constructor function is called with the provided arguments, and 'this' inside the constructor refers to the newly created object.
- If the constructor function doesn't return anything explicitly, the newly created object is returned.

**Contextual Explanation with Code:**

```javascript
function multiplyBy5(num) {
  return num * 5;
}

multiplyBy5.power = 2; // Adding a property to the function object.

console.log(multiplyBy5(5)); // Output: 25 (calling the function)
console.log(multiplyBy5.power); // Output: 2 (accessing custom property)
console.log(multiplyBy5.prototype); // Output: undefined (functions don't have a prototype property)

// Constructor function for creating user objects
const createUser = function (username, score) {
  this.username = username; // 'this' refers to the instance being created
  this.score = score;
};

// Adding methods to the prototype of createUser
createUser.prototype.increment = function () {
  this.score++;
};

createUser.prototype.printMe = function () {
  console.log(`My score is ${this.score}`);
};

// Creating instances using 'new'
const user1 = new createUser("shivam", 54);
const user2 = new createUser("himesh", 35);

user1.printMe(); // Output: My score is 54
user1.increment(); // Incrementing score
user1.printMe(); // Output: My score is 55
```

In this code:

- 'multiplyBy5' is a simple function to multiply a number by 5. We add a custom property 'power' to the function object.
- 'createUser' is a constructor function for creating user objects. Methods like 'increment' and 'printMe' are added to its prototype to be shared across all instances.
- When we create instances 'user1' and 'user2' using 'new', 'this' inside the constructor refers to the newly created object, allowing us to set properties like 'username' and 'score'.
- Methods like 'increment' and 'printMe' are shared across instances via the prototype chain, conserving memory.
