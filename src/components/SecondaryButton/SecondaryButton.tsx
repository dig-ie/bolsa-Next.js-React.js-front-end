"use client";
import React from "react"; 
import { useRouter } from "next/navigation";
import Image from "next/image";

interface SecondaryButtonProps {
    title: string;
    destination: string; 
    imageSrc?: string;
    onClick?: () => void;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ 
    title, 
    destination, 
    imageSrc, 
    onClick 
}) => {
    
    const router = useRouter(); 
    
    const shouldShowImage = !!imageSrc;

    const handleClick = () => {
        const isExternal = destination.startsWith('http');
        
        if (onClick) {
            onClick();
        }
        
        if (isExternal) {
            window.location.href = destination;
        } else {
            router.push(destination);
        }
    };

    return (
        <button 
            type="button" 
            onClick={handleClick}
            className="flex justify-center items-center gap-2 w-[154px] h-[58px] border rounded-xl bg-backgroundClaro hover:bg-gray-200 cursor-pointer lg:w-[415px] lg:h-[45px] lg:rounded-[5px]"
        >
            {shouldShowImage && (
                <Image 
                    className="object-contain" 
                    src={imageSrc} 
                    alt="" 
                    width={24} 
                    height={24}
                />
            )}
            
            <span className="text-textClaro font-bold text-[20px] ">
                {title}
            </span>
        </button>
    )
}

export default SecondaryButton;