import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../Common/Form/Button";
import {ProjectBox} from  "../Projects/ProjectBox"
interface ProjectInfo{
    id:number,
    title:string,
    employer:string,
    description:string
}
interface IProjectsProps {
  data: ProjectInfo[];
  handleChange: (name: string, value: string, id: number, type: string) => void;
  addProject: () => void;
  handleDelete: (id: number, type: string) => void;
}
export const Projects: React.FC<IProjectsProps> = ({
  data,
  handleChange,
  addProject,
  handleDelete,
}): JSX.Element => {
  return (
    <>
      <h2 className="text-primary text-base mb-4 mr-2 font-semibold ">
        تحصیلات آکادمیک
      </h2>
      <div className="shadow-md bg-[#ffffff] py-10 px-8 mb-[20px] rounded-xl ">
        <form>
          {data?.map((item) => (
            <ProjectBox
              key={item.id}
              id={item.id}
              boxdata={item}
              handleChange={handleChange}
              handleDelete={handleDelete}
            />
          ))}

          <Button
            className={""}
            id={""}
            onClick={addProject}
            hasIcon={true}
            icon={faPlus}
          ></Button>
        </form>
      </div>
    </>
  );
};