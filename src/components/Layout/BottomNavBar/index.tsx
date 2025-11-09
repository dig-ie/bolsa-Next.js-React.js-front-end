"use client";
import React from "react";
import { IoIosStats } from "react-icons/io";
import { FaWallet, FaTrophy } from "react-icons/fa";
import { BiHome } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import ButtonSmall from "./components/buttonSmall";
import { usePathname } from "next/navigation";

const navItems = [
  { icon: IoIosStats, alt: "Stats", href: "#" },
  { icon: FaWallet, alt: "Wallet", href: "#" },
  { icon: BiHome, alt: "Home", href: "/mainDashboard" },
  { icon: FaTrophy, alt: "Trophy", href: "#" },
  { icon: CgProfile, alt: "Profile", href: "#" },
];

const BottomNav: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Navegação principal"
      className="bg-secondaryGreen w-full p-2 fixed bottom-0 left-0 border-t border-none rounded-t-2xl"
    >
      <ul className="flex flex-row items-center justify-around">
        {navItems.map((item, index) => (
          <li key={index}>
            <ButtonSmall
              href={item.href}
              icon={item.icon}
              alt={item.alt}
              isActive={pathname === item.href}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BottomNav;
