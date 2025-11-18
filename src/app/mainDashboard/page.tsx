"use client";

import React, { useState } from "react";
import PeriodButton from "@/components/NewDesignSystem/atoms/PeriodButton/PeriodButton";
import BalanceCard from "@/components/NewDesignSystem/molecules/BalanceCard/BalanceCard";
import ActionsFavorites from "@/components/NewDesignSystem/molecules/ActionsFavorites";
import PeriodChart from "@/components/NewDesignSystem/molecules/GraphPeriods/PeriodChart";
import { Bell, BellDotIcon, BoxIcon, BoxSelect } from "lucide-react";
import { BiBox, BiNotification } from "react-icons/bi";

export default function MainDashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState<
    "Diário" | "Semanal" | "Mensal" | "Anual"
  >("Diário");
  const periods = ["Diário", "Semanal", "Mensal", "Anual"] as const;

  const dailyData = [
    { name: "Domingo", pv: 2400, uv: 4000 },
    { name: "Segunda-Feira", pv: 2600, uv: 3800 },
    { name: "Terça-Feira", pv: 2200, uv: 4100 },
    { name: "Quarta-Feira", pv: 2400, uv: 3900 },
    { name: "Quinta-Feira", pv: 2800, uv: 4200 },
    { name: "Sexta-Feira", pv: 2300, uv: 3900 },
    { name: "Sábado", pv: 2500, uv: 4100 },
  ];

  const todayIndex = new Date().getDay();
  const todayData = [dailyData[todayIndex]];

  const weeklyData = [
    { name: "Dom", pv: 2400, uv: 4000 },
    { name: "Seg", pv: 2600, uv: 3800 },
    { name: "Ter", pv: 2200, uv: 4100 },
    { name: "Qua", pv: 2400, uv: 3900 },
    { name: "Qui", pv: 2800, uv: 4200 },
    { name: "Sex", pv: 2300, uv: 3900 },
    { name: "Sáb", pv: 2500, uv: 4100 },
  ];

  const monthlyData = [
    { name: "Sem 1", pv: 2400, uv: 4000 },
    { name: "Sem 2", pv: 2200, uv: 3600 },
    { name: "Sem 3", pv: 2600, uv: 4100 },
    { name: "Sem 4", pv: 2400, uv: 3800 },
  ];

  const yearlyData = [
    { name: "Jan", pv: 2400, uv: 4000 },
    { name: "Fev", pv: 2500, uv: 4100 },
    { name: "Mar", pv: 2600, uv: 4200 },
    { name: "Abr", pv: 2700, uv: 4300 },
    { name: "Mai", pv: 2800, uv: 4400 },
    { name: "Jun", pv: 2900, uv: 4500 },
    { name: "Jul", pv: 3000, uv: 4600 },
    { name: "Ago", pv: 3100, uv: 4700 },
    { name: "Set", pv: 3200, uv: 4800 },
    { name: "Out", pv: 3300, uv: 4900 },
    { name: "Nov", pv: 3400, uv: 5000 },
    { name: "Dez", pv: 3500, uv: 5100 },
  ];

  const data =
    selectedPeriod === "Diário"
      ? todayData
      : selectedPeriod === "Semanal"
        ? weeklyData
        : selectedPeriod === "Mensal"
          ? monthlyData
          : yearlyData;

  const ActionsFavoritesMocks = [
    { actionName: "PETR4", actionValue: "+1,22%" },
    { actionName: "VALE3", actionValue: "-0,75%" },
    { actionName: "ITUB4", actionValue: "+0,65%" },
  ];

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

      <div className="flex justify-center mt-4">
        <BalanceCard balance="R$50.000" futureBalance="+R$1500.00" />
      </div>
      {/*<div className="flex justify-center mt-10">
        <div className="flex bg-white rounded-t-2xl  w-md p-2  justify-between overflow-hidden ">
          {periods.map((period) => (
            <PeriodButton
              key={period}
              label={period}
              selected={period === selectedPeriod}
              onClick={() => setSelectedPeriod(period)}
            />
          ))}
        </div>
      </div>*/}

      <PeriodChart period={selectedPeriod} data={data} />

      <ActionsFavorites actions={ActionsFavoritesMocks} />
    </div>
  );
}
