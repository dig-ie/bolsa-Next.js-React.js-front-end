import React from "react";
import { ActionsFavoritesProps } from "./ActionsFavoritesProps";

export default function ActionsFavorites({ actions }: ActionsFavoritesProps) {
  return (
    // <div className="flex flex-col items-center gap-4 p-10 rounded-lg">
    //     <h2 className="self-start text-xl font-medium md:self-center">Ações favoritas:</h2>
    //     <div className="flex flex-col gap-2 p-2 bg-[#FFFFFF] ">
    //         {actions.map((item, index) => {
    //             const isPositive = item.actionValue.includes("+");
    //             const valueColor = isPositive ? "text-green-600" : "text-red-600";

    //             return (
    //                 <div
    //                     key={index}
    //                     className="flex items-center justify-between rounded md:flex w-72 md:mx-auto md:items-center md:text-center"
    //                 >
    //                     <p className="text-lg font-semibold">{item.actionName}</p>
    //                     <p className={`text-lg flex text-center items-center font-semibold gap-1 ${valueColor}`}>
    //                         {item.actionValue} {isPositive ? <FaArrowTrendUp /> : <FaArrowTrendDown />}
    //                     </p>
    //                 </div>
    //             );
    //         })}
    //     </div>
    //     <a href="#" className="mt-2 font-semibold text-black underline">
    //         Ver todas as ações
    //     </a>
    // </div>

    <div className="flex items-center justify-center p-20 ">
      <h1 className="text-xl font-bold text-white underline">
        Ver todas as ações
      </h1>
    </div>
  );
}
