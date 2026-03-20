import { useEffect, useCallback, useMemo, useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";

import { authService } from "../services/authService";
import type { AuthUser, LoginPayload } from "../types/authTypes";
import { AuthContext } from "./AuthContext";

import type { AuthContextValue } from "./AuthContext";

interface AuthProviderProps {
  children: ReactNode;
}

const TOKEN_STORAGE_KEY = "photo_opp_token";
const USER_STORAGE_KEY = "photo_opp_user";

export function AuthProvider({ children }: AuthProviderProps) {
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = window.localStorage.getItem(TOKEN_STORAGE_KEY);
    const storedUser = window.localStorage.getItem(USER_STORAGE_KEY);

    if (storedToken) {
      setToken(storedToken);
    }

    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser) as AuthUser);
      } catch {
        window.localStorage.removeItem(USER_STORAGE_KEY);
      }
    }
  }, []);

  const handleLogin = useCallback(async (payload: LoginPayload) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await authService.login(payload);
      console.log(result);

      setToken(result.token);
      setUser(result.user);

      window.localStorage.setItem(TOKEN_STORAGE_KEY, result.token);
      window.localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(result.user));

      navigate("/auth/loading", { replace: true });
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Não foi possível fazer login.";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }, [navigate]);

  const handleLogout = useCallback(() => {
    setToken(null);
    setUser(null);
    window.localStorage.removeItem(TOKEN_STORAGE_KEY);
    window.localStorage.removeItem(USER_STORAGE_KEY);
    navigate("/", { replace: true });
  }, [navigate]);

  const handleValidateEmailRecovery = useCallback(async (token: string, newPassword?: string) => {
    setIsLoading(true);
    setError(null);

    try {
      await authService.validateEmailRecovery(token, newPassword);
      
      navigate("/login", { replace: true });
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Não foi possível validar a recuperação.";
      setError(message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [navigate]);

  const value = useMemo<AuthContextValue>(
    () => ({
      token,
      user,
      isLoading,
      error,
      login: handleLogin,
      logout: handleLogout,
      validateEmailRecovery: handleValidateEmailRecovery, // Adicionado ao Provider
    }),
    [token, user, isLoading, error, handleLogin, handleLogout, handleValidateEmailRecovery],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}