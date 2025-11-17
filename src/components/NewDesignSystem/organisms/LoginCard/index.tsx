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
      const res = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
      }

      const data = await res.json();
      console.log(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Erro inesperado");
      }
    } finally {
      setLoading(false);
    }
  }
  return (
    <CardSurface className={`mx-1.5 h-[70vh] pt-14 pb-4 ${className}`}>
      <LoginForm onSubmit={handleLogin} />
    </CardSurface>
  );
}
