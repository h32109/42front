import User from "../mongoose/user/user";

const resolvers = {
  Query: {
    async allUser() {
      return await User.find();
    },
  },
  Mutation: {
    async createUser(_, { input }) {
      return await User.create(input);
    },
    async updateUser(_, { id, input }) {
      return await User.findOneAndUpdate({ id }, input, { new: true });
    },
    async deleteUser(_, { id }) {
      return await User.findOneAndDelete({ id });
    },
  },
};

export default resolvers;
