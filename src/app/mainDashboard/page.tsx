"use client";

import React, { useState } from "react";
import PeriodButton from "@/components/NewDesignSystem/atoms/PeriodButton/PeriodButton";
import BalanceCard from "@/components/NewDesignSystem/molecules/BalanceCard/BalanceCard";
import ActionsFavorites from "@/components/NewDesignSystem/molecules/ActionsFavorites";
import PeriodChart from "@/components/NewDesignSystem/molecules/PeriodChart";
import { Bell } from "lucide-react";
import { BiBox } from "react-icons/bi";
import { ActionsFavoritesMocks } from "@/mocks/mainDashboard";
import PeriodChartsSection from "@/components/NewDesignSystem/organisms/PeriodChartsSection";

export default function MainDashboard() {
  const iconHeader = [
    { icon: BiBox, alt: "Caixa de entrada" },
    { icon: Bell, alt: "Notificações" },
  ];
  return (
    <div className="p-5">
      <header className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Seja bem vindo</h1>

        <nav>
          <ul className="flex flex-row gap-4 ">
            {iconHeader.map((item, index) => {
              const Icon = item.icon;
              return (
                <li key={index} className="bg-[#006B36] p-2 rounded-3xl">
                  <Icon size={24} className="text-white " />
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {/* conteúdo */}
      <div className="flex flex-col gap-8 items-center mt-4">
        <BalanceCard balance="R$50.000" futureBalance="+R$1500.00" />
        <PeriodChartsSection />
      </div>

      <ActionsFavorites actions={ActionsFavoritesMocks} />
    </div>
  );
}
