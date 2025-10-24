"use client";

import SecondaryButton from "../../SecondaryButton/SecondaryButton";
import LoginForm from "../../../components/LoginForm/LoginForm";
import AuthLink from "../../AuthLink/AuthLink";
import Submit from "../../SubmitButton/SubmitButton";
import BackButton from "../../../components/BackButton/BackButton";

interface LoginContentProps {
  authButtonPrimaryText: string;
  authButtonPrimaryHref: string;
  authButtonSecondaryText: string;
  authButtonSecondaryHref: string;
  submitTitle?: string;
  backButtonHref?: string;
  forgotPasswordText?: string;
  forgotPasswordHref?: string;
  registerText: string;
  registerHref: string;
}

export default function LoginContent({
  authButtonPrimaryText = "Facebook",
  authButtonPrimaryHref = "https://pt-br.facebook.com/login/",
  authButtonSecondaryText = "Google",
  authButtonSecondaryHref = "https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue%26pli%3D1&ec=GAlAwAE&hl=pt_BR&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S-687016799%3A1747074790770482",
  submitTitle = "Entrar",
  backButtonHref = "./mainPage",
  forgotPasswordText = "Esqueceu a senha?",
  forgotPasswordHref = "/ForgetPassword",
}: LoginContentProps) {
  return (
    <div className="bg-primaryGreen">
      <BackButton href={backButtonHref} />
      <div className="flex flex-col items-center justify-center relative h-30 mb-10">
        <h1 className="lg:hidden text-4xl font-bold">Faça seu Login</h1>
      </div>

      <div className="bg-white w-full min-h-[80vh] rounded-t-4xl flex flex-col items-center justify-star pt-6">
        <div className="flex flex-col gap-2 mt-[3vh]">
          <LoginForm />
          <AuthLink href={forgotPasswordHref} text={forgotPasswordText} />

          <div className="flex flex-row items-center justify-center gap-4 mt-4 md:flex md:items-center md:justify-center md:gap-4 md:mt-4">
            <SecondaryButton
              imageSrc="/images/facebook_icon.png"
              title={authButtonPrimaryText} destination={authButtonPrimaryHref}            />
            <SecondaryButton
              imageSrc="/images/google_icon.png"
              title={authButtonSecondaryText} destination={authButtonSecondaryHref}            />
          </div>
          <div>
            <Submit
              title={submitTitle}
              type="submit"
              className="w-[320px] h-[58px] border rounded-xl bg-secondaryColor mt-6 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
