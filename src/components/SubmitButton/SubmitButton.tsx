import React from "react";
import { SubmitButtonProps } from "./SubmitButtonProps";

const SubmitButton: React.FC<SubmitButtonProps> = ({ title, type = 'submit', onClick, className }) => {
  return (
    <button type={type} onClick={onClick} className={className}>
      <h1 className="font-bold text-backgroundClaro text-[20px]">{title}</h1>
    </button>
  );
};

export default SubmitButton;
