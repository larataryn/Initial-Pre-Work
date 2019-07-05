/* With this activity, I created a function that would update records in the
exisiting collection object. Doing this gave me the opportunity to use all
of the concepts involving complex object manipulation in a realistic application. */

// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [
        "1999",
        "Little Red Corvette"
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  if (prop != "tracks" && value != "") {
    collection[id][prop]= value;
  } else if (prop == "tracks" && value != "") {
    if (!collection[id].hasOwnProperty(prop)) {
      collection[id].tracks = [];
    }
    collection[id][prop].push(value);
  } else if (value == "") {
    delete collection[id][prop];
  }
  return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");
