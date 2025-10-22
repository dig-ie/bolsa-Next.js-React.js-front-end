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
import { PeriodChartProps } from "./PeriodChartProps";



export default function PeriodChart({ period, data, }: PeriodChartProps) {


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
