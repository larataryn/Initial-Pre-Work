/* In order to use import in files, the function must first be exported from the file where it was created. Any function that is included in an export
command will be available to import into another file. The export syntax works
with variables too. */

"use strict";
export const foo = "bar";
export const bar = "foo";
