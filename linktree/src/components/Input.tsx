import type React from "react";

interface InputProps{
    name: string;
    id: string;
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input (props: InputProps) {
    return (
        <div>
        <label htmlFor={props.id}>{ props.name }</label>
        <input 
            type={props.type || "text"}
            id={props.id}
            name={props.name} 
            placeholder={props.placeholder || ""}
            className="bg-white border border-gray-200 rounded block px-4 py-2 w-full"
            value={props.value}
            onChange={props.onChange}
            />
        </div>
    )
}