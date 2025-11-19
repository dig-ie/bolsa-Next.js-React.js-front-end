"use client";
import React from "react";
import { tv } from "tailwind-variants";
import { PeriodButtonProps } from "./PeriodButtonProps";

const periodButtonStyles = tv({
  base: "font-black flex  font-light p-2 rounded-2xl text-[16px] transition-colors",
  variants: {
    selected: {
      true: "bg-[#006B36] text-white",
      false: "bg-[#E0F7E9] text-[#333333]",
    },
  },
  defaultVariants: {
    selected: false,
  },
});

const PeriodButton: React.FC<PeriodButtonProps> = ({
  label,
  selected,
  onClick,
}) => {
  return (
    <button onClick={onClick} className={periodButtonStyles({ selected })}>
      {label}
    </button>
  );
};

export default PeriodButton;
