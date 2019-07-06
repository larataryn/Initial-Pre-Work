/* The syntax for getters and setters is a little different than with Java.
It requires the use of keywords, 'get' and 'set', followed by the function name
to use to invoke the get/set. */

function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Thermostat {
    constructor(temp) {
      this._temp = temp;
    }

    get temperature() {
      return 5/9 * (this._temp - 32);
    }

    set temperature(newTemp) {
      this._temp = newTemp;
    }
  }
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
