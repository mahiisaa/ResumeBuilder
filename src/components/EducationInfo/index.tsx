import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../Common/Form/Button";
import { Input } from "../Common/Form/Input";
import { useRef, useState } from "react";
import { EducationBox } from "./EducationBox";

export const EducationInfo: React.FC = (): JSX.Element => {
  const [educationcomp,setEducationComp]=useState(["sample component"])
    const componentRef=useRef<any>()
    const boxref=useRef<any>()
    const addEducation=()=>{
      setEducationComp([...educationcomp,"sample component"])
    }
  return (
   
      <form ref={componentRef}>
        {
          educationcomp.map((item)=><EducationBox></EducationBox>)
        }
        
        <Button className={""} id={""} onClick={addEducation} hasIcon={true} icon={faPlus}></Button>
      </form>

  );
};
