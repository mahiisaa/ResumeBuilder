import { Input } from "../../Common/Form/Input"

export const EducationBox:React.FC=():JSX.Element=>{
    return(
        <div  className=" grid grid-cols-3 gap-4 shadow-md bg-[#ffffff] py-10 px-8 mb-[20px] rounded-xl">
        <div className="">
          <Input
            name={"grade"}
            id={"grade"}
            className={""}
            type={"text"}
            inputValue={""}
            onChange={() => {}}
            hasLabel={true}
            label="مقطع تحصیلی"
          ></Input>
        </div>
        <div className="">
          <Input
            name={"major"}
            id={"major"}
            className={""}
            type={"text"}
            inputValue={""}
            onChange={() => {}}
            hasLabel={true}
            label="رشته تحصیلی"
          ></Input>
        </div>
        <div className="">
          <Input
            name={"orientation"}
            id={"orientation"}
            className={""}
            type={"text"}
            inputValue={""}
            onChange={() => {}}
            hasLabel={true}
            label="گرایش تحصیلی"
          ></Input>
        </div>
        <div className="">
          <Input
            name={"collegeName"}
            id={"collegeName"}
            className={""}
            type={"text"}
            inputValue={""}
            onChange={() => {}}
            hasLabel={true}
            label="نام موسسه"
          ></Input>
        </div>
        <div className="">
          <Input
            name={""}
            id={""}
            className={""}
            type={"text"}
            inputValue={""}
            onChange={() => {}}
            hasLabel={true}
            label="کشور "
          ></Input>
        </div>

        <div className="">
          <Input
            name={"grade"}
            id={"grade"}
            className={""}
            type={"text"}
            inputValue={""}
            onChange={() => {}}
            hasLabel={true}
            label=" استان"
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
                در حال تحصیل
              </label>
            </div>

            <div className="">
              <Input
                name={"major"}
                id={"major"}
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
                name={"orientation"}
                id={"orientation"}
                className={""}
                type={"number"}
                inputValue={""}
                onChange={() => {}}
                hasLabel={true}
                label=" سال فراغت"
              ></Input>
            </div>
          </div>
          <div className="">
            <Input
              name={""}
              id={""}
              className={""}
              type={"text"}
              inputValue={""}
              onChange={() => {}}
              hasLabel={true}
              label="معدل"
            ></Input>
          </div>
        </div>
      </div>
    )
}