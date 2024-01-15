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
type:string
  addSkill: (newSkill: SkillInfo) => void;
}

export const AddItem:React.FC<IAddItem>=({addSkill,type}):JSX.Element=>{
      // const [newSkill, setNewSkill] = useState<SkillInfo>({
      //   id: 0,
      //   title: "",
      //   level: "",
      //   type: type,
      // });
        // const handleChange = (name: string, value: string) => {
        //   setNewSkill({ ...newSkill, [name]: value });
        // };
        const {
          register,
          handleSubmit,
          reset,
          formState: { errors },
        } = useForm<SkillInfo>();
        const onSubmit = (data: SkillInfo) => {
          data.id=0;
          data.type=type
          addSkill(data);
          console.log(data)
          reset();
        };
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-6 gap-2 items-end">
          <div className="col-span-3">
            <Input
              name={"title"}
              id={"title"}
              className={""}
              type={"text"}
              //inputValue={newSkill?.title}
              //onChange={(name, value) => handleChange(name, value)}
              hasLabel={true}
              label="نام مهارت"
              validationSchema={{
                required: "Todo text is required"
              }}
              register={register}
            />
          </div>
          <div className="col-span-2">
            <Input
              name={"level"}
              id={"level"}
              className={"col-span-2"}
              type={"text"}
              //inputValue={newSkill?.level}
              //onChange={(name, value) => handleChange(name, value)}
              hasLabel={true}
              label="سطح"
              validationSchema={{
                required: "Todo text is required",
              }}
              required
              register={register}
            ></Input>
          </div>
          <div>
            <Button
             type="submit"
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