"use client";
import { tv } from "tailwind-variants";

const input = tv({
  base: `
    w-full
    rounded-md
    border border-transparent
    bg-secondaryText
    px-3 py-2
    text-sm
    placeholder-gray-400
    focus:outline-none
    focus:ring-1 focus:ring-primary
    transition opacity-35 min-h-[52px]
  `,
  variants: {
    intent: {
      default: "",
      error: "border-red-500 focus:ring-red-500",
      success: "border-green-500 focus:ring-green-500",
    },
    fieldSize: {
      sm: "text-xs py-1",
      md: "text-sm py-2",
      lg: "text-base py-3",
    },
  },
  defaultVariants: {
    intent: "default",
    fieldSize: "md",
  },
});

type InputVariants = Parameters<typeof input>[0];

export type FormInputProps = React.ComponentPropsWithoutRef<"input"> &
  InputVariants;

export function FormInput({
  className,
  intent,
  fieldSize,
  ...props
}: FormInputProps) {
  return (
    <input className={input({ fieldSize, intent, className })} {...props} />
  );
}
