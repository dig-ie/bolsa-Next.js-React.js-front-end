"use client";
import Submit from "../../components/SubmitButton/SubmitButton";
import BackButton from "../../components/BackButton/BackButton";
import LoginForm from "../../components/LoginForm/LoginForm";


export default function ForgetPassword() {
  return (
    <div className="bg-primaryGreen">
      <BackButton href="./LoginPage" />
      <div className="flex flex-col items-center justify-center relative h-30 mb-10">
        <h1 className="lg:hidden font-bold text-4xl">Recuperar Senha</h1>
      </div>

      <div className="bg-white w-full min-h-[80vh] rounded-t-4xl flex flex-col items-center justify-star pt-6">
        <div className="flex flex-col gap-2 mt-[3vh] items-center justify-center">
          <h2 className="font-bold text-2xl">Esqueceu a senha?</h2>
          <p className="font-bold">
            Digite seu email para que possamos te
            <br />
            enviar um acesso para fazer uma nova senha
          </p>
          <div className="flex flex-col items-center justify-center mt-3">
            <LoginForm onlyEmail={true} />
          </div>
          <div className="flex flex-col items-center justify-center">
            <Submit
              title={"Enviar"}
              type="submit"
              className="w-[320px] h-[58px] border rounded-xl bg-secondaryColor mt-6 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
