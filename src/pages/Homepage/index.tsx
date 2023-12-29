import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { ArrowLeft } from "react-feather";
import { Link } from "react-router-dom"
// import {ReactComponent as ResumeSVG} from '../../svgs/resume.svg';
import  ResumeSVG  from "../../svgs/resume.svg"
import { Button } from "../../components/Common/Form/Button"
export const HomePage:React.FC=():JSX.Element=>{
    return(
      <div className="">
       <div className="lg:h-[88vh] md:h-[80vh] sm:[60vh]  lg:px-[88px] px-[40px] md:px-[60px] flex py-[70px] justify-between ">
       <div className="flex flex-col items-start justify-center gap-8 ">
          <h1 className="text-3xl font-black text-right ">دنبال نقطه‌ی شروع میگردی؟<br/> از همین جا شروع کن</h1>
          <div className="flex flex-row justify-center items-center gap-8 p-4 rounded-2xl">
          <h2 className="text-xl">همه چیز آماده است. تو آماده ای؟</h2>
          <Link to="/resumeProgress">
          <Button className="btn btn-primary text-[#ffffff] text-base w-[180px] h-[58px] hover:bg-primary" id={""} onClick={()=>{}} title={"برو به رزومه ساز"} hasIcon={true} icon={faArrowLeft}></Button></Link></div>
        </div>
        <div className="hidden lg:block">
        <img src={ResumeSVG} className="z-10 w-[500px] -scale"></img>
        {/* <ResumeSVG/> */}
        </div>
        
       </div>

       <div></div>
      </div>
    )
}