import { makeVar } from "@apollo/client";
import { User } from "../models/user";
import AuthRepository from "../api/rest/AuthRepository";
import { LoginParam } from "../models/auth";

const LoginState = makeVar<String>("");
const LoginUser = makeVar<User | undefined>(undefined);

export const login = async (loginParam: LoginParam) => {
  AuthRepository.login(loginParam).then(data => {
    console.log(data);
  });
};

export default { LoginState, LoginUser };
