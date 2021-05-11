import BaseRepository from "./BaseRepository";
import { UserAssign } from "../../models/user";

class AuthRepository extends BaseRepository {
  assignUser(params: UserAssign) {
    return this.instance.post("/join", params);
  }
}

export default new AuthRepository();
