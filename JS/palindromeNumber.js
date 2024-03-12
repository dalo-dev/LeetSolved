"use strict";

// Given an integer x, return true if x is a palindrome, and false otherwise.

/**
 * @param {number} x
 * @return {boolean}
 */

//* NUMBER TO STRING
// const isPalindrome = function (x) {
//   return String(x) === String(x).split("").reverse().join("");
// };

//* WITHOUT NUMBER TO STRING - TC: O(n)
const isPalindrome = function (x) {
  if (x < 0) return false;

  let current = x;
  let reversed = 0;

  while (current !== 0) {
    reversed = reversed * 10 + (current % 10);
    current = Math.floor(current / 10);
  }
  return x === reversed;
};
