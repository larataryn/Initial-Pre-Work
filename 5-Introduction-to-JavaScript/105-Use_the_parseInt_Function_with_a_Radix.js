/* Adding a second parameter, a radix, to the parseInt() function converts the
number the the given base value. For example, setting the radix to 2 converts
the value to a base 2 or binary number. */

function convertToInteger(str) {
  return parseInt(str, 2);
}

convertToInteger("10011");
