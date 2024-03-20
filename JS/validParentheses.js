"use strict";

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  if (s.length % 2 !== 0) return false;

  let lastParentheses = s[0];
  let stack = [s[0]];
  const parenthesesPairs = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 1; i < s.length; i++) {
    if (s[i] === parenthesesPairs[lastParentheses]) stack.pop();
    else {
      stack.push(s[i]);
    }
    lastParentheses = stack.slice(-1)[0];
  }
  return !stack.length;
};
