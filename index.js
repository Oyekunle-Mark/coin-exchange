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
    exchange: (parent, { type, exchangeRate, margin }) => ({ value: 5.0 }),
  },
};
