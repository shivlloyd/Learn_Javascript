# Overview of Data Types in JavaScript

JavaScript has two main categories of data types: **primitive** and **reference** types. Each serves different purposes and is stored differently in memory.

## Primitive Data Types

Primitive data types are immutable and directly hold their values. They include:

### 1. String

A sequence of characters enclosed in single or double quotes.

Example:

```javascript
const name = "John Doe";
```

### 2. Number

Numeric data, including integers and floating-point numbers.

Example:

```javascript
const age = 25;
const height = 5.11;
```

### 3. Boolean

Represents a logical value of true or false.

Example:

```javascript
const isLogged = false;
```

### 4. null

Represents the intentional absence of any object value.

Example:

```javascript
const value = null;
```

### 5. undefined

Represents the uninitialized value of variables or the absence of a value.

Example:

```javascript
let variable;
console.log(variable); // Output: undefined
```

### 6. Symbol

Unique and immutable data type, used as unique identifiers for object properties.

Example:

```javascript
const id = Symbol("uniqueID");
```

### 7. BigInt

Represents whole numbers larger than 2^53 - 1.

Example:

```javascript
const bigNumber = 9007199254740992n;
```

## Reference Data Types

Reference data types are objects that are stored by reference. They include:

### 1. Array

A collection of data stored under a single variable name.

Example:

```javascript
const numbers = [1, 2, 3, 4, 5];
```

### 2. Object

A collection of key-value pairs, where values can be primitive or reference types.

Example:

```javascript
const person = { name: "John", age: 30 };
```

### 3. Function

A block of code that can be invoked when called.

Example:

```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
}
```

## Difference Between Primitive and Reference Types

### Storage in Memory

- **Primitive Types**: Stored directly in the variable's location in memory.
- **Reference Types**: Stored as a reference to the location in memory where the data is stored.

### Immutability

- **Primitive Types**: Immutable; their values cannot be changed.
- **Reference Types**: Mutable; their values can be changed by modifying the object properties or elements.

### Comparison

- **Primitive Types**: Compared by value.
- **Reference Types**: Compared by reference.

# Stack and Heap memory in javascript

**1. Primitive Data Types vs Non-Primitive Data Types**

In JavaScript, data types are broadly categorized into two types: primitive and non-primitive (also known as reference types).

- **Primitive Data Types**: These are immutable data types directly stored in the stack memory. Examples include numbers, strings, booleans, null, undefined, and symbols.

- **Non-Primitive Data Types**: These are mutable data types stored in the heap memory. Examples include objects, arrays, functions, and dates. Non-primitive data types store references to their memory locations rather than the actual values.

**2. Stack Memory vs Heap Memory**

- **Stack Memory**: It is a small, fixed-size memory that stores primitive values and function calls. Each function call creates a new frame on the stack, and when the function finishes execution, its frame is removed. Stack memory operates in a Last In, First Out (LIFO) manner.

- **Heap Memory**: It is a larger, dynamic memory that stores non-primitive values. Objects, arrays, and other non-primitive data types are allocated memory in the heap. Memory allocation and deallocation in the heap are managed by the JavaScript engine's garbage collector.

**3. Passing by Value vs Passing by Reference**

- **Passing by Value**: When passing primitive data types as arguments or assigning them to variables, a copy of the value is created. Any changes made to the copied value do not affect the original value.

- **Passing by Reference**: When passing non-primitive data types as arguments or assigning them to variables, a reference to the original value's memory location is passed. Therefore, changes made to the referenced object affect the original object as well.

**Code Example:**

```javascript
// Primitive Data Types in Stack
let myYoutubeName = "ShivamKumar";
let anotherName = myYoutubeName;
anotherName = "ChaiAurCode";
console.log(myYoutubeName); // Output: ShivamKumar
console.log(anotherName); // Output: ChaiAurCode

// Non-Primitive Data Types in Heap
let userOne = {
  email: "user@google.com",
  upi: "user@ybl",
};
let userTwo = userOne;
userTwo.email = "shivam@gmail.com";
console.log(userOne); // Output: { email: "shivam@gmail.com", upi: "user@ybl" }
```

**Explanation:**

![Screenshot 2024-03-14 210954](https://github.com/shivlloyd/Learn_Javascript/assets/41133545/6c5bcc54-f288-45dc-aa4e-090821ccfc40)

- In the primitive example, `myYoutubeName` and `anotherName` are primitive strings stored in the stack. When `anotherName` is assigned a new value, it creates a new memory space in the stack, hence `myYoutubeName` remains unchanged.

- In the non-primitive example, `userOne` and `userTwo` are objects stored in the heap. When `userTwo` is assigned `userOne`, it creates a reference to the same memory location. Therefore, modifying `userTwo` also affects `userOne`.
