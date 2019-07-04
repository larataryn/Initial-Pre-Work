/* Two variables can have the same name as long as they are declared in
different scopes. In those cases, the local value will override the global
value. */

// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line

  var outerWear = "sweater";

  // Only change code above this line
  return outerWear;
}

myOutfit();
