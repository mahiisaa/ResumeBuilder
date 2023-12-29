import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../Common/Form/Button";
import { useEffect, useState } from "react";
import { EducationBox } from "./EducationBox";
type EducationInfoType ={
  id:number
  grade: string;
  major: string;
  orientation: string;
  collegeName: string;
  collegeType:string;
  average:number;
  collegeProvince: string;
  enteringYear: number;
  graduationYear: number;
}
interface IEducationInfoProps {
  data: EducationInfoType[];
  handleChange: (name: string, value: string,id:number) => void;
  addEducation:()=>void
}
export const EducationInfo: React.FC<IEducationInfoProps> = ({data,handleChange,addEducation}): JSX.Element => {
useEffect(()=>{
console.log(data)
},[data])
 
  return (
    <>
      <h2 className="text-primary text-base mb-4 mr-2 font-semibold ">
        تحصیلات آکادمیک
      </h2>
      <form>
        <div className="shadow-md bg-[#ffffff] py-10 px-8 mb-[20px] rounded-xl ">
          {data?.map((item) => (        
              <EducationBox
              key={item.id}
                id={item.id}
                boxdata={item}
                handleChange={handleChange}
              ></EducationBox>
          ))}

          <Button
            className={""}
            id={""}
            onClick={addEducation}
            hasIcon={true}
            icon={faPlus}
          ></Button>
        </div>
      </form>
    </>
  );
};
