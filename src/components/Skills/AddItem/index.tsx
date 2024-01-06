import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../Common/Form/Button";
import { Input } from "../../Common/Form/Input";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
type SkillInfo={
    id:number,
    title:string,
    type:string,
    level:string
}

interface IAddItem {
 // newSkill: SkillInfo;
//   handleChange:(name:string,value:string)=>void
type:string
  addSkill: (newSkill: SkillInfo) => void;
}

export const AddItem:React.FC<IAddItem>=({addSkill,type}):JSX.Element=>{
      const [newSkill, setNewSkill] = useState<SkillInfo>({
        id: 0,
        title: "",
        level: "",
        type: type,
      });
        const handleChange = (name: string, value: string) => {
          setNewSkill({ ...newSkill, [name]: value });
        };
    return (
      <form>
        <div className="grid grid-cols-6 gap-2 items-end">
          <div className="col-span-3">
            <Input
              name={"title"}
              id={"title"}
              className={""}
              type={"text"}
              inputValue={newSkill?.title}
              onChange={(name, value) => handleChange(name, value)}
              hasLabel={true}
              label="نام مهارت"
            />
          </div>
          <div className="col-span-2">
            <Input
              name={"level"}
              id={"level"}
              className={"col-span-2"}
              type={"text"}
              inputValue={newSkill?.level}
              onChange={(name, value) => handleChange(name, value)}
              hasLabel={true}
              label="سطح"
            ></Input>
          </div>
          <div>
            <Button
              onClick={() => addSkill(newSkill)}
              className={
                "bg-primary border-none text-[#ffffff] hover:bg-primary"
              }
              id={""}
              hasIcon={true}
              icon={faAdd}
            ></Button>
          </div>
        </div>
      </form>
    );
}