"use client";
import * as React from "react";
import { cardSurface, type CardSurfaceVariants } from "./props";

type CardSurfaceProps = CardSurfaceVariants & {
  children: React.ReactNode;
  className?: string;
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
