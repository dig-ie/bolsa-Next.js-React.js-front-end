"use client";

import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

import { CardSurface } from "../../atoms/CardSurface";
import PeriodButton from "../../atoms/PeriodButton/PeriodButton";
import { PeriodChartProps, Period } from "./props";

export default function PeriodChart({
  data,
  defaultPeriod = "Diário",
}: PeriodChartProps) {
  const [selectedPeriod, setSelectedPeriod] = useState<Period>(defaultPeriod);

  const periods: Period[] = ["Diário", "Semanal", "Mensal", "Anual"];

  const selectedData =
    selectedPeriod === "Diário"
      ? data.daily
      : selectedPeriod === "Semanal"
      ? data.weekly
      : selectedPeriod === "Mensal"
      ? data.monthly
      : data.yearly;

  return (
    <CardSurface className="w-full max-w-2xl mx-auto" p={0}>
      <div className="flex justify-center max-w-full rounded-xl w-full">
        <div className="flex rounded-t-2xl  p-2 justify-between overflow-hidden  bg-neutralGray/25 rounded-xl w-full font-light">
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

      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={selectedData}
          barCategoryGap="30%"
          margin={{ top: 10, left: 15 }}
        >
          <CartesianGrid strokeDasharray="3 3" fill="#FDFCFC" />
          <XAxis
            dataKey="name"
            angle={-20}
            textAnchor="end"
            interval={0}
            height={100}
          />
          <Tooltip />
          <ReferenceLine y={0} stroke="#000" />

          <Bar
            dataKey="pv"
            fill="#2ECC71"
            barSize={10}
            radius={8}
            isAnimationActive
            animationDuration={1000}
            animationEasing="ease-in-out"
          />

          <Bar
            dataKey="uv"
            fill="#2C3E50"
            barSize={10}
            radius={8}
            isAnimationActive
            animationDuration={500}
            animationEasing="ease-in-out"
          />
        </BarChart>
      </ResponsiveContainer>
    </CardSurface>
  );
}
