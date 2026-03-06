import { useState, type FormEvent } from "react";

import { requestPasswordReset } from "../services/authApi";

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
      await requestPasswordReset(email);
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
    <main>
      <h1>Recuperar senha</h1>

      <form onSubmit={handleSubmit}>
        <label>
          E-mail
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </label>

        {message ? <p>{message}</p> : null}
        {error ? <p>{error}</p> : null}

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Enviando..." : "Enviar link de recuperação"}
        </button>
      </form>
    </main>
  );
}

