// Data Reverse
/* A stream of data is received and needs to be reversed.

Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

11111111  00000000  00001111  10101010
 (byte1)   (byte2)   (byte3)   (byte4)
should become:

10101010  00001111  00000000  11111111
 (byte4)   (byte3)   (byte2)   (byte1)
The total number of bits will always be a multiple of 8.

The data is given in an array as such:

[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
Note: In the C and NASM languages you are given the third parameter which is the number of segment blocks.
 */
/*
const data1 = [
  1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0,
  1, 0, 1, 0, 1, 0,
];

const data2 = [0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1];

function dataReverse(data) {
  return data
    .reduce(
      (str, item, index) =>
        (str = (index + 1) % 8 === 0 ? str + item + ',' : str + item),
      '',
    )
    .split(',')
    .reverse()
    .join('')
    .split('')
    .map((i) => +i);
}

console.log(dataReverse(data1)); // [ 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1,]
console.log(dataReverse(data2)); //  [0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0]
 */

//* Bingo Card
/*
function getCard() {
  const bingo = [
    { B: [1, 15] },
    { I: [16, 30] },
    { N: [31, 45] },
    { G: [46, 60] },
    { O: [61, 75] },
  ];

  return bingo.reduce((res, item) => {
    const key = Object.keys(item)[0];

    randomArr(item[key][0], item[key][1], key).forEach((item) =>
      res.push(key + item),
    );
    return res;
  }, []);
}

function randomInteger(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

function randomArr(min, max, key) {
  const randomArr = key === 'N' ? Array.from(Array(4)) : Array.from(Array(5));

  return randomArr.reduce((arr) => {
    do {
      res = randomInteger(min, max);
    } while (arr.includes(res));
    return [...arr, res];
  }, []);
}

console.log(getCard()); */
/*
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number.
You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/

//* Bit Counting
/*
const countBits = (n) =>
  n
    .toString(2)
    .split('')
    .filter((item) => item === '1').length;

console.log(countBits(7)); // 3
 */
/*
function whatTimeIsIt(angle) {
  let hour = Math.floor(angle / 30);
  hour = hour === 0 ? 12 : hour;
  const min = Math.floor((angle % 30) * 2);
  return `${hour < 10 ? '0' + hour : hour}:${min < 10 ? '0' + min : min}`;
}

console.log(whatTimeIsIt(271)); //09:02
 */

//* Is a number prime?

/* 
Define a function that takes one integer argument and returns logical value true or false depending on if the integer is a prime.

Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

Requirements
You can assume you will be given an integer input.
You can not assume that the integer will be only positive. You may be given negative numbers as well (or 0).
NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. 
Numbers go up to 2^31 (or similar, depends on language version). Looping all the way up to n, or n/2, will be too slow. 



function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrime(0));
console.log(isPrime(1));
console.log(isPrime(73));
console.log(isPrime(75));
console.log(isPrime(-1));
console.log(isPrime(4));
*/

//* Lottery Ticket

/*
Time to win the lottery!

Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.

Example ticket:

[ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. 
If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.

Once you have counted all of your mini wins, compare that number to the other input provided (win). 
If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.

All inputs will be in the correct format. Strings on tickets are not always the same length.
*/

/* 
function bingo(ticket, win) {
  const result = ticket.reduce((sum, item) => {
    const char = item[0].split('').find((c) => c.charCodeAt(0) === item[1]);
    return char ? sum + char : sum;
  }, '');

  return result.length >= win ? 'Winner!' : 'Loser!';
}

console.log(
  bingo(
    [
      ['LBOV', 88],
      ['TEJF', 71],
      ['UGPB', 65],
      ['HPDSUNG', 65],
      ['HMTNNCRW', 82],
      ['NP', 78],
    ],
    1,
  ),
); // 'Winner!'
console.log(
  bingo(
    [
      ['ABC', 65],
      ['HGR', 74],
      ['BYHT', 74],
    ],
    1,
  ),
); // 'Winner!'
console.log(
  bingo(
    [
      ['ABC', 65],
      ['HGR', 74],
      ['BYHT', 74],
    ],
    2,
  ),
); // 'Loser!'
 */

