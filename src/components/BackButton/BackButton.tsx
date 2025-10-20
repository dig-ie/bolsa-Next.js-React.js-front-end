import React from "react";
import { BackButtonProps } from "./BackButtonProps";
import Link from "next/link";
import {FaArrowLeft} from "react-icons/fa"
//FIXME: add into the dependencies "react-icons/fa" and test the yarn build before commiting

const BackButton: React.FC<BackButtonProps> = ({ href }) => {
  return (
    <Link href={href}>
      <button className="w-[51px] h-[46px] rounded-xl bg-white cursor-pointer mt-5 ml-2.5">
        {<FaArrowLeft className="w-[45px] text-[22px]" />}
      </button>
    </Link>
  );
};

export default BackButton;
