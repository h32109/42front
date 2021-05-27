import { makeExecutableSchema } from "graphql-tools";
import resolver from "./resolvers/index";
import typeDefs from "./typedefs";

const schema = makeExecutableSchema({
  typeDefs,
  resolver
});

export default schema;
