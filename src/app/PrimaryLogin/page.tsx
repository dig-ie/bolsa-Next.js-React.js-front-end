"use client";

import Image from "next/image";
import { AuthButton } from "@/components/NewDesignSystem/molecules/AuthButton/inde";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center pt-20">
      <Image 
  src="/images/valorim_logo.png" 
  alt="Logo"
  width={128}
  height={128}
  className="w-32 h-32"
/>

      <div className="mt-12 w-full max-w-sm px-16 flex flex-col items-center gap-4">
        {/* Grupo superior: Entre (3/4 largura) */}
        <div className="w-3/4">
          <AuthButton
            className="w-full bg-emerald-600 text-white font-bold hover:bg-emerald-700 border-0"
          >
            Entre
          </AuthButton>
        </div>

        {/* Cadastre-se (3/4 largura) */}
        <div className="w-3/4">
          <AuthButton className="w-full bg-gray-200 text-black font-bold hover:bg-gray-300 border-0">
            Cadastre-se
          </AuthButton>
        </div>

        {/* Divisor com "Ou" */}
        <div className="w-full flex items-center my-2">
          <span className="flex-1 h-px bg-gray-200" />
          <span className="px-3 text-gray-500 text-sm">Ou</span>
          <span className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Grupo social: largura completa, fundo branco, borda cinza escuro e texto preto */}
        <div className="w-full flex flex-col gap-3">
          <AuthButton
            provider="google"
            className="w-full bg-white text-black border border-gray-700 hover:bg-gray-50"
          >
            Entrar com o Google
          </AuthButton>

          <AuthButton
            provider="facebook"
            className="w-full bg-white text-black border border-gray-700 hover:bg-gray-50"
          >
            Entrar com o Facebook
          </AuthButton>
        </div>
      </div>
    </main>
  );
}