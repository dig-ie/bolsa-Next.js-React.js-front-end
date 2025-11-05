export type ChartDataItem = {
    name: string,
    pv: number,
    uv: number,

}

export type PeriodChartProps = {
    period: "Diário" | "Semanal" | "Mensal" | "Anual";
    data: ChartDataItem[];

}