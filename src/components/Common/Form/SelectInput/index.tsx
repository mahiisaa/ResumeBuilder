import { useState } from "react"
interface ISelectInputProps{
    options:string[],
    title:string,
    className:string,
    id:string,
    name:string,
}
export const SelectInput:React.FC<ISelectInputProps>=({options,title,className,id,name}):JSX.Element=>{
    const [optionsState,setOptionsState]=useState<String[]>(options)
    return(
        <div className="text-right flex flex-col gap-XS">
            <label
              className="text-myblack text-sm font-normal leading-normal dark:text-[#bac4c8]"
              htmlFor={id}
            >
              {title}
            </label>
            <select className={`select select-primary w-full max-w-xs outline-none ${className}`}>
            <option disabled selected>{title}</option>
                {options.map((item)=><option value={item}>{item}</option>)}
             </select>
        </div>
    )
}