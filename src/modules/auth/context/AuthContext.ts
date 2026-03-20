import { createContext } from "react";

import type { AuthUser, LoginPayload } from "../types/authTypes";

export interface AuthContextValue {
  token: string | null;
  user: AuthUser | null;
  isLoading: boolean;
  error: string | null;
  login: (payload: LoginPayload) => Promise<void>;
  logout: () => void;
  validateEmailRecovery: (token: string, newPassword?: string) => Promise<void>;
}

export const AuthContext = createContext<AuthContextValue | undefined>(
  undefined,
);