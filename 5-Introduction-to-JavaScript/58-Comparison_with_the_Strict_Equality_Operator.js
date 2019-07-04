/* The strict equality (===) operator doesn't perform any type conversions
when making comparisons, so if the values have different types, it will return
false. */

// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testStrict(10);
