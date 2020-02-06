const { ApolloServer, gql } = require('apollo-server');

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
    exchange: (_, { type, exchangeRate, margin }) => ({ value: 5.0 }),
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

// eslint-disable-next-line no-console
server.listen().then(({ url }) => console.log(`🚀  Server ready at ${url}`));
