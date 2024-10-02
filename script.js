// 1. Sum of Two Numbers
function sum(a, b) {
        return a + b;
    }   
    .console.log(sum(2, 3));
  
  // 2. Check if a Number is Even
  function isEven(num) {
    return num % 2 === 0;
  }
  console.log(isEven(10));  
  
  // 3. Convert Celsius to Fahrenheit
  function toFahrenheit(celsius) {
    return celsius * (9/5) + 32;
  }
  
  // 4. Find the Largest Number
  function max(a, b, c) {
    return Math.max(a, b, c);
  }
  
  // 5. Factorial of a Number
  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  
  // 6. Check for Prime Number
  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  // 7. Reverse a String
  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  // 8. Sum of Array Elements
  function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
  }
  
  // 9. Find the Longest Word
  function longestWord(str) {
    let words = str.split(' ');
    let longest = '';
    for (let word of words) {
      if (word.length > longest.length) {
        longest = word;
      }
    }
    return longest;
  }
  
  // 10. Palindrome Checker
  function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
  }
  
  // 11. Fibonacci Sequence
  function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  // 12. Count Vowels
  function countVowels(str) {
    let count = 0;
    let vowels = 'aeiouAEIOU';
    for (let char of str) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
  }
  
  // 13. Find Unique Elements
  function uniqueElements(arr) {
    return [...new Set(arr)];
  }
  
  // 14. Calculate Power
  function power(base, exponent) {
    return Math.pow(base, exponent);
  }
  
  // 15. Sort an Array
  function sortArray(arr) {
    return arr.sort((a, b) => a - b);
  }
  
  // 16. Find the Median of an Array
  function findMedian(arr) {
    arr.sort((a, b) => a - b);
    let middle = Math.floor(arr.length / 2);
    if (arr.length % 2 === 0) {
      return (arr[middle - 1] + arr[middle]) / 2;
    } else {
      return arr[middle];
    }
  }
  
  // 17. Capitalize First Letter
  function capitalizeFirstLetter(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
  
  // 18. Flatten a Nested Array
  function flattenArray(arr) {
    return arr.flat(Infinity);
  }
  
  // 19. Random Number Generator
  function randomNumber(min, max) {
    return Math.floor(Math
  