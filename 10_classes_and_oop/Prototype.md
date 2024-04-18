# Prototype in javascript

### Custom Prototype Method

In JavaScript, you can extend built-in objects such as `Object` and `Array` by adding custom methods to their prototypes. This allows you to augment the functionality of these objects throughout your codebase. In the provided code:

```javascript
Object.prototype.shivam = function () {
  console.log(`shivam is present everywhere`);
};

Array.prototype.heyShivam = function () {
  console.log(`Shivam says hi`);
};
```

Here, `shivam` is added to the prototype of `Object`, and `heyShivam` is added to the prototype of `Array`. These methods are then accessible to all instances of their respective objects.

### Inheritance

Inheritance in JavaScript allows objects to inherit properties and methods from other objects, creating a hierarchy of object relationships. This is often achieved through prototypes.

#### Classical Inheritance (Prototype Chain)

```javascript
const User = {
  name: "chai",
  email: "chai@google.com",
};

const Teacher = {
  makeVideo: true,
};

Teacher.__proto__ = User;
```

In this code, `Teacher` inherits properties from `User` using the `__proto__` mechanism. This establishes a prototype chain where `Teacher` is the child object and `User` is the parent object. As a result, `Teacher` gains access to properties like `name` and `email` defined in `User`.

#### Modern Syntax for Setting Prototype

```javascript
Object.setPrototypeOf(TeachingSupport, Teacher);
```

This line sets `Teacher` as the prototype of `TeachingSupport` using the `setPrototypeOf` method. This modern syntax achieves the same result as directly assigning `Teacher` to the `__proto__` property.

### Understanding Context (`this`)

The `this` keyword in JavaScript refers to the context in which a function is executed. Its value depends on how the function is called.

#### Accessing Properties in Object Methods

```javascript
getSpiderPower: function () {
  console.log(`Spidey power is ${this.spiderman}`);
},
```

In the `getSpiderPower` method, `this` refers to the `heroPower` object. Thus, `this.spiderman` accesses the `spiderman` property of the `heroPower` object.

#### Invoking Custom Prototype Methods

```javascript
heroPower.shivam();
myHeros.shivam();
myHeros.heyShivam();
heroPower.heyShivam();
```

When calling custom prototype methods like `shivam` and `heyShivam`, `this` within these methods refers to the object on which the method is called. For instance, `heroPower.shivam()` will print "shivam is present everywhere", where `this` refers to the `heroPower` object.

By understanding custom prototype methods, inheritance, and the context of `this`, you can leverage the power and flexibility of JavaScript's object-oriented features.
