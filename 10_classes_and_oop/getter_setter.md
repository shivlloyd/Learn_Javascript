# Understanding Getter and Setter Methods in JavaScript Classes

**Introduction:**
In JavaScript, classes provide a way to define blueprints for creating objects. Alongside traditional properties, they can also utilize getter and setter methods to control access to those properties. Let's delve into a class-based context and dissect the provided code to understand how getter and setter methods work.

**1. Class Definition:**
The code begins with the definition of a `User` class. This class is designed to represent user objects and has properties for `email` and `password`.

```javascript
class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
```

**2. Getter and Setter for Email:**
Getter and setter methods are defined for the `email` property. The getter method retrieves the value of `email`, converting it to uppercase, while the setter method sets the `_email` property.

```javascript
  get email() {
    return this._email.toUpperCase();
  }

  set email(value) {
    this._email = value;
  }
```

**3. Getter and Setter for Password:**
Similar to `email`, getter and setter methods are defined for the `password` property. The getter method appends the string "shivam" to the password before returning it, while the setter method sets the `_password` property.

```javascript
  get password() {
    return `${this._password}shivam`;
  }

  set password(value) {
    this._password = value;
  }
```

**4. Object Creation:**
An instance of the `User` class is created with the provided email and password.

```javascript
const shivam = new User("shivam@123.com", "abc");
```

**5. Accessing Properties:**
The properties `email` and `password` of the `shivam` object are accessed using dot notation.

```javascript
console.log(shivam.email);
console.log(shivam.password);
```

**Conclusion:**
Getter and setter methods in JavaScript classes offer a way to control access to object properties. They enable developers to enforce certain rules or transformations when retrieving or assigning values to properties. In the provided code, these methods are utilized to manipulate the email and password properties of a user object.
