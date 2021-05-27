const userTypeDefs = `
    type Photo {
        _id: ID!
        comments: [String]
        created: String
        likes: [String]
        photoTags: [String]
        referencePhoto: [String]
        link: String
        largeSource: String
        mediumSource: String
        smallSource: String
        caption: String
    }

    type PhotoPage {
      contents: [Photo]
      page: Int
      size: Int
      totalPage: Int
    }
    
    type User {
      profile: String
      identifier: String
      isVerified: Boolean
      certificationNumber: String
      isEmail: Boolean
      password: String
    }

    type Query {
      getPhotos(page: Int, size: Int): PhotoPage
      getUser: User
    }


`;

export default userTypeDefs;
