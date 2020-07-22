// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"

"use strict";

import * as fs from "fs";
import { fileURLToPath } from "url";

let name: string = "Andi";

function manipulateFile(filename) {
  try {
    fs.writeFileSync(filename, name);
    return name;
  } catch (error) {
    console.log("Unable to write file: my-file.txt");
  }
}
console.log(manipulateFile("my-file.txt"));
