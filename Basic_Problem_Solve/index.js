// Beginner problem solve

// TODO:✅ একটি সংখ্যা রিভার্স করো (উদাহরণ: 123 → 321)
// :✅ একটি সংখ্যা জোড় না বিজোড় তা বের করো
function isEvenOrOdd(num) {
  if (typeof num !== "number") return "Please enter a valid number";
  if (num === 0) return "Zero";
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// console.log(`isEvenOrOdd:`, isEvenOrOdd(3));

// TODO:✅ একটি সংখ্যা রিভার্স করো (উদাহরণ: 123 → 321)
// : ✅ ১ থেকে ১০০ পর্যন্ত সংখ্যা প্রিন্ট করো;

function printNumbers() {
  let numbers = [];
  for (let i = 1; i <= 100; i++) {
    numbers.push(i);
  }
  return numbers;
}
// console.log(`printNumbers:`, printNumbers());

// TODO:✅ একটি সংখ্যা রিভার্স করো (উদাহরণ: 123 → 321)
// :✅ ১ থেকে ১০০ পর্যন্ত শুধু জোড় সংখ্যা প্রিন্ট করো

function printEvenNumbers() {
  let evenNumber = [];
  for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
      if (i === 0) continue; // Skip zero if you want to exclude it
      evenNumber.push(i);
    }
  }

  return evenNumber;
}

// console.log(`printEvenNumbers:`, printEvenNumbers());

// TODO:✅ একটি সংখ্যা রিভার্স করো (উদাহরণ: 123 → 321)
// :✅ ১ থেকে ১০০ পর্যন্ত সংখ্যার যোগফল বের করো

function sumOfNumbers() {
  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    sum += i;
  }
  return sum;
}

// console.log(`sumOfNumbers:`, sumOfNumbers());

// TODO:✅ একটি সংখ্যা রিভার্স করো (উদাহরণ: 123 → 321)
// :✅ একটি সংখ্যা প্রাইম কি না তা চেক করো

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    console.log(`Checking divisibility by:`, i);
    if (num % i === 0) return false;
  }
  return true;
}
// console.log(`isPrime:`, isPrime(97)); // true
// console.log(`isPrime:`, isPrime(10)); // false

// TODO:✅ একটি সংখ্যা রিভার্স করো (উদাহরণ: 123 → 321)
// :✅ একটি সংখ্যার ফ্যাক্টোরিয়াল বের করো;
function factorial(num) {
  if (num < 0) return "Factorial is not defined for negative numbers";
  if (num === 0 || num === 1) return 1;

  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}
// console.log(`factorial:`, factorial(5)); // 120
// console.log(`factorial:`, factorial(0)); // 1

// TODO:✅ একটি সংখ্যা রিভার্স করো (উদাহরণ: 123 → 321)
// :✅ একটি স্ট্রিং প্যালিনড্রোম কি না চেক করো

function isPalindrome(str) {
  if (typeof str !== "string") return "Please enter a valid string";
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  const reversedStr = cleanedStr.split("").reverse().join("");

  return cleanedStr === reversedStr;
}
// console.log(`isPalindrome:`, isPalindrome("Racecar")); // true
// console.log(`isPalindrome:`, isPalindrome("Hello")); // false
// console.log(`isPalindrome:`, isPalindrome("Level")); // true

// TODO:✅ একটি সংখ্যা রিভার্স করো (উদাহরণ: 123 → 321)
// :✅ একটি নামের ভেতরে কতগুলো vowel আছে বের করো;

function countVowels(name) {
  if (typeof name !== "string") return "Please enter a valid string";
  const vowels = "aeiouAEIOU";
  let count = 0;

//   for (let i = 0; i < name.length; i++) {
//     if (vowels.includes(name[i])) {
//       count++;
//     }F
//   }
  // Alternative method using for...of loop
    for (let char of name) {
      if (vowels.includes(char)) {
        count++;
      }
    }
  return count;
}

