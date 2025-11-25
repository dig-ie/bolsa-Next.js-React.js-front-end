import React from "react";
import { BalanceCardProps } from "./BalanceCardProps.d";
import { CardSurface } from "../../atoms/CardSurface";

export default function BalanceCard({
  balance,
  futureBalance,
}: BalanceCardProps) {
  return (
    <CardSurface
      radius="md"
      className="w-[357px] h-[152px] p-6 flex flex-col items-center justify-center"
    >
      <div className="flex items-center self-start  gap-14  ">
        <div>
          <h1 className="text-xl font-bold">
            Saldo Fictício <br />
            {balance}
          </h1>
        </div>

        <div className="w-16 h-16 border-2 border-green-400 rounded-full border-l-black border-t-black ml-10" />
      </div>
      <h2 className="self-start text-[#27AE60] font-medium text-xl">
        {futureBalance}
      </h2>
    </CardSurface>
  );
}
