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
