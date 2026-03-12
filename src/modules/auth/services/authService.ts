import type { IAuthService } from "./IAuthService";
import { realAuthService } from "./authApi";
import { mockAuthService } from "./authApi.mock";

// Verifica a variável de ambiente do Vite
// const isDev = import.meta.env.VITE_ENVIRONMENT === "DEV";
const isDev = true

// Exporta o serviço correto. 
// O resto da aplicação vai importar APENAS este arquivo.
export const authService: IAuthService = isDev ? mockAuthService : realAuthService;