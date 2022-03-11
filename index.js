//*Power of two

/*Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two.
 From the corresponding Wikipedia entry:
a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.

You may assume the input is always valid.*/
/* 
function isPowerOfTwo(n) {
  return Math.log2(n) % 1 === 0;
}

console.log(isPowerOfTwo(2)); // true
console.log(isPowerOfTwo(4096)); // true
console.log(isPowerOfTwo(5)); // false
 */ //Не Мое решение

//*String Reordering

/*The input will be an array of dictionaries.

Return the values as a string-seperated sentence in the order of their keys' integer equivalent (increasing order).

The keys are not reoccurring and their range is -999 < key < 999. The dictionaries' keys & values will always be strings and will always not be empty.  */
/* 
let List = [
  { 4: 'dog' },
  { 2: 'took' },
  { 3: 'his' },
  { '-2': 'Vatsan' },
  { 5: 'for' },
  { 6: 'a' },
  { 12: 'spin' },
];

function sentence(List) {
  return List.sort((a, b) => Object.keys(a)[0] - Object.keys(b)[0])
    .map((item) => Object.values(item))
    .join(' ');
}

console.log(sentence(List)); //'Vatsan took his dog for a spin'
 */

//*Arrow Sums
/* 
Sum all the values in an array using Arrow style function
Task
Your task is to complete the function in the string to Sum all the numbers in an array using the Arrow style function
NOTE:

Because eval hasnt caught up and cannot evaluate arrow style functions I have to do it manually. 
Your solution must contain the Arrow style function, the curly braces inside the reduce and the return statement because it must be manually converted to an old function style to test the validlity of the function itself. 
Your function will be returned to you when it is converted incase it fails (which is highly possible) if any issues occur please post in the discussion and provide your solution marked as spoiler, Thanks.
 */
/* 
const test = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [71, -548, 12.3, 83, -47, -1.7, -892, 58, 31415, 2718, -38],
];

const sum = (arr) => arr.reduce((a, b) => a + b, 0);

console.log(sum(test[0])); // 55
console.log(sum(test[1])); // 32830.6
 */

//* Unpacking Arguments
/* 
You must create a function, spread, that takes a function and a list of arguments to be applied to that function.
You must make this function return the result of calling the given function/lambda with the given arguments. 
 */
/* 
function spread(func, args) {
  return func(...args);
}

console.log(
  spread(
    function (x, y) {
      return x + y;
    },
    [1, 2],
  ),
); // 3
 */

//*Vowel one
/* 
vowelOne
Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

All non-vowels including non alpha characters (spaces,commas etc.) should be included.
 */
/* 
function vowelOne(s) {
  return s
    .toLowerCase()
    .split('')
    .map((s) => ('aeuoi'.includes(s) ? 1 : 0))
    .join('');
}

console.log(vowelOne('vowelOne')); // "01010101"
console.log(vowelOne('123, arou')); // "000001011"
 */

//* Count strings in objects
/* 
Create a function strCount (takes an object as argument) that will count all string values inside an object. For example:

strCount({
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime",2,3,4],
  fifth:  null
  })
  //returns 3
*/
/* 
function strCount(obj) {
  let count = 0;

  for (key in obj) {
    if (typeof obj[key] === 'string') count++;
    if (typeof obj[key] === 'object') count = count + strCount(obj[key]);
  }
  return count;
}

console.log(
  strCount({
    first: '1',
    second: '2',
    third: false,
    fourth: ['anytime', 2, 3, 4],
    fifth: null,
    sixth: undefined,
    seventh: {},
  }),
);
 */

//* Get decimal part of the given number
/* 
Write a function that returns only the decimal part of the given number.

You only have to handle valid numbers, not Infinity, NaN, or similar. Always return a positive decimal part.

Examples
getDecimal(2.4)  === 0.4
getDecimal(-0.2) === 0.2
*/
/* 
function getDecimal(num) {
  const i = (num + '').split('.');
  return i.length === 1 ? 0 : +`0.${i[1]}`;
}

console.log(getDecimal(0.2)); //0.2
console.log(getDecimal(4.5)); //0.5
console.log(getDecimal(-10)); //0
 */

//* Absent vowel

/* 
Your job is to figure out the index of which vowel is missing from a given string:

A has an index of 0,
E has an index of 1,
I has an index of 2,
O has an index of 3,
U has an index of 4.
Notes: There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.

Examples
"John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
"Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"
*/
/* 
function absentVowel(x) {
  return [
    [0, 'a'],
    [1, 'e'],
    [2, 'i'],
    [3, 'o'],
    [4, 'u'],
  ].find((item) => x.toLowerCase().indexOf(item[1]) === -1)[0];
}

console.log(absentVowel('John Doe hs seven red pples under his bsket')); // 0
console.log(absentVowel('Bb Smith sent us six neatly arranged range bicycles')); // 3
 */
/* 
function absentVowel(x) {
  return ['a', 'e', 'i', 'o', 'u'].findIndex((item) => !x.includes(item));
}

console.log(absentVowel('John Doe hs seven red pples under his bsket')); // 0
console.log(absentVowel('Bb Smith sent us six neatly arranged range bicycles')); // 3
 */

//* Get the Middle Character

/* 
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. 
If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). 
You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string.
*/

/* 
function getMiddle(s) {
  const index =
    s.length % 2 === 0
      ? [s.length / 2 - 1, s.length / 2]
      : [Math.floor(s.length / 2)];

  return index.map((item) => s[item]).join('');
} 
*/

