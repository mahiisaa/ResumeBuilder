import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
interface IButtonProps{
    title?:string,
    className:string,
    id:string,
    hasIcon?:boolean,
    icon?:any,
    direction?:string
    onClick:(x:any)=>void,
    color?:string
}

export const Button:React.FC<IButtonProps>=({title,className,id,hasIcon,icon,onClick,color,direction="left"}):JSX.Element=>{
   
    return(
        <div>
            <button className={`btn  flex justify-center items-center  ${className}`} type="button" id={id} onClick={onClick}>
               {hasIcon&& direction==="right"&& <FontAwesomeIcon icon={icon}/>} {title } {hasIcon&& direction==="left"&& <FontAwesomeIcon icon={icon}/>}
                </button>
        </div>
    )
}