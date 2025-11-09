import React from "react";

type BlurGradientCardProps = {
  className?: string;
  blurClassName?: string;
  gradientClassName?: string;
  children: React.ReactNode;
  innerClassName?: string;
  height?: string;
};

export default function BlurGradientCard({
  className = "",
  blurClassName = "bg-gradient-to-b from-lightBackground via-primaryGreen/60 to-lightBackground",
  gradientClassName = "bg-gradient-to-b from-lightBackground via-transparent to-lightBackground",
  children,
  innerClassName = "relative h-[85%] w-[85%] z-20 mx-auto rounded-[12px]",
  height = "h-[400px]",
}: BlurGradientCardProps) {
  return (
    <div
      className={`relative w-full ${height} flex items-center justify-center border-none ${className}`}
    >
      {/* Blur layer */}
      <div
        className={`pointer-events-none absolute inset-0 z-10 ${blurClassName}`}
      />
      {/* Gradient fade layer */}
      <div
        className={`pointer-events-none absolute inset-0 z-10 ${gradientClassName}`}
      />
      <div className={innerClassName}>{children}</div>
    </div>
  );
}
