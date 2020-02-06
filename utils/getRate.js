import axios from 'axios';

const URL = 'https://api.coindesk.com/v1/bpi/currentprice.json';

export default async () => {
//   let response = {};

  const response = (await axios.get(URL)).data.data;

  return response;
};
