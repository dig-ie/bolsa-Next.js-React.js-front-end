import { type ChartDataPoint } from "@/types/charts";

export const ActionsFavoritesMocks = [
  { actionName: "PETR4", actionValue: "+1,22%" },
  { actionName: "VALE3", actionValue: "-0,75%" },
  { actionName: "ITUB4", actionValue: "+0,65%" },
];

export const dailyData: ChartDataPoint[] = [
  { name: "Domingo", pv: 2400, uv: 4000 },
  { name: "Segunda-Feira", pv: 2600, uv: 3800 },
  { name: "Terça-Feira", pv: 2200, uv: 4100 },
  { name: "Quarta-Feira", pv: 2400, uv: 3900 },
  { name: "Quinta-Feira", pv: 2800, uv: 4200 },
  { name: "Sexta-Feira", pv: 2300, uv: 3900 },
  { name: "Sábado", pv: 2500, uv: 4100 },
];

export const weeklyData: ChartDataPoint[] = [
  { name: "Dom", pv: 2400, uv: 4000 },
  { name: "Seg", pv: 2600, uv: 3800 },
  { name: "Ter", pv: 2200, uv: 4100 },
  { name: "Qua", pv: 2400, uv: 3900 },
  { name: "Qui", pv: 2800, uv: 4200 },
  { name: "Sex", pv: 2300, uv: 3900 },
  { name: "Sáb", pv: 2500, uv: 4100 },
];

export const monthlyData: ChartDataPoint[] = [
  { name: "Sem 1", pv: 2400, uv: 4000 },
  { name: "Sem 2", pv: 2200, uv: 3600 },
  { name: "Sem 3", pv: 2600, uv: 4100 },
  { name: "Sem 4", pv: 2400, uv: 3800 },
];

export const yearlyData: ChartDataPoint[] = [
  { name: "Jan", pv: 2400, uv: 4000 },
  { name: "Fev", pv: 2500, uv: 4100 },
  { name: "Mar", pv: 2600, uv: 4200 },
  { name: "Abr", pv: 2700, uv: 4300 },
  { name: "Mai", pv: 2800, uv: 4400 },
  { name: "Jun", pv: 2900, uv: 4500 },
  { name: "Jul", pv: 3000, uv: 4600 },
  { name: "Ago", pv: 3100, uv: 4700 },
  { name: "Set", pv: 3200, uv: 4800 },
  { name: "Out", pv: 3300, uv: 4900 },
  { name: "Nov", pv: 3400, uv: 5000 },
  { name: "Dez", pv: 3500, uv: 5100 },
];
