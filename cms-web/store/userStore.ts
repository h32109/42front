import { makeVar } from "@apollo/client";

import { User } from "../models/user";

const UserList = makeVar<User[]>([]);

export const addUser = async (userInput: User) => {
  const currentUser = UserList();
  UserList([...currentUser, userInput]);
};

export default UserList;
