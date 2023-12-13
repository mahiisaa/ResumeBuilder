import { useEffect, useState } from "react";
import { PersonalInfo } from "../../PersonalInfo";
import { ProgressBar } from "../../ProgressBar";
import { Button } from "../../Common/Form/Button";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { EducationInfo } from "../../EducationInfo";
import { BusinessInfo } from "../../BusinessInfo";
import { Skills } from "../../Skills";
import { Projects } from "../../Projects";
import { AXIOS } from "../../../config/axios.config";
import { API_URLS } from "../../../constants/api.urls";

export const Progress: React.FC = (): JSX.Element => {
  type valueType = {
    jobTitle: string;
    firstName: string;
    lastName: string;
    birthYear: number;
    birthMonth: string;
    gender: string;
    aboutMe: string;
    military: string;
    marital: string;
    phoneNumber: string;
    email: string;
    province: string;
    city: string;
    address: string;
    education:[{
      grade:string;
      major:string;
      orientation:string;
      collegeName:string;
      collegeProvince:string;
      enteringYear:number;
      graduationYear:number
  }];
  business:[{
   position:string;
   level:string;
   company:string;
   employmentYear:number;
   leavingYear:number;
}]
    
  };
  const [values, setValues] = useState<valueType>(
    JSON.parse(
      localStorage.getItem("values") ||
        `{  jobTitle: "",
     firstName: "",
     lastName: "",
     birthYear:0;
     birthMonth:"",
     gender: "",
     aboutMe:"",
     military: "",
     marital: "",
     phoneNumber: "",
     email: "",
     province: "",
     city: "",
     address: ""
     education:[{
      grade:"";
      major:"";
      orientation:"";
      collegeName:"";
      collegeProvince:"";
      enteringYear:1390;
      graduationYear:1390
  }];
  business:[{
   position:"";
   level:"";
   company:"";
   employmentYear:1390;
   leavingYear:1390;
}]}`
    )
  );
  const [select, setSelect] = useState<number>(
    Number(localStorage.getItem("select"))
  );
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    localStorage.setItem("select", select.toString());
    // localStorage.setItem("values",JSON.stringify(values))
    console.log(select);
  }, [select]);
  const handleSelect = (id: number) => {
    setSelect(id);
  };
  const goForward = async () => {
    if (select < 5) {
      setSelect(select + 1);
    } else {
      setLoading(true);
      try {
        const request = await AXIOS.post(API_URLS.GetResume, {
          values,
        });

        setResponse(request.data);
        setError("");
      } catch (error: any) {
        setResponse("");

        setError(error);
      } finally {
        setLoading(false);
      }
    }
    localStorage.setItem("values", JSON.stringify(values));
  };
  const goPrevious = () => {
    if (select > 1) {
      setSelect(select - 1);
    }
  };
  const handleChange = (name: string, value: string) => {
    setValues({ ...values, [name]: value });
  };
  return (
    <>
      <ProgressBar select={select} selectItem={handleSelect} />
      <div className="lg:px-[88px] px-[40px] md:px-[60px] relative bg-bgColor py-[90px]">
        {select === 1 ? (
          <PersonalInfo data={values} handleChange={handleChange} />
        ) : select === 2 ? (
          <EducationInfo />
        ) : select === 3 ? (
          <BusinessInfo />
        ) : select === 4 ? (
          <Skills />
        ) : (
          <Projects />
        )}

        <div className="fixed bottom-10 left-0 lg:px-[88px] px-[40px] md:px-[60px] flex justify-between items-center w-full">
          <Button
            className={""}
            id={"previous"}
            hasIcon={true}
            icon={faArrowRight}
            onClick={goPrevious}
            title={"مرحله قبلی"}
            direction={"left"}
          ></Button>
          <Button
            className={""}
            id={"next"}
            hasIcon={true}
            icon={faArrowLeft}
            direction="right"
            onClick={goForward}
            title={`${select === 5 ? "ذخیره و مشاهده" : "ذخیره و ادامه"}`}
          ></Button>
        </div>
      </div>
    </>
  );
};
