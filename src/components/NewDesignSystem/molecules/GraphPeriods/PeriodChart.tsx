"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";
import { PeriodChartProps } from "./PeriodChartProps";
import { CardSurface } from "../../atoms/CardSurface";

export default function PeriodChart({ period, data }: PeriodChartProps) {
  return (
    <CardSurface radius="none" className="w-full max-w-2xl  mx-auto">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
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
