import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "../../Common/Form/Input"
import { faChevronDown, faChevronUp, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
type BusinessInfoType = {
  id: number;
  position: string;
  level: string;
  company: string;
  employmentYear: number;
  leavingYear: number;
  componyProvince:string;
  address:string
};
interface IBusinessInfoProps {
  boxdata: BusinessInfoType;
  handleChange: (name: string, value: string, id: number, type: string) => void;
  handleDelete: (id: number,type:string) => void;
}
export const BusinessBox:React.FC<IBusinessInfoProps>=({boxdata,handleChange,handleDelete}):JSX.Element=>{
    return (
      <>
        <div className="grid grid-cols-3 gap-4 ">
          <div className="">
            <Input
              name={"position"}
              id={"position"}
              className={""}
              type={"text"}
              inputValue={boxdata.position}
              onChange={(name, value) =>
                handleChange(name, value, boxdata.id, "business")
              }
              hasLabel={true}
              label="عنوان شغلی "
            ></Input>
          </div>
          <div className="">
            <Input
              name={"level"}
              id={"level"}
              className={""}
              type={"text"}
              inputValue={boxdata.level}
              onChange={(name, value) =>
                handleChange(name, value, boxdata.id, "business")
              }
              hasLabel={true}
              label=" سطح ارشدیت"
            ></Input>
          </div>
          <div className="">
            <Input
              name={"company"}
              id={"company"}
              className={""}
              type={"text"}
              inputValue={boxdata.company}
              onChange={(name, value) =>
                handleChange(name, value, boxdata.id, "business")
              }
              hasLabel={true}
              label="نام شرکت"
            ></Input>
          </div>
          <div className="">
            <Input
              name={"componyProvince"}
              id={"componyProvince"}
              className={""}
              type={"text"}
              inputValue={boxdata.componyProvince}
              onChange={(name, value) =>
                handleChange(name, value, boxdata.id, "business")
              }
              hasLabel={true}
              label="استان"
            ></Input>
          </div>
          <div className="">
            <Input
              name={"companyAddress"}
              id={"companyAddress"}
              className={""}
              type={"text"}
              inputValue={boxdata.address}
              onChange={(name, value) =>
                handleChange(name, value, boxdata.id, "business")
              }
              hasLabel={true}
              label="محدوده شرکت "
            ></Input>
          </div>
          <div className="w-full grid grid-cols-4 gap-2">
            <div className="">
              <Input
                name={"employmentYear"}
                id={"employmentYear"}
                className={""}
                type={"number"}
                inputValue={boxdata.employmentYear}
                onChange={(name, value) =>
                  handleChange(name, value, boxdata.id, "business")
                }
                hasLabel={true}
                label="سال ورود"
              ></Input>
            </div>
            <div className="">
              <Input
                name={"leavingYear"}
                id={"leavingYear"}
                className={""}
                type={"number"}
                inputValue={boxdata.leavingYear}
                onChange={(name, value) =>
                  handleChange(name, value, boxdata.id, "business")
                }
                hasLabel={true}
                label=" سال فراغت"
              ></Input>
            </div>
            <div className="flex items-center justify-center flex-row h-full col-span-2">
              <input
                id="GraduateState"
                type="checkbox"
                value={boxdata.leavingYear}
                className=" text-blue-600 bg-gray-100 border-gray-300 rounded  focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              ></input>
              <label
                htmlFor="GraduateState"
                className="mr-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                در حال اشتغال
              </label>
            </div>
          </div>
        </div>

        <div className="flex flex-reverse  justify-between items-center gap-2 w-full  mt-10">
          {/* <FontAwesomeIcon icon={faEdit} ></FontAwesomeIcon> */}

          <div className="flex justify-between gap-2">
            <FontAwesomeIcon
              className="bg-bgColor  p-3 gap-2 rounded-md text-primary"
              icon={faChevronDown}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className="bg-bgColor  p-3 gap-2 rounded-md text-primary"
              icon={faChevronUp}
            ></FontAwesomeIcon>
          </div>
          <div>
            <FontAwesomeIcon
              onClick={() => handleDelete(boxdata.id,"business")}
              className="bg-bgColor  p-3  rounded-md text-errorColor"
              icon={faTrashAlt}
            ></FontAwesomeIcon>
          </div>
        </div>
        <hr className="h-px my-10  text-bgColor border-1 w-full" />
      </>
    );
}