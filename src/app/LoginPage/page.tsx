"use client";
import { useResponsive } from "@/hooks/useResponsive";
import LoginContent from "@/components/LoginForm/LoginContent";
import LoginForm from "@/components/LoginForm/LoginForm";
import Button from "@/components/Button/Button";
import Text from "@/components/Text/Text";
import Link from "@/components/CustomLink/CustomLink";
import Submit from "@/components/Submit/Submit";
import Image from "next/image";
import {Separator} from "@/components/Separator/Separator";
import Checkbox from "@/components/CheckBox/CheckBox";
// import BackButton from "../components/BackButton/BackButton";

export default function LoginPage() {
  const { isLg } = useResponsive();

  if (isLg) {
    // Versão Desktop (neste caso nada)
    return (
      <div className="bg-primaryGreen flex justify-center items-center h-[130vh] w-[100vw]">
        <div className="bg-secondaryBackground w-[90vw] min-h-[110vh] h-auto rounded-tl-[25px] rounded-bl-[25px] flex overflow-hidden">
          <div className="flex items-start mt-7 ml-7 gap-3 h-px">
            <Image
              alt="valorim-icone"
              src="/images/valorim_logo.png"
              width={37}
              height={37}
              className=""
            />
            <h2 className="font-bold text-[24px]">Valorim</h2>
          </div>
          <div className=" flex flex-col h-[10vh]">
          <span className="absolute left-[32%] xl:left-[30%] ml-8 mt-8 text-gray-400 ">Nao tem uma conta?</span>
          <Submit title="Registrar" type="submit" href="/register" className="w-[100px] h-[40px] border rounded-[5px] bg-secondaryColor mt-6 cursor-pointer absolute left-[50%] xl:left-[45%]" />
          </div>
          <div className=" h-[100vh] mt-3 flex flex-col justify-center items-center mr-[8%] xl:ml-[1%]">
            <div>
              <Text h1={"Faça seu Login."} h2={""} p={""} />
            </div>
            <div className="flex flex-col justify-center items-center gap-4 mt-2">
              <Button
                title={"Entrar pelo Facebook"}
                href={"https://pt-br.facebook.com/login/"}
              />
              <Button
                imageSrc="/images/google_icon.png"
                title={"Entrar pelo Google"}
                href={
                  "https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue%26pli%3D1&ec=GAlAwAE&hl=pt_BR&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S-687016799%3A1747074790770482"
                }
              />
            </div>
            <Separator />
            <LoginForm />
            <div className="flex flex-row items-center gap-30 w-full mt-4 ml-[3%]">
            <Checkbox />
            <Link text={"Esqueceu a senha?"} />
            </div>
            <Submit title={"Entrar"} type={"submit"} href={""} className="w-full h-[58px] border rounded-xl bg-secondaryColor mt-3 cursor-pointer lg:justify-end lg:items-end lg:w-[415px] lg:h-[75px]" />
          </div>
          <div className="lg:w-[40vw] h-[110vh] xl:w-[70vw] bg-secondaryColor rounded-tl-[75px] rounded-bl-[75px] justify-items-center flex flex-col items-center ml-auto">
            <div className="flex flex-col items-start mb-3 mt-20 justify-center">
              <span className="text-left text-backgroundClaro font-bold italic text-3xl">
                O mercado financeiro{" "}
              </span>
              <span className="ml-10  text-backgroundClaro font-bold italic text-3xl">
                ao seu alcance.
              </span>
            </div>
            <div className="w-[80%] h-[50vh] bg-backgroundClaro rounded-[50px]"></div>
          </div>
        </div>
      </div>
    );
  }

  // Versão Mobile
  return <LoginContent facebookTitle={"Facebook"} googleTitle={"Google"} />;
}
