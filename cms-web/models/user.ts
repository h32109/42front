export interface UserAssign {
  firstName: string;
  lastName: string;
  identifier: string;
  password: string;
  birthday: Date;
  gender: string;
}

export interface User {
  profile: string;
  identifier: string;
  isVerified: boolean;
}