// console.log(`countVowels:`, countVowels("Shakib Al Hasan")); // 5
// console.log(`countVowels:`, countVowels("Hello World")); // 3

// TODO:✅ একটি সংখ্যা রিভার্স করো (উদাহরণ: 123 → 321)
// :✅ Fibonacci সিরিজ প্রিন্ট করো (n পর্যন্ত)

function fibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const fibSeries = [0, 1];
  for (let i = 2; i < n; i++) {
    fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
  }
  return fibSeries;
}
console.log(`fibonacci:`, fibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log(`fibonacci:`, fibonacci(5)); // [0, 1, 1, 2, 3]

// TODO:✅ একটি সংখ্যা রিভার্স করো (উদাহরণ: 123 → 321)

function reverseNumber(num) {
  if (typeof num !== "number") return "Please enter a valid number";
  const reversed = num.toString().split("").reverse().join("");
  return parseInt(reversed, 10);
}
console.log(`reverseNumber:`, reverseNumber(123)); // 321
console.log(`reverseNumber:`, reverseNumber(4567)); // 7654

// LeetCode Problem: Two Sum
/*TODO: Two Sum 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/ 

function twoSum(nums, target) {
  const numMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }
    numMap.set(nums[i], i);
  }
  return [];
}
// Example usage:
console.log(`twoSum:`, twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(`twoSum:`, twoSum([3, 2, 4], 6)); // [1, 2]
console.log(`twoSum:`, twoSum([3, 3], 6)); // [0, 1]

// LeetCode Problem: Add Two Numbers

//TODO: Add Two Numbers
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.*/ 

// [] is not valid value for the expected return type ListNode

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

function addTwoNumbers(l1, l2) {
  let dummyHead = new ListNode(0);
  let p = l1, q = l2, current = dummyHead;
  let carry = 0;

  while (p !== null || q !== null) {
    const x = p !== null ? p.val : 0;
    const y = q !== null ? q.val : 0;
    const sum = carry + x + y;
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;

    if (p !== null) p = p.next;
    if (q !== null) q = q.next;
  }

  if (carry > 0) {
    current.next = new ListNode(carry);
  }

  return dummyHead.next;
}
// Example usage:
// Assuming ListNode is defined as per the problem statement

// Helper function to create a linked list from an array
function createLinkedList(arr) {
  let dummyHead = new ListNode(0);
  let current = dummyHead;
  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummyHead.next;
}
// // Helper function to convert a linked list to an array
function linkedListToArray(head) {
  let arr = [];
  while (head !== null) {
    arr.push(head.val);
    head = head.next;
  }
  return arr;
}
// Example usage:
const l1 = createLinkedList([2, 4, 3]);
const l2 = createLinkedList([5, 6, 4]);
const result = addTwoNumbers(l1 , l2);
console.log(`addTwoNumbers:`, linkedListToArray(result)); // [7, 0, 8] which represents the number 807


// LeetCode Problem: Longest Substring Without Repeating Characters
// TODO:Longest Substring Without Repeating Characters

/**
 * Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.*/ 

function lengthOfLongestSubstring(s) {
  const charIndexMap = new Map();
  let maxLength = 0;
  let start = 0;

  for (let i = 0; i < s.length; i++) {
    if (charIndexMap.has(s[i]) && charIndexMap.get(s[i]) >= start) {
      start = charIndexMap.get(s[i]) + 1;
    }
    charIndexMap.set(s[i], i);
    maxLength = Math.max(maxLength, i - start + 1);
  }

  return maxLength;
}
// Example usage:
console.log(`lengthOfLongestSubstring:`, lengthOfLongestSubstring("abcabcbb")); // 3
console.log(`lengthOfLongestSubstring:`, lengthOfLongestSubstring("bbbbb")); // 1
console.log(`lengthOfLongestSubstring:`, lengthOfLongestSubstring("pwwkew")); // 3