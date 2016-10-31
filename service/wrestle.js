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
 * @param {string} xFranchise - x franchise.  
 * @param {objects} xFactors - factors determining if X school will win. 
 * @param {string} yFranchise - y franchise.
 * @param {objects} yFactors - factors determining if Y school will win. 
 * 
 * @return {string} xFranchise or yFranchise
 */
function wrestle(xFranchise, xFactors, yFranchise, yFactors) {
  
  var xKarma = getKarma(xFactors);
  var yKarma = getKarma(yFactors);

  if (xKarma == yKarma) {
    return wrestle(xFranchise, xFactors, yFranchise, yFactors);
  }

  return new Promise(function(resolve, reject) {

    var winner = xKarma > yKarma ? xFranchise : yFranchise;

    resolve({
      winner: winner
    });
  });
}

module.exports = {
    wrestle: wrestle
}
