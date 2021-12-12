export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  email: string;
  name: string;
  lastName: string;
  id: string;
}

export interface RefreshTokenResponse {
  accessToken: string;
  refreshToken: string;
  email: string;
}