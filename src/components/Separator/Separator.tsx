import { SeparatorProps } from './SeparaotProps';
import React from 'react';

export const Separator: React.FC<SeparatorProps> = () => {
    return (
        <div className="flex items-center my-4 w-[415px] h-px mt-8"> 
            <div className="flex-grow h-px bg-gray-400"></div>
            <span className="mx-4 shrink-0 text-sm text-gray-400">ou</span>
            <div className="flex-grow h-px bg-gray-400"></div>
        </div>
    );
};