//* WeIrD StRiNg CaSe
/* 
Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. 
The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). 
Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

Examples:
toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"
*/
/* 
function toWeirdCase(string) {
  let i = 0;

  return string.split('').reduce((result, item) => {
    if (item === ' ') {
      result += ' ';
      i = 0;
      return result;
    }
    const char = i % 2 === 0 ? item.toUpperCase() : item.toLowerCase();
    i++;
    return (result += char);
  }, '');
}

console.log(toWeirdCase('This')); // 'ThIs'
console.log(toWeirdCase('is')); //  'Is'
console.log(toWeirdCase('This is a test')); // 'ThIs Is A TeSt'
 */

//* Who likes it?

/* 
You probably know the "like" system from Facebook and other pages. 
People can "like" blog posts, pictures or other items. 
We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. 
It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
*/
/* 
function likes(names) {
  switch (names.length) {
    case 0:
      return `no one likes this`;
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;

    default:
      return `${names[0]}, ${names[1]} and ${
        names.length - 2
      } others like this`;
  }
}

console.log(likes([])); // 'no one likes this'
console.log(likes(['Peter'])); // 'Peter likes this'
console.log(likes(['Jacob', 'Alex'])); // 'Jacob and Alex like this'
console.log(likes(['Max', 'John', 'Mark'])); // 'Max, John and Mark like this'
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max'])); // 'Alex, Jacob and 2 others like this'
 */

//* Base Conversion
/* 
In this kata you have to implement a base converter, which converts positive integers between arbitrary bases / alphabets.

The function convert() should take an input (string), the source alphabet (string) and the target alphabet (string). 
You can assume that the input value always consists of characters from the source alphabet. You don't need to validate it. 

Additional Notes:

The maximum input value can always be encoded in a number without loss of precision in JavaScript. In Haskell, intermediate results will probably be too large for Int.
The function must work for any arbitrary alphabets, not only the pre-defined ones
You don't have to consider negative numbers
*/
/* 
//! https://programforyou.ru/calculators/number-systems

var Alphabet = {
  BINARY: '01',
  OCTAL: '01234567',
  DECIMAL: '0123456789',
  HEXA_DECIMAL: '0123456789abcdef',
  ALPHA_LOWER: 'abcdefghijklmnopqrstuvwxyz',
  ALPHA_UPPER: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA_NUMERIC:
    '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
};

var bin = Alphabet.BINARY,
  oct = Alphabet.OCTAL,
  dec = Alphabet.DECIMAL,
  hex = Alphabet.HEXA_DECIMAL,
  allow = Alphabet.ALPHA_LOWER,
  alup = Alphabet.ALPHA_UPPER,
  alpha = Alphabet.ALPHA,
  alnum = Alphabet.ALPHA_NUMERIC;

function convert(input, source, target) {
  const baseSource = source.length;

  const result = input.split('').reduce((sum, item, index) => {
    return (
      sum + source.indexOf(item) * baseSource ** (input.length - index - 1)
    );
  }, 0);

  return toAnySystem(result, target);
}

function toAnySystem(decimal, target, arr = []) {
  const base = target.length;

  const num = Math.trunc(decimal / base);
  const remainder = decimal % base;

  if (num < base) {
    arr.unshift(target[remainder]);
    num && arr.unshift(target[num]);
  } else {
    arr.unshift(target[remainder]);
    toAnySystem(num, target, arr);
  }
  return arr.join('');
}

console.log(convert('15', dec, bin)); // '1111', '"15" dec -> bin'
console.log(convert('15', dec, oct)); //  '17', '"15" dec -> oct'
console.log(convert('1010', bin, dec)); // '10', '"1010" bin -> dec'
console.log(convert('1010', bin, hex)); //  'a', '"1010" bin -> hex'
 */

//* Consecutive strings
// https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/javascript
/* 
You are given an array(list) strarr of strings and an integer k. 
Your task is to return the first longest string consisting of k consecutive strings taken in the array.

n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm).

Note
consecutive strings : follow one after another without an interruption
 */
