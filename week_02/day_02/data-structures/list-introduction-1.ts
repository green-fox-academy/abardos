// List introduction 1

//We are going to play with lists. Feel free to use the built-in methods where possible.

//Create an empty list which will contain names (strings)
//Print out the number of elements in the list
//Add William to the list
//Print out whether the list is empty or not
//Add John to the list
//Add Amanda to the list
//Print out the number of elements in the list
//Print out the 3rd element
//Iterate through the list and print out each name

//   William
//   John
//   Amanda

//Iterate through the list and print

//   1. William
//   2. John
//   3. Amanda

//Remove the 2nd element
//Iterate through the list in a reversed order and print out each name

//   Amanda
//   William

//Remove all elements
"use strict";

let list: string[] = [];
console.log(list.length);

list.push("William");

if (list.length === 0) {
  console.log(true);
} else {
  console.log(false);
}

list.push("John", "Amanda");
console.log(list.length);

console.log(list[2]);

list.forEach(iterateThrough);
function iterateThrough(item, index) {
  console.log(item);
}

list.forEach(iterateThrough2);
function iterateThrough2(item, index) {
  console.log(index + 1 + ". " + item);
}

let value = "John";
list = list.filter(function (item) {
  return item !== value;
});

console.log(list);

list
  .slice()
  .reverse()
  .forEach(function (item) {
    console.log(item);
  });

list.splice(0, list.length);
console.log(list);
