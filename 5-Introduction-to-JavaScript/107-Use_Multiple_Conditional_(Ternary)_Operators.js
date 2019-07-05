/* Chain multiple conditional statements together in a single ternary operation
by setting the value for false to the next condition to check. */

function checkSign(num) {
  return (num > 0) ? "positive" : (num < 0) ? "negative" : "zero";
}

checkSign(10);
