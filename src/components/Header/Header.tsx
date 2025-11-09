import React from "react";
import Image from "next/image";
import Link from "next/link";

type HeaderProps = {
  title?: string;
  buttonText?: string;
};

const Header: React.FC<HeaderProps> = () => {
  return (
    <header>
      <nav className="bg-lightBackground flex items-center justify-between w-full h-16 px-4  ">
        <div className="flex items-center gap-4">
          <Image
            alt="valorim-icone"
            src="/images/valorim_logo.png"
            width={37}
            height={37}
          />
          <h2 className="font-bold text-[24px] text-primaryGreen">Valorim</h2>
        </div>
        <Link
          href="/LoginPage"
          className="px-2 py-1 text-black border-primaryGreen border-3 w-26 rounded-xl font-[500] text-center"
        >
          Entrar
        </Link>
      </nav>
    </header>
  );
};

export default Header;
