import { Input } from "../Common/Form/Input"
import { File } from "../Common/Form/File"
import { ProgressBar } from "../ProgressBar"
export const PersonalInfo:React.FC=():JSX.Element=>{
    return(
<div>
    <ProgressBar/>
        <div className="h-[100vh] bg-bgColor">
            <div className="w-full h-[50vh]">
                <File
              inputValue=""
              id="thumbnail"
              name="thumbnail"
              hasLabel={false}
              text="افزودن تصویر پروفایل"
              hasIcon={false}
              styles="text-brand-primary text-xl font-medium border border-brand-primary h-[55px] rounded-lg w-[212px] p-[10px] cursor-pointer border-box text-center bg-[#ffffff]"
            />
            </div>
            <div>
            <Input name="firstName" label="نام" hasLabel={false} type="text" className="" placeholder="نام خود را وارد کنید"></Input>
             <Input name="lastName" label="نام خانوادگی" hasLabel={false} type="text" className="" placeholder="نام خانوادگی خود را وارد کنید"></Input>
             <label></label>
             <textarea>

             </textarea>
            </div>
        </div>
</div>
    )
}