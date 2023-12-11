import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../Common/Form/Button";
import { Input } from "../Common/Form/Input";
import { useRef, useState } from "react";
import { BusinessBox } from "./BusinessBox";

export const BusinessInfo: React.FC = (): JSX.Element => {
  const [businesscomp,setBusinessComp]=useState(["sample component"])
    const componentRef=useRef<any>()
    const boxref=useRef<any>()
    const addBusiness=()=>{
      setBusinessComp([...businesscomp,"sample component"])
    }
  return (
   
      <form ref={componentRef}>
        {
          businesscomp.map((item)=><BusinessBox/>)
        }
        
        <Button className={""} id={""} onClick={addBusiness} hasIcon={true} icon={faPlus}></Button>
      </form>

  );
};
