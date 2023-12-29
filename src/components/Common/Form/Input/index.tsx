import { useState } from "react";

interface IIcon {
    icon: string;
    color?: string;
    size?: number;
    className?: string;
    style?: {};
  }
interface IInputProps{
    name: string;
    id: string;
    className:string,
    type: "text" | "number" | "email" | "password" | "tel" | "hidden" | "file";
    label?: string;
    hasLabel?: boolean;
    placeholder?: string;
    icon?:IIcon;
    autoFocus?: boolean;
    inputValue:string |number;
    onChange: (name: string, value: string) => void;

}
export const Input:React.FC<IInputProps>=({type,name,className,hasLabel,label,placeholder,icon,inputValue,onChange,id}):JSX.Element=>{
    //const [value, setValue] = useState(inputValue);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     // setValue(e.target.value);
      onChange(e.target.name, e.target.value);
    };
    return(
         <div className="text-right flex flex-col gap-XS">
        {hasLabel && (
            <label
              className="text-myblack text-sm font-normal leading-normal dark:text-[#bac4c8] "
              htmlFor={id}
            >
              {label}
            </label>
          )}
        <input type={type}
         name={name}
         placeholder={placeholder}
         id={name}
         className={`border border-bgColor h-[48px] outline-primary w-full rounded-md px-2 text-right w-full ${className}`}
         value={inputValue}
         onChange={handleChange}>
         </input>
         </div> 
    )
}
