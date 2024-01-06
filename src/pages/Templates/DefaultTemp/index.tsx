import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useRef, useState } from "react"
import AvatarSVG from "../../../svgs/avatar.svg"
import ReactToPrint from "react-to-print";
import { ValueType } from "tailwindcss/types/config";
export const DefaultTemp:React.FC=():JSX.Element=>{
   interface Education {
    id:number
    grade: string;
    major: string;
    orientation: string;
    collegeType: string;
    collegeName: string;
    collegeProvince: string;
    average: number;
    enteringYear: number;
    graduationYear: number;
  }
  interface Business {
    id:number
    position: string;
    level: string;
    company: string;
    employmentYear: number;
    componyProvince:string;
    address:string
    leavingYear: number;
  }
  interface Skills{
    id:number,
    title:string,
    type:string,
    level:string
  }
  interface Projects {
    id: number;
    title: string;
    employer: string;
    description: string;
  }
  interface valueType {
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
    education: Education[];
    business: Business[];
    skills:Skills[];
    projects:Projects[];
  }

    const [data,setData]=useState<valueType>(JSON.parse(localStorage.getItem("values")||'{}'))
    const componentRef = useRef<HTMLDivElement>(null);
    return (
      <div className="flex justify-center items-center flex-col bg-bgColor py-10 px-8 mb-[20px] rounded-md relative">
        <ReactToPrint
          bodyClass="print"
          documentTitle={data.lastName}
          trigger={() => (
            <button className="btn btn-primary fixed bottom-5 left-20">
              پرینت رزومه
            </button>
          )}
          content={() => componentRef.current}
        />
        <div
          className="grid grid-cols-3 w-[21cm] h-[29.7cm] bg-[#ffffff] p-[5mm] overflow-hidden relative box-border break-after-page shadow-md "
          ref={componentRef}
        >
          <div className="flex items-center flex-col border-l border-mygray">
            <img src={AvatarSVG} className="" />

            <h2 className="mt-2 font-bold text-center">{`${data.firstName} ${data.lastName} `}</h2>
            <h2 className="mt-2 font-bold text-center">{`${data.birthYear}/ ${data.birthMonth}/ ${data.birthDay}`}</h2>
            <p className="text-sm">{data.marital}</p>
            {data.gender === "آقا" && <p>{data.military}</p>}
            <section className="w-full px-5 py-6">
              <h2 className="font-bold text-sm">اطلاعات تماس</h2>
              <ul className="">
                <li className="flex justify-between text-xs w-full block">
                  <div>موقعیت :</div>
                  <div>
                    {data?.province ? data.province : "استان"}{" "}
                    {data?.city ? data.city : "،شهر"}
                  </div>
                </li>
                <li className="flex justify-between text-xs w-full block">
                  <div>شماره همراه:</div>
                  <div>{data?.phoneNumber}</div>
                </li>
                <li className="flex justify-between text-xs w-full block">
                  <div>ایمیل :</div>
                  <div>{data.email}</div>
                </li>
                <li className="flex justify-between text-xs w-full block">
                  <div>ایمیل :</div>
                  <div>{data.email}</div>
                </li>
              </ul>
            </section>
            <div>
              <ul>
                <li></li>
              </ul>
            </div>
          </div>
          <div className="col-span-2 p-4">
            <section className="">
              {data.aboutMe && <h3 className="font-bold text-sm">درباره من</h3>}
              <p>{data.aboutMe}</p>
            </section>
            <section>
              <h3 className="font-bold text-sm">تحصیلات</h3>
              <ul>
                {data?.education?.map((item) => (
                  <>
                    <li>
                      {`
                        ${item.major} -
                        ${item.orientation}`}
                    </li>
                    <li>{item.grade}</li>
                    <li>
                      <span className="font-bold">{item.collegeName}</span>
                      {`
                        ${item.enteringYear} -
                        ${item.graduationYear}`}
                    </li>
                    <li>{item.average}</li>
                    <li>{item.collegeProvince}</li>
                  </>
                ))}
              </ul>
            </section>
            <section>
              <h3 className="font-bold text-sm">سوابق شغلی</h3>
              <ul>
                {data?.business?.map((item) => (
                  <>
                    <li>
                      {`
                        ${item.position} -
                        ${item.level}`}
                    </li>
                    <li>{item.company}</li>
                    <li>
                      
                      {`
                        ${item.employmentYear} -
                        ${item.leavingYear}`}
                    </li>
                    <li>{item.address}</li>
                   
                  </>
                ))}
              </ul>
            </section>
            <section></section>
            <section></section>
          </div>
        </div>
      </div>
    );
}