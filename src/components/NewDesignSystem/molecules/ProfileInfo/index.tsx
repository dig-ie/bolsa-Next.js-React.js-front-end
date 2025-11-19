// src/components/molecules/ProfileInfo.tsx
import Avatar from "../../atoms/Avatar";
import Text from "../../atoms/Text";
import Card from "../../atoms/Card";

export default function ProfileInfo() {
  return (
    <div className="flex flex-col items-center gap-2">
      <Avatar  />

      <div>
      <Text className="font-bold text-sm">Nome do Usuário</Text>
      <Text className="text-gray-500 text-xs">Usuário@gmail.com</Text>
      </div>

      <div>
      <Card className="text-center w-52 h-16">
        <Text className="font-bold text-sm">Saldo Simulado</Text>
        <Text className="text-green-600 font-bold text-base">R$ 50.000,00</Text>
        <Text className="text-gray-500 text-xs">ID: 00000000</Text>
      </Card>
      </div>
    </div>
  );
}
