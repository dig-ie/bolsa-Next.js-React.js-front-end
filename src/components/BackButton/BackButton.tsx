import React from "react";
import { BackButtonProps } from "./BackButtonProps";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
//FIXME: add into the dependencies "react-icons/fa" and test the yarn build before commiting

const BackButton: React.FC<BackButtonProps> = ({ href }) => {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center 
        w-10 h-10 
        rounded-[10px]
        bg-lightBackground mt-3 ml-2"
    >
      {<FaArrowLeft className="w-[45px] text-[15px]" />}
    </Link>
  );
};

export default BackButton;
