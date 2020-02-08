const computePrice = require('../computePrice');

describe('computePrice', () => {
  it('Returns type Number', () => {
    const result = computePrice('sell', 9700, 0.2);

    expect(typeof result).toEqual('number');
  });

  it('Returns lesser number on "sell"', () => {
    const price = 5000;
    const result = computePrice('sell', price, 0.2);

    expect(result).toBeLessThan(price);
    expect(result).not.toEqual(price);
  });

  it('Returns greater number on "buy"', () => {
    const price = 5000;
    const result = computePrice('buy', price, 0.2);

    expect(result).toBeGreaterThan(price);
    expect(result).not.toEqual(price);
  });

  it('Computes the right price on "sell"', () => {
    const price = 5000;
    const result = computePrice('sell', price, 0.2);

    expect(result).toEqual(4990);
  });

  it('Computes the right price on "buy"', () => {
    const price = 5000;
    const result = computePrice('buy', price, 0.2);

    expect(result).toEqual(5010);
  });
});
