import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";

import { Button } from "@/shared/components";
import logo from '@/shared/assets/NEXlab.svg';
import { Input, EnvelopeIcon, LockIcon, Checkbox } from "../components";
import { useAuth } from "../hooks/useAuth";

export function LoginPage() {
  const { login, isLoading, error } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    await login({ email, password }); // You might want to pass rememberMe here eventually
  };

  return (
    <main className="flex flex-col bg-gradient-to-br from-white from-[40%] to-[#999999] min-h-screen px-6 py-8">

      {/* 2. Bloco Superior que cresce para ocupar o espaço disponível */}
      <div className="flex-col flex flex-1 w-full max-w-md mx-auto">

        {/* Espaço reservado para a Imagem da Empresa */}
        <div className="flex justify-center ">
          <img className="pt-[8vh] w-[24%] max-w-[255px] min-w-[120px] object-contain" src={logo} alt="NEX.lab" />
        </div>

        {/* 3. Título centralizado e com escala maior */}
        <h1 className="text-4xl font-semibold text-center text-black mb-10">
          Login
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {error ? <p className="text-red-500 text-sm text-center">{error}</p> : null}
          <Input
            label="Email"
            type="email"
            placeholder=""
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            rightIcon={<EnvelopeIcon />}
            required
          />

          <Input
            label="Senha"
            type="password"
            placeholder=""
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            rightIcon={<LockIcon />}
            required
          />

          <div className="flex items-center justify-between mt-2 mb-8">
            <Checkbox
              label="Lembrar"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />

            <Link
              to="/forgot-password"
              className="text-sm text-gray-600"
            >
              Esqueci minha senha
            </Link>
          </div>

        </form>
      </div>

      <div className="w-full max-w-md mx-auto mt-auto">
        <Button
          type="submit"
          onClick={(e) => { handleSubmit(e) }}
          disabled={isLoading}
          className="w-full py-4 text-lg bg-[#5A5A5A] text-white hover:bg-[#4A4A4A]"
        >
          {isLoading ? "Entrando..." : "Entrar"}
        </Button>
      </div>
    </main>
  );
}

