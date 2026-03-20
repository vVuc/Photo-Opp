import type { AuthResponse, LoginPayload } from "../types/authTypes";
import type { IAuthService } from "./IAuthService";

// Função auxiliar para simular tempo de rede
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const mockAuthService: IAuthService = {
  async login(payload: LoginPayload): Promise<AuthResponse> {
    await delay(800); // Simula 800ms de requisição

    if (payload.email === "erro@teste.com") {
      throw new Error("Credenciais inválidas (Simulado pelo Mock)");
    }

    console.log("test");
    
    return {
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.mocked-token",
      user: {
        id: "123",
        name: "Thiago",
        email: payload.email,
      }
    } as unknown as AuthResponse; 
  },

  async requestPasswordReset(email: string): Promise<void> {
    await delay(500);
    console.log(`[MOCK] E-mail de reset 'enviado' com sucesso para: ${email}`);

  },

  async validateEmailRecovery(token: string): Promise<void> {
    await delay(500);
    
    if (token === "token-invalido") {
      throw new Error("Token inválido ou expirado (Simulado pelo Mock)");
    }

    console.log(`[MOCK] Recuperação validada com sucesso para o token: ${token}`);
  }
};