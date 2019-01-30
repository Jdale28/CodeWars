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

function finalGrade(exam, projects) {
  if (exam > 90 || projects > 10) return 100;
  if ((exam > 75) & (projects >= 5)) return 90;
  if ((exam > 50) & (projects >= 2)) return 75;
  return 0;
}

// Rule of Divisibility by 13
// https://www.codewars.com/kata/a-rule-of-divisibility-by-13/javascript
// When you divide the successive powers of 10 by 13 you get the following remainders of the integer divisions:
// [1, 10, 9, 12, 3, 4]
// Then the whole pattern repeats.
// Hence the following method:
// Multiply the right most digit of the number with the left most number in the sequence shown above,
// the second right most digit to the second left most digit of the number in the sequence.
// The cycle goes on and you sum all these products.
// Repeat this process until the sequence of sums is stationary.

function multiplySeries(n) {
  var numberArray = [1, 10, 9, 12, 3, 4];
  var stringNumber = n.toString();
  // Starts at the end of the number provided, and iterates backward through the string
  let count = 0;
  let total = 0;
  for (i = stringNumber.length - 1; i >= 0; i--) {
    total += stringNumber[i] * numberArray[count];
    count++;
    if (count > 5) {
      count = 0;
    }
    console.log(count);
  }
  return total;
}

function thirt(n) {
  // Do this function until total = n
  let newNumber = multiplySeries(n);

  while (newNumber !== multiplySeries(newNumber)) {
    newNumber = multiplySeries(newNumber);
  }
  return newNumber;
}

// Not Prime Numbers
// https://www.codewars.com/kata/not-prime-numbers/solutions/javascript
const notPrimes = (a, b) => {
  const result = [];
  for (let i = a; i < b; i++)
    if (String(i).split``.every(e => isPrime(e)) && !isPrime(i)) result.push(i);
  return result;
};

const isPrime = n => {
  for (let i = 2, s = Math.sqrt(n); i <= s; i++) if (n % i === 0) return false;
  return n > 1;
};

// Scramblies 5kyu
// https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript

function scramble(str1, str2) {
  var obj1 = {};
  var obj2 = {};
  for (var i = 0; i < str1.length; i++) {
    if (!obj1[str1[i]]) {
      obj1[str1[i]] = 1;
    } else {
      obj1[str1[i]]++;
    }
  }
  for (var j = 0; j < str2.length; j++) {
    if (!obj2[str2[j]]) {
      obj2[str2[j]] = 1;
    } else {
      obj2[str2[j]]++;
    }
  }
  for (var key in obj2) {
    if (!obj1[key] || obj1[key] < obj2[key]) {
      return false;
    }
  }
  return true;
}

// Equal Sides of an array Kata
// https://www.codewars.com/kata/equal-sides-of-an-array/train/javascript

function findEvenIndex(arr) {
  var sum = 0,
    leftSum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  for (var i = 0; i < arr.length; i++) {
    sum -= arr[i];
    if (leftSum === sum) {
      return i;
    }
    leftSum += arr[i];
  }
  return -1;
}
