import { Input } from "../../Common/Form/Input"

export const BusinessBox:React.FC=():JSX.Element=>{
    return(
        <div  className=" grid grid-cols-3 gap-4 shadow-md bg-[#ffffff] py-10 px-8 mb-[20px] rounded-xl">
        <div className="">
          <Input
            name={"position"}
            id={"position"}
            className={""}
            type={"text"}
            inputValue={""}
            onChange={() => {}}
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
            inputValue={""}
            onChange={() => {}}
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
            inputValue={""}
            onChange={() => {}}
            hasLabel={true}
            label="نام شرکت"
          ></Input>
        </div>
        <div className="">
          <Input
            name={"companyProvince"}
            id={"companyProvince"}
            className={""}
            type={"text"}
            inputValue={"استان"}
            onChange={() => {}}
            hasLabel={true}
            label=" "
          ></Input>
        </div>
        <div className="">
          <Input
            name={"companyAddress"}
            id={"companyAddress"}
            className={""}
            type={"text"}
            inputValue={""}
            onChange={() => {}}
            hasLabel={true}
            label="محدوده شرکت "
          ></Input>
        </div>
        <div className="w-full flex justify-end gap-4">
          <div className="flex justify-center items-center w-[30%] gap-4">
            <div className="flex items-center justify-center flex-row-reverse w-1/3 h-full">
              <input
                id="GraduateState"
                type="checkbox"
                value=""
                className=" text-blue-600 bg-gray-100 border-gray-300 rounded  focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              ></input>
              <label
                htmlFor="GraduateState"
                className="mr-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                در حال اشتغال
              </label>
            </div>

            <div className="">
              <Input
                name={"employmentYear"}
                id={"employmentYear"}
                className={""}
                type={"number"}
                inputValue={""}
                onChange={() => {}}
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
                inputValue={""}
                onChange={() => {}}
                hasLabel={true}
                label=" سال فراغت"
              ></Input>
            </div>
          </div>
        </div>
      </div>
    )
}