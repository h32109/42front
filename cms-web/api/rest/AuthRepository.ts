import BaseRepository from "./BaseRepository";
import { UserAssign } from "../../models/user";
import { LoginParam } from "../../models/auth";

class AuthRepository extends BaseRepository {
  login(params: LoginParam) {
    return this.instance.post("/user/login", params);
  }

  assignUser(params: UserAssign) {
    return this.instance.post("/user/join", params);
  }
}

export default new AuthRepository();