/* 
function longestConsec(strarr, k) {
  if (strarr.length === 0 || k > strarr.length || k <= 0) return '';

  let max = '';
  for (let i = 0; i < strarr.length; i++) {
    if (i + k > strarr.length) return max;

    let str = strarr[i];

    for (let j = 1; j < k; j++) {
      str += strarr[i + j];
    }
    if (max.length < str.length) max = str;
  }
  return max;
}

console.log(
  longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], 2),
); //"abigailtheta"

console.log(
  longestConsec(
    [
      'ejjjjmmtthh',
      'zxxuueeg',
      'aanlljrrrxx',
      'dqqqaaabbb',
      'oocccffuucccjjjkkkjyyyeehh',
    ],
    1,
  ),
); // "oocccffuucccjjjkkkjyyyeehh")
 */
/* 
function createItemsCard() {
  const cardItem = document.createElement('div');
  const cardItemBack = document.createElement('div');
  const cardItemFront = document.createElement('div');
  const cardImg = document.createElement('img');
  const containerСards = document.querySelector('.container__cards');
  cardItem.classList.add('card__item');
  cardItemBack.classList.add('card__item-back');
  cardItemFront.classList.add('card__item-front');
  cardImg.classList.add('card__img');
  cardImg.src =
    'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDAwMjl8MHwxfHNlYXJjaHwxfHwlMjJpdGFseSUyMnxlbnwwfHx8fDE2NDUwMDU3NTE&ixlib=rb-1.2.1&q=80&w=1080';
  cardImg.alt = 'PhotoCard';
  cardItem.setAttribute('data-facecard', 'img1');

  cardItemBack.append(cardImg);
  cardItem.append(cardItemBack, cardItemFront);

  console.log(cardItem);

  for (let i = 0; i < 16; i++) {
    containerСards.innerHTML += cardItem.outerHTML;
  }

}

createItemsCard();
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

//* Reverse or rotate?

/* 
The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. 
Put together these modified chunks and return the result as a string.

If

sz is <= 0 or if str is empty return ""
sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".

Examples:
revrot("123456987654", 6) --> "234561876549"
revrot("123456987653", 6) --> "234561356789"
revrot("66443875", 4) --> "44668753"
revrot("66443875", 8) --> "64438756"
revrot("664438769", 8) --> "67834466"
revrot("123456779", 8) --> "23456771"
revrot("", 8) --> ""
revrot("123456779", 0) --> "" 
revrot("563000655734469485", 4) --> "0365065073456944"
Example of a string rotated to the left by one position:
s = "123456" gives "234561".
*/
/* 
function revrot(str, sz) {
  if (sz <= 0 || str < sz) return '';

  let newStr = '';
  for (let i = 0; i <= str.length - sz; i += sz) {
    const arr = str.slice(i, i + sz).split('');

    const sum = arr.reduce((s, item) => s + item ** 3, 0);

    newStr +=
      sum % 2 === 0
        ? arr.reverse().join('')
        : [...arr.slice(1), arr[0]].join('');
  }

  return newStr;
}

console.log(revrot('733049910872815764', 5)); // "330479108928157"
console.log(revrot('66443875', 4)); // "44668753"
console.log(revrot('563000655734469485', 4)); // "0365065073456944"
console.log(revrot('', 0)); // ""
 */

//* Multiples of 3 or 5

/* 
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, 
if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.
*/
/* 
function solution(number) {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(solution(10));
 */

//* Array Deep Count

