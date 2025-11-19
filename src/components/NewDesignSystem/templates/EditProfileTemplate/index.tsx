import Text from "../../atoms/Text";
import ProfileCard from "../../organisms/ProfileCard";

export default function EditProfileTemplate() {
  return (
    <div>
    <div className="text-white py-4 text-center mt-20 text-2xl">
      <Text className="text-xl font-bold">Editar Perfil</Text>
    </div>

      <main className="px-2">
        <ProfileCard />
      </main>
    </div>
  );
}
