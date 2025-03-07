'use strict';

console.log('-- begin --');

/**
 * Checks if a given string is a palindrome.
 *
 * A palindrome is a word, phrase, or sequence that reads the same
 * forward and backward (case-sensitive).
 *
 * @param {string} toCheck - The string to be checked.
 * @returns {boolean} - Returns `true` if the string is a palindrome, otherwise `false`.
 */

const isPalindrome = (toCheck) => {
  let reversed = '';
  for (const character of toCheck) {
    reversed = character + reversed;
  }
  return toCheck === reversed;
};

const _1_expect = false;
const _1_actual = isPalindrome('Racecar');
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = false;
const _2_actual = isPalindrome('apple');
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = true;
const _3_actual = isPalindrome('racecar');
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = true;
const _4_actual = isPalindrome('hannah');
console.assert(_4_actual === _4_expect, 'Test 4');

console.log('-- end --');
