// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array
'use strict';

let matrix: number[][] = [
    [0, 0, 0, 1],
    [0, 0, 1, 0],
    [0, 1, 0, 0],
    [1, 0, 0, 0]
];
for (let i: number = 0; i < matrix.length; i++) {
    let stringy: string = ' '; {
        for (let j: number = 0; j < matrix.length; j++) {
            stringy = stringy + matrix[i][j] + ' ';
        }
    }
    console.log(stringy);
};