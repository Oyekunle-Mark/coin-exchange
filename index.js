const { ApolloServer, gql } = require('apollo-server');

const getRate = require('./utils/getRate');

const typeDefs = gql`
  type ExchangeResponse {
    value: Float!
  }

  type Query {
    exchange(
      type: String!
      exchangeRate: Float!
      margin: Float!
    ): ExchangeResponse!
  }
`;

const resolvers = {
  Query: {
    exchange: async (_, { type, exchangeRate, margin }) => {
      console.log(type, exchangeRate, margin);
      console.log(await getRate());

      return { value: 5 };
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server
  .listen({ port: process.env.PORT || 4000 })
  .then(({ url }) => console.log(`🚀  Server ready at ${url}`));
