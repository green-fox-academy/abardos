// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

let lineCount: number = 4;
let asterisk: string = "*";
let asteriskString: string = "";

asteriskString += asterisk;

for (let i = 0; i < lineCount; i++) {
  for (let j = 0; j < i; j++) {
    asteriskString = asterisk + asteriskString + asterisk;
  }
  for (let j = i; j < lineCount; j++) {
    asteriskString = " " + asteriskString + " ";
  }
  console.log(asteriskString);

  asteriskString = asterisk;
}
