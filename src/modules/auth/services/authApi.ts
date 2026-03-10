import type { AuthResponse, LoginPayload } from "../types/authTypes";

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

export async function login(payload: LoginPayload): Promise<AuthResponse> {
  // const response = await fetch(`${API_BASE_URL}/auth/login`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(payload),
  // });

  // return handleResponse<AuthResponse>(response);
  return handleResponse<AuthResponse>({
    ok: true,
    status: 200,
    json: async () => {
      // Aqui você retorna o formato exato da sua AuthResponse
      return {
        token: "1234",
        user: { id: 1, name: "João" }
      };
    }
  } as Response);
}

export async function requestPasswordReset(email: string): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/auth/forgot-password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  await handleResponse<void>(response);
}