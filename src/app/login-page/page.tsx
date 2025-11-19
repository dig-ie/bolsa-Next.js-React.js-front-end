"use client";
import { useResponsive } from "@/hooks/useResponsive";
import Submit from "@/components/SubmitButton/SubmitButton";
import Image from "next/image";
import React, { useState, useEffect } from "react";

import LoginContent from "@/components/LoginForm/LoginContent";

export default function LoginPage() {
  const { isLg } = useResponsive();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // desktop version - só renderiza após a montagem para evitar mismatch de hidratação
  // fix - co-authored commit
  if (isMounted && isLg) {
    return (
      <div className="bg-primaryGreen flex justify-center items-center h-[130vh] w-screen">
        <div className="bg-secondaryBackground w-[90vw] h-[110vh] rounded-tl-[25px] rounded-bl-[25px] flex overflow-hidden">
          {/* left side desktop version */}
          <div className="flex flex-col lg:w-[65vw] !items-center !justify-center ">
            <nav className="w-full flex !justify-evenly items-center mt-6 mb-0">
              <div className="flex items-center min-h-24px align-middle gap-3">
                <Image
                  alt="valorim-icone"
                  src="/images/valorim_logo.png"
                  width={37}
                  height={37}
                  className=""
                />
                <h2 className="font-bold text-[24px]">Valorim</h2>
              </div>
              <div className=" flex gap-4 items-center">
                <span className=" text-gray-400 ">Não tem uma conta?</span>
                <Submit
                  title="Registrar"
                  type="submit"
                  className="w-[100px] h-[40px] border rounded-[5px] bg-secondaryColor cursor-pointer "
                />
              </div>
            </nav>
            <LoginContent registerText="Registrar" />;
          </div>

          {/* right side desktop version */}
          <div className="lg:w-[40vw] h-[110vh] xl:w-[70vw] bg-secondaryColor rounded-tl-[75px] rounded-bl-[75px] justify-items-center flex flex-col items-center ml-auto">
            <div className="flex flex-col items-start mb-3 mt-20 justify-center">
              <span className="text-left text-lightBackground font-bold italic text-3xl">
                O mercado financeiro{" "}
              </span>
              <span className="ml-10  text-lightBackground font-bold italic text-3xl">
                ao seu alcance.
              </span>
            </div>
            <div className="w-[80%] h-[50vh] bg-lightBackground rounded-[50px]"></div>
          </div>
        </div>
      </div>
    );
  }

  // mobile version
  return <LoginContent registerText="Registrar" />;
}
