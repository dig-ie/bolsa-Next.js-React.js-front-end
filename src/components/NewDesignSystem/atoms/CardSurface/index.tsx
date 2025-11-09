"use client";
import * as React from "react";
import { tv } from "tailwind-variants";

const cardSurface = tv({
  base: "rounded-xl bg-white shadow transition-all",
  variants: {
    p: {
      0: "p-0",
      2: "p-2",
      4: "p-4",
      6: "p-6",
    },
    variant: {
      default: "",
      outlined: "border border-gray-200",
      subtle: "bg-gray-50",
    },
    radius: {
      sm: "rounded-md",
      md: "rounded-xl",
      lg: "rounded-2xl",
    },
  },
  defaultVariants: {
    p: 4,
    variant: "default",
    radius: "md",
  },
});

type CardSurfaceVariants = Parameters<typeof cardSurface>[0];
type CardSurfaceProps = CardSurfaceVariants & {
  children: React.ReactNode;
};

export function CardSurface({
  p,
  variant,
  radius,
  className,
  children,
}: CardSurfaceProps) {
  return (
    <div className={cardSurface({ p, variant, radius, className })}>
      {children}
    </div>
  );
}
