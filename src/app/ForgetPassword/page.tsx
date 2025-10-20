import Text from "../../components/Text/Text";
import Submit from "../../components/Submit/Submit";
import BackButton from "../../components/BackButton/BackButton";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function ForgetPassword() {
  return (
    <div className="bg-primaryGreen">
      <BackButton href="./LoginPage" />
      <div className="flex flex-col items-center justify-center relative h-30 mb-10">
        <Text className="lg:hidden" h1="Recuperar Senha" h2="" p="" />
      </div>

      <div className="bg-white w-full min-h-[80vh] rounded-t-4xl flex flex-col items-center justify-star pt-6">
        <div className="flex flex-col gap-2 mt-[3vh]">
        <Text
          h1=""
          h2="Esqueceu a Senha?"
          p="Digite seu e-mail para que possamos te enviar um acesso para fazer uma nova senha."
        />
        <div className="flex flex-col items-center justify-center">
          <LoginForm onlyEmail={true}/>
        </div>
       <div className="flex flex-col items-center justify-center">
          <Submit title="Entrar" type="submit" href="" className="w-[320px] h-[58px] border rounded-xl bg-secondaryColor mt-6 cursor-pointer"/>
          </div>
      </div>
    </div>
    </div>
  );
}
