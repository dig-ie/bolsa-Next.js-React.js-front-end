"use client";
import React, { ReactNode } from "react";

interface ContentCardProps {
  children: ReactNode;
}

export default function ContentCard({ children }: ContentCardProps) {
  return (
    <div className="bg-white w-full rounded-t-4xl flex flex-col items-center justify-start pt-6 absolute bottom-0 left-0 right-0 z-10 h-[70vh] overflow-y-auto">
      <div className="flex flex-col items-center justify-center gap-4 mt-[4vh] w-full px-4 pb-6  max-h-full overflow-y-hidden">
        {children}
      </div>
    </div>
  );
}