/* 
Array.prototype.length will give you the number of top-level elements in an array.

Your task is to create a function deepCount that returns the number of ALL elements within an array, including any within inner-level arrays.

For example:

deepCount([1, 2, 3]);  
//>>>>> 3
deepCount(["x", "y", ["z"]]);  
//>>>>> 4
deepCount([1, 2, [3, 4, [5]]]);  
//>>>>> 7
*/
/* 
function deepCount(a, arr = []) {
  if (a.length <= 0) return arr.length;

  a.forEach((item) => {
    if (Array.isArray(item)) {
      arr.push(item);
      deepCount(item, arr);
    } else arr.push(item);
  });

  return arr.length;
}

console.log(deepCount([])); // 0
console.log(deepCount([1, 2, 3])); // 3
console.log(deepCount(['x', 'y', ['z']])); // 4
console.log(deepCount([1, 2, [3, 4, [5]]])); // 7
console.log(deepCount([[[[[[[[[]]]]]]]]])); // 8
 */

//* Valid string

/* 
You are given a sequence of valid words and a string. Test if the string is made up by one or more words from the array.

Task
Test if the string can be entirely formed by consecutively concatenating words of the dictionary.

For example:

dictionary: ["code", "wars"]

s1:         "codewars" =>  true  -> match 'code', 'wars'
s2:         "codewar"  =>  false -> match 'code', unmatched 'war'
One word from the dictionary can be used several times.
*/
/* 
var validWord = function (dictionary, word) {
  const length = dictionary.reduce(
    (str, item) => (str += word.includes(item) ? item : ''),
    '',
  ).length;

  return length > word.length;
};
 */
//console.log(validWord(['code', 'wars'], 'codewars')); // true
// console.log(['wars', 'code'], 'codewars'); // true
// console.log(['code', 'wars'], 'codecodewars'); // true
//console.log(validWord(['code', 'wars'], 'codewar')); // false
// console.log(['code', 'wars'], 'codewarscode'); // true
// console.log(['code', 'star', 'wars'], 'starwars'); // true
// console.log(['Star', 'Code', 'Wars'], 'StarCodeWars'); // true
// console.log(['Star', 'Code', 'Wars'], 'WarsStarCode'); // true
// console.log(['Star', 'Code', 'Wars'], 'CodeStarsWar'); // false
// console.log([], 'codewars'); // false
// console.log(['code', 'wars'], 'code'); // true
// console.log(['a', 'b', 'c', 'd', 'e', 'f'], 'abcdef'); // true
// console.log(['a', 'b', 'c', 'd', 'e', 'f'], 'abcdefg'); // false
//console.log(validWord(['ab', 'a', 'bc'], 'abc')); // true
//console.log(validWord(['ab', 'bc'], 'abc')); // false

/* 
  return !!!dictionary.reduce((str, item) => {
    str = str.replaceAll(item, '');
    return str;
  }, word);
};
var validWord = function (dictionary, word) {
  let strLength = word.length;

  for (let i = 0; i < dictionary.length; i++) {
    word = word.replace(dictionary[i], '');
    if (strLength > word.length) {
      strLength = word.length;
      i--;
    }
  }
  return !Boolean(word);
*/

//* Closures and Scopes

/* 
We want to create a function, which returns an array of functions, which return their index in the array. For better understanding, here an example:

var callbacks = createFunctions(5); // create an array, containing 5 functions

callbacks[0](); // must return 0
callbacks[3](); // must return 3
We already implemented that function, but when we actually run the code, the result doesn't look like what we expected. Can you spot, what's wrong with it? 
A test fixture is also available
*/
/* 
function createFunctions(n) {
  let callbacks = [];

  for (let i = 0; i < n; i++) {
    callbacks.push(function () {
      return i;
    });
  }

  return callbacks;
}

function x() {
  let callbacks = createFunctions(5);

  for (let i = 0; i < callbacks.length; i++) {
    callbacks[i]();
  }
}

console.log(x());
 */

//* Can you keep a secret?

/* 
There's no such thing as private properties on a coffeescript object! But, maybe there are?

Implement a function createSecretHolder(secret) which accepts any value as secret and returns an object with ONLY two methods

getSecret() which returns the secret
setSecret() which sets the secret
obj = createSecretHolder(5)
obj.getSecret() # returns 5
obj.setSecret(2)
obj.getSecret() # returns 2
*/
/* 
function createSecretHolder(secret) {
  return {
    setSecret: (x) => (secret = x),
    getSecret: () => secret,
  };
}

obj = createSecretHolder();

console.log(obj.getSecret()); // 5
obj.setSecret(2);
console.log(obj.getSecret()); // 2
 */

