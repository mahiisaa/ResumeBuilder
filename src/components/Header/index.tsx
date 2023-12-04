import {faBars  } from "@fortawesome/free-solid-svg-icons";
import {faSignIn  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const Header: React.FC = (): JSX.Element => {
  return (
    <div className="flex flex-row justify-between items-center h-[74px] lg:px-[88px] px-[40px] md:px-[60px] ">
      <div className="w-1/3"> <button className="btn hidden w-[160px] text-base lg:flex lg:justify-center lg:items-center border-2 border-mygray  text-myblack"> <span>ورود</span><span>ثبت نام</span>  <FontAwesomeIcon className="text-" icon={faSignIn } /></button></div>
      <Link to="/">
     <h1 className="text-2xl font-bold w-1/3 text-center">Resume</h1>
     </Link>
      <div className="w-1/3">
        <div className="sm:hidden text-end"><FontAwesomeIcon icon={faBars} /></div>
        <ul className=" hidden sm:flex sm:flex-row sm:justify-end sm:items-center  text-base gap-XL text-darkcolor">
          <li className="">تماس با ما</li>
          <li className="">ارتباط با ما</li>
          <li className="">تست</li>
        </ul>
      </div>
    </div>
  );
};