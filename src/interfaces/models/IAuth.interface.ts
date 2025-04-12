export interface IDataUser {
  userId: string;
  userRoles: string[];
  userEmail: string;
  userName: string;
  userIsRootAdmin: boolean;
}

export interface IResponseLogin {
  token: string;
  user: IDataUser;
}
