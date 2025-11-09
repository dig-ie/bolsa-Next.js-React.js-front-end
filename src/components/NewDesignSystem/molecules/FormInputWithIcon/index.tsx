"use client";

import { tv } from "tailwind-variants";
import { FormInput, type FormInputProps } from "../../atoms/FormInput";
import { ReactNode } from "react";
import { Mail } from "lucide-react";

const inputWrapper = tv({
  base: `
    relative
    flex items-center
    w-full
  `,
});

export type FormInputWithIconProps = FormInputProps & {
  icon?: ReactNode;
  iconClassName?: string;
};

export function FormInputWithIcon({
  icon = <Mail size={18} />,
  iconClassName,
  className,
  intent,
  size,
  ...props
}: FormInputWithIconProps) {
  return (
    <div className={inputWrapper()}>
      <FormInput
        intent={intent}
        size={size}
        className={className}
        {...(props as React.ComponentPropsWithoutRef<"input">)}
      />
      <span
        className={`
          absolute right-3
          text-gray-500
          ${iconClassName ?? ""}
          pointer-events-none
        `}
      >
        {icon}
      </span>
    </div>
  );
}
