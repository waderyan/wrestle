

function random (low, high) {
    return Math.random() * (high - low) + low;
}

module.exports = {
  zeroToTen: function() {
    return random(0, 10);
  }
};