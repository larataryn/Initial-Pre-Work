/* Template literals are a new feature that allows for easier creating of
complex, multi-line strings. They are created using backticks (`) rather than
quotes (' "), and writing the string as multi-line in the code will make it a
multi-line string in the output as well. Variables can be added to sentences
with the ${variable} syntax. */

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";

  // change code below this line
  const resultDisplayArray = [`<li class="text-warning">${arr[0]}</li>`, `<li class="text-warning">${arr[1]}</li>` ,`<li class="text-warning">${arr[2]}</li>`];
  // change code above this line

  return resultDisplayArray;
}
/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`,
 *   `<li class="text-warning">var-on-top</li>`,
 *   `<li class="text-warning">linebreak</li>` ]
 **/
const resultDisplayArray = makeList(result.failure);
console.log(resultDisplayArray);
