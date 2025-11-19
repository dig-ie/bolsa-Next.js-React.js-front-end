"use-client";
import { useState } from "react";
import { CardSurface } from "../../atoms/CardSurface";
import { LoginForm } from "../../molecules/LoginForm";

type LoginCardProps = React.ComponentPropsWithoutRef<"div">;

export function LoginCard({ className, ...props }: LoginCardProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleLogin(email: string, password: string) {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        "https://bolsa-node-js-nestjs-back-end.onrender.com/auth/login",
        {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const body = await res.json().catch(() => null);

      if (!res.ok) {
        setError(body?.message || "Credenciais inválidas");
        return;
      }

      alert("Login realizado com sucesso!");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError("erro" + err.message);
      } else {
        setError("Erro inesperado");
      }
    } finally {
      setLoading(false);
    }
  }
  return (
    <CardSurface className={`mx-1.5 h-[70vh] pt-14 pb-4 ${className}`}>
      <LoginForm onSubmit={handleLogin} loading={loading} apiError={error} />
    </CardSurface>
  );
}
