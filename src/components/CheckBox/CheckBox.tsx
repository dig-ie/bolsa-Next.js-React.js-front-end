import React from "react";
import { CheckBoxProps } from "./CheckBoxProps";

const CheckBox: React.FC<CheckBoxProps> = ({ 
    checked, 
    onChange, 
    label, 
    id 
}) => {
    return (
            <div className="flex items-center">
             <input type="checkbox"  id={id}
            checked={checked}
            onChange={onChange}
                className="scale-100 mr-2 cursor-pointer "
            />
            <label 
                htmlFor={id} 
                className="text-sm font-medium"
            >
                {label}
            </label>
            </div>
    );
 };

    export default CheckBox;