"use client";

import { useState } from "react";
import { RecoveryEmailForm } from "../../molecules/RecoveryEmailForm";

import { CardSurface } from "../../atoms/CardSurface";

type Step = "email" | "code" | "reset";

export function PasswordRecoveryCard() {
  const [step, setStep] = useState<Step>("email");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  // Handler do submit de cada etapa
  // TODO: Implementar os formulários RecoveryCodeForm e ResetPasswordForm
  async function handleSubmitEmail(emailValue: string) {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000)); // simulação API
    setEmail(emailValue);
    setStep("code");
    setLoading(false);
  }

  return (
    <CardSurface className="w-full max-w-md mx-auto pt-8 px-4 flex flex-col gap-4 items-center justify-start min-h-[378px] ">
      {step === "email" && (
        <RecoveryEmailForm onSubmit={handleSubmitEmail} loading={loading} />
      )}
    </CardSurface>
  );
}
