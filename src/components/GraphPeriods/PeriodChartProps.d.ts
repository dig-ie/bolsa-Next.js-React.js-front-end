export type ChartDataItem = {
    name: string,
    pv: string,
    uv: string,

}

export type PeriodChartProps = {
    period: "Diário" | "Semanal" | "Mensal" | "Anual";
    data: ChartDataItem[];
}