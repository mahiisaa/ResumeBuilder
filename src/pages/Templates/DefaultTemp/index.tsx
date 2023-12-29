import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useRef, useState } from "react"
import AvatarSVG from "../../../svgs/avatar.svg"
import ReactToPrint from "react-to-print";
export const DefaultTemp:React.FC=():JSX.Element=>{
    const [data,setData]=useState<any>(JSON.parse(localStorage.getItem("values")||'{}'))
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
                    {data?.province ? data.provice : "استان"}{" "}
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
                {data?.education?.map(
                  (item: {
                    collegeCity: ReactNode;
                    average: ReactNode;
                    graduateYear: any;
                    enteringYear: any;
                    major: any;
                    grade: any;
                    orientaion: any;
                    college: any;
                  }) => (
                    <>
                      <li>
                        {item.major}
                        {item.orientaion}
                      </li>
                      <li>{item.grade}</li>
                      <li>
                        {item.college}
                        {item.enteringYear}
                        {item.graduateYear}
                      </li>
                      <li>{item.average}</li>
                      <li>{item.collegeCity}</li>
                    </>
                  )
                )}
              </ul>
            </section>
            <section></section>
            <section></section>
            <section></section>
          </div>
        </div>
      </div>
    );
}