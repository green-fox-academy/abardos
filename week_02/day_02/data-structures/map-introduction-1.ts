//Map introduction 1
//We are going to play with maps. Feel free to use the built-in methods where possible.

//Create an empty map where the keys are integers and the values are characters

//Print out whether the map is empty or not

//Add the following key-value pairs to the map

/*Key	Value
97	a
98	b
99	c
65	A
66	B
67	C */
//Print all the keys

//Print all the values

//Add value D with the key 68

//Print how many key-value pairs are in the map

//Print the value that is associated with key 99

//Remove the key-value pair where with key 97

//Print whether there is an associated value with key 100 or not

//Remove all the key-value pairs
"use strict";

let obj: { [key: number]: string } = {};

let isMyObjectEmpty = !Object.keys(obj).length;
console.log(isMyObjectEmpty);

obj[97] = "a";
obj[98] = "b";
obj[99] = "c";
obj[65] = "A";
obj[66] = "B";
obj[67] = "C";

console.log(Object.keys(obj));

console.log(Object.values(obj));

obj[68] = "D";
console.log(obj);

console.log((Object.keys(obj).length + Object.values(obj).length) / 2);

console.log(obj[99]);

delete obj[97];
console.log(obj);

if (obj[100]) {
  console.log(true);
}
console.log(false);

obj = {};
console.log(obj);
