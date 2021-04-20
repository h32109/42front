import { gql } from "@apollo/client";

const ALLUSER_QUERY = gql`
  query allUser {
    allUser {
      name
      id
      password
      email
    }
  }
`;

export default ALLUSER_QUERY;
