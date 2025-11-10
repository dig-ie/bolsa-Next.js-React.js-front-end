"use client";

type AuthButtonProps = React.ComponentPropsWithoutRef<"button">;
// Este é o botão de autenticação.
// TODO: Thiago -> Implementar lógica de icones e estilos. Para lógica de ícones, seguir o exemplo do FormInputWithIcon, porém utilizando imagens (svg em public) apropriadas para autenticação (Google, Facebook, etc). Caso tenha dúvida de component de molecula, olhar outros exemplos na pasta molecules.
export function AuthButton({ className, children, ...props }: AuthButtonProps) {
  return (
    <div>
      <button
        className={`bg-black h-10 text-white text-lg ${className ?? ""}`}
        {...props}
      >
        {children}
      </button>
    </div>
  );
}
