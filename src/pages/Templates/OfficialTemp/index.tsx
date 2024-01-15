import { useEffect, useRef, useState } from "react";
import ReactToPrint from "react-to-print";
export const OfficialTemp:React.FC=():JSX.Element=>{
    interface Education {
      id: number;
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
      id: number;
      position: string;
      level: string;
      company: string;
      employmentYear: number;
      componyProvince: string;
      address: string;
      leavingYear: number;
    }
    interface Skills {
      id: number;
      title: string;
      type: string;
      level: string;
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
      skills: Skills[];
      projects: Projects[];
    }
    const [data, setData] = useState<valueType>(
      JSON.parse(localStorage.getItem("values") || "{}")
    );
      const [techSkills, setTechSkills] = useState<Skills[]>([]);
      const [softSkills, setSoftSkills] = useState<Skills[]>([]);
      const [Langs, setLangs] = useState<Skills[]>([]);
    useEffect(() => {
    const techskills = data?.skills?.filter((item) => item.type === "technical");
    setTechSkills(techskills);
    const softskills = data?.skills?.filter((item) => item.type === "soft");
    setSoftSkills(softskills);
    const langs = data?.skills?.filter((item) => item.type === "langs");
    setLangs(langs);
    // setTechSkills(langs);
  }, [data]);
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
          className=" w-[21cm] h-[29.7cm] bg-[#ffffff] p-[5mm] overflow-hidden relative box-border break-after-page shadow-md "
          ref={componentRef}
        >
          <section className="p-L w-full flex justify-between ">
            <div className="font-bold">
              <h2 className="text-2xl">{`${data.firstName}  ${data.lastName} `}</h2>
              <h1>{data.jobTitle}</h1>
            </div>
            <div className="text-left">
              <div className="pb-XS">{data.phoneNumber}</div>
              <div className="pb-XS">{data.email}</div>
              <div className="pb-XS">{`${data.province} , ${data.city} `}</div>
            </div>
          </section>
          <div className="p-L">
            <section className="text-justify">{data.aboutMe}</section>
            <div className="grid grid-cols-7 pt-L">
              <div className="col-span-3 border-l border-mygray">
                <section className="">
                  <h2 className="font-bold text-xl border-b border-mygray">
                    تحصیلات
                  </h2>
                  <ul>
                    {data?.education?.map((item) => (
                      <li className="flex flex-col  text-base">
                        <div className="font-bold">{`${item.major} -گرایش ${item.orientation}`}</div>
                        <div>{`${item.collegeType}  ${item.collegeName}`}</div>
                        <div>{`${item.enteringYear} - ${item.graduationYear}`}</div>
                        <div>{item.average}</div>
                      </li>
                    ))}
                  </ul>
                </section>
                <section className="">
                  <h2 className="font-bold text-xl border-b border-mygray">
                    مهارت ها
                  </h2>
                  <div className="flex flex-wrap gap-2 py-S text-sm">
                    {techSkills?.map((item) => (
                      <div className="border-2 px-2 py-1 text-primary border-primary rounded-lg font-bold">{`${item.title} | ${item.level}`}</div>
                    ))}
                  </div>
                </section>
                <section className="">
                  <h2 className="font-bold text-xl border-b border-mygray">
                    سایر مهارت ها
                  </h2>
                  <ul className="p-S text-sm list-disc">
                    {softSkills?.map((item) => (
                      <li className="">{item.title}</li>
                    ))}
                  </ul>
                </section>
                <section className="">
                  <h2 className="font-bold text-xl border-b border-mygray">
                    زبان ها
                  </h2>
                  <ul className="p-S text-sm list-disc">
                    {Langs?.map((item) => (
                      <li className="">{item.title}</li>
                    ))}
                  </ul>
                </section>
              </div>
              <div className="col-span-4">
                <section className="">
                  <h2 className="font-bold text-xl border-b border-mygray pr-S">
                    سوابق کاری
                  </h2>
                  <ul className="p-S">
                    {data?.business?.map((item) => (
                      <li className="flex flex-col  text-base">
                        <div className="font-bold">{item.position}</div>
                        <div>{item.company}</div>
                        <div>{`${item.employmentYear} - ${item.leavingYear}`}</div>
                      </li>
                    ))}
                  </ul>
                </section>
                <section className="">
                  <h2 className="font-bold text-xl border-b border-mygray pr-S">
                    پروژه ها
                  </h2>
                  <ul className="p-S">
                    {data?.business?.map((item) => (
                      <li className="flex flex-col  text-base">
                        <div className="font-bold">{item.position}</div>
                        <div>{item.company}</div>
                        <div>{`${item.employmentYear} - ${item.leavingYear}`}</div>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}