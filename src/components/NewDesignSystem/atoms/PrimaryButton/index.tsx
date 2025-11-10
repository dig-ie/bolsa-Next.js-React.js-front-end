"use client";
import { tv } from "tailwind-variants";

const primaryButton = tv({
  base: `font-bold text-xl rounded-xl`,
  variants: {
    size: { md: "h-12 w-36", lg: "h-13 w-68" },
    colors: {
      default: "bg-primaryGreen text-white",
      secondary: "bg-white text-darkText",
    },
  },
  defaultVariants: { size: "md" },
});

type PrimaryButtonVariants = Parameters<typeof primaryButton>[0];

type PrimaryButtonProps = React.ComponentPropsWithoutRef<"button"> &
  PrimaryButtonVariants;

export function PrimaryButton({
  className,
  size = "md",
  colors = "default",
  ...props
}: PrimaryButtonProps) {
  return (
    <button className={primaryButton({ size, colors, className })} {...props} />
  );
}
