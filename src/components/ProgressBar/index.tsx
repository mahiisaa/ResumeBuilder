import { ProgressItem } from "./ProgressItem"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons"
import { faBusinessTime } from "@fortawesome/free-solid-svg-icons"
import { faCogs } from "@fortawesome/free-solid-svg-icons"
import { faProjectDiagram } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
interface ISteps{
    id:number,
    title:string,
    icon:any
}
export const ProgressBar:React.FC=():JSX.Element=>{
    const [select,setSelect]=useState<number>(1)
    const [steps,setStepes]=useState<ISteps[]>([{id:1,title:"اطلاعات پایه",icon:faUser},
    {id:2,title:"سوابق تحصیلی",icon:faUserGraduate},
    {id:3,title:"سوابق شغلی",icon:faBusinessTime},
    {id:4,title:"زبان ها ومهارتها",icon:faCogs},
    {id:5,title:"پروژه ها",icon:faProjectDiagram}])
const handleSelect=(step:number)=>{
     
  setSelect(step)
}
    return(
<div className="w-full static">
    <ul className="flex flex-row-reverse justify-between items-center border-2 border-bgColor text-base  ">

     {
        steps.map((item)=>{
            return(
                <ProgressItem key={item.id} step={item.id} title={item.title} icon={item.icon} selectItem={handleSelect} select={select} />
            )
        })
     }

    </ul>
</div>
    )
}