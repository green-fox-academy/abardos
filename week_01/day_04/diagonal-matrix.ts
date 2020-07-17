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
/*let bookshelfWithBoxes: string[][] = [
    ['yellow', 'black', 'yellow', 'black', 'yellow'],
    ['white', 'yellow', 'black']
];

console.log(bookshelfWithBoxes[0][0]); // yellow
console.log(bookshelfWithBoxes[1][0]); // white

for(let i:number = 0; i < bookshelfWithBoxes.length; i++) {
    console.log(`i: ${i}`);
    console.log(bookshelfWithBoxes[i]);
    for(let g:number = 0; g < bookshelfWithBoxes[i].length; g++) {
        console.log(bookshelfWithBoxes[i][g]);
    }
    console.log(`done: ${i}`);
}*/


let matrix : number[][] = [
    [0, 0, 0, 1], 
    [0, 0, 1, 0], 
    [0, 1, 0, 0],
    [1, 0, 0, 0]
];
for (let i: number = 0); i < matrix.length; i++) {
    console.log(`i: ${i}`);
    console.log(matrix[i]);
    for (let j: number = 0; j < matrix.length; g++) {
        console.log(matrix[i][j]);
    }
    /*
        for (let h: number = 0); h < matrix.length; h++) {
            for (let l: number = 0); l < matrix.length; l++) {
                console.log(matrix[i][g][h][l]);
            }
        }
    }
}*/