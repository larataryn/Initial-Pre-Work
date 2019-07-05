/* Destructuring can also be used with arrays. The array values will be
returned in order, so to get to a value in the middle of an array, use commas
until you have reached the right index. */

let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
  [a, b] = [b, a];
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8
