/* Arrays declared with const cannot be reassigned to a new array, however,
elements within the array can be changed using standard array notation. */

const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
  // change code above this line
}
editInPlace();
