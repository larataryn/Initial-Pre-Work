/* ES6 introduces the class syntax which makes it easier to create new objects.
It appears to work very similarly to class creation in Java, however unlike
with Java, it is not a full and complete implementation of OOP. */

function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Vegetable {
    constructor(name) {
        this.name = name;
    }
  }
  /* Alter code above this line */
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'
