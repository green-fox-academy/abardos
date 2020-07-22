// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

"use strict";

function division(num) {
  const result = 10 / num;
  const x = Error("fail");
  if (num > 0) {
    return result;
  } else {
    return x;
  }
}
console.log(division(0));
