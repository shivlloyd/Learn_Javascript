**Understanding setInterval in JavaScript**

In JavaScript, the `setInterval` function is used to repeatedly execute a given function at specified intervals. This is particularly useful for tasks such as updating a clock display, fetching data from a server at regular intervals, or creating animations that need to occur at fixed time intervals.

**Code Overview**

Let's dissect the code to understand how `setInterval` is utilized within it.

```html
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Chai aur Javascript</h1>
    <button id="start">Start</button>
    <button id="stop">Stop</button>
  </body>
  <script>
    // Function to log a string along with the current timestamp to the console
    const sayDate = function (str) {
      console.log(str, Date.now());
    };

    // Variable to store the interval ID returned by setInterval
    let intervalId;

    // Event listener for the button with id "start"
    document.querySelector("#start").addEventListener("click", () => {
      // Starting an interval that calls the sayDate function every 1000 milliseconds (1 second)
      intervalId = setInterval(sayDate, 1000, "hi");
    });

    // Event listener for the button with id "stop"
    document.querySelector("#stop").addEventListener("click", () => {
      // Clearing the interval set by setInterval when the button is clicked
      clearInterval(intervalId);
    });
  </script>
</html>
```

**Explanation**

1. **Defining Functions**: The code begins by defining a function named `sayDate`.

   - `sayDate` is a function that takes a string argument `str` and logs this string along with the current timestamp (obtained using `Date.now()`) to the console.

2. **Setting up Interval**:

   - An empty variable `intervalId` is declared. This variable will be used to store the ID returned by `setInterval`.
   - When the button with id "start" is clicked, an event listener triggers a function.
   - Within this function, `setInterval` is used to call the `sayDate` function every 1000 milliseconds (1 second). The string "hi" is passed as an additional argument to `sayDate`.

3. **Stopping Interval**:
   - Another event listener is set up for the button with id "stop".
   - When this button is clicked, it triggers a function that calls `clearInterval` with `intervalId` as an argument. This effectively stops the execution of the `sayDate` function at regular intervals.

In summary, this code demonstrates the usage of `setInterval` to repeatedly execute a function at specified intervals, and how `clearInterval` can be used to stop this repetition.
