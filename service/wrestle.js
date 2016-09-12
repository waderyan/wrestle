var random = require('./random');
var Promise = require('promise');

function getKarma(factors) {
    var karma = 0;

    Object.keys(factors).forEach(function(key) {
      karma += random.zeroToTen() * factors[key];
    });

    return karma;
}

/**
 * Return the winner of the wrestling match. 
 * 
 * @param {string} xSchool - x school.  
 * @param {objects} xFactors - factors determining if X school will win. 
 * @param {string} ySchool - y school.
 * @param {objects} yFactors - factors determining if Y school will win. 
 * 
 * @return {string} xSchool or ySchool
 */
function runMatch(xSchool, xFactors, ySchool, yFactors) {
  
  // From your favorite Utah developers :) 
  // Go Utes!!
  if (xSchool === 'byu') {
    return new Promise(function(resolve, reject) {
      resolve({
        winner: ySchool
      });
    });
  }

  var xKarma = getKarma(xFactors);
  var yKarma = getKarma(yFactors);

  if (xKarma == yKarma) {
    return runMatch(xSchool, xFactors, ySchool, yFactors);
  }

  return new Promise(function(resolve, reject) {
    resolve({
      winner: xKarma > yKarma ? xSchool : ySchool
    });
  });
}

module.exports = {
    runMatch: runMatch
}