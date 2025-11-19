"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { FormInput, type FormInputProps } from "../../atoms/FormInput";
import { tv } from "tailwind-variants";

const inputWrapper = tv({
  base: `
    relative
    flex items-center
    w-full
  `,
});

export type FormInputPasswordProps = FormInputProps & {
  iconClassName?: string;
};

export function FormInputPassword({
  iconClassName,
  className,
  intent,
  fieldSize,
  ...props
}: FormInputPasswordProps) {
  const [visible, setVisible] = useState(false);

  return (
    <div className={inputWrapper()}>
      <FormInput
        type={visible ? "text" : "password"}
        intent={intent}
        fieldSize={fieldSize}
        className={className}
        {...(props as React.ComponentPropsWithoutRef<"input">)}
      />
      <button
        type="button"
        onClick={() => setVisible((prev) => !prev)}
        className={`
          absolute right-3
          text-gray-500
          hover:text-gray-700
          ${iconClassName ?? ""}
          focus:outline-none
        `}
      >
        {visible ? <EyeOff size={18} /> : <Eye size={18} />}
      </button>
    </div>
  );
}
