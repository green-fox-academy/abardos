// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000
'use strict';

let a: number = 2.2;
let b: number = 3;
let c: number = 4;
let SurfaceArea = "Surface Area: " + 2 * (a * b + a * c + b * c);
let Volume = "Volume: " + (a * b * c);

console.log(SurfaceArea);
console.log(Volume);