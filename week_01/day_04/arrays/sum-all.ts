// -  Create a variable named `numbers` with the following content:
//   `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements in `numbers` to the console
"use strict";

let numbers = [3, 4, 5, 6, 7];
console.log(numbers.reduce((a, b) => a + b, 0));
