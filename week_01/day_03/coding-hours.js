// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52
'use strict';

let hoursDaily = 6;
let semesterLength = 17;
let workingDays = 5;

console.log(hoursDaily * workingDays * semesterLength);

let averageWeeklyHours = 52;
let averageWeeklyCoding = hoursDaily * 5;

console.log(averageWeeklyCoding / averageWeeklyHours * 100);