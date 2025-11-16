import { useState } from "react";
import { FormField } from "../FormField";
import { FormInputWithIcon } from "../FormInputWithIcon";
import { PrimaryButton } from "../../atoms/PrimaryButton";
import { FormInputPassword } from "../FormInputPassword";
import Link from "next/link";

type LoginFormProps = {
  onSubmit: (email: string, password: string) => void;
  loading?: boolean;
};

export function LoginForm({ onSubmit, loading }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit(email, password);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-10 items-center">
      <div className="flex flex-col w-full gap-4">
        <FormField label="E-mail">
          <FormInputWithIcon
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormField>
        <div className="flex flex-col gap-1">
          <FormField label="Senha">
            <FormInputPassword
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormField>
          <Link href="#" className="font-bold text-xs self-end text-linkBlue">
            Esqueceu a senha?
          </Link>
        </div>
      </div>
      <PrimaryButton type="submit" size="lg" disabled={loading}>
        {loading ? "Enviando..." : "Enviar código"}
      </PrimaryButton>
    </form>
  );
}
