import { Input } from "../Common/Form/Input";
import { File } from "../Common/Form/File"; 
import { SelectInput } from "../Common/Form/SelectInput";
import AvatarSVG from "../../svgs/avatar.svg"
import * as yup from "yup"
const validationSchema=yup.object({
  firstName:yup.string().required("لطفا نام را وارد کنید"),
  lastName:yup.string().required("لطفا نام خانوادگی را وارد کنید"),
  jobTitle:yup.string().required("عنوان شغلی را وارد کنید")
})
interface personalInfoType{
  jobTitle: string;
  firstName: string;
  lastName: string;
  birthYear:number;
  birthMonth:string;
  gender: string;
  aboutMe:string;
  military: string;
  marital: string;
  phoneNumber: string;
  email: string;
  province: string;
  city: string;
  address: string;
}
interface personalInfoProps{
  data:personalInfoType,
  handleChange:(name:string,value:string)=>void
}
export const PersonalInfo: React.FC<personalInfoProps> = ({data,handleChange}): JSX.Element => {

  // const[values,setValues]=useState<personalInfoType>(data)

  // const handleChange = (name: string, value: string) => {
  //     setValues({ ...values, [name]: value });
  //   };

  return (
   
      <form >
        <div className="flex justify-between lg:flex-row md:flex-row flex-col items-center sm:shadow-md bg-[#ffffff] sm:py-10 py-8 sm:px-8 px-4  rounded-xl">
        <div className="sm:w-1/4 w-full flex flex-col justify-center items-center gap-4">
          <div className=" w-[140px] "><img src={AvatarSVG}></img></div>
         
        <File
              inputValue=""
              id="thumbnail"
              name="thumbnail"
              hasLabel={false}
              text="افزودن تصویر"
              hasIcon={false}
              styles="text-brand-primary text-base font-medium border border-brand-primary h-[48px] rounded-lg w-[140px] p-[10px] cursor-pointer border-box text-center bg-[#ffffff]"
            />
        </div>
        <div className="sm:w-3/4  grid grid-cols-2 sm:grid-cols-6 gap-4 justify-center sm:mt-0 mt-8">
          <div className="sm:col-span-2">
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
          <div className="sm:col-span-2">
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
          <div className="text-right flex flex-col col-span-2 sm:col-span-6 gap-XS">
            <label
              className="text-myblack text-sm font-normal leading-normal dark:text-[#bac4c8] "
              htmlFor="aboutMe"
            >
             درباره من
            </label>
          <textarea className="textarea textarea-primary textarea-lg text-right" id="aboutMe" placeholder="Bio" name="aboutMe"
           onChange={(e)=>handleChange(e.target.name,e.target.value)}></textarea>
          </div>
          {/* <div className="grid grid-cols-3 sm:col-span-6 gap-4 col-span-3" > */}
          <SelectInput options={["خانم","آقا"]} title={"جنسیت"} className="" id="gender" name="gender" inputValue={data?.gender}  onchange={(name, value) => handleChange(name, value)} />
          <SelectInput options={["متاهل","مجرد"]} title={"وضعیت تاهل"} className="" id="marital" name="marital" inputValue={data?.marital} onchange={(name,value)=>handleChange(name,value)} />
          <SelectInput options={["مشمول","معاف","در حال خدمت","پایان خدمت"]} title={"خدمت سربازی"} className="w-1/3" id="military" name="military" inputValue={data?.military}  onchange={(name, value) => handleChange(name, value)}/>
          <div className="flex justify-center items-start sm:col-span-3 gap-4">
            <div className="sm:w-1/2">
             <Input
            name={"birthYear"}
            className={""}
            type={"number"}
            id="birthYear"
            hasLabel={true}
            label="سال تولد"
            placeholder=""
            inputValue={data?.birthYear}
            onChange={(name, value) => handleChange(name, value)}
          ></Input>
           </div>
           <div className="sm:w-1/2">
            <SelectInput options={['فروردین','اردیبهشت','خرداد','تیر','مرداد','شهریور','مهر','آبان','آذر','دی','بهمن','اسفند']} title={"ماه تولد"} className={""} id={"birthMonth"} name={"birthMonth"} inputValue={data?.birthMonth} onchange={(name,value)=>handleChange(name,value)} ></SelectInput>
          
          {/* </div> */}
          </div>
          <div className="sm:w-1/2">
            <SelectInput options={['فروردین','اردیبهشت','خرداد','تیر','مرداد','شهریور','مهر','آبان','آذر','دی','بهمن','اسفند']} title={"ماه تولد"} className={""} id={"birthMonth"} name={"birthMonth"} inputValue={data?.birthMonth} onchange={(name,value)=>handleChange(name,value)} ></SelectInput>
          
          {/* </div> */}
          </div>
           </div>
        </div>
        </div>
        <div className="grid sm:grid-cols-3 grid-cols-2 gap-4 sm:shadow-md bg-[#ffffff] py-10 px-8 rounded-xl mt-[40px]">
        
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

  );
};
