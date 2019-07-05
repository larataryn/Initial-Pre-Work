/* Destructuring can also be used to pass only the fields that are needed
to a function rather than the entire object. */

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = (function() {
  "use strict"; // do not change this line

  // change code below this line
  return ({ max, min }) => {
     // use function argument destructuring
    return (max + min) / 2.00
    };
  // change code above this line
})();
console.log(stats); // should be object
console.log(half(stats)); // should be 28.015
