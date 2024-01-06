import { useEffect, useState } from "react";
import { SkillItem } from "./SkillItem";
import { Input } from "../Common/Form/Input";
import { Button } from "../Common/Form/Button";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { AddItem } from "./AddItem";

type SkillInfo={
    id:number,
    title:string,
    type:string,
    level:string
}
interface ISkillsProps {
  data: SkillInfo[];
  addSkill: (newSkill: SkillInfo) => void;
  handleDelete:(id:number,type:string)=>void
}
export const Skills: React.FC<ISkillsProps> = ({
  data,
  addSkill,
  handleDelete,
}): JSX.Element => {
  const [techSkills, setTechSkills] = useState<SkillInfo[]>([]);
  const [softSkills, setSoftSkills] = useState<SkillInfo[]>([]);
  const [Langs, setLangs] = useState<SkillInfo[]>([]);

  useEffect(() => {
    const techskills = data?.filter((item) => item.type === "technical");
    setTechSkills(techskills);
    const softskills = data?.filter((item) => item.type === "soft");
    setSoftSkills(softskills);
    const langs = data?.filter((item) => item.type === "langs");
    setLangs(langs);
    // setTechSkills(langs);
  }, [data]);

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2 lg:flex-row md:flex-row flex-col items-center  bg-[#ffffff] sm:py-10 py-8 sm:px-8 px-4  rounded-xl">
        <h2 className="mb-4 font-bold">نرم افزار ها</h2>
        <AddItem addSkill={addSkill} type="technical" />
        <div className="flex flex-wrap mt-6">
          {techSkills?.map((item) => (
            <SkillItem data={item} handleDelete={handleDelete}></SkillItem>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col   bg-[#ffffff] sm:py-10 py-8 sm:px-8 px-4  rounded-xl">
          <h2 className="mb-4 font-bold">مهارت های نرم</h2>
          <AddItem type="soft" addSkill={addSkill} />
          <div className="flex flex-wrap mt-6">
            {softSkills?.map((item) => (
              <SkillItem data={item} handleDelete={handleDelete}></SkillItem>
            ))}
          </div>
        </div>
        <div className="flex flex-col bg-[#ffffff] sm:py-10 py-8 sm:px-8 px-4  rounded-xl">
          <h2 className="mb-4 font-bold">زبان ها</h2>
          <AddItem type="langs" addSkill={addSkill} />
          <div className="flex flex-wrap mt-6">
            {Langs?.map((item) => (
              <SkillItem data={item} handleDelete={handleDelete}></SkillItem>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};