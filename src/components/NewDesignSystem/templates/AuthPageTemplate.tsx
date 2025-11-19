"use client";

import { ReactNode } from "react";

type AuthPageTemaplateProps = {
  title: string;
  children: ReactNode;
};

export function AuthPageTemplate({
  title = "Log In",
  children,
}: AuthPageTemaplateProps) {
  return (
    <div className="h-screen grid grid-rows-[2fr_8fr] px-1 py-6 lg:px-24 lg:py-12">
      <div className="flex items-end-safe justify-center">
        <h1 className="text-white mb-8  text-2xl font-bold ">{title}</h1>
      </div>

      <div className="flex items-start justify-center h-full w-full">
        {children}
      </div>
    </div>
  );
}
