
import { Link } from "react-router-dom";
import { TempCard } from "./TempCard";
import {useState} from 'react'

export const Templates: React.FC = (): JSX.Element => {
    type ITemplates = {
      id: number;
      title: string;
      color: string;
    };
  const [templates, setTemplates] = useState<ITemplates[]>([
    {
      id: 1,
      title: "قالب پیش فرض",
      color: "blue",
    },
    {
      id: 2,
      title: "قالب  رسمی",
      color: "gray",
    },
  ]);
  return (
    <div className="grid grid-cols-4 m-20 gap-10">  
      {
      templates.map(item=>
      <Link to={`/${1}`}>
        <TempCard title={item.title} preview={""} ></TempCard>
      </Link>)}
    </div>
  );
};