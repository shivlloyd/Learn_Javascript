# Using Object Literal with Getter and Setter in JavaScript

**Introduction:**
In JavaScript, object literals can also incorporate getter and setter methods to control access to properties. This approach provides a concise syntax for defining objects with encapsulated behavior. Let's explore how getter and setter functionalities are integrated into an object literal in the provided code.

**1. Object Literal Definition:**
The code starts by defining an object literal named `User`. This object encapsulates properties `_email` and `_password` along with getter and setter methods for these properties.

```javascript
const User = {
  _email: "shivam@123.com",
  _password: "prt",
```

**2. Getter for Email:**
A getter method is defined for the `email` property within the `User` object. It retrieves the email value and converts it to uppercase.

```javascript
  get email() {
    return this._email.toUpperCase();
  },
```

**3. Setter for Email:**
Similarly, a setter method is defined for the `email` property. It allows the `_email` property to be modified.

```javascript
  set email(value) {
    this._email = value;
  },
```

**4. Getter for Password:**
Another getter method is defined for the `password` property within the `User` object. It retrieves the password value and converts it to uppercase.

```javascript
  get password() {
    return this._password.toUpperCase();
  },
```

**5. Setter for Password:**
Likewise, a setter method is defined for the `password` property. It enables modification of the `_password` property.

```javascript
  set password(value) {
    this._password = value;
  },
```

**6. Object Creation using Object.create():**
An object named `shivam` is created by inheriting from the `User` object using `Object.create()`.

```javascript
const shivam = Object.create(User);
```

**7. Accessing Properties:**
The properties `email` and `password` of the `shivam` object are accessed, utilizing the getter methods defined in the `User` object.

```javascript
console.log(shivam.email);
console.log(shivam.password);
```

**Conclusion:**
This code showcases the utilization of getter and setter methods within an object literal in JavaScript. By encapsulating properties and their accessors within an object, developers can achieve encapsulation and controlled access to object properties.
