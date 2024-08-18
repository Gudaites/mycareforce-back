export interface IUserToken {
  id: string;
  email: string;
}

export interface ITokenDecode {
  user: IUserToken;
  token_type: string;
  iat: number;
  exp: number;
  iss: string;
}
