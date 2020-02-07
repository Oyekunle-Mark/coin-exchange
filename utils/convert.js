/**
 * Finds the price of a sale or buy
 * @param {string} type option, buy or sell
 * @param {number} rate the price of 1 BTC
 * @param {number} margin the margin between buying and selling in percent
 * @returns {number} the calculated price
 */
const convert = (type, rate, margin) => {
  const difference = rate * (margin / 100);

  return type === 'sell' ? rate - difference : rate + difference;
};

module.exports = convert;
