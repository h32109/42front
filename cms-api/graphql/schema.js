const { makeExecutableSchema } = require("graphql-tools");
const { resolvers } = require("./resolvers"); // resolvers.js 파일 생성

const typeDefs = `
    type User {
        name: String!
        email: String!
        id: String!
        password: String!
    }

    type Query {
        allUser: [User]
    }

    input UserInput {
      name: String!
      email: String!
      id: String!
      password: String!
    }

    type Mutation {
        createUser(input: UserInput): User
    }
`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

module.exports = schema;
