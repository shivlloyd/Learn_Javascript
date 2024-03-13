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
