import React from "react";
import { BalanceCardProps } from "./BalanceCardProps.d";

const BalanceCard: React.FC<BalanceCardProps> = ({ balance, futureBalance }) => {
    return (
        <div className="p-10 md:items-center md:flex md:flex-col ">
            <h1 className="text-xl font-bold">Saldo Ficticio</h1>
            <p className="text-3xl font-bold">{balance}</p>
            <p className="text-xl font-bold text-primaryGreen">+{futureBalance}</p>
        </div >
    );
}

export default BalanceCard;
