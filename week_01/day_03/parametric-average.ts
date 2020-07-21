// Write a program that calculates the sum and the average from 1 to a given number.
// Example input: 5
// Example output: Sum: 15, Average: 3
"use strict";

let a: number = 0;
let b: number = 5;
for (let i: number = 1; i <= b; i++) {
  a = a + i;
}
let c = a / b;
console.log("Sum: " + a);
console.log("Average: " + c);
