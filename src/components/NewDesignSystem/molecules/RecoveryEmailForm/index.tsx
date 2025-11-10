import { useState } from "react";
import { PrimaryButton } from "../../atoms/PrimaryButton";
import { FormInputWithIcon } from "../FormInputWithIcon";
import { FormField } from "../FormField";

type RecoveryEmailFormProps = {
  onSubmit: (email: string) => void;
  loading?: boolean;
};

export function RecoveryEmailForm({
  onSubmit,
  loading,
}: RecoveryEmailFormProps) {
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit(email);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8 items-center">
      <p className="text-sm text-darkText text-start">
        Informe seu e-mail para enviarmos o código de redefinição de senha.
      </p>
      <FormField label="E-mail">
        <FormInputWithIcon
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormField>

      <PrimaryButton type="submit" size="lg" disabled={loading}>
        {loading ? "Enviando..." : "Enviar código"}
      </PrimaryButton>
    </form>
  );
}
