/* The spread operator is used inline, like in an argument to a function, and
functions as a easier way to apply that function to all elements of an array. */

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = [...arr1]; // change this line
})();
console.log(arr2);
