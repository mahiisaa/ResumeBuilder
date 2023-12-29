import { ProgressItem } from "./ProgressItem";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { faBusinessTime } from "@fortawesome/free-solid-svg-icons";
import { faCogs } from "@fortawesome/free-solid-svg-icons";
import { faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface ISteps {
  id: number;
  title: string;
  icon: any;
}
interface IProgressBarProps {
  select: number;
  selectItem: (id: number) => void;
}
export const ProgressBar: React.FC<IProgressBarProps> = ({
  select,
  selectItem,
}): JSX.Element => {
  // const [select,setSelect]=useState<number>(Number(localStorage.getItem("select")))
  const [steps, setStepes] = useState<ISteps[]>([
    { id: 1, title: "اطلاعات پایه", icon: faUser },
    { id: 2, title: "سوابق تحصیلی", icon: faUserGraduate },
    { id: 3, title: "سوابق شغلی", icon: faBusinessTime },
    { id: 4, title: "زبان ها ومهارتها", icon: faCogs },
    { id: 5, title: "پروژه ها", icon: faProjectDiagram },
  ]);

  return (
    <div className="w-full sticky top-0 z-50 bg-[#ffffff]">
      <ul className="flex flex-row justify-between items-center text-base ">
        {steps.map((item) => {
          return (
            <ProgressItem
              key={item.id}
              step={item.id}
              title={item.title}
              icon={item.icon}
              selectItem={selectItem}
              select={select}
            />
          );
        })}
      </ul>
    </div>
  );
};
