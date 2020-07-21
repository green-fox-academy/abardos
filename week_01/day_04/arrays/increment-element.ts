// -  Create a variable named `numbers` with the following content: `[1, 2, 3, 4, 5]`
// -  Increment the third element simply by accessing it
// -  Log the third element to the console
"use strict";

let numbers = [1, 2, 3, 4, 5];
numbers[2] = 3 + 1;

console.log(numbers[2]);

/* or previous solution:

let numbers = [1, 2, 3, 4, 5].map(function (item) {
    return item === 3 ? 3 + 1 : item;
});

console.log(numbers[2]); */
