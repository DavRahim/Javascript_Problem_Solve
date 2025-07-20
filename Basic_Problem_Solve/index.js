// Beginner problem solve

// TODO:✅ একটি সংখ্যা জোড় না বিজোড় তা বের করো
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

// TODO: ✅ ১ থেকে ১০০ পর্যন্ত সংখ্যা প্রিন্ট করো;

function printNumbers() {
  let numbers = [];
  for (let i = 1; i <= 100; i++) {
    numbers.push(i);
  }
  return numbers;
}
// console.log(`printNumbers:`, printNumbers());

// TODO:✅ ১ থেকে ১০০ পর্যন্ত শুধু জোড় সংখ্যা প্রিন্ট করো

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

// TODO:✅ ১ থেকে ১০০ পর্যন্ত সংখ্যার যোগফল বের করো

function sumOfNumbers() {
  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    sum += i;
  }
  return sum;
}

console.log(`sumOfNumbers:`, sumOfNumbers());
