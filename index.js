//* RGB To Hex Conversion

/* 
The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. 
Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3
*/
/* 
function rgb(r, g, b) {
  return [r, g, b].reduce((str, item) => {
    if (item > 255) item = 255;
    if (item < 0) item = 0;

    item = item.toString(16).toUpperCase();

    str += item.length === 1 ? '0' + item : item;

    return str;
  }, '');
}

console.log(rgb(0, 0, 0)); // '000000'
console.log(rgb(0, 0, -20)); // '000000'
console.log(rgb(300, 255, 255)); // 'FFFFFF'
console.log(rgb(173, 255, 47)); // 'ADFF2F'
console.log(rgb(251, 146, 1)); // 'ADFF2F'
 */

//! Math.max(0, Math.min(255, x)) заменяет (if (item > 255) item = 255; if (item < 0) item = 0;)
//! Оптимизированный вариант
/* 
function rgb(r, g, b) {
  return [r, g, b].reduce((str, item) => {
    item = Math.max(0, Math.min(255, item)).toString(16).toUpperCase();
    str += item.length === 1 ? '0' + item : item;
    return str;
  }, '');
} 
*/
