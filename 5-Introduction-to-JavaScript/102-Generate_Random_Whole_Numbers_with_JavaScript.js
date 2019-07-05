/* The Math.random() function can also be used to get a random whole number.
Take the value returned from Math.random() and multiply it by a whole
number representing the maximum value of the range for the random number
(non-inclusive). Then use the .floor() function to round down to the nearest
whole number. */

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

  // Only change code below this line.
  return Math.floor(Math.random() * 10);
}
