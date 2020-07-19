// -  Create an array named `numbers` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test
'use strict';

let numbers = [1, 2, 3, 8, 5, 6];
let numbers2 = numbers.map(function (item) {

    return item == 8 ? 4 : item;
});

console.log(numbers2[3]);