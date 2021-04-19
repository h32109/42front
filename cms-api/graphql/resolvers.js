const User = require("../mongoose/user");

const resolvers = {
  Query: {
    async allUser() {
      console.log("ccccccccccccccccccccccccccccc");
      return await User.find();
    },
  },
  Mutation: {
    async createUser(_, { input }) {
      console.log(input);
      return await User.create(input);
    },
  },
};

module.exports = resolvers;
