import {faBars  } from "@fortawesome/free-solid-svg-icons";
import {faSignIn  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const Header: React.FC = (): JSX.Element => {
  return (
    <div className="flex flex-row justify-between items-center h-[74px] lg:px-[88px] px-[40px] md:px-[60px] border-b md:border-b-2 border-bgColor ">
            <div className="">
        <div className="md:hidden text-start"><FontAwesomeIcon icon={faBars} size="lg"/></div>
        <ul className="hidden md:flex md:flex-row md:justify-start md:items-center text-base gap-XS text-darkcolor cursor-pointer">
          <Link to="/resumeProgress">
          <li className="hover:bg-bgColorLight active:bg-bgColorLight rounded-md py-1 px-2 "> رزومه ساز</li>
          </Link>
          <li className="hover:bg-bgColorLight rounded-md py-1 px-2 ">نمونه رزومه </li>
          <Link to={"/templates"}>
          <li className="hover:bg-bgColorLight rounded-md py-1 px-2">قالب رزومه </li>
          </Link>
          <li className="hover:bg-bgColorLight rounded-md py-1 px-2">مجله</li>
        </ul>
      </div>
      <Link to="/">
     <h1 className="text-2xl font-black  text-center text-primary">JobReel</h1>
     </Link>

      <div className=" flex justify-end"><Link to={"/login"}> <button className="btn hidden w-[148px] text-base sm:flex sm:justify-center sm:items-center text-start border border-myblack text-myblack px-2 font-bold bg-bgColor border-none hover:bg-bgColor font-bold"><FontAwesomeIcon className="" icon={faSignIn } />ورود | ثبت نام </button><FontAwesomeIcon className="sm:hidden" icon={faSignIn} size="lg"/></Link></div>
    </div>
  );
};
