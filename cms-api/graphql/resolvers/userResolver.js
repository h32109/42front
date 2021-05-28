import Photo from "../../mongoose/photo/photo";
import User from "../../mongoose/user/user";

const pagination = (contents, page = 0, size = 10, total) => {
  return {
    contents: contents,
    page: page,
    size: size,
    totalPage: Math.ceil(total / size),
  };
};

const selectedRows = (page, size, count) => {
  const startRow = page * size;
  const endRow = page !== Math.ceil(count / size) - 1 ? startRow + size : count;
  return { startRow, endRow };
};

const userResolver = {
  Query: {
    // async getPhotos(_, { page, size }) {
    //   console.log("asdfasdf");
    //   const photos = await Photo.find({});
    //   const { startRow, endRow } = selectedRows(+page, +size, +photos.length);
    //   return pagination(
    //     photos.slice(startRow, endRow),
    //     +page,
    //     +size,
    //     +photos.length
    //   );
    // },
    async allUser() {
      const user = await User.find({});
      console.log("aaa", user);
      return user;
    },
  },
  // Mutation: {
  //   async createUser(_, { input }) {
  //     return await User.create(input);
  //   },
  //   async updateUser(_, { id, input }) {
  //     return await User.findOneAndUpdate({ id }, input, { new: true });
  //   },
  //   async deleteUser(_, { id }) {
  //     return await User.findOneAndDelete({ id });
  //   },
  // },
};

export default userResolver;
