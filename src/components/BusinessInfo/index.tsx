import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../Common/Form/Button";
import { Input } from "../Common/Form/Input";
import { useEffect, useRef, useState } from "react";
import { BusinessBox } from "./BusinessBox";
type BusinessInfoType = {
  id:number;
  position: string;
  level: string;
  company: string;
  employmentYear: number;
  leavingYear: number;
};
interface IBusinessBoxProps {
  data: BusinessInfoType[];
  handleChange: (name: string, value: string,id:number) => void;
  addBusiness: () => void;
}
export const BusinessInfo: React.FC<IBusinessBoxProps> = ({data,handleChange,addBusiness}): JSX.Element => {
 // const [businesscomp, setBusinessComp] = useState(["sample component"]);
  const componentRef = useRef<any>();
  useEffect(()=>{
    console.log(data)
  })
  return (
    <form ref={componentRef}>
      {data.map((item) => (
        <BusinessBox key={item.id} boxdata={item} handleChange={handleChange} />
      ))}

      <Button
        className={""}
        id={""}
        onClick={addBusiness}
        hasIcon={true}
        icon={faPlus}
      ></Button>
    </form>
  );
};
