const sculptureList = require('./data.js'); // import data.js

// create results array
const sculptureListLengths = sculptureList.map((sculpture) => {
  // build a new object with the same keys, but lengths as values
  const lengths = {};
  for (const [key, value] of Object.entries(sculpture)) {
    lengths[key] = String(value).length;
  }
  return lengths;
});

// test
//console.log('First element:', sculptureListLengths[0]);
