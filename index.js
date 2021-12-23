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
