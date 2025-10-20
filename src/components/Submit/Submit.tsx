import React from "react";
import { SubmitProps } from "./SubmitProps";

const Submit: React.FC<SubmitProps> = ({ title, href, className }) => {
  return (
    <a href={href} className="h-px">
      <button className={className}>
        <h1 className="font-bold text-backgroundClaro text-[20px]">{title}</h1>
      </button>
    </a>
  );
};

export default Submit;
