import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
interface IButtonProps{
    title?:string,
    className:string,
    id:string,
    hasIcon?:boolean,
    icon?:any
    onClick:()=>void
}
export const Button:React.FC<IButtonProps>=({title,className,id,hasIcon,icon,onClick}):JSX.Element=>{
   
    return(
        <div>
            <button className={`btn btn-active btn-primary ${className}`} id={id} onClick={onClick}>
               {hasIcon&&<FontAwesomeIcon icon={icon}/>} {title }
                </button>
        </div>
    )
}