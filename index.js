const express = require('express');
const graphHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const getPrice = require('./utils/getPrice');
const computePrice = require('./utils/computePrice');

const schema = buildSchema(`
  type calculatePriceResponse {
    price: Float!
  }

  type Query {
    calculatePrice(
      type: String!
      margin: Float!
      exchangeRate: Float!
    ): calculatePriceResponse!
  }
`);

const root = {
  calculatePrice: async ({ type, exchangeRate, margin }) => {
    if (type.toLowerCase() !== 'sell' && type.toLowerCase() !== 'buy') {
      throw new Error('type can only be either "buy" or "sell"');
    }

    const price = await getPrice();
    const priceComputed = computePrice(type, price, margin);
    const priceInNaira = priceComputed * exchangeRate;

    return { price: priceInNaira };
  },
};

const app = express();

app.use(
  '/graphql',
  graphHTTP({
    schema,
    rootValue: root,
  }),
);

// mount the GraphiQL interface
app.use(
  '/graphiql',
  graphHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  }),
);

app.listen(process.env.PORT || 4000, () =>
  console.log(
    '🚀 Running a GraphQL API server at http://localhost:4000/graphql',
  ),
);
