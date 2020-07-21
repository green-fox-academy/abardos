//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once

//Aze's explanation:
//1. Loop method:
function uniqueWithLoop(input: number[]) {
  let result: number[] = [];
  input.forEach((number: number) => {
    let alreadyInResult = false;
    result.forEach((resultNumber: number) => {
      if (resultNumber === number) {
        alreadyInResult = true;
      }
    });
    if (!alreadyInResult) {
      result.push(number);
    }
  });
  return result;
}
//2. Set method:
function uniqueWithSet(input: number[]) {
  return [...new Set(input)];
}

//  Example
console.log(uniqueWithLoop([1, 11, 34, 11, 52, 61, 1, 34]));
console.log(uniqueWithSet([1, 11, 34, 11, 52, 61, 1, 34]));
//  should print: `[1, 11, 34, 52, 61]`
