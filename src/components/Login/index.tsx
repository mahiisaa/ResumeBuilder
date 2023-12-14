import { Link } from "react-router-dom";
import { Button } from "../Common/Form/Button";
import { Input } from "../Common/Form/Input"

export const Login:React.FC=():JSX.Element=>{
    const handleChange = (name: string, value: string) => {
    
      };
      const Authentication=()=>{

      }
    return(
        <div className="lg:px-[88px] px-[100px] md:px-[60px] relative sm:bg-bgColor sm:py-[80px] py-0 mt-20 flex justify-center items-center h-[100vh]">
            <form>
                <div className="flex justify-center  flex-col items-center sm:shadow-md bg-[#ffffff] sm:py-8 sm:px-10 px-5 py-4 rounded-xl w-[400px] sm:w-[500px] gap-4">
                <Link to={"/"}>
                <h1 className="text-2xl font-black  text-center text-primaryLight mb-1">Resume</h1>
                </Link>
                <h2 className="text-xl text-center text-myblack mb-2 font-bold">ورود و یا ثبت نام</h2>
                <div className="w-full">
               <Input name={"ایمیل یا شماره همراه"} id={"username"} className={""} type={"text"} inputValue={""} onChange={handleChange} hasLabel={true} label={"ایمیل و یا شماره همراه را وارد کنید"}></Input></div>
               <div className="w-full">
               <Button className={"w-full"} id={""} onClick={Authentication} title={"احراز هویت"}></Button>
               </div>
               <div className="w-full"><button className="btn btn-outline w-full">ورود با گوگل</button></div>
               </div>
            </form>
       </div>
    )
}