//* Sorting by bits

/* 
In this kata you're expected to sort an array of 32-bit integers in ascending order of the number of on bits they have.

E.g Given the array [7, 6, 15, 8]

7 has 3 on bits (000...0111)
6 has 2 on bits (000...0011)
15 has 4 on bits (000...1111)
8 has 1 on bit (000...1000)
So the array in sorted order would be [8, 6, 7, 15].

In cases where two numbers have the same number of bits, compare their real values instead.

E.g between 10 (...1010) and 12 (...1100), they both have the same number of on bits '2' but the integer 10 is less than 12 so it comes first in sorted order.

Your task is to write the function sortBybit() that takes an array of integers and sort them as described above.

Note: Your function should modify the input rather than creating a new array.

sortByBit([3, 8, 3, 6, 5, 7, 9, 1]) // => [1, 8, 3, 3, 5, 6, 9, 7]
*/
/* 
function sortByBit(arr) {
  const res = arr.sort((a, b) => {
    const aBin = sum(a);
    const bBin = sum(b);

    return aBin === bBin ? a - b : aBin - bBin;
  });

  return res;
}

function sum(num) {
  return num
    .toString(2)
    .split('')
    .reduce((sum, item) => (sum += +item), 0);
}

console.log(sortByBit([7, 6, 15, 8])); //[8, 6, 7, 15]
console.log(sortByBit([3, 8, 3, 6, 5, 7, 9, 1])); // [1, 8, 3, 3, 5, 6, 9, 7]
console.log(sortByBit([9, 4, 5, 3, 5, 7, 2, 56, 8, 2, 6, 8, 0])); // [0, 2, 2, 4, 8, 8, 3, 5, 5, 6, 9, 7, 56]
 */

//* Nuclear Missile Manager
/* 
Our nuclear missile manager system is coded in Node.js. 
We are currently testing the system and it seems that the launchAll function does not work as expected. 
It should launch 5 missiles each 1 second apart. 
The current code tries to launch the missile #5 five times...

Can you fix this for us? You know, it's pretty critical code...

Note: There are 5 missiles labeled i which is a number in {0, 1, 2, 3, 4}.
 The missile i should be launched after i seconds.
*/
/* 
function launchAll(launchMissile) {
  for (let i = 0; i < 5; i++) {
    setTimeout(function () {
      launchMissile(i);
    }, i * 1000);
  }
}

const launchMissile = (i) => {
  console.log(i);
};

console.log(launchAll(launchMissile));
 */

//* Pair of gloves
/* 
Winter is coming, you must prepare your ski holidays. 
The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

Examples:
input = ["red", "green", "red", "blue", "blue"]
result = 2 (1 red pair + 1 blue pair)

input = ["red", "red", "red", "red", "red", "red"]
result = 3 (3 red pairs) 
*/
/* 
function numberOfPairs(gloves) {
  return Array.from(new Set(gloves)).reduce((sum, item) => {
    return (sum += Math.trunc(gloves.filter((i) => i === item).length / 2));
  }, 0);
}

console.log(numberOfPairs(['red', 'green', 'red', 'blue', 'blue'])); //2
console.log(numberOfPairs(['red', 'red', 'red', 'red', 'red', 'red'])); // 3
 */

