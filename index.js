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
