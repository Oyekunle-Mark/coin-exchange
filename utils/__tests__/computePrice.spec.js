const computePrice = require('../computePrice');

describe('computePrice', () => {
  it('Returns type Number', () => {
    const result = computePrice('sell', 9700, 0.2);

    expect(typeof result).toEqual('number');
  });

  it('Returns lesser number of "sell"', () => {
    const price = 5000;
    const result = computePrice('sell', price, 0.2);

    expect(result).toBeLessThan(price);
    expect(result).not.toEqual(price);
  });
});
