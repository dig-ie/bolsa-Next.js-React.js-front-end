import Image from "next/image";

interface IconUserProps {
  src: string;
}

export default function IconUser({ src }: IconUserProps) {
  return (
    <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl">
    <Image alt="avatar" src={src} width={40} height={40}  />
    </div>
  );
}