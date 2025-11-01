"use client";
import React from "react";


const PeriodButton: React.FC<PeriodButtonProps> = ({ label, selected, onClick }) => {
    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor: selected ? "#2ECC71" : "#E0F7E9",
                padding: "5px 10px",
                borderRadius: "8px",
                fontSize: "15px",
                color: selected ? "white" : "black",
            }}
        >
            {label}
        </button>
    );
};

export default PeriodButton;