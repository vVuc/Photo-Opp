import type { AuthResponse, LoginPayload } from "../types/authTypes";
import type { IAuthService } from "./IAuthService";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:3000";

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    const message =
      (errorBody && (errorBody.message as string)) ||
      `Erro na requisição (${response.status})`;
    throw new Error(message);
  }
  return response.json() as Promise<T>;
}

export const realAuthService: IAuthService = {
  async login(payload: LoginPayload): Promise<AuthResponse> {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    return handleResponse<AuthResponse>(response);
  },

  async requestPasswordReset(email: string): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/auth/forgot-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    await handleResponse<void>(response);
  },

  async validateEmailRecovery(token: string, newPassword?: string): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/auth/reset-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token, newPassword }),
    });

    await handleResponse<void>(response);
  }
};