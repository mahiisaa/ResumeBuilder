import { Input } from "../Common/Form/Input";
import { File } from "../Common/Form/File";
import { SelectInput } from "../Common/Form/SelectInput";
import AvatarSVG from "../../svgs/avatar.svg";
import * as yup from "yup";
import { faTrash, faUpload } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../Common/Form/Button";
const validationSchema = yup.object({
  firstName: yup.string().required("لطفا نام را وارد کنید"),
  lastName: yup.string().required("لطفا نام خانوادگی را وارد کنید"),
  jobTitle: yup.string().required("عنوان شغلی را وارد کنید"),
});
interface personalInfoType {
  jobTitle: string;
  firstName: string;
  lastName: string;
  birthYear: number;
  birthMonth: string;
  birthDay: string;
  gender: string;
  aboutMe: string;
  military: string;
  marital: string;
  phoneNumber: string;
  email: string;
  province: string;
  city: string;
  address: string;
}
interface personalInfoProps {
  data: personalInfoType;
  handleChange: (name: string, value: string) => void;
}
export const PersonalInfo: React.FC<personalInfoProps> = ({
  data,
  handleChange,
}): JSX.Element => {

  return (
    <>
      <h2 className="text-primary text-base mb-4 mr-2 font-semibold ">
        {" "}
        مشخصات اولیه
      </h2>
      <form>
        <div className="flex justify-between flex-col lg:flex-row items-center bg-[#ffffff] p-8 lg:py-10 lg:px-4  rounded-xl">
          <div className="lg:w-1/4 w-full flex flex-col justify-center items-center gap-4">
            <div className=" w-[140px] h-[140px]  rounded-full bg-primary">
              {/* <img src={AvatarSVG}></img> */}
            </div>
            <div className="flex gap-2">
              <File
                inputValue=""
                id="thumbnail"
                name="thumbnail"
                hasLabel={false}
                text="افزودن عکس"
                hasIcon={true}
                icon={faUpload}
                styles="text-primary text-base font-medium border border-brand-primary h-[48px] rounded-lg w-[140px] p-[8px] cursor-pointer border-box text-center bg-[#ffffff] hover:"
              />
              <Button
                className={
                  "text-errorColorLight bg-bgColorLight border-none hover:border hover:bg-bgColor"
                }
                id={""}
                onClick={() => {}}
                hasIcon={true}
                icon={faTrash}
              ></Button>
            </div>
          </div>
          <div className="lg:w-3/4 grid lg:grid-cols-6 grid-cols-3 gap-4 justify-center lg:mt-0 mt-8">
            <div className="lg:col-span-2 col-span-1">
              <Input
                name={"firstName"}
                className={""}
                type={"text"}
                hasLabel={true}
                label="نام"
                id="firstName"
                placeholder=""
                inputValue={data?.firstName}
                onChange={(name, value) => handleChange(name, value)}
              ></Input>
            </div>
            <div className="lg:col-span-2 col-span-1">
              <Input
                name={"lastName"}
                className={""}
                type={"text"}
                hasLabel={true}
                label="نام خانوادگی"
                placeholder=""
                id="lastName"
                inputValue={data.lastName}
                onChange={(name, value) => handleChange(name, value)}
              ></Input>
            </div>
            <div className="col-span-2 sm:col-span-2">
              <Input
                name={"jobTitle"}
                className={""}
                type={"text"}
                id="jobTitle"
                hasLabel={true}
                label="عنوان شغلی رزومه"
                placeholder=""
                inputValue={data.jobTitle}
                onChange={(name, value) => handleChange(name, value)}
              ></Input>
            </div>
            <div className="text-right flex flex-col col-span-2 sm:col-span-6 gap-XS p-2">
              <label
                className="text-myblack text-sm font-normal leading-normal dark:text-[#bac4c8] "
                htmlFor="aboutMe"
              >
                درباره من
              </label>
              <textarea
                className="rounded-md border border-bgColor outline-primaryLight textarea-lg text-right text-sm"
                id="aboutMe"
                placeholder=""
                name="aboutMe"
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                value={data?.aboutMe}
              ></textarea>
            </div>
            {/* <div className="grid grid-cols-3 sm:col-span-6 gap-4 col-span-3" > */}
            <SelectInput
              options={["خانم", "آقا"]}
              title={"جنسیت"}
              className=""
              id="gender"
              name="gender"
              inputValue={data?.gender}
              onChange={(name, value) => handleChange(name, value)}
            />
            <SelectInput
              options={["متاهل", "مجرد"]}
              title={"وضعیت تاهل"}
              className=""
              id="marital"
              name="marital"
              inputValue={data?.marital}
              onChange={(name, value) => handleChange(name, value)}
            />
            <SelectInput
              options={["مشمول", "معاف", "در حال خدمت", "پایان خدمت"]}
              title={"خدمت سربازی"}
              className="w-1/3"
              id="military"
              name="military"
              inputValue={data?.military}
              onChange={(name, value) => handleChange(name, value)}
            />
            <div className="flex justify-center items-start sm:col-span-3 gap-4">
              <div className="">
                <Input
                  name={"birthYear"}
                  className={""}
                  type={"number"}
                  id="birthYear"
                  hasLabel={true}
                  label="تاریخ تولد"
                  placeholder=""
                  inputValue={data?.birthYear}
                  onChange={(name, value) => handleChange(name, value)}
                ></Input>
              </div>
              <div className="">
                <SelectInput
                  options={[
                    "فروردین",
                    "اردیبهشت",
                    "خرداد",
                    "تیر",
                    "مرداد",
                    "شهریور",
                    "مهر",
                    "آبان",
                    "آذر",
                    "دی",
                    "بهمن",
                    "اسفند",
                  ]}
                  title={"ماه تولد"}
                  className={""}
                  id={"birthMonth"}
                  name={"birthMonth"}
                  inputValue={data?.birthMonth}
                  onChange={(name, value) => handleChange(name, value)}
                ></SelectInput>

                {/* </div> */}
              </div>
              <div className="">
                <SelectInput
                  options={[
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15",
                    "16",
                    "17",
                    "18",
                    "9",
                    "19",
                    "20",
                    "21",
                    "22",
                    "23",
                    "24",
                    "25",
                    "26",
                    "27",
                    "28",
                    "29",
                    "30",
                    "31",
                  ]}
                  title={"روز تولد"}
                  className={""}
                  id={"birthDay"}
                  name={"birthDay"}
                  inputValue={data?.birthDay}
                  onChange={(name, value) => handleChange(name, value)}
                ></SelectInput>

                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-primary text-base mb-4 mr-2 font-semibold mt-[40px]">
          {" "}
          اطلاعات تماس
        </h2>
        <div className="grid sm:grid-cols-3 grid-cols-2 gap-4  bg-[#ffffff] py-10 px-8 rounded-xl ">
          <Input
            name={"phoneNumber"}
            className={""}
            type={"text"}
            hasLabel={true}
            label="شماره همراه"
            id="phoneNumber"
            placeholder=""
            inputValue={data?.phoneNumber}
            onChange={(name, value) => handleChange(name, value)}
          ></Input>
          <Input
            name={"email"}
            className={""}
            type={"text"}
            hasLabel={true}
            label="ایمیل"
            id="email"
            placeholder=""
            inputValue={data?.email}
            onChange={(name, value) => handleChange(name, value)}
          ></Input>
          <Input
            name={"province"}
            className={""}
            type={"text"}
            hasLabel={true}
            label="استان"
            id="province"
            placeholder=""
            inputValue={data?.province}
            onChange={(name, value) => handleChange(name, value)}
          ></Input>
          <Input
            name={"city"}
            className={""}
            type={"text"}
            hasLabel={true}
            label="شهر"
            id="city"
            placeholder=""
            inputValue={data?.city}
            onChange={(name, value) => handleChange(name, value)}
          ></Input>
          <div className="col-span-2 ">
            <Input
              name={"address"}
              className={""}
              type={"text"}
              hasLabel={true}
              label="آدرس"
              id="address"
              placeholder=""
              inputValue={data?.address}
              onChange={(name, value) => handleChange(name, value)}
            ></Input>
          </div>
        </div>
      </form>
    </>
  );
};
