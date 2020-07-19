// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is
'use strict';

let lineCount: number = 4;
let asterisk: string = "*";
let whiteSpace: string = "";

for (let i = 0; i < lineCount; i++) {
    whiteSpace += asterisk;
    console.log(whiteSpace);
}