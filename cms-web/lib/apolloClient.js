import { ApolloClient, InMemoryCache } from "@apollo/client";

import UserList from "store/userStore";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
  // 아래처럼 typePolice를 지정해주면, allUser를 찾기위해 DB까지 가지않고, 로컬 ( 캐시 ) 에서 찾음 (?)
  // 단, schema에서 해당 부분에 @client로 로컬환경에서 사용할 부분을 지정해 둬야함 (?)
  // cache: new InMemoryCache({
  //   typePolicies: {
  //     Query: {
  //       fields: {
  //         allUser() {
  //           return UserList();
  //         },
  //       },
  //     },
  //   },
  // }),
});

export default client;
