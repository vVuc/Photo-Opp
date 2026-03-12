import type { AuthResponse, LoginPayload } from "../types/authTypes";

export interface IAuthService {
  login(payload: LoginPayload): Promise<AuthResponse>;
  requestPasswordReset(email: string): Promise<void>;
}