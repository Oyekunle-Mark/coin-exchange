const computePrice = require('../computePrice');

describe('computePrice', () => {
  it('Returns type Number', () => {
    const result = computePrice('sell', 9700, 0.2);

    expect(typeof result).toEqual('number');
  });
});
