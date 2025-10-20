"use client";

import React, { useState } from "react";
import PeriodButton from "@/components/PeriodButton/PeriodButton";
import BalanceCard from "@/components/BalanceCard/BalanceCard";
import ActionsFavorites from "@/components/ActionsFavorites";
import PeriodChart from "@/components/GraphPeriods/PeriodChart";

export default function MainDashboard() {
    const [selectedPeriod, setSelectedPeriod] = useState<"Diário" | "Semanal" | "Mensal" | "Anual">("Diário");

    const periods = ["Diário", "Semanal", "Mensal", "Anual"] as const;

    const ActionsFavoritesMocks = [
        { actionName: "PETR4", actionValue: "+1,22%" },
        { actionName: "VALE3", actionValue: "-0,75%" },
        { actionName: "ITUB4", actionValue: "+0,65%" },
    ];

    return (
        <div>
            <BalanceCard balance="R$50.000" futureBalance="R$1500.00" />

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

            <PeriodChart period={selectedPeriod} />
            <ActionsFavorites actions={ActionsFavoritesMocks} />
        </div>
    );
}
