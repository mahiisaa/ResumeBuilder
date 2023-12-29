import { useState } from "react"
import { Inquiry } from "./Steps/Inquiry";
import { Verify } from "./Steps/Verify";
export enum IAuthenticationStep{
    InquiryStep=0,
    VerifyStep=0
}
interface Idata{
  phone:string
}
export const Authentication:React.FC<IAuthenticationStep>=():JSX.Element=>{
    const [step,setStep]=useState<IAuthenticationStep>(IAuthenticationStep.InquiryStep)
    const [state,setState]=useState<any>()
    return(
       ()=>{
        switch (step) {
          case IAuthenticationStep.InquiryStep:
           return <Inquiry initialValue={{phone:state.phone}} onNextStep={(data)=>{
            setState({...state,...data})
            setStep(IAuthenticationStep.VerifyStep);
           }}/>
          case IAuthenticationStep.VerifyStep:
            return <Verify/>
            default:
           return <></>
        }
       }
    )();
}

