import { useState } from "react";
import { FormField } from "../FormField";
import { FormInputWithIcon } from "../FormInputWithIcon";
import { PrimaryButton } from "../../atoms/PrimaryButton";
import { FormInputPassword } from "../FormInputPassword";
import { Loader2 } from "lucide-react";
import Link from "next/link";

type LoginFormProps = {
  onSubmit: (email: string, password: string) => void;
  loading?: boolean;
};

export function LoginForm({ onSubmit, loading }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [apiError, setApiError] = useState("");

  function validate() {
    let ok = true;

    if (!email.includes("@")) {
      setEmailError("Insira um e-mail válido");
      ok = false;
    } else {
      setEmailError("");
    }

    if (password.length < 6) {
      setPasswordError("A senha deve ter pelo menos 6 caracteres");
      ok = false;
    } else {
      setPasswordError("");
    }

    return ok;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    try {
      await onSubmit(email, password);

      setApiError("");
    } catch (err) {
      setApiError("E-mail ou senha incorretos");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full">
      {apiError && (
        <p className="text-red-500 text-sm font-semibold text-center">
          {apiError}
        </p>
      )}

      <FormField label="E-mail" error={emailError}>
        <FormInputWithIcon
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          intent={emailError ? "error" : "default"}
        />
      </FormField>

      <FormField label="Senha" error={passwordError}>
        <FormInputPassword
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          intent={passwordError ? "error" : "default"}
        />
        <Link href="#" className="font-bold text-xs text-linkBlue self-end">
          Esqueceu a senha?
        </Link>
      </FormField>

      <PrimaryButton
        type="submit"
        size="lg"
        disabled={loading}
        className="self-center"
        onClick={() => {
          console.log("email error:", emailError);
          console.log("clicado");
        }}
      >
        {loading ? <Loader2 className="animate-spin m-auto" /> : "Entrar"}
      </PrimaryButton>
    </form>
  );
}
