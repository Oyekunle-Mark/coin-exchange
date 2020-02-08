const { ApolloServer, gql } = require('apollo-server-express');

const getPrice = require('./utils/getPrice');
const computePrice = require('./utils/computePrice');

const typeDefs = gql`
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
`;

const resolvers = {
  Query: {
    calculatePrice: async (_, { type, exchangeRate, margin }) => {
      if (type.toLowerCase() !== 'sell' && type.toLowerCase() !== 'buy') {
        throw new Error('type can only be either "buy" or "sell"');
      }

      const price = await getPrice();
      const priceComputed = computePrice(type, price, margin);
      const priceInNaira = priceComputed * exchangeRate;

      return { price: priceInNaira };
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server
  .listen({ port: process.env.PORT || 4000 })
  .then(({ url }) => console.log(`🚀  Server ready at ${url}`));
