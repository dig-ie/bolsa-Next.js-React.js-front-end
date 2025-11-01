
"use client";

import React, { useState } from "react";
import PeriodButton from "@/components/PeriodButton/PeriodButton";
import GraphCard from "@/components/GraphCards/GraphCard";
import BalanceCard from "@/components/BalanceCard/BalanceCard";
import ActionsFavorites from "@/components/ActionsFavorites";

export default function MainDashboard() {
    const [selectedPeriod, setSelectedPeriod] = useState("Anual");

    const periods = ["Diário", "Semanal", "Mensal", "Anual"];

    const graphs = [
        { title: "Diário", image: "/images/graph_switch.png" },
        { title: "Semanal", image: "/images/graph_switch.png" },
        { title: "Mensal", image: "/images/graph_switch.png" },
        { title: "Anual", image: "/images/graph_switch.png" },
    ];


    const ActionsFavoritesMocks = [
        { actionName: "PETR4", actionValue: "+1,22%" },
        { actionName: "VALE3", actionValue: "-0,75%" },
        { actionName: "ITUB4", actionValue: "+0,65%" },
    ];


    const selectedGraph = graphs.find((graph) => graph.title === selectedPeriod);
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

            {selectedGraph && (
                <GraphCard title={selectedGraph.title} image={selectedGraph.image} />
            )}
            <ActionsFavorites actions={ActionsFavoritesMocks} />
        </div>




    );

}