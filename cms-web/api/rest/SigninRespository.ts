import BaseAuthRepository from "./BaseRepository";
import { loginUser } from "../../models/user";
import axios from "axios";

class SigninRepository extends BaseAuthRepository {
  login(params: loginUser) {
    console.log(params);
    return this.instance.post("/user/login", params);
  }
}

export default new SigninRepository();
