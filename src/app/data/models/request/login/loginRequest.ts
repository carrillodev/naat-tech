export interface LoginRequest {
  authorizationCode: string;
}

export interface RefreshTokenRequest {
  refreshToken: string;
}