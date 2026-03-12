import type { AuthResponse, LoginPayload } from "../types/authTypes";
import type { IAuthService } from "./IAuthService";

// Função auxiliar para simular tempo de rede
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const mockAuthService: IAuthService = {
  async login(payload: LoginPayload): Promise<AuthResponse> {
    await delay(800); // Simula 800ms de requisição

    // Você pode até simular erros para testar seu front-end
    if (payload.email === "erro@teste.com") {
      throw new Error("Credenciais inválidas (Simulado pelo Mock)");
    }

    console.log("test");
    
    // Retorna os dados mockados baseados no seu AuthResponse
    return {
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.mocked-token",
      user: {
        id: "123",
        name: "Thiago",
        email: payload.email,
        // Adicione outras propriedades que existam no seu AuthResponse
      }
    } as unknown as AuthResponse; 
  },

  async requestPasswordReset(email: string): Promise<void> {
    await delay(500);
    console.log(`[MOCK] E-mail de reset 'enviado' com sucesso para: ${email}`);
    // Como o retorno é void, não precisamos retornar nada
  }
};