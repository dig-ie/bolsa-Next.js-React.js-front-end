import { ChartDataPoint } from "@/types/charts";

export type Period = "Diário" | "Semanal" | "Mensal" | "Anual";

export type PeriodChartProps = {
  data: {
    daily: ChartDataPoint[];
    weekly: ChartDataPoint[];
    monthly: ChartDataPoint[];
    yearly: ChartDataPoint[];
  };
  defaultPeriod?: Period;
};
