import { makeExecutableSchema } from "graphql-tools";
import resolvers from "./resolvers";

const typeDefs = `
    type User {
        _id: ID!
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
      updateUser(id: String!, input: UserInput): User
      deleteUser(id: String!): User
  }
`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
