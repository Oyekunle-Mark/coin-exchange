const axios = require('axios');

const URL = 'https://api.coindesk.com/v1/bpi/currentprice.json';

const api = async () => {
  //   let response = {};

  const response = (await axios.get(URL)).data;

  return response.bpi.USD.rate_float;
};

module.exports = api;
