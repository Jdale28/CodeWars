// Working through CodeWars challenges 
// Recording the answers to the various solutions for practice

// Maximum Multiple
// Task
// Given a Divisor and a Bound , Find the largest integer N , Such That ,

// Conditions :
// N is divisible by divisor

// N is less than or equal to bound

// N is greater than 0.

function maxMultiple(divisor, bound){
    return bound-bound%divisor
  }


// Grasshopper Summation
// Summation
// Write a program that finds the summation of every number from 1 to num. 
// The number will always be a positive integer greater than 0.

var summation = function (num) {
  let result = 0;
  for (var i = 1; i <= num; i++) {
    result += i;
  }
  
  return result;
}

// Total Number of Points - Incomplete
// Our football team finished the championship. 
// The result of each match look like "x:y". 
// Results of all matches are recorded in the array.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such list and counts the points of our team in the championship. 
// Rules for counting points for each match:

// if x>y - 3 points
// if x<y - 0 point
// if x=y - 1 point
// Notes:

// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4


// Count Sheep
// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: 
// "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function (num){
  let str = "";
  for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }
  return str;
}