// Write a program that opens a file called "my-file.txt", then prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// then it should print the following error message: "Unable to read file: my-file.txt"
"use strict";

import * as fs from "fs";
import { fileURLToPath } from "url";
try {
  let content = fs.readFileSync("my-file2.txt", "utf-8");
  console.log(content);
} catch (error) {
  //console.log(error.message);
  console.log("Unable to read file: my-file.txt");
}
