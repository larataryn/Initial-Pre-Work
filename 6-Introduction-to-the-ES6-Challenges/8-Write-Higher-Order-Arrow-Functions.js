/* Arrow functions are really helpful with higher level functions which take
other functions as arguments. .filter filters the array according to the
conditions its given and .map creates a new array with the results on the
function it executes. */

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  const squaredIntegers = arr.filter((num) => num > 0 && num % parseInt(num) == 0).map((num) => Math.pow(num, 2));
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
