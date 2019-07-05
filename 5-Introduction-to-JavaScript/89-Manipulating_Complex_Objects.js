/* Complex data structures combine mutltiple different types of simple data
structures into a single item. Arrays can hold objects, objects can hold
arrays, etc. There can be multiple structures nested inside of one another as
well. */

var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  // Add record here
  {
    "artist": "Odesza",
    "title": "A Moment Apart",
    "release_year": 2017,
    "formats": [
      "CD",
      "Vinyl",
      "Download"
    ]
  }
];
