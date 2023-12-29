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
    leavingYear: number;
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
  }

  const initialState: valueType =
    // JSON.parse(localStorage.getItem("values") || "{}").education &&
    // JSON.parse(localStorage.getItem("values") || "{}").business
    localStorage.getItem("values")
      ? JSON.parse(localStorage.getItem("values") || "{}")
      : {
          jobTitle: "",
          firstName: "",
          lastName: "",
          birthYear: 0,
          birthMonth: "",
          birthDay: "",
          gender: "",
          aboutMe: "",
          military: "",
          marital: "",
          phoneNumber: "",
          email: "",
          province: "",
          city: "تهران",
          address: "",
          education: [
            {
              id: 0,
              grade: "",
              major: "",
              orientation: "نرم افزار",
              collegeName: "",
              collegeType: "",
              collegeProvince: "",
              enteringYear: 1390,
              average: 0,
              graduationYear: 1390,
            },
          ],
          business: [
            {
              id:0,
              position: "",
              level: "",
              company: "",
              employmentYear: 1390,
              leavingYear: 1390,
            },
          ],
        };
  const [values, setValues] = useState<valueType>(initialState);
 // const [education,setEducation]=useState<Education>(init)
  const [select, setSelect] = useState<number>(
    Number(localStorage.getItem("select") || 1)
  );
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem("select", select.toString());
    //console.log(select);
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
  const handleChange = (name: string, value: string | number) => {
    
      setValues({ ...values, [name]: value });   
    
  };
    const handleItemChange = (name: string, value: string ,id:number) => {
      console.log(values.education[1]);
     // const newEducation=[...values.education,{ ...values.education[id], [name]: value }]
      setValues({
        ...values,
        education: [
          (values.education[id] = { ...values.education[id], [name]: value }),
          ...values.education,
        ],
      });
     
    };
  const addEducation = () => {
    setValues({
      ...values,
      education: [
        ...values.education,
        { 
          id:values.education.length,
          grade: "",
          major: "",
          orientation: "",
          collegeName: "",
          collegeType: "",
          collegeProvince: "",
          enteringYear: 1390,
          average: 0,
          graduationYear: 1390,
        },
      ],
    });
  //  console.log(values.education);
   localStorage.setItem("values", JSON.stringify(values));
  };
  const addBusiness = () => {
    setValues({
      ...values,
      business: [
        ...values.business,
        {id:values.business.length-1,
          position: "",
          level: "",
          company: "",
          employmentYear: 1390,
          leavingYear: 1390,
        },
      ],
    });
  // console.log(values.education);
  };
  return (
    <>
      <ProgressBar select={select} selectItem={handleSelect} />
      <div className="lg:px-[88px] sm:px-[40px] md:px-[60px] relative sm:bg-bgColorLight sm:py-[40px]">
        {select === 1 ? (
          <PersonalInfo data={values} handleChange={handleChange} />
        ) : select === 2 ? (
          <EducationInfo
            data={values.education}
            handleChange={handleItemChange}
            addEducation={addEducation}
          />
        ) : select === 3 ? (
          <BusinessInfo
            data={values.business}
            handleChange={handleItemChange}
            addBusiness={addBusiness}
          />
        ) : select === 4 ? (
          <Skills />
        ) : (
          <Projects />
        )}

        <div className="fixed bottom-10 left-0 lg:px-[88px] px-[40px] md:px-[60px] flex justify-end gap-4 items-center w-full">
          <div>
            <Button
              className={"hidden "}
              id={"previous"}
              hasIcon={true}
              icon={faArrowRight}
              onClick={goPrevious}
              title={"مرحله قبلی"}
              direction={"left"}
            ></Button>
            <Button
              className={"sm:hidden"}
              id={"previous"}
              hasIcon={true}
              icon={faArrowRight}
              onClick={goPrevious}
              title={""}
              direction={"left"}
            ></Button>
          </div>
          <div>
            <Button
              className={"hidden sm:block bg-successColor border-none"}
              id={"next"}
              hasIcon={true}
              icon={faArrowLeft}
              color="successColor"
              direction="left"
              onClick={goForward}
              title={`${select === 5 ? "ذخیره و مشاهده" : "ذخیره و ادامه"}`}
            ></Button>
            <Button
              className={"sm:hidden"}
              id={"next"}
              hasIcon={true}
              icon={faArrowLeft}
              direction="right"
              onClick={goForward}
              title={`${select === 5 ? "" : ""}`}
            ></Button>
          </div>
        </div>
      </div>
    </>
  );
};
