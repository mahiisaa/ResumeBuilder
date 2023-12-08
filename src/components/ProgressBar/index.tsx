import { ProgressItem } from "./ProgressItem"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons"
import { faBusinessTime } from "@fortawesome/free-solid-svg-icons"
import { faCogs } from "@fortawesome/free-solid-svg-icons"
import { faProjectDiagram } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
interface ISteps{
    id:number,
    title:string,
    icon:any
}
interface IProgressBarProps{
    select:number,
    selectItem:(id:number)=>void
}
export const ProgressBar:React.FC<IProgressBarProps>=({select,selectItem}):JSX.Element=>{
   // const [select,setSelect]=useState<number>(Number(localStorage.getItem("select")))
    const [steps,setStepes]=useState<ISteps[]>([{id:1,title:"اطلاعات پایه",icon:faUser},
    {id:2,title:"سوابق تحصیلی",icon:faUserGraduate},
    {id:3,title:"سوابق شغلی",icon:faBusinessTime},
    {id:4,title:"زبان ها ومهارتها",icon:faCogs},
    {id:5,title:"پروژه ها",icon:faProjectDiagram}])
    useEffect(()=>{
        localStorage.setItem("select",select.toString())
    },[select])

    return(
<div className="w-full static">
    <ul className="flex flex-row-reverse justify-between items-center border-2 border-bgColor text-base  ">

     {
        steps.map((item)=>{
            return(
                <ProgressItem key={item.id} step={item.id} title={item.title} icon={item.icon} selectItem={selectItem} select={select} />
            )
        })
     }

    </ul>
</div>
    )
}