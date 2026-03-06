import { useState, type FormEvent } from "react";

import { Button } from "@/shared/components";
import { Input, EnvelopeIcon, LockIcon } from "../components";
import { useAuth } from "../hooks/useAuth";

export function LoginPage() {
  const { login, isLoading, error } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    await login({ email, password });
  };

  return (
    <main>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <label className="block">
          <span className="sr-only">E-mail</span>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            rightIcon={<EnvelopeIcon />}
            required
          />
        </label>

        <label className="block">
          <span className="sr-only">Senha</span>
          <Input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            rightIcon={<LockIcon />}
            required
          />
        </label>

        {error ? <p>{error}</p> : null}

        <Button type="submit" variant="primary" disabled={isLoading}>
          {isLoading ? "Entrando..." : "Entrar"}
        </Button>
      </form>
    </main>
  );
}

