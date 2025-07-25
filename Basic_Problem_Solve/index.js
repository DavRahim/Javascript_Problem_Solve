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

// TODO: :✅ Fibonacci সিরিজ প্রিন্ট করো (n পর্যন্ত)

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

//  ধাপ ২: অ্যারে ও অবজেক্ট
// Intermediate Level Problem List:

// TODO: ✅ একটি অ্যারে থেকে সর্বোচ্চ সংখ্যা বের করো
function findMax(arr) {
  if (!Array.isArray(arr) || arr.length === 0)
    return "Please provide a valid array";
  // return Math.max(...arr);
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(`findMax:`, findMax([1, 2, 3, 4, 5])); // 5
console.log(`findMax:`, findMax([10, 20, 30, 40, 50])); // 50

// TODO:✅ একটি অ্যারে থেকে সব নেগেটিভ নাম্বার বাদ দাও;

function removeNegativeNumbers(arr) {
  if (!Array.isArray(arr)) return "Please provide a valid array";

  if (arr.length === 0) return "Array is empty";

  // filter method
  /** 
  const positiveNumbers = arr.filter((num) => num >= 0);
  if (positiveNumbers.length === 0) {
    return "No positive numbers found";
  } else {
    return positiveNumbers;
  }
   */

  // Alternative method using for loop

  const positiveNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      positiveNumbers.push(arr[i]);
    }
  }
  if (positiveNumbers.length === 0) {
    return "No positive numbers found";
  } else {
    return positiveNumbers;
  }
}

console.log(
  `removeNegativeNumbers:`,
  removeNegativeNumbers([-1, -3, 2, 6, -5])
); // [2, 4]

// TODO:✅ একটি অ্যারে থেকে ইউনিক ভ্যালুগুলো বের করো;

function getUniqueValues(arr) {
  if (!Array.isArray(arr)) return "Please provide a valid array";

  if (arr.length === 0) return "Array is empty";

  // using filter method
  // const uniqueValues = arr.filter(
  //   (value, index, self) => self.indexOf(value) === index
  // );
  // if (uniqueValues.length === 0) {
  //   return "No unique values found";
  // } else {
  //   return uniqueValues;
  // }

  // Alternative method using for loop

  const uniqueValues = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueValues.includes(arr[i])) {
      uniqueValues.push(arr[i]);
    }
  }
  if (uniqueValues.length === 0) {
    return "No unique values found";
  } else {
    return uniqueValues;
  }
}

console.log(`getUniqueValues:`, getUniqueValues([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]

// TODO:✅ একটি অবজেক্ট থেকে total value যোগ করো

function sumObjectValues(obj) {
  if (typeof obj !== "object" || obj === null)
    return "Please provide a valid object";

  if (Object.keys(obj).length === 0) return "Object is empty";
  // Using Object.values and reduce method
  const sum = Object.values(obj).reduce((acc, value) => {
    if (typeof value === "number") {
      return acc + value;
    }
    return acc;
  }, 0);
  return sum;

  // Alternative method using for...in loop
  // let sum = 0;
  // for (let key in obj) {
  //   if (typeof obj[key] === "number") {
  //     sum += obj[key];
  //   }
  // }
  // return sum;
}
console.log(`sumObjectValues:`, sumObjectValues({ a: 1, b: 2, c: 3 })); // 6
console.log(`sumObjectValues:`, sumObjectValues({ x: 10, y: 20, z: 30 })); // 60

// TODO:✅ দুইটি অ্যারে মিলে আছে কি না চেক করো

function arraysAreEqual(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2))
    return "Please provide valid arrays";

  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}
console.log(`arraysAreEqual:`, arraysAreEqual([1, 2, 3], [1, 2, 3])); // true
console.log(`arraysAreEqual:`, arraysAreEqual([1, 2, 3], [1, 2, 4])); // false

// TODO:✅ একটি স্ট্রিংয়ের মধ্যে সবচেয়ে বেশি ব্যবহৃত ক্যারেক্টার খুঁজে বের করো;

function mostFrequentCharacter(str) {
  if (typeof str !== "string") return "Please provide a valid string";

  const charCount = {};
  let maxCount = 0;
  let mostFrequentChar = "";

  for (let char of str) {
    // console.log(`Processing character:`, char);
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }

    if (charCount[char] > maxCount) {
      maxCount = charCount[char];
      mostFrequentChar = char;
    }
  }

  return mostFrequentChar;
}
console.log(
  `mostFrequentCharacter:`,
  mostFrequentCharacter("hello world")
); // "l"
// console.log(`mostFrequentCharacter:`, mostFrequentCharacter("javascript")); // "a




// TODO: Find First Non-Repeating Character in a String

function firstNonRepeatingCharacter(str) {
  if (typeof str !== "string") return "Please provide a valid string";

  const charCount = {};

  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null; // If no non-repeating character is found
}
console.log(`firstNonRepeatingCharacter:`, firstNonRepeatingCharacter("swiss")); // "w"
console.log(`firstNonRepeatingCharacter:`, firstNonRepeatingCharacter("hello")); // // "h"


