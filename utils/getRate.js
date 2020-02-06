const axios = require('axios');

const URL = 'https://api.coindesk.com/v1/bpi/currentprice.json';

/**
 * Gets the price of a 1 BTC in dollar
 * @returns {Promise<number>} the price of 1 BTC in dollar as float
 */
const fetchRate = async () => {
  try {
    const response = (await axios.get(URL)).data;

    return response.bpi.USD.rate_float;
  } catch (err) {
    console.error(`Error getting data: ${err}`);
  }
};

module.exports = fetchRate;
