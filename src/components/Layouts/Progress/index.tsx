import { useEffect, useState } from "react"
import { PersonalInfo } from "../../PersonalInfo"
import { ProgressBar } from "../../ProgressBar"
import { Button } from "../../Common/Form/Button"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { EducationInfo } from "../../EducationInfo"
import { BusinessInfo } from "../../BusinessInfo"
import { Skills } from "../../Skills"
import { Projects } from "../../Projects"


export const Progress:React.FC=():JSX.Element=>{
   const [select,setSelect]=useState<number>(Number(localStorage.getItem("select")))

   useEffect(()=>{
      localStorage.setItem("select",select.toString())
      console.log(select)
   },[select])
   const handleSelect=(id:number)=>{
      setSelect(id)
    
   }
   const goForward=()=>{
      if(select<5)
      {
         setSelect(select+1)
      }
   }
   const goPrevious=()=>{
      if(select>1){
      setSelect(select-1)}
   }
    return(
      <>
      <ProgressBar select={select} selectItem={handleSelect}/>
      <div className="lg:px-[88px] px-[40px] md:px-[60px] relative">   
        
{
   select===1? <PersonalInfo/>:select===2?<EducationInfo/>:select===3?<BusinessInfo/>:select===4?<Skills/>:<Projects/>
}
        
       
        <div className="fixed bottom-10 left-0 lg:px-[88px] px-[40px] md:px-[60px] flex justify-between items-center w-full">
          <Button  className={""} id={"next"} hasIcon={true} icon={faArrowLeft} onClick={goForward}></Button>
          <Button  className={""} id={"previous"} hasIcon={true} icon={faArrowRight} onClick={goPrevious}></Button>
          </div>
      </div>
      </>
    )
}