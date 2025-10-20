"use client";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ReferenceLine,
    ResponsiveContainer,
} from "recharts";

interface PeriodChartProps {
    period: "Diário" | "Semanal" | "Mensal" | "Anual";
}

export default function PeriodChart({ period }: PeriodChartProps) {

    const dailyData = [
        { name: "Dom", pv: 2400, uv: 4000 },
        { name: "Seg", pv: 2600, uv: 3800 },
        { name: "Ter", pv: 2200, uv: 4100 },
        { name: "Qua", pv: 2400, uv: 3900 },
        { name: "Qui", pv: 2800, uv: 4200 },
        { name: "Sex", pv: 2300, uv: 3900 },
        { name: "Sáb", pv: 2500, uv: 4100 },
    ];

    const weeklyData = [
        { name: "Semana 1", pv: 2400, uv: 4000 },
        { name: "Semana 2", pv: 2600, uv: 3800 },
        { name: "Semana 3", pv: 2200, uv: 4100 },
        { name: "Semana 4", pv: 2400, uv: 3900 },
    ];

    const monthlyData = [
        { name: "Jan", pv: 2400, uv: 4000 },
        { name: "Fev", pv: 2200, uv: 3600 },
        { name: "Mar", pv: 2600, uv: 4100 },
        { name: "Abr", pv: 2400, uv: 3800 },
        { name: "Mai", pv: 2800, uv: 4200 },
        { name: "Jun", pv: 2300, uv: 3900 },
    ];

    const yearlyData = [
        { name: "2020", pv: 2400, uv: 4000 },
        { name: "2021", pv: 2600, uv: 4200 },
        { name: "2022", pv: 2800, uv: 4300 },
        { name: "2023", pv: 3000, uv: 4400 },
        { name: "2024", pv: 3200, uv: 4600 },
    ];


    const data =
        period === "Diário"
            ? dailyData
            : period === "Semanal"
                ? weeklyData
                : period === "Mensal"
                    ? monthlyData
                    : yearlyData;

    return (
        <div className="p-5">
            <h1 className="mb-2 text-lg font-semibold text-center">{period}</h1>

            <ResponsiveContainer width="100%" height={300}>
                <BarChart
                    data={data}
                    margin={{ top: 5, right: 10, left: -10, bottom: 30 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey="name"
                        angle={-30}
                        textAnchor="end"
                        interval={0}
                        height={60}
                    />
                    <YAxis />
                    <Tooltip />
                    <ReferenceLine y={0} stroke="#000" />
                    <Bar dataKey="pv" fill="#2ECC71" barSize={10} radius={8} />
                    <Bar dataKey="uv" fill="#2C3E50" barSize={10} radius={8} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
