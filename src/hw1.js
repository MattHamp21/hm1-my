//function that takes a number and doubles it
// yarn jest -t 'test doubleNumber'
//Done
const doubleNumber = (num) => {
  return num * 2
};
/// function that takes a number and returns 'odd' or 'even'
// yarn jest -t 'test isOddOrEven'
//Done
const isOddOrEven = (num) => {
      if(num % 2 == 0){
        return 'even'
      }
      else {
        return 'odd'
      }
};

//function that return a random number 0-5
// yarn jest -t 'test randomNumber'
//-------
const randomNumber = (maxLimit = 5) => {
  let rand = Math.random() * maxLimit
  return Math.round(rand);
};
//come back

/// function that takes two numbers num and 'opp'
/// opp can be +, -, /, or *
// yarn jest -t 'test calc'
//----
const calc = (num1, num2, opp) => {
  if (opp === '+') return num1 + num2;
  if (opp === '-') return num1 - num2;
  if (opp === '*') return num1 * num2;
  if (opp === '/') return num1 / num2;
};
//come back
//function that takes a string and return the number of vowels it has
// *lowercase only, and never count y
// yarn jest -t 'test vowelCount'

//Done
const vowelCount = (str) => {
 let vowelCount = 0;
  for (let i = 0; i <= str.length - 1; i++) {
    if (str.charAt(i) == "a" || str.charAt(i) == "e" || str.charAt(i) == "i" || str.charAt(i) == "o" || str.charAt(i) == "u") {
      vowelCount += 1;
    }
  }
  return vowelCount;
};

/// function that takes an array of numbers and returns sum
// yarn jest -t 'test getSum'
const getSum = (numbers) => {
  for (let i = 0; i < getSum.length; i++) {
    sum += getSum[i];
    return getSum
}};

/// function that takes an array of numbers and returns highest num
// yarn jest -t 'test getHighNum'
//Done
const getHighNum = (numbers) => {
  return Math.max.apply(null, numbers);
};
/// function that takes an array of numbers and returns lowest num
// yarn jest -t 'test getLowNum'
//Done
const getLowNum = (numbers) => {
  return Math.min.apply(null, numbers);
};
/// function that takes an array of numbers and returns true if sorted (low to high only)
// yarn jest -t 'test isSorted'
const isSorted = (numbers) => {
  for (numbers = 0; i < numbers.length; i++); { 
    if (numbers[i] < numbers[numbers + 1]) {
        return true;
    }
    else {
        return false;
    }
  }
}

//  write a function that takes a number (0-100)
//  return 'fizz' if only divisible by 3
//  return 'buzz' if only divisible by 5
//  return 'fizzbuzz' if divisible by  3 and 5
//  return the number if none apply
// yarn jest -t 'test fizzbuzz'

const fizzbuzz = (num) => {
 if (num < 0  && num > 100) {
   return invalid
 } else if (num % 3 === 0 && (num % 5 !==0)) {
   return 'fizz'
 } else if (num % 5 === 0 && (num % 3 !== 0)) {
   return 'buzz'
 } else if (num % 3 === 0 && num % 5 === 0){
   return 'fizzbuzz'
 } else {
   return num
 }
}
module.exports = {
  doubleNumber,
  vowelCount,
  isOddOrEven,
  calc,
  getHighNum,
  getLowNum,
  getSum,
  isSorted,
  fizzbuzz,
  randomNumber,
};