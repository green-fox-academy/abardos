// -  Create a variable named `numbers`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numbers`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numbers`
"use strict";

let numbers: number[] = [3, 4, 5, 6, 7];
let temp = new Array(numbers.length);

for (let i = 0; i < numbers.length; i++) {
  temp[i] = numbers[numbers.length - i - 1];
}

console.log(temp); // do it with creating a new temp array and a loop
