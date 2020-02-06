const axios = require('axios');

const URL = 'https://api.coindesk.com/v1/bpi/currentprice.json';

module.exports = async () => {
  try {
    const response = (await axios.get(URL)).data;

    return response.bpi.USD.rate_float;
  } catch (err) {
    console.error(`Error getting data: ${err}`);
  }
};
