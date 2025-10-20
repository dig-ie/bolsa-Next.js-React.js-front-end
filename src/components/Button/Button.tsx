import React from "react";
import {ButtonProps} from "../Button/ButtonProps"
import Image from "next/image";
const Button: React.FC <ButtonProps> = ({title, href, imageSrc="/images/facebook_icon.png"}) => {
    return (
        <a href={href}>
        <button className="flex justify-center items-center gap-2 w-[154px] h-[58px]  border rounded-xl bg-backgroundClaro hover:bg-gray-200 cursor-pointer lg:w-[415px] lg:h-[45px] lg:boder lg:rounded-[5px]">
            <Image className="object-contain" src={imageSrc} alt={""} width={24} height={24}/>
                <span className="text-textClaro font-bold text-[20px] ">
                    {title}
                </span>
        </button>
        </a>
    )
}

export default Button;
//mudei o h1 para span