/* 
function getMiddle(s) {
  return s.slice((s.length - 1) / 2, s.length / 2 + 1);
}

console.log(getMiddle('test')); // "es"
console.log(getMiddle('testing')); // "t"
console.log(getMiddle('middle')); // "dd"
console.log(getMiddle('A')); // "A"
 */

//* Jaden Casing Strings

/* 
Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). 
Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. 
For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. 
The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
*/
/* 
function name(str) {
  return str.split(' ').reduce(
    (string, item) =>
      (string += item.slice(0, 1).toUpperCase() + item.slice(1) + ' '),

    '',
  );
}
 */
/* 
function name(str) {
  return str
    .split(' ')
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join(' ');
}
console.log(name("How can mirrors be real if our eyes aren't real"));
 */

//* Digits explosion

/* 
Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

Examples
explode("312")
should return: "333122"


explode("102269")
should return: "12222666666999999999"
*/
/* 
function explode(s) {
  return s
    .split('')
    .reduce((str, item) => (str += new Array(+item).fill(item).join('')), '');
}

console.log(explode('312'));
 */

//* Handshake problem
/* 
Johnny is a farmer and he annually holds a beet farmers convention "Drop the beet".

Every year he takes photos of farmers handshaking. Johnny knows that no two farmers handshake more than once. 
He also knows that some of the possible handshake combinations may not happen.

However, Johnny would like to know the minimal amount of people that participated this year just by counting all the handshakes.

Help Johnny by writing a function, 
that takes the amount of handshakes and returns the minimal amount of people needed to perform these handshakes (a pair of farmers handshake only once).
*/
/* 
function getParticipants(handshakes) {
  let i = 1;

  while (handshakes > (i * (i - 1)) / 2) {
    i++;
  }

  return i;
}

console.log(getParticipants(0)); // 1
console.log(getParticipants(1)); // 2
console.log(getParticipants(3)); // 3
console.log(getParticipants(6)); // 4
console.log(getParticipants(7)); // 5
 */

//* Head, Tail, Init and Last

/* 
Haskell has some useful functions for dealing with lists:

$ ghci
GHCi, version 7.6.3: http://www.haskell.org/ghc/  :? for help
λ head [1,2,3,4,5]
1
λ tail [1,2,3,4,5]
[2,3,4,5]
λ init [1,2,3,4,5]
[1,2,3,4]
λ last [1,2,3,4,5]
5
Your job is to implement these functions in your given language. Make sure it doesn't edit the array; that would cause problems! Here's a cheat sheet:

| HEAD | <----------- TAIL ------------> |
[  1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
| <----------- INIT ------------> | LAST |

head [x] = x
tail [x] = []
init [x] = []
last [x] = x
Here's how I expect the functions to be called in your language:

head([1,2,3,4,5]); => 1
tail([1,2,3,4,5]); => [2,3,4,5]
*/ /* 
function head(arr) {
  return arr[0];
}

function last(arr) {
  return arr[arr.length - 1];
}

function tail(arr) {
  return arr.slice(1);
}
function init(arr) {
  return arr.slice(0, arr.length - 1);
}

console.log(head([5, 1])); // 5
console.log(tail([1])); // []
console.log(init([1, 5, 7, 9])); // [1,5,7]
console.log(last([7, 2])); // 2
 */

//* Javascript Mathematician
/* 
You are writing a function that takes two sets of arguments of arbitrary length. 
The return value will be the sum of the values of all of the arguments.

The function should contain at least 1 argument per set.

calculate(1)(1) // should return 2
calculate(1,1)(1) // should return 3
calculate(1,1)(1,-1) // should return 2
calculate(2,4)(3,7,1) // should return 17
 */
/* 
function calculate() {
  const arg1 = [...arguments];
  return function () {
    const arg2 = [...arguments];
    return arg2.concat(arg1).reduce((sum, item) => (sum += item));
  };
}

console.log(calculate(1)(1)); //2
console.log(calculate(1, 1)(1)); // 3
console.log(calculate(1, 1)(1, -1)); //2
console.log(calculate(2, 4)(3, 7, 1)); //17
 */

//* The Coupon Code
/*
Story
Your online store likes to give out coupons for special occasions. 
Some customers try to cheat the system by entering invalid codes or using expired coupons.

Task
Your mission:
Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

A coupon is no more valid on the day AFTER the expiration date. 
All dates will be passed as strings in this format: "MONTH DATE, YEAR".

Examples:
checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false
*/
/* 
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  return enteredCode !== correctCode ||
    new Date(currentDate) > new Date(expirationDate)
    ? false
    : true;
}

console.log(checkCoupon('123', '123', 'September 5, 2014', 'October 1, 2014')); // true
console.log(checkCoupon('123a', '123', 'September 5, 2014', 'October 1, 2014')); // false
 */

//* Unlucky Days
/* 
function unluckyDays(year) {
  let friday = 0;
  for (let i = 0; i <= 11; i++) {
    if (new Date(year, i, 13).getUTCDay() == 5) {
      friday++;
    }
  }
  return friday;
}
 */
/* console.log(unluckyDays(1586)); // "should be: 1"
console.log(unluckyDays(1001)); // "should be: 3"
console.log(unluckyDays(2819)); // "should be: 2"
console.log(unluckyDays(2792)); // "should be: 2"
console.log(unluckyDays(2723)); // "should be: 2"
console.log(unluckyDays(1909)); // "should be: 1"
console.log(unluckyDays(1812)); // "should be: 2"
console.log(unluckyDays(1618)); // "should be: 2"
console.log(unluckyDays(2132)); // "should be: 1"
console.log(unluckyDays(2065)); // "should be: 3"
console.log(unluckyDays(2625)); // "should be: 2" */
