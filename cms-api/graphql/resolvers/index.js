import userResolver from "./userResolver";

const resolver = {
  Query: {
    ...userResolver.Query,
  },
  Mutation: {
    //...userResolver.Mutation,
  },
};

console.log("aaaa", resolver.Query.getUser());

export default resolver;
