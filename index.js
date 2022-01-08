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
