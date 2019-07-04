/* With queues, items are added to the end of the list and removed from the
front of the list. */

function nextInLine(arr, item) {
  // Your code here
  arr.push(item);
  item = arr.shift();
  return item;  // Change this line
}

// Test Setup
var testArr = [5,6,7,8,9];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 10)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));
