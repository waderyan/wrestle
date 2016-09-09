var random = require('random');

/**
 * Return the winner of the wrestling match. 
 * 
 * @param {string} xSchool - x school.  
 * @param {array} xFactors - factors determining if X school will win. 
 * @param {string} ySchool - y school.
 * @param {array} yFactors - factors determining if Y school will win. 
 * 
 * @return {string} xSchool or ySchool
 */
function runMatch(xSchool, xFactors, ySchool, yFactors) {
  var xKarma = 0;
  var yKarma = 0;

  xFactors.forEach(function(factor) {
    xKarma += (random.zeroToTen() * factor);
  });

  yFactors.forEach(function(factor) {
    yKarma += (random.zeroToTen() * factor);
  });

  if (xKarma == yKarma) {
    return runMatch(xSchool, xFactors, ySchool, yFactors);
  }

  return xKarma > yKarma ? xSchool : ySchool;
}

module.exports = {
    runMatch: runMatch
}