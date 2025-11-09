"use client";
import React, { useState, useEffect } from "react";
import { useResponsive } from "@/hooks/useResponsive";
import type { LoginFormProps } from "./LoginFormprops";
import Button from "@/components/SecondaryButton/SecondaryButton";
import Link from "@/components/AuthLink/AuthLink";
import Submit from "@/components/SubmitButton/SubmitButton";
import { Separator } from "@/components/Separator/Separator";
import Checkbox from "@/components/CheckBox/CheckBox";

export const LoginForm: React.FC<LoginFormProps> = ({
  onlyEmail = false,
  emailLabel = "Email",
  emailPlaceholder = "usuário123@gmail.com",
  passwordLabel = "Senha",
  passwordPlaceholder = "********",
}) => {
  const { isLg } = useResponsive();
  const [keepConnected, setKeepConnected] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleKeepConnectedChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setKeepConnected(event.target.checked);
  };

  // Componente compartilhado de input
  const EmailInput = () => (
    <div className="flex flex-col">
      <label
        htmlFor="email"
        className="font-bold text-2xl text-darkText sm:text-lg md:text-xl lg:text-xl text-left lg:mb-1"
      >
        {emailLabel}:
      </label>
      <input
        id="email"
        type="email"
        placeholder={emailPlaceholder}
        className="px-4 py-2 rounded-2xl font-normal bg-secondaryText text-sm mt-2 w-[320px] lg:w-[415px] max-w-md lg:mt-1 lg:rounded-[9px] lg:bg-lightBackground lg:shadow-md/40"
        autoComplete="email"
      />
    </div>
  );

  const PasswordInput = () => (
    <div className="flex flex-col">
      <label
        htmlFor="senha"
        className="font-bold text-2xl text-darkText sm:text-lg md:text-xl lg:text-xl text-left lg:mb-1"
      >
        {passwordLabel}:
      </label>
      <input
        id="senha"
        type="password"
        placeholder={passwordPlaceholder}
        className="px-4 py-2 rounded-2xl font-normal bg-secondaryText text-sm mt-2 w-[320px] lg:w-[415px] max-w-md lg:mt-1 lg:rounded-[9px] lg:bg-lightBackground lg:shadow-md/40"
        autoComplete="current-password"
      />
    </div>
  );

  // Versão Desktop - só renderiza após a montagem para evitar mismatch de hidratação
  if (isMounted && isLg) {
    return (
      <div className="h-screen mt-3 flex flex-col justify-center gap-3 items-center max-w-[415px] self-center">
        <div className="flex flex-col justify-center items-center gap-4">
          <Button
            imageSrc="/images/facebook_icon.png"
            title="Facebook"
            destination="https://pt-br.facebook.com/login/"
          />
          <Button
            imageSrc="/images/google_icon.png"
            title="Google"
            destination="https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue%26pli%3D1&ec=GAlAwAE&hl=pt_BR&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S-687016799%3A1747074790770482"
          />
        </div>
        <Separator />

        <form className="flex flex-col items-center gap-4 w-full">
          <EmailInput />
          {!onlyEmail && <PasswordInput />}
        </form>

        <div className="flex flex-row items-center justify-between w-full">
          <Checkbox
            checked={keepConnected}
            onChange={handleKeepConnectedChange}
            label={"Me mantenha conectado"}
            id={"manter-conexao-id"}
          />
          <Link href="/ForgetPassword" text="Esqueceu a senha?" />
        </div>
        <Submit
          title="Entrar"
          type={"submit"}
          className="w-full h-[58px] border rounded-xl bg-secondaryColor mt-3 cursor-pointer lg:justify-end lg:items-end lg:w-[415px] lg:h-[75px]"
        />
      </div>
    );
  }

  // Versão Mobile
  return (
    <form className="flex flex-col items-center gap-4">
      <EmailInput />
      {!onlyEmail && <PasswordInput />}
    </form>
  );
};

export default LoginForm;
