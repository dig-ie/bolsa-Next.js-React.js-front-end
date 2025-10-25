"use client";


import {
    BarChart,
    Bar,
    XAxis,
    // YAxis,
    CartesianGrid,
    Tooltip,
    ReferenceLine,
    ResponsiveContainer,
} from "recharts";
import { PeriodChartProps } from "./PeriodChartProps";



export default function PeriodChart({ period, data, }: PeriodChartProps) {
    return (
        <div className="p-4">

            <h1 className="mb-2 text-lg font-semibold text-center">{period}</h1>

            <div className="w-full max-w-2xl mx-auto">
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data}
                        barCategoryGap="30%"
                        margin={{ top: 10, left: 15 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis
                            dataKey="name"
                            angle={-30}
                            textAnchor="end"
                            interval={0}
                            height={100}
                        />
                        {/* isso define o tamanho do grafico, e da um gap de + 500
                        <YAxis
                            domain={[0, (dataMax: number) => dataMax + 500]}
                        /> */}
                        <Tooltip />
                        <ReferenceLine y={0} stroke="#000" />
                        <Bar
                            dataKey="pv"
                            fill="#2ECC71"
                            barSize={10}
                            radius={8}
                            isAnimationActive={true}
                            animationDuration={1000}
                            animationEasing="ease-in-out"
                        />
                        <Bar
                            dataKey="uv"
                            fill="#2C3E50"
                            barSize={10}
                            radius={8}
                            isAnimationActive={true}
                            animationDuration={500}
                            animationEasing="ease-in-out"
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>




        </div>
    );
}
