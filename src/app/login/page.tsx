import { CardSurface } from "@/components/NewDesignSystem/atoms/CardSurface";
import { FormInput } from "@/components/NewDesignSystem/atoms/FormInput";
import { FormLabel } from "@/components/NewDesignSystem/atoms/FormLabel";
import { PrimaryButton } from "@/components/NewDesignSystem/atoms/PrimaryButton";
import { AuthButton } from "@/components/NewDesignSystem/molecules/AuthButton";
import { FormInputPassword } from "@/components/NewDesignSystem/molecules/FormInputPassword";
import { FormInputWithIcon } from "@/components/NewDesignSystem/molecules/FormInputWithIcon";
import { PasswordRecoveryCard } from "@/components/NewDesignSystem/organisms/PasswordRecoveryCard";

export default function LoginPage() {
  return (
    <>
      <CardSurface className="flex flex-col gap-2 my-5 pb-8">
        <h2>Componentização</h2>
        <FormLabel text="Email" required={true} />
        <FormInput intent="default" />
        <div className="bg-gray-700 p-1 flex flex-col gap-1">
          <PrimaryButton>Entrar</PrimaryButton>
          <PrimaryButton colors="secondary">Cadastre-se</PrimaryButton>
          <PrimaryButton size="lg">Entrar</PrimaryButton>
          <PrimaryButton size="lg" colors="secondary">
            Cadastre-se
          </PrimaryButton>
        </div>
        <AuthButton>TESTE</AuthButton>
        <FormInputWithIcon />
        <FormInputPassword />
        <FormInputPassword />
      </CardSurface>
      <PasswordRecoveryCard />
      <br />
      <br />
      <br />
    </>
  );
}
