"use client";

import React, { useState } from "react";
import PeriodButton from "@/components/PeriodButton/PeriodButton";
import BalanceCard from "@/components/BalanceCard/BalanceCard";
import ActionsFavorites from "@/components/ActionsFavorites";
import PeriodChart from "@/components/GraphPeriods/PeriodChart";

export default function MainDashboard() {
    const [selectedPeriod, setSelectedPeriod] = useState<"Diário" | "Semanal" | "Mensal" | "Anual">("Diário");
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
    const todayData = [dailyData[todayIndex]]



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
        { name: "Semana 1", pv: 2400, uv: 4000 },
        { name: "Semana 2", pv: 2200, uv: 3600 },
        { name: "Semana 3", pv: 2600, uv: 4100 },
        { name: "Semana 4", pv: 2400, uv: 3800 },
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

    return (
        <div>
            <BalanceCard
                balance="R$50.000"
                futureBalance="R$1500.00" />

            <div className="flex justify-center">
                <div className="flex px-4 py-2 space-x-4 bg-[#DFF7E2] rounded-lg">
                    {periods.map((period) => (
                        <PeriodButton
                            key={period}
                            label={period}
                            selected={period === selectedPeriod}
                            onClick={() => setSelectedPeriod(period)}
                        />
                    ))}
                </div>
            </div>

            <PeriodChart
                period={selectedPeriod}
                data={data}

            />


            <ActionsFavorites
                actions={ActionsFavoritesMocks}
            />
        </div>
    );
}
