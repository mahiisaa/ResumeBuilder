import {faBars  } from "@fortawesome/free-solid-svg-icons";
import {faSignIn  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const Header: React.FC = (): JSX.Element => {
  return (
    <div className="flex flex-row justify-between items-center h-[74px] lg:px-[88px] px-[40px] md:px-[60px] border-b md:border-b-2 border-bgColor ">
            <div className="w-1/3">
        <div className="sm:hidden text-start"><FontAwesomeIcon icon={faBars} size="lg"/></div>
        <ul className="hidden sm:flex sm:flex-row sm:justify-start sm:items-center text-base gap-M text-darkcolor cursor-pointer">
          <li className="hover:bg-bgColorLight rounded-md py-2 px-3 ">نمونه رزومه ها</li>
          <li className="hover:bg-bgColorLight rounded-md py-2 px-3">قالب رزومه ها</li>
          <li className="hover:bg-bgColorLight rounded-md py-2 px-3">مجله</li>
        </ul>
      </div>
      <Link to="/">
     <h1 className="text-2xl font-black w-1/3 text-center text-primaryLight">Resume</h1>
     </Link>

      <div className="w-1/3 flex justify-end"><Link to={"/login"}> <button className="btn hidden w-[148px] text-base sm:flex sm:justify-center sm:items-center text-start border border-mygray text-myblack px-2"><FontAwesomeIcon className="" icon={faSignIn } />ورود | ثبت نام </button><FontAwesomeIcon className="sm:hidden" icon={faSignIn} size="lg"/></Link></div>
    </div>
  );
};
