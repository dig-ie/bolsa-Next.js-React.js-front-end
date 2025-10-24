import React from "react";
import Link from "next/link";
import { AuthLinkProps } from "./AuthLinkProps";

const CustomLink: React.FC<AuthLinkProps> = ({ text, href }) => {
  return (
    <Link
      className="text-linkBlue font-bold text-[20px] max-w-md lg:text-[13px] md:text-[18px] items-center justify-center lg:underline mr-[140px] md:mr-[150px] lg:mr-0 "
      href={href}
    >
      {text}
    </Link>
  );
};

export default CustomLink;
