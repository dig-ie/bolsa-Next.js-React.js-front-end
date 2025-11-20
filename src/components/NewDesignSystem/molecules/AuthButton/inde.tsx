"use client";

import React from "react";

type AuthButtonProps = React.ComponentPropsWithoutRef<"button">;

type ExtendedAuthButtonProps = AuthButtonProps & {
  provider?: "google" | "facebook";
};

// Este é o botão de autenticação.
// TODO: Thiago -> Implementar lógica de icones e estilos. Para lógica de ícones, seguir o exemplo do FormInputWithIcon, porém utilizando imagens (svg em public) apropriadas para autenticação (Google, Facebook, etc). Caso tenha dúvida de component de molecula, olhar outros exemplos na pasta molecules.
export function AuthButton({ className, children, provider, ...props }: ExtendedAuthButtonProps) {
  const baseClasses =
    "flex items-center justify-center gap-3 px-4 h-10 rounded-lg text-base font-medium transition";

  const defaultClasses = !className
    ? provider
      ? "bg-black text-white hover:bg-gray-800"
      : "bg-white text-black border border-gray-200 hover:bg-gray-50"
    : "";

  const iconSrc = provider ? `/images/${provider}_icon.svg` : null;

  return (
    <div>
      <button
        className={`${baseClasses} ${defaultClasses} ${className ?? ""}`}
        {...props}
      >
        {iconSrc && (
          <img
            src={iconSrc}
            alt={`${provider} icon`}
            className="inline-block object-contain w-5 h-5"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
        )}
        <span>{children}</span>
      </button>
    </div>
  );
}
