# Objects in Javascript part 2

In JavaScript, objects are key-value pairs where keys are strings (or symbols) and values can be of any data type. Let's break down the provided JavaScript code and understand its purpose and output.

## Creating Objects

### 1. `tinderUser` Object

```javascript
const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;
```

- Here, we create an empty object `tinderUser` using object literal syntax.
- We then add properties `id`, `name`, and `isLoggedIn` to the `tinderUser` object.
- `id` stores a string value `"123abc"`, `name` stores `"Sammy"`, and `isLoggedIn` is initialized with a boolean value `false`.

### 2. `regularUser` Object

```javascript
const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Shivam",
      lastname: "Kumar",
    },
  },
};
```

- Another object named `regularUser` is created.
- It contains properties like `email` and `fullname`.
- The `fullname` property is nested and contains `userfullname`, which further holds `firstname` and `lastname`.

## Object Manipulation

### 3. Merging Objects

```javascript
const obj1 = { one: "a", two: "b" };
const obj2 = { three: "c", four: "d" };

const obj3 = { obj1, obj2 };
const obj4 = Object.assign({}, obj1, obj2, obj3);
```

- Two objects `obj1` and `obj2` are defined with key-value pairs.
- `Object.assign()` method merges `obj1` and `obj2` into a new object `obj4`.

### 4. Alternative Merging Method

```javascript
const obj4 = { ...obj1, ...obj2, ...obj3 };
```

- This spread syntax (`...`) performs the same merging operation as `Object.assign()`.
- Here, it merges `obj1`, `obj2`, and `obj3` into a new object `obj4`.

## Working with Arrays of Objects

### 5. Array of Users

```javascript
const users = [
  { id: 1, email: "h@gmail.com" },
  { id: 2, email: "f@gmail.com" },
  { id: 3, email: "s@gmail.com" },
];
```

- An array named `users` is created, containing three user objects.
- Each user object has `id` and `email` properties.

## Output and Object Methods

### 6. Output and Object Methods

```javascript
console.log(users[1].email);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("isLoggedIn"));
console.log(tinderUser.hasOwnProperty("isLog"));
```

- Outputs:
  - Prints the email of the user at index 1 in the `users` array.
  - `Object.keys()`: Prints the keys of the `tinderUser` object.
  - `Object.values()`: Prints the values of the `tinderUser` object.
  - `Object.entries()`: Prints an array of `[key, value]` pairs for each property in `tinderUser`.
  - `hasOwnProperty()`: Checks if `tinderUser` has the property `"isLoggedIn"`, returning `true` since it does, and `false` for `"isLog"` which it doesn't.

## Summary

This JavaScript code demonstrates the creation, manipulation, and access of objects and arrays of objects. It covers techniques like adding properties to objects, merging objects, accessing object properties, and using object methods like `Object.keys()`, `Object.values()`, and `Object.entries()`. The code provides a comprehensive overview of basic JavaScript object manipulation and array handling techniques.

# Object de-structure and JSON API intro

In this code snippet, we'll explore JavaScript object destructuring, JSON API usage, and its related concepts.

## JavaScript Object Destructuring:

Object destructuring allows you to extract specific properties from objects into variables, providing a more concise syntax. Let's break down the code:

```javascript
const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "shivam",
};

const { courseInstructor: instructor } = course;

console.log(courseInstructor);
console.log(instructor);
```

- First, we define an object named `course` containing properties like `coursename`, `price`, and `courseInstructor`.
- Then, we destructure the `course` object to extract the `courseInstructor` property and assign it to a variable named `instructor`.
- Finally, we log both `courseInstructor` and `instructor` variables to the console.

## Output and Reasoning:

```plaintext
undefined
"shivam"
```

- `console.log(courseInstructor);`: This line logs `undefined`. This happens because `courseInstructor` is not defined as a standalone variable. It was used as a property alias during destructuring, and it's not accessible directly.
- `console.log(instructor);`: This line logs `"shivam"`. Here, `instructor` is the variable where we stored the value of `course.courseInstructor` during destructuring. Hence, it correctly logs the instructor's name.

## JSON API Intro:

The following JSON structures seem to represent some data possibly fetched from an API.

```json
{
  "name": "shivam",
  "coursename": "js in hindi",
  "price": "free"
}
```

```json
[{}, {}, {}]
```

- The first JSON object represents data with properties like `name`, `coursename`, and `price`. It seems to describe a course with the instructor's name, course name, and price.
- The second JSON structure seems to be an array with three empty objects.

This code snippet and explanation provide an overview of object destructuring in JavaScript and basic understanding of JSON data, which is often used in APIs.
