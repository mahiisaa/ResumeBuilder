import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import  ResumeSVG  from "../../svgs/resume.svg"
export const HomePage:React.FC=():JSX.Element=>{
    return(
      <div className="">
       <div className="lg:h-[88vh] md:h-[80vh] sm:[60vh]  lg:px-[88px] px-[40px] md:px-[60px] flex py-[70px] justify-between ">
       <div className="flex flex-col items-start justify-center gap-8 ">
          <h1 className="text-3xl font-black text-right ">دنبال نقطه‌ی شروع میگردی؟<br/> از همین جا شروع کن</h1>
          <div className="flex flex-row justify-center items-center gap-8 bg-[#e4d9fc] p-4 rounded-2xl">
          <h2 className="text-xl">همه چیز آماده است. تو آماده ای؟</h2>
          <Link to="/resumeProgress">
          <button className="btn btn-primary text-[#ffffff] text-base w-[180px] h-[58px] "><FontAwesomeIcon className="pr-XS"  icon={faArrowLeft} /> برو به رزومه ساز</button></Link></div>
        </div>
        <div className="hidden lg:block">
        <img src={ResumeSVG} className="transform -scale-x-100"></img>
        </div>
        
       </div>

       <div></div>
      </div>
    )
}