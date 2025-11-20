"use client";

import Image from "next/image";

export default function Splash1() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
  <Image 
    src="/images/valorim_logo.png" 
    alt="Logo" 
    width={160} 
    height={160}
    className="w-40 h-40"
  />
</main>
  );
}