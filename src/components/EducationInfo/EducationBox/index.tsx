import { Input } from "../../Common/Form/Input"
import { SelectInput } from "../../Common/Form/SelectInput"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons"
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { useEffect } from "react"
type EducationInfoType = {
  id:number;
  grade: string;
  major: string;
  orientation: string;
  collegeName: string;
  collegeType:string;
  average:number;
  collegeProvince: string;
  enteringYear: number;
  graduationYear: number;
};
interface IEducationBoxProps {
  boxdata: EducationInfoType;
  id:number
  handleChange: (name: string, value: string,id:number) => void;
  handleDelete:(id:number)=>void
}
export const EducationBox: React.FC<IEducationBoxProps> = ({
  boxdata,
  handleChange,
  id,
  handleDelete,
}): JSX.Element => {
  useEffect(() => {
    // console.log(id);
  }, [id]);
  return (
    <>
      <div className=" grid grid-cols-8 gap-4">
        <div className="col-span-2">
          <SelectInput
            options={[
              "دکتری",
              "کارشناسی ارشد",
              "کارشناسی",
              "فوق دیپلم",
              "دیپلم",
            ]}
            title={"مقطع تحصیلی"}
            className="w-full"
            id="grade"
            name="grade"
            inputValue={boxdata.grade}
            onChange={(name, value) => handleChange(name, value, boxdata.id)}
          />
        </div>

        <div className="col-span-2">
          <Input
            name={"major"}
            id={"major"}
            className={""}
            type={"text"}
            inputValue={boxdata.major}
            onChange={(name, value) => handleChange(name, value, boxdata.id)}
            hasLabel={true}
            label="رشته تحصیلی"
          ></Input>
        </div>
        <div className="col-span-2">
          <Input
            name={"orientation"}
            id={"orientation"}
            className={""}
            type={"text"}
            inputValue={boxdata.orientation}
            onChange={(name, value) => handleChange(name, value, boxdata.id)}
            hasLabel={true}
            label="گرایش تحصیلی"
          ></Input>
        </div>
        <div className="col-span-2">
          <Input
            name={"collegeType"}
            id={"collegeType"}
            className={""}
            type={"text"}
            inputValue={boxdata.collegeType}
            onChange={(name, value) => handleChange(name, value, boxdata.id)}
            hasLabel={true}
            label="نوع موسسه"
          ></Input>
        </div>
        <div className="col-span-2">
          <Input
            name={"collegeName"}
            id={"collegeName"}
            className={""}
            type={"text"}
            inputValue={boxdata.collegeName}
            onChange={(name, value) => handleChange(name, value, boxdata.id)}
            hasLabel={true}
            label="نام موسسه"
          ></Input>
        </div>

        {/* <div className="">
          <Input
            name={"collegeProvince"}
            id={"collegeProvince"}
            className={""}
            type={"text"}
            inputValue={""}
            onChange={() => {}}
            hasLabel={true}
            label=" استان"
          ></Input>
        </div>
        <div className="">
          <Input
            name={"collegeCity"}
            id={"collegeCity"}
            className={""}
            type={"text"}
            inputValue={""}
            onChange={() => {}}
            hasLabel={true}
            label="شهر"
          ></Input>
        </div> */}

        {/* <div className="w-full col-span-3 gap-4"> */}

        <div className="flex gap-4 md:col-span-2">
          <div className="w-1/2">
            <Input
              name={"enteringYear"}
              id={"enteringYear"}
              className={""}
              type={"number"}
              inputValue={boxdata.enteringYear}
              onChange={(name, value) => handleChange(name, value, boxdata.id)}
              hasLabel={true}
              label="سال ورود"
            ></Input>
          </div>
          <div className="w-1/2">
            <Input
              name={"graduationYear"}
              id={"graduationYear"}
              className={""}
              type={"number"}
              inputValue={boxdata.graduationYear}
              onChange={(name, value) => handleChange(name, value, boxdata.id)}
              hasLabel={true}
              label="سال فراغت"
            ></Input>
          </div>
        </div>

        <div className="flex items-end justify-start flex-row p-1 content-start col-span-2">
          <input
            id="GraduateState"
            type="checkbox"
            value=""
            className="text-primary bg-bgColor border-bgColor rounded  focus:ring-2 dark:bg-gray-700 dark:border-gray-600 h-[18px] w-[18px]"
          ></input>
          <label
            htmlFor="GraduateState"
            className="mr-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            هنوز فارغ التحصیل نشده ام
          </label>
        </div>
        <div className="">
          <Input
            name={"average"}
            id={"average"}
            className={""}
            type={"text"}
            inputValue={boxdata.average}
            onChange={(name, value) => handleChange(name, value, boxdata.id)}
            hasLabel={true}
            label="معدل"
          ></Input>
        </div>
        {/* <div className="form-control">
             <label className="label cursor-pointer">
               <span className="label-text">در حال تحصیل</span> 
               <input type="checkbox" className="checkbox" />
             </label>
            </div> */}
      </div>
      {/* </div> */}

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
          <FontAwesomeIcon onClick={()=>handleDelete(boxdata.id)}
            className="bg-bgColor  p-3  rounded-md text-errorColor"
            icon={faTrashAlt}
          ></FontAwesomeIcon>
        </div>
      </div>
      <hr className="h-px my-10  text-bgColor border-1 w-full" />
    </>
  );
};