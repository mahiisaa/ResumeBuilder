import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../Common/Form/Button";
import { Input } from "../Common/Form/Input";
import { useEffect, useRef, useState } from "react";
import { BusinessBox } from "./BusinessBox";
type BusinessInfoType = {
  id: number;
  position: string;
  level: string;
  company: string;
  employmentYear: number;
  leavingYear: number;
  componyProvince: string;
  address: string;
};
interface IBusinessBoxProps {
  data: BusinessInfoType[];
  handleChange: (name: string, value: string, id: number, type: string) => void;
  addBusiness: () => void;
  handleDelete: (id: number,type:string) => void;
}
export const BusinessInfo: React.FC<IBusinessBoxProps> = ({data,handleChange,addBusiness,handleDelete}): JSX.Element => {
 // const [businesscomp, setBusinessComp] = useState(["sample component"]);
  const componentRef = useRef<any>();
  useEffect(()=>{
    console.log(data)
  })
  return (
    <div className="shadow-md bg-[#ffffff] py-10 px-8 mb-[20px] rounded-xl ">
    <form ref={componentRef}>
      {data.map((item) => (
        <BusinessBox key={item.id} boxdata={item} handleChange={handleChange} handleDelete={handleDelete}/>
      ))}

      <Button
        className={""}
        id={""}
        onClick={addBusiness}
        hasIcon={true}
        icon={faPlus}
      ></Button>
    </form>
    </div>
  );
};
