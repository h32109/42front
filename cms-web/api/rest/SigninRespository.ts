import BaseRepository from "./BaseRepository";
import {loginUser} from "../../models/user";

class SigninRepository extends BaseRepository {
  login(params: loginUser) {
    return this.instance.post("/login", params);
  }
}

export default new SigninRepository();
