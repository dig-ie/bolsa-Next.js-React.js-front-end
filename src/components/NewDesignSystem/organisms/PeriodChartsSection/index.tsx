"use client";

import React from "react";

import {
  dailyData,
  weeklyData,
  monthlyData,
  yearlyData,
} from "@/mocks/mainDashboard";
import PeriodChart from "../../molecules/PeriodChart";

/**
 * @organism PeriodChartSection
 *
 * Este Organism é responsável por:
 * - Preparar os datasets (daily, weekly, monthly, yearly)
 * - Decidir quais dados enviar para a Molecule PeriodChart
 * - Encapsular a lógica de seleção, normalização e orquestração
 *
 * Atualmente este componente usa **mocks locais** como fonte de dados.
 *
 * TODO:
 *  - [ ] Substituir os mocks por chamadas reais da API (fetch/axios)
 *  - [ ] Adicionar tratamento de erros da API (try/catch)
 *  - [ ] Adicionar estado de loading (spinner) enquanto busca dados
 *  - [ ] Implementar cache ou revalidação com React Query/SWR
 *  - [ ] Remover a dependência de dados estáticos
 *
 * Motivo de manter a lógica aqui:
 *  - Molecules devem ser puramente UI
 *  - A Page não deve ter lógica de negócio
 *  - Organisms são o local ideal para "orquestrar" dados e comportamentos
 */
export default function PeriodChartSection() {
  // Simulação do shape final que a futura API deve fornecer
  const chartData = {
    daily: dailyData,
    weekly: weeklyData,
    monthly: monthlyData,
    yearly: yearlyData,
  };

  return (
    <div className="w-full flex justify-center">
      <PeriodChart data={chartData} defaultPeriod="Diário" />
    </div>
  );
}
