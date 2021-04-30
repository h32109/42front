import Photo from "../mongoose/photo/photo";

function pagination(contents, page = 0, size = 10, total) {
  return {
    contents: contents,
    page: page,
    size: size,
    totalPage: Math.ceil(total / size),
  };
}

function selectedRows(page, size, count) {
  const startRow = page * size;
  const endRow = page !== Math.ceil(count / size) - 1 ? startRow + size : count;
  return { startRow, endRow };
}

const resolvers = {
  Query: {
    async getPhotos(_, { page, size }) {
      const photos = await Photo.find({});
      const { startRow, endRow } = selectedRows(+page, +size, +photos.length);
      return pagination(
        photos.slice(startRow, endRow),
        +page,
        +size,
        +photos.length
      );
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

export default resolvers;
