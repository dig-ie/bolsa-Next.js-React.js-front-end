"use client";

import { ButtonSmallProps } from "./buttonSmallProps";

const buttonSmall: React.FC<ButtonSmallProps> = ({ icon: Icon, alt, isActive, href }) => {
    return (
        <a
            href={href}
            aria-label={alt}
            className={`p-3 rounded-full transition flex items-center justify-center ${isActive ? "bg-white text-black" : "bg-[#344E41] text-white"
                }`}
            style={{ width: '40px', height: '40px', display: 'inline-flex' }}
        >
            <Icon size={20} />
        </a>
    )
}

export default buttonSmall