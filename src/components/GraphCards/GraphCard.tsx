// GraphCard.tsx remains the same
"use client";
import React from "react";
import Image from "next/image";

interface GraphCardProps {
    title: string;
    image: string;
}

const GraphCard: React.FC<GraphCardProps> = ({ title, image }) => {
    return (
        <div className="flex flex-col items-center p-4 rounded-lg ">
            <h3 className="mb-2 text-lg font-semibold">{title}</h3>
            <Image
                src={image}
                alt={title}
                width={400}
                height={200}
                className="object-contain w-full h-48"
            />
        </div>
    );
};

export default GraphCard;