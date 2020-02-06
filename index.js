const { ApolloServer, gql } = require('apollo-server');

const api = require('./utils/getRate');

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
      // eslint-disable-next-line no-console
      console.log(type, exchangeRate, margin);
      console.log(await api());

      return { value: 5 };
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

// eslint-disable-next-line no-console
server.listen().then(({ url }) => console.log(`🚀  Server ready at ${url}`));
