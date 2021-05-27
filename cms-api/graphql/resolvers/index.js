const userResolver = require("./userResolver");

const resolver = {
    Query: {
        ...userResolver.Query,
    },
    Mutation: {
        //...userResolver.Mutation,
    }
}

export default resolver