//* Length of missing array
/* 
You get an array of arrays.
If you sort the arrays by their length, you will see, that their length-values are consecutive.
But one array is missing!


You have to write a method, that return the length of the missing array.

Example:
[[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

If the array of arrays is null/nil or empty, the method should return 0.

When an array in the array is null or empty, the method should return 0 too!
There will always be a missing element and its length will be always between the given arrays.

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges.
*/
/* 
function getLengthOfMissingArray(arrayOfArrays) {
  if (
    arrayOfArrays == null ||
    !arrayOfArrays.length ||
    checkNull(arrayOfArrays)
  )
    return 0;

  const sortArr = arrayOfArrays.sort((a, b) => a.length - b.length);

  const filterArr = sortArr.filter((item, index, arr) => {
    if (arr[index + 1] && item.length + 1 !== arr[index + 1].length) {
      return true;
    }
    return false;
  })[0];

  return filterArr.length + 1;
}

function checkNull(arr) {
  return arr.filter((item) => item == null || item.length === 0).length;
}

console.log(
  getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]),
); // 3
console.log(
  getLengthOfMissingArray([[5, 2, 9], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]),
); // 2
console.log(getLengthOfMissingArray([[null], [null, null, null]])); // 2;
console.log(
  getLengthOfMissingArray([
    ['a', 'a', 'a'],
    ['a', 'a'],
    ['a', 'a', 'a', 'a'],
    ['a'],
    ['a', 'a', 'a', 'a', 'a', 'a'],
  ]),
); // 5

console.log(getLengthOfMissingArray([])); // 0
 */

//* Run-length encoding

/* 
Task
Your task is to write such a run-length encoding. For a given string, return a list (or array) of pairs (or arrays) 
[ (i1, s1), (i2, s2), …, (in, sn) ], such that one can reconstruct the original string by replicating the character sx ix times and concatening all those strings.
Your run-length encoding should be minimal, ie. for all i the values si and si+1 should differ.

Examples
As the article states, RLE is a very simple form of data compression. 
It's only suitable for runs of data, as one can see in the following example:

runLengthEncoding("hello world!")
 //=>      [[1,'h'], [1,'e'], [2,'l'], [1,'o'], [1,' '], [1,'w'], [1,'o'], [1,'r'], [1,'l'], [1,'d'], [1,'!']]
It's very effective if the same data value occurs in many consecutive data elements:

runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb")
 // => [[34,'a'], [3,'b']]
*/
/* 
function runLengthEncoding(str) {
  return str.split('').reduce((arr, item, index) => {
    index && item === arr[arr.length - 1][1]
      ? (arr[arr.length - 1][0] += 1)
      : arr.push([1, item]);

    return arr;
  }, []);
}

console.log(runLengthEncoding('hello world!'));
console.log(runLengthEncoding('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb'));
 */

//* Let's Recycle!

/* 
Task
You will be given a list of objects. Each object has type, material, and possibly secondMaterial. The existing materials are: paper, glass, organic, and plastic.

Your job is to sort these objects across the 4 recycling bins according to their material (and secondMaterial if it's present), by listing the type's of objects that should go into those bins.

Notes
The bins should come in the same order as the materials listed above
All bins should be listed in the output, even if some of them are empty
If an object is made of two materials, its type should be listed in both of the respective bins
The order of the type's in each bin should be the same as the order of their respective objects was in the input list
Example
input = [
  {"type": "rotten apples", "material": "organic"},
  {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
  {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
  {"type": "amazon box", "material": "paper"},
  {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
]

output = [
  ["wine bottle", "amazon box", "beer bottle"],
  ["wine bottle", "beer bottle"],
  ["rotten apples", "out of date yogurt"],
  ["out of date yogurt"]
]
*/
/* 
output = [
  ["wine bottle", "amazon box", "beer bottle"],
  ["wine bottle", "beer bottle"],
  ["rotten apples", "out of date yogurt"],
  ["out of date yogurt"]
]


function recycle(array) {
  return ['paper', 'glass', 'organic', 'plastic'].map((item) =>
    array
      .filter((i) => i.material === item || i.secondMaterial === item)
      .map((item) => item.type),
  );
}

const input = [
  { type: 'rotten apples', material: 'organic' },
  {
    type: 'out of date yogurt',
    material: 'organic',
    secondMaterial: 'plastic',
  },
  { type: 'wine bottle', material: 'glass', secondMaterial: 'paper' },
  { type: 'amazon box', material: 'paper' },
  { type: 'beer bottle', material: 'glass', secondMaterial: 'paper' },
];

console.log(recycle(input));
 */
