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
