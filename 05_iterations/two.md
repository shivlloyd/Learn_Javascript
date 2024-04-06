# While and do while loop in Javascript

**Introduction to Loops:**
Loops in JavaScript are used to execute a block of code repeatedly until a specified condition is met. Two commonly used loop constructs in JavaScript are the `while` loop and the `do-while` loop.

### While Loop:

The `while` loop is a control flow statement that repeatedly executes a block of code as long as a specified condition evaluates to true. It consists of three main components:

1. **Initialization:** Initializing a variable before the loop starts.
2. **Condition:** The loop continues executing as long as this condition evaluates to true.
3. **Update:** Modifying the variable value within the loop to eventually break the loop when the condition is false.

Here's the breakdown of the code snippet that uses a `while` loop:

```javascript
let index = 0;
while (index <= 10) {
  console.log(`Value of index is ${index}`);
  index = index + 2;
}
```

- **Initialization:** `index` is initialized to `0`.
- **Condition:** The loop continues executing as long as `index` is less than or equal to `10`.
- **Update:** In each iteration, `index` is incremented by `2` (`index = index + 2`).
- **Output:** The loop will print the value of `index` in each iteration until `index` becomes greater than `10`.

### Do-While Loop:

The `do-while` loop is similar to the `while` loop but with one key difference: it executes the block of code once before checking the condition. It consists of the following components:

1. **Initialization:** Initializing a variable before the loop starts.
2. **Block of Code:** Code to be executed at least once.
3. **Condition:** The loop continues executing as long as this condition evaluates to true.
4. **Update:** Modifying the variable value within the loop to eventually break the loop when the condition is false.

Here's the breakdown of the code snippet that uses a `do-while` loop:

```javascript
let score = 11;
do {
  console.log(`Score is ${score}`);
  score++;
} while (score <= 10);
```

- **Initialization:** `score` is initialized to `11`.
- **Block of Code:** The block of code within the `do` statement is executed once, regardless of the condition.
- **Condition:** The loop continues executing as long as `score` is less than or equal to `10`.
- **Update:** In each iteration, `score` is incremented by `1` (`score++`).
- **Output:** Since the condition is already false (`score` is initially `11`), the loop block will execute only once, printing "Score is 11", and then it will terminate.

### Conclusion:

In summary, `while` and `do-while` loops are fundamental constructs in JavaScript for executing code repeatedly based on certain conditions. Understanding their syntax and behavior is crucial for efficient programming and iterating over arrays or performing tasks until specific conditions are met.
