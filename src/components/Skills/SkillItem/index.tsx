import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

type SkillItem = {
  id: number;
  title: string;
  type: string;
  level?: string;
};

interface ISkillsProps {
  data: SkillItem;
  handleDelete:(id:number,type:string)=>void
}

export const SkillItem: React.FC<ISkillsProps> = ({ data,handleDelete }): JSX.Element => {
  return (
    <div>
      {data.type === "soft" ? (
        <div className="border-primary border-2  m-2 p-2 rounded-lg">
          {`${data.title}`}
          <FontAwesomeIcon
            onClick={() => handleDelete(data.id, "skill")}
            className=" rounded-md text-primary"
            icon={faTrashAlt}
          ></FontAwesomeIcon>
        </div>
      ) : (
        <div className="bg-primaryLight text-primary text-sm font-bold  m-2 p-2 rounded-full px-4">
          <FontAwesomeIcon
            onClick={() => handleDelete(data.id, "skill")}
            className=" text-primary pl-XS"
            icon={faClose}
          ></FontAwesomeIcon>
          {`${data.title}  |  ${data.level}`}{" "}
        </div>
      )}
    </div>
  );
};
