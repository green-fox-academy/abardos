// Write a function called `sum` that returns the sum of numbers from zero to the given parameter
'use strict';

function sum(x) {
    let startNum = 0;
    for (let i = 1; i <= x; i++) {
        startNum += i;
    }
    return (startNum);
}

console.log(sum(5));