"use strict";

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  let prefix = "";

  const shortestWordLength = strs.reduce(
    (acc, curr) => (acc.length < curr.length ? acc : curr),
    strs[0].length
  ).length;
  let [firstWord] = strs;

  for (let i = 0; i < shortestWordLength; i++) {
    let letter = firstWord[i];
    let equal = true;

    for (let word of strs) {
      if (word[i] !== letter) {
        equal = false;
        break;
      }
    }

    if (equal) prefix += letter;
    else break;
  }

  return prefix;
};

console.log(longestCommonPrefix(["cir", "car"]));
