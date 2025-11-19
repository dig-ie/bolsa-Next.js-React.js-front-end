import Image from "next/image";

export default function Avatar () {
    return (
        <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl">
            <Image alt="avatar" src="/images/avatar_icon.png" width={70} height={70}  />
        </div>
    )
}