// Working through CodeWars challenges
// Recording the answers to the various solutions for practice

// Maximum Multiple
// Task
// Given a Divisor and a Bound , Find the largest integer N , Such That ,

// Conditions :
// N is divisible by divisor

// N is less than or equal to bound

// N is greater than 0.

function maxMultiple(divisor, bound) {
  return bound - (bound % divisor);
}

// Grasshopper Summation
// Summation
// Write a program that finds the summation of every number from 1 to num.
// The number will always be a positive integer greater than 0.

var summation = function(num) {
  let result = 0;
  for (var i = 1; i <= num; i++) {
    result += i;
  }

  return result;
};

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

var countSheep = function(num) {
  let str = "";
  for (let i = 1; i <= num; i++) {
    str += `${i} sheep...`;
  }
  return str;
};

// Monkey Challenge - Hit Points
// https://www.codewars.com/kata/tails-of-the-high-seas/javascript
function biteMeMonkey(monkObj, clientObj, terrain) {
  monkObj.hitPoints +=
    monkObj.orangutans * 5 + monkObj.chimpanzees * 3 + monkObj.gorillas * 9;
  clientObj.hitPoints += clientObj.crew;

  if (terrain === "island") {
    clientObj.hitPoints += 20;
  } else if (terrain === "sea") {
    monkObj.hitPoints += 10;
  }

  if (monkObj.janeReporting4Duty === true) {
    monkObj.hitPoints *= monkObj.chimpanzees / 2;
  }

  if (monkObj.hitPoints >= clientObj.hitPoints) {
    return "Abandon ship! Save your own skin and blame it on the 'modestly-sized' yacht!";
  } else {
    return "Everything's good, I'll see you in the office on Monday.";
  }
}

// Closest Elevator Challenge
// https://www.codewars.com/kata/closest-elevator/javascript

function elevator(left, right, call) {
  // Handles normal cases
  var r = call - right;
  var l = call - left;

  // Handles edge cases
  if (r <= -1) {
    r = r * -1;
  }
  if (l <= -1) {
    l = l * -1;
  }

  if (l < r) {
    return "left";
  } else {
    return "right";
  }
}

// Student grade
// https://www.codewars.com/kata/students-final-grade/solutions/javascript

function finalGrade (exam, projects) {
  if(exam > 90 || projects > 10) return 100;
  if(exam > 75 & projects >= 5) return 90;
  if(exam > 50 & projects >= 2) return 75;
  return 0;
}