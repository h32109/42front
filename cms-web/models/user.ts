export interface UserAssign {
  firstName: string;
  lastName: string;
  identifier: string;
  password: string;
  birthday: Date;
  gender: string;
}

type User = {
  name: string;
  email: string;
  id: string;
  password: string;
};

export interface loginUser {
  email: NodeListOf<HTMLElement>;
  password: NodeListOf<HTMLElement>;
}

export default User;
