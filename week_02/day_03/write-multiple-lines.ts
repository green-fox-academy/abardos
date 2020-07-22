// Create a function that takes 3 parameters: a path, a word and a number
// and is able to write into a file.
// The path parameter should be a string that describes the location of the file you wish to modify
// The word parameter should also be a string that will be written to the file as individual lines
// The number parameter should describe how many lines the file should have.
// If the word is 'apple' and the number is 5, it should write 5 lines
// into the file and each line should read 'apple'
// The function should not raise any errors if it could not write the file.

"use strict";

import * as fs from "fs";
import { fileURLToPath } from "url";

function multiLine(path: string, word: string, number: number) {
  fs.appendFileSync(path, word.repeat(number));
}

multiLine("multi.txt", "\n apple", 5);

/* multiLine('multi.txt', 'apple', 5);
fs.appendFileSync(path,word)
Function (
1. function ()
2. fs.appendFileSync(path,word)

/*
function countLines(filename) {
  try {
    let content = fs.readFileSync(filename, "utf-8");
    return content.split("\n").length;
  } catch (error) {
    return 0;
  }
}
console.log(countLines(filename)); */
