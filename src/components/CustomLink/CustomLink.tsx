import React from "react";
import Link from "next/link";
import { CustomLinkProps } from "../CustomLink/CustomLinkProps";

const CustomLink: React.FC<CustomLinkProps> = ({ text }) => {
  return (
    <Link
      className="text-linkBlue font-bold text-[20px] max-w-md lg:text-[13px] md:text-[18px] items-center justify-center lg:underline mr-[140px] md:mr-[150px] lg:mr-0"
      href="/ForgetPassword"
    >
      {text}
    </Link>
  );
};

export default CustomLink;
//por algum motivo apareceu alteração da mudança dos componetes de app para src