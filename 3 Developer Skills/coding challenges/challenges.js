'use strict';

// Coding challenge #1
// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
// days ... 21ºC in 2 days ... 23ºC in 3 day

// 1 ) Understanding Problem
// - Array transformed to string, seperated by ...
// - What is X days? answer: index + 1

// 2 ) Breaking up into sub-problems
// - Transform array into string
// - transform each element to string with ºC
// - Strings need to contain days

// 3) Do as much research as possible

// 4) Write pseudo-code before actual code
// convert array into string,loop through array and return string containing days and celsius symbols
const arr1 = [17, 21, 23];

console.log(`...${arr1[0]}ºC ...${arr1[1]}ºC ...${arr1[2]}ºC`);

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `... ${arr[i]}ºC in ${i + 1} days`;
  }
  return str;
};
console.log(printForecast(arr1));
