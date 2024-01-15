import { Input } from "../../Common/Form/Input";

type ProjectInfo = {
  id: number;
  title:string,
  employer:string,
  description:string
};
interface IProjectProps {
  boxdata: ProjectInfo;
  id: number;
  handleChange: (name: string, value: string, id: number, type: string) => void;
  handleDelete: (id: number, type: string) => void;
}
export const ProjectBox:React.FC<IProjectProps>=({boxdata,handleChange,handleDelete}):JSX.Element=>{
    return (
      <div className="grid grid-cols-2 gap-4 ">
        <div className="">
          <Input
            name={"title"}
            id={"title"}
            className={""}
            type={"text"}
            inputValue={boxdata.title}
            onChange={(name, value) =>
              handleChange(name, value, boxdata.id, "project")
            }
            hasLabel={true}
            label="عنوان پروژه"
          ></Input>
        </div>
        <div className="">
          <Input
            name={"employer"}
            id={"employer"}
            className={""}
            type={"text"}
            inputValue={boxdata.employer}
            onChange={(name, value) =>
              handleChange(name, value, boxdata.id, "project")
            }
            hasLabel={true}
            label="کارفرما"
          ></Input>
        </div>

        <div className="col-span-2">
          <label
            className="text-myblack text-sm font-normal leading-normal dark:text-[#bac4c8] "
            htmlFor="aboutMe"
          >
            توضیحات
          </label>
          <textarea
            className="rounded-md border border-bgColor outline-primaryLight textarea-lg text-right text-sm w-full"
            id="description"
            placeholder=""
            name="description"
            onChange={(e) =>
              handleChange(e.target.name, e.target.value, boxdata.id, "project")
            }
            value={boxdata?.description}
          ></textarea>
        </div>
        <hr className="h-px my-10  text-bgColor border-1 w-full col-span-2" />
      </div>
    );
}
