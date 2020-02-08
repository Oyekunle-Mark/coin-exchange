/**
 * Finds the price of a sale or buy
 * @param {string} type option, buy or sell
 * @param {number} price the price of 1 BTC
 * @param {number} margin the margin between buying and selling in percent
 * @returns {number} the calculated price
 */
const convert = (type, price, margin) => {
  const computedMargin = price * (margin / 100);

  return type === 'sell' ? price - computedMargin : price + computedMargin;
};

module.exports = convert;
