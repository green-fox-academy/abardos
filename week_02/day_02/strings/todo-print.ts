"use strict";
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected output:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

let todoText: string = " - Buy milk\n";

console.log("My todo:\n" + todoText + " - Download games\n" + "\t- Diablo");

/* function plusToDo(string) {
    return "My todo:\n"+string+" - Download games\n" + "\t- Diablo";
}

console.log(plusToDo(todoText));
*/
