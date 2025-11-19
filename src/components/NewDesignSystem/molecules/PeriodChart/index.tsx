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
import { dailyData } from "@/mocks/mainDashboard";

export default function PeriodChart({
  data,
  defaultPeriod = "Diário",
}: PeriodChartProps) {
  const [selectedPeriod, setSelectedPeriod] = useState<Period>(defaultPeriod);

  const periods: Period[] = ["Diário", "Semanal", "Mensal", "Anual"];

  // Map dos dias (Sunday = 0)
  const dayMap = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado",
  ];

  const todayIndex = new Date().getDay();
  const todayName = dayMap[todayIndex];

  // Filtra o array para pegar só o dia atual
  const todayData = dailyData.filter((d) => d.name === todayName);

  // Seleciona o dataset final
  const selectedData =
    selectedPeriod === "Diário"
      ? todayData
      : selectedPeriod === "Semanal"
        ? data.weekly
        : selectedPeriod === "Mensal"
          ? data.monthly
          : data.yearly;

  return (
    <CardSurface
      className="w-[357px]   mx-auto"
      p={0}
      radius="txxxl"
      radiusbottom="bxxl"
    >
      <div className="flex      bg-neutralGray/25 rounded-t-4xl   font-light">
        {periods.map((period) => (
          <PeriodButton
            key={period}
            label={period}
            selected={period === selectedPeriod}
            onClick={() => setSelectedPeriod(period)}
          />
        ))}
      </div>
      {/*
      {selectedPeriod === "Diário" && (
        <p className="text-center text-sm text-gray-500 mt-1">
          {new Date().toLocaleDateString("pt-BR")}
        </p>
      )}*/}

      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={selectedData}
          barCategoryGap="30%"
          margin={{ right: 20, left: 20, top: 30 }}
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
