# For loop with break and continue in javascript

### For Loop Basics

In JavaScript, a `for` loop is a control flow statement that allows you to execute a block of code multiple times. It consists of three parts:

1. **Initialization:** Declaring and initializing a loop variable (`let i = 0;`).
2. **Condition:** Checking a condition before each iteration (`i <= 10;`).
3. **Increment/Decrement:** Updating the loop variable after each iteration (`i++`).

### Example 1: Basic For Loop

```javascript
for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    console.log("5 is the best number");
  }
  console.log(element);
}
```

This loop iterates from 0 to 10, printing each number. If the number is 5, it prints a special message.

### Example 2: Nested For Loops

```javascript
for (let i = 1; i <= 10; i++) {
  console.log(`outer loop value: ${i}`);
  for (let j = 1; j <= 10; j++) {
    console.log(`inner loop value ${j} and outer loop ${i}`);
    console.log(i + "*" + j + " = " + i * j);
  }
}
```

This example demonstrates nested `for` loops, where an inner loop is executed for each iteration of the outer loop. It prints the multiplication table from 1 to 10.

### Example 3: Iterating Arrays

```javascript
let myArray = ["flash", "batman", "superman"];
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  console.log(element);
}
```

Here, the loop iterates through each element of the `myArray` array and prints its value.

### Break and Continue Statements

In JavaScript, `break` and `continue` statements are used to control the flow of a loop.

- **`break`:** Terminates the loop immediately when encountered.
- **`continue`:** Skips the rest of the current iteration and moves to the next iteration.

### Example 4: Using Break

```javascript
for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log("detected 5");
    break;
  }
  console.log(`value of i is ${index}`);
}
```

When the loop variable `index` reaches 5, the loop is terminated immediately with the message "detected 5".

### Example 5: Using Continue

```javascript
for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log("detected 5");
    continue;
  }
  console.log(`value of i is ${index}`);
}
```

When the loop variable `index` reaches 5, the loop skips the rest of the code block for that iteration and moves to the next iteration.
