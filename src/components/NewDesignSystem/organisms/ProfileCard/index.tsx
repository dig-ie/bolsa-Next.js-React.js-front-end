// src/components/organisms/ProfileCard.tsx
import ProfileInfo from "../../molecules/ProfileInfo";
import MenuItem from "../../molecules/MenuItem";

export default function ProfileCard() {
  return (
    <div className=" bg-white rounded-3xl p-6 flex flex-col gap-6">
      <ProfileInfo />

      <div>
        <p className=" font-bold">Conta</p>
        <div className="mt-3 flex flex-col gap-3">
          <MenuItem icon="/images/avatar_icon.png" label="Editar Informações de Perfil" />
          <MenuItem icon="/images/suporte_icon.png" label="Suporte" />
        </div>
      </div>

      <div>
        <p className=" font-semibold">Geral</p>
        <div className="mt-3 flex flex-col gap-3">
          <MenuItem icon="/images/segurança_icon.png" label="Segurança" />
          <MenuItem icon="/images/configuração_icon.png" label="Configurações" />
          <MenuItem icon="/images/sair_icon.png" label="Sair" />
        </div>
      </div>
    </div>
  );
}
