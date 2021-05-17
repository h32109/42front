import { gql } from "@apollo/client";

const ALLUSER_QUERY = gql`
  query {
    allUser {
      name
      id
      password
      email
    }
  }
`;

const ADDUSER_MUTATION = gql`
  mutation createUser($UserInput: UserInput) {
    createUser(input: $UserInput) {
      id
      name
      email
      password
    }
  }
`;

export { ALLUSER_QUERY, ADDUSER_MUTATION };
