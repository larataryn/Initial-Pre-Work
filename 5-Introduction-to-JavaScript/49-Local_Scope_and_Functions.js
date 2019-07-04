// Variables declared inside of functions have local scope.

function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line
  var myVar = "local";
  console.log(myVar);
}
myLocalScope();
