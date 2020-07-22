// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

"use strict";

import * as fs from "fs";
import { fileURLToPath } from "url";

let filename: string = "my-file.txt";

function countLines(filename) {
  try {
    let content = fs.readFileSync(filename, "utf-8");
    return content.split("\n").length;
  } catch (error) {
    return 0;
  }
}
console.log(countLines(filename));
