"use client";
import { tv } from "tailwind-variants";

const input = tv({
  variants: {
    intent: {
      default: " ",
      error: "border-alertSucess focus:ring-alertError",
      success: "border-green-500 focus:ring-alertSuccess",
    },
  },
  defaultVariants: {
    intent: "default",
    size: "md",
  },
});

type InputVariants = Parameters<typeof input>[0];

export type FormInputProps = React.ComponentPropsWithoutRef<"input"> &
  InputVariants;

export function FormInput({
  className,
  intent,

  ...props
}: FormInputProps) {
  return (
    <input
      className={
        input({ intent, className }) +
        ` w-full
    rounded-md
    border-none
    bg-secondaryText
    px-3 py-2
    text-sm
    placeholder-gray-400
    focus:outline-none
    lg:focus:ring-1 focus:ring-primary
    lg:focus:border-transparent
    transition opacity-35`
      }
      {...props}
    />
  );
}
