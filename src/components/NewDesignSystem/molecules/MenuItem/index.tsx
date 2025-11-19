
import IconsUser from "../../atoms/IconsUser";
import Text from "../../atoms/Text";
import Card from "../../atoms/Card";

interface MenuItemProps {
  icon: string;
  label: string;
}

export default function MenuItem({ icon, label }: MenuItemProps) {
  return (
    <Card className="flex items-center gap-4 cursor-pointer hover:bg-gray-50 transition h-12 w-xs">
      <IconsUser src={icon} />
      <Text className="font-medium">{label}</Text>
    </Card>
  );
}
