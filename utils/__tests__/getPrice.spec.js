const axios = require('axios');
const getPrice = require('../getPrice');

jest.mock('axios');

describe('getPrice', () => {
  it('Fetch the right data', async () => {
    const data = {
      bpi: {
        USD: {
          code: 'USD',
          symbol: '&#36;',
          rate: '9,819.4950',
          description: 'United States Dollar',
          rate_float: 9819.495,
        },
        GBP: {
          code: 'GBP',
          symbol: '&pound;',
          rate: '7,619.6925',
          description: 'British Pound Sterling',
          rate_float: 7619.6925,
        },
        EUR: {
          code: 'EUR',
          symbol: '&euro;',
          rate: '8,970.6095',
          description: 'Euro',
          rate_float: 8970.6095,
        },
      },
    };

    axios.get.mockResolvedValue({ data });

    const price = await getPrice();
    expect(price).toEqual(9819.495);
  });
});
