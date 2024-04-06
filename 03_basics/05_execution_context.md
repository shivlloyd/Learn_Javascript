# How does javascript execute code + call stack

![1](https://github.com/shivlloyd/Learn_Javascript/assets/41133545/f14bf8ef-9e27-4f14-8a41-9463c2f6ae7e)

![2](https://github.com/shivlloyd/Learn_Javascript/assets/41133545/56b26bd9-56ca-40e7-82e1-5a40ab015b66)

![3](https://github.com/shivlloyd/Learn_Javascript/assets/41133545/26f7e34e-a76c-4c6e-abc8-7e629d7a77ba)

![4](https://github.com/shivlloyd/Learn_Javascript/assets/41133545/bb0eb4d2-6bc5-419a-a485-5ed9bc587552)

![5](https://github.com/shivlloyd/Learn_Javascript/assets/41133545/7fa3fbac-c0f5-42db-88f5-a1d2394df1b5)

![6](https://github.com/shivlloyd/Learn_Javascript/assets/41133545/fbd68602-53dc-42ed-80d1-4db9a2cbd7ca)

## How JavaScript Executes Code

JavaScript code execution happens in two main phases: the memory creation phase and the execution phase.

### Memory Creation Phase

During the memory creation phase, JavaScript allocates memory for variables and functions. This includes:

1. **Variable Declarations**: Memory space is allocated for variables declared with `var`, `let`, and `const`, but they are not assigned any value yet.
2. **Function Declarations**: Memory is allocated for function declarations, and the entire function definition is stored.

### Execution Phase

After the memory is set up, the code is executed line by line. This is when actual values are assigned to variables, and functions are invoked.

## Call Stack

JavaScript maintains a call stack, which keeps track of the execution context of functions. Whenever a function is called, a new execution context is created and pushed onto the stack. When the function completes, its context is popped off the stack.

Now, let's go through a code example:

```javascript
function one() {
  console.log("one");
  two();
}
function two() {
  console.log("two");
  three();
}
function three() {
  console.log("three");
}

one();
two();
three();
```

### Execution Flow

1. **Function Definitions (Memory Creation Phase)**:

   - Memory is allocated for functions `one`, `two`, and `three`.

2. **Execution**:

   - `one()` is called. This pushes `one()`'s execution context onto the stack.
   - Inside `one()`, `"one"` is logged to the console, then `two()` is called.
   - `two()` is called from within `one()`, pushing `two()`'s execution context onto the stack.
   - Inside `two()`, `"two"` is logged to the console, then `three()` is called.
   - `three()` is called from within `two()`, pushing `three()`'s execution context onto the stack.
   - Inside `three()`, `"three"` is logged to the console.
   - `three()` completes, its execution context is popped off the stack.
   - Control goes back to `two()`, which completes and its execution context is popped off.
   - Control goes back to `one()`, which completes and its execution context is popped off.

3. **Function Calls**:
   - `two()` and `three()` are called independently. Each call creates its own execution context and logs the respective messages.

## Conclusion

Understanding the memory creation phase, execution flow, and call stack helps in debugging and optimizing JavaScript code. It's crucial for developers to comprehend how JavaScript manages memory and executes code to write efficient and error-free programs.