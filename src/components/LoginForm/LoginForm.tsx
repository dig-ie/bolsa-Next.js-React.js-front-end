import React from "react";
import { LoginFormProps } from "./LoginFormprops";

const LoginForm: React.FC<LoginFormProps> = ({ onlyEmail = false, emailLabel = "Email", emailPlaceholder = "usuário123@gmail.com", passwordLabel = "Senha", passwordPlaceholder = "********" }) => {
  return (
    <form  className="flex flex-col items-center gap-4">
      <div className="flex flex-col">
        <label
          htmlFor="email"
          className="font-bold text-2xl text-textClaro sm:text-lg md:text-xl lg:text-xl text-left lg:mb-1"
        >
          {emailLabel}:
        </label>
        <input
          id="email"
          type="email"
          placeholder={emailPlaceholder}
          className="px-4 py-2 rounded-2xl font-normal bg-secondaryText text-sm mt-2 w-[320px] lg:w-[415px] max-w-md lg:mt-1 lg:rounded-[9px] lg:bg-backgroundClaro lg:shadow-md/40"
          autoComplete="email"
        />
      </div>
      {!onlyEmail && (
      <div className="flex flex-col">
        <label
          htmlFor="senha"
          className="font-bold text-2xl text-textClaro sm:text-lg md:text-xl lg:text-xl text-left lg:mb-1"
        >
          {passwordLabel}:
        </label>
        <input
          id="senha"
          type="password"
          placeholder={passwordPlaceholder}
          className="px-4 py-2 rounded-2xl font-normal bg-secondaryText text-sm mt-2 w-[320px] lg:w-[415px] max-w-md lg:mt-1 lg:rounded-[9px] lg:bg-backgroundClaro lg:shadow-md/40"
          autoComplete="current-password"
        />
      </div>
      )}
    </form>
  );
};

export default LoginForm;

