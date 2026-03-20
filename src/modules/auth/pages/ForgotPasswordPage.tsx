import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";

import { Button } from "@/shared/components";
import logo from '@/shared/assets/NEXlab.svg';
import { Input, EnvelopeIcon } from "../components";
import { authService } from "../services/authService";

export function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage(null);
    setError(null);

    try {
      await authService.requestPasswordReset(email);
      setMessage("Se o e-mail existir, você receberá instruções em breve.");
    } catch (err) {
      const msg =
        err instanceof Error
          ? err.message
          : "Não foi possível solicitar a recuperação de senha.";
      setError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex flex-col bg-gradient-to-br from-white from-[40%] to-[#999999] min-h-screen px-6 py-8">
      
      <div className="flex-col flex flex-1 w-full max-w-md mx-auto">
        
        <div className="flex justify-center">
          <img 
            className="pt-[8vh] w-[24%] max-w-[255px] min-w-[120px] object-contain mb-12" 
            src={logo} 
            alt="NEX.lab" 
          />
        </div>

        <h1 className="text-4xl font-semibold text-center text-black mb-10">
          Recuperar senha
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {message ? <p className="text-green-600 text-sm text-center">{message}</p> : null}
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

          <div className="flex items-center justify-end mt-2 mb-8">
            <Link
              to="/login"
              className="text-sm text-gray-600 hover:text-gray-800"
            >
              Voltar para o login
            </Link>
          </div>
        </form>
      </div>

      <div className="w-full max-w-md mx-auto mt-auto">
        <Button
          type="submit"
          onClick={(e) => { handleSubmit(e as unknown as FormEvent) }}
          disabled={isSubmitting}
          className="w-full py-4 text-lg bg-[#5A5A5A] text-white hover:bg-[#4A4A4A]"
        >
          {isSubmitting ? "Enviando..." : "Enviar link"}
        </Button>
      </div>
    </main>
  );
}