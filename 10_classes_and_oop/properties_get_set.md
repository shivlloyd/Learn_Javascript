# Understanding Getter and Setter in JavaScript Constructors

**Introduction:**
In JavaScript, besides using classes, object constructors can also implement getter and setter functionalities using `Object.defineProperty()`. This approach provides more control over property access. Let's analyze the provided code to understand how getter and setter functionalities are implemented within a constructor function.

**1. Constructor Function Definition:**
The code begins with the definition of a constructor function `User`. This function initializes a user object with email and password properties.

```javascript
function User(email, password) {
  this._email = email;
  this._password = password;
```

**2. Defining Getter and Setter for Email:**
Getter and setter functionalities for the `email` property are implemented using `Object.defineProperty()`. The getter converts the email to uppercase before returning it, and the setter sets the `_email` property.

```javascript
Object.defineProperty(this, "email", {
  get: function () {
    return this._email.toUpperCase();
  },
  set: function (value) {
    this._email = value;
  },
});
```

**3. Defining Getter and Setter for Password:**
Similarly, getter and setter functionalities for the `password` property are defined using `Object.defineProperty()`. The getter converts the password to uppercase before returning it, and the setter sets the `_password` property.

```javascript
Object.defineProperty(this, "password", {
  get: function () {
    return this._password.toUpperCase();
  },
  set: function (value) {
    this._password = value;
  },
});
```

**4. Object Creation:**
An instance of the `User` constructor is created with the provided email and password.

```javascript
const shivam = new User("shivam@46.ai", "trf");
```

**5. Accessing Properties:**
The properties `email` and `password` of the `shivam` object are accessed.

```javascript
console.log(shivam.email);
console.log(shivam.password);
```

**Conclusion:**
In this code, getter and setter functionalities are implemented within a constructor function using `Object.defineProperty()`. This approach provides fine-grained control over property access and enables developers to define custom behavior for property retrieval and assignment.
