import { Input } from "../Common/Form/Input";
import { File } from "../Common/Form/File"; 
import { SelectInput } from "../Common/Form/SelectInput";
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
        <div className="flex justify-between lg:flex-row md:flex-row flex-col items-center shadow-md bg-[#ffffff] py-10 px-8 rounded-xl">
        <div className="w-1/4 flex flex-col justify-center items-center gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 532 532" ><g><g><circle cx="270.759" cy="260.92941" r="86.34897" fill="#a0616a"/><polygon points="199.2879 366.61365 217.2879 320.61365 310.2879 306.61365 320.28003 408.44043 226.28003 410.44043 199.2879 366.61365" fill="#a0616a"/></g><path d="M357.94449,276.8613c-1.12067,4.48965-3.38602,15.17972-6.9238,15.23233-2.89023,.04208-5.65668-46.33466-2.76953-54.00568,3.31638-8.81271-5.39886-19.96062-11.96411-25.6832-11.80423-10.2894-38.00696,11.80466-64.65118,1.79587-.70633-.26482-.56558-.23502-8.97934-3.59174-25.88966-10.32974-27.2506-10.62788-28.73386-10.77521-12.55046-1.24167-27.86705,9.02844-34.12146,21.55038-6.50168,13.01653-1.06937,24.18106-7.18346,55.67184-.71246,3.67065-1.83138,8.90216-3.59174,8.97934-3.21819,.14029-6.3605-17.04846-7.18346-21.55038-3.44792-18.86186-6.7722-37.04675,0-57.46771,.73878-2.22729,5.29158-10.49458,14.36693-26.93799,13.0744-23.68825,19.65018-35.57709,21.55038-37.7132,13.62859-15.32624,38.43575-29.30734,59.26357-23.34626,10.52704,3.01299,8.63953,7.85691,21.55038,12.57105,23.00821,8.40057,43.00476-1.87303,46.69254,5.3876,1.9537,3.84602-3.51236,7.01686-3.59174,14.36693-.13593,12.6114,15.81424,16.25575,25.14212,28.73386,5.01447,6.70819,13.59753,6.78012-8.87228,96.78212l.00003,.00003Z" fill="#2f2e41"/></g><path d="M464.92017,442.61035c-3.48022,3.91016-7.09009,7.74023-10.83008,11.48047-50.23999,50.23926-117.04004,77.90918-188.09009,77.90918-61.40991,0-119.63989-20.66992-166.75-58.71973-.03003-.01953-.05005-.04004-.07983-.07031-6.25-5.03906-12.30005-10.39941-18.14014-16.05957,.10986-.87988,.22998-1.75,.35986-2.61035,.82007-5.7998,1.73022-11.33008,2.75-16.41992,8.3501-41.71973,118.22021-85.51953,121.08008-86.66016,.04004-.00977,.06006-.01953,.06006-.01953,0,0,14.14014,52.12012,74.72998,51.4502,41.27002-.4502,33.27002-51.4502,33.27002-51.4502,0,0,.5,.09961,1.43994,.2998,11.91992,2.53027,94.68018,20.70996,127.33008,45.52051,9.94995,7.55957,17.08984,23.66016,22.21997,42.85938,.21997,.82031,.42993,1.66016,.65015,2.49023Z" fill="#6c63ff"/><path d="M454.09009,77.91016C403.8501,27.6709,337.05005,0,266,0S128.15015,27.6709,77.90991,77.91016C27.67017,128.15039,0,194.9502,0,266c0,64.85059,23.05005,126.16016,65.29004,174.57031,4.03003,4.62988,8.23999,9.13965,12.61987,13.52051,1.03003,1.0293,2.07007,2.05957,3.12012,3.05957,5.84009,5.66016,11.89014,11.02051,18.14014,16.05957,.02979,.03027,.0498,.05078,.07983,.07031,47.11012,38.0498,105.3401,58.71973,166.75001,58.71973,71.05005,0,137.8501-27.66992,188.09009-77.90918,3.73999-3.74023,7.34985-7.57031,10.83008-11.48047,43.36987-48.71973,67.07983-110.83984,67.07983-176.61035,0-71.0498-27.66992-137.84961-77.90991-188.08984Zm10.17993,362.20996c-7.86987,8.9502-16.33008,17.37012-25.33008,25.18066-17.06982,14.84961-36.06982,27.5293-56.55981,37.62988-7.19019,3.5498-14.56006,6.7793-22.1001,9.66992-29.29004,11.24023-61.08008,17.39941-94.28003,17.39941-32.04004,0-62.76001-5.73926-91.18994-16.23926-11.67017-4.30078-22.94995-9.41016-33.78003-15.26074-1.59009-.85938-3.16992-1.72949-4.73999-2.61914-8.26001-4.68066-16.25-9.79004-23.91992-15.31055-10.98999-7.87988-21.3501-16.58984-30.98022-26.03027-5.3999-5.29004-10.55981-10.7998-15.48975-16.5293C26.09009,391.77051,2,331.65039,2,266,2,120.43066,120.42993,2,266,2s264,118.43066,264,264c0,66.66016-24.82983,127.62012-65.72998,174.12012Z" fill="#3f3d56"/></svg>
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
        <div className="w-3/4 grid grid-cols-3 gap-4">
          <div className="">
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
          <div className="">
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
          <div className="">
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
          <div className="text-right flex flex-col gap-XS w-full  col-span-3">
            <label
              className="text-myblack text-sm font-normal leading-normal dark:text-[#bac4c8] "
              htmlFor="aboutMe"
            >
             درباره من
            </label>
          <textarea className="textarea textarea-primary textarea-lg text-right" id="aboutMe" placeholder="Bio" name="aboutMe"
           onChange={(e)=>handleChange(e.target.name,e.target.value)}></textarea>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-3" >
          <SelectInput options={["خانم","آقا"]} title={"جنسیت"} className="" id="gender" name="gender" inputValue={data?.gender}  onchange={(name, value) => handleChange(name, value)} />
          <SelectInput options={["متاهل","مجرد"]} title={"وضعیت تاهل"} className="" id="marital" name="marital" inputValue={data?.marital} onchange={(name,value)=>handleChange(name,value)} />
          <SelectInput options={["مشمول","معاف","در حال خدمت","پایان خدمت"]} title={"خدمت سربازی"} className="w-1/3" id="military" name="military" inputValue={data?.military}  onchange={(name, value) => handleChange(name, value)}/>
          <div className="flex justify-center items-center col-span-3 gap-4">
            <div className="w-[32%]">
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
           <div className="w-[32%]">
            <SelectInput options={['فروردین','اردیبهشت','خرداد','تیر','مرداد','شهریور','مهر','آبان','آذر','دی','بهمن','اسفند']} title={"ماه تولد"} className={""} id={"birthMonth"} name={"birthMonth"} inputValue={data?.birthMonth} onchange={(name,value)=>handleChange(name,value)} ></SelectInput>
          
          </div>
          </div>
           </div>
        </div>
        </div>
        <div className="grid grid-cols-3 gap-4 shadow-md bg-[#ffffff] py-10 px-8 rounded-xl mt-[40px]">
        
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
      </form>

  );
};
