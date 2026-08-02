export interface IJwtPayload {
  sub: number;
  email: string;
}

export interface IAuthResponse {
  accessToken: string;
  user: {
    id: number;
    email: string;
    name: string;
  };
}
