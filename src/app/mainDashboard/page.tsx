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
        { name: "Dom", pv: "2400", uv: "4000" },
        { name: "Seg", pv: "2600", uv: "3800" },
        { name: "Ter", pv: "2200", uv: "4100" },
        { name: "Qua", pv: "2400", uv: "3900" },
        { name: "Qui", pv: "2800", uv: "4200" },
        { name: "Sex", pv: "2300", uv: "3900" },
        { name: "Sáb", pv: "2500", uv: "4100" },
    ];

    const weeklyData = [
        { name: "Semana 1", pv: "2400", uv: "4000" },
        { name: "Semana 2", pv: "2600", uv: "3800" },
        { name: "Semana 3", pv: "2200", uv: "4100" },
        { name: "Semana 4", pv: "2400", uv: "3900" },
    ];

    const monthlyData = [
        { name: "Jan", pv: "2400", uv: "4000" },
        { name: "Fev", pv: "2200", uv: "3600" },
        { name: "Mar", pv: "2600", uv: "4100" },
        { name: "Abr", pv: "2400", uv: "3800" },
        { name: "Mai", pv: "2800", uv: "4200" },
        { name: "Jun", pv: "2300", uv: "3900" },
    ];

    const yearlyData = [
        { name: "2020", pv: "2400", uv: "4000" },
        { name: "2021", pv: "2600", uv: "4200" },
        { name: "2022", pv: "2800", uv: "4300" },
        { name: "2023", pv: "3000", uv: "4400" },
        { name: "2024", pv: "3200", uv: "4600" },
    ];


    const data =
        selectedPeriod === "Diário"
            ? dailyData
            : selectedPeriod === "Semanal"
                ? weeklyData
                : selectedPeriod === "Mensal"
                    ? monthlyData
                    : yearlyData


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

            <div className="flex justify-center mb-4 space-x-4">
                {periods.map((period) => (
                    <PeriodButton
                        key={period}
                        label={period}
                        selected={period === selectedPeriod}
                        onClick={() => setSelectedPeriod(period)}
                    />
                ))}
            </div>

            <PeriodChart
                period={selectedPeriod}
                data={data} />


            <ActionsFavorites
                actions={ActionsFavoritesMocks}
            />
        </div>
    );
}
