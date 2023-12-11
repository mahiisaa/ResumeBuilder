import { useState } from "react";

interface ISelectInputProps{
    options:string[],
    title:string,
    className:string,
    id:string,
    name:string,
    inputValue:string |number;
    onchange: (name: string, value: string) => void;
}
export const SelectInput:React.FC<ISelectInputProps>=({options,title,className,id,name,onchange,inputValue}):JSX.Element=>{
  const [value, setValue] = useState(inputValue);
    const handleChange=(e: React.ChangeEvent<HTMLSelectElement>)=>{
      setValue(e.target.value)
      onchange(e.target.name, e.target.value);
      console.log(e.target.name)
    }
    return(
        <div className="text-right flex flex-col gap-XS">
            <label
              className="text-myblack text-sm font-normal leading-normal dark:text-[#bac4c8]"
              htmlFor={id}
            >
              {title}
            </label>
            <select className={`select select-primary w-full max-w-xs outline-none text-right ${className}`}  
             value={value} onChange={handleChange}>
            <option disabled selected className="text-right p-4" ></option>
                {options.map((item)=><option value={item}  >{item}</option>)}
             </select>
        </div>
    )
}