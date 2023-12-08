
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
interface IProgressItemProps{
    title:string,
    icon:any,
    selectItem:(key:number)=>void,
    className?:string,
    select:number,
    step:number
}
export const ProgressItem:React.FC<IProgressItemProps>=({title,icon,selectItem,className,select,step}):JSX.Element=>{
    return(
        <li className={`py-S w-1/5 text-center   cursor-pointer ${select===step?"text-primary border-b-2": "text-mygray"}`} onClick={()=>selectItem(step)}>
        <span className="hidden lg:inline-block hover:bg-bgcolor hover:rounded-2xl ">{title}</span>
        <FontAwesomeIcon className="pl-0 sm:pl-S"  icon={icon} />
        </li>
    )
}