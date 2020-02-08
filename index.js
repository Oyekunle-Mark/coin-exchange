const { ApolloServer, gql } = require('apollo-server');

const getRate = require('./utils/getRate');
const convert = require('./utils/convert');

const typeDefs = gql`
  type ExchangeResponse {
    value: Float!
  }

  type Query {
    calculatePrice(
      type: String!
      margin: Float!
      exchangeRate: Float!
    ): ExchangeResponse!
  }
`;

const resolvers = {
  Query: {
    exchange: async (_, { type, exchangeRate, margin }) => {
      if (type.toLowerCase() !== 'sell' && type.toLowerCase() !== 'buy') {
        throw new Error('type can only be either "buy" or "sell"');
      }

      const rate = await getRate();
      const priceInDollar = convert(type, rate, margin);
      const priceInNaira = priceInDollar * exchangeRate;

      return { value: priceInNaira };
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

server
  .listen({ port: process.env.PORT || 4000 })
  .then(({ url }) => console.log(`🚀  Server ready at ${url}`));
