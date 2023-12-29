import { Link } from "react-feather";
import { Button } from "../../../../components/Common/Form/Button";
import { Input } from "../../../../components/Common/Form/Input";
import { useFormik } from "formik";
import * as yup from 'yup'
const validationSchema=yup.object({
    phone:yup.string().min(11,'شماره همراه اشتباه است').required('لطفا شماره همراه خود را وارد کنید')
})
interface Idata{
phone:string
}
interface IInquiryProps {
  onNextStep: (data: Idata) => void;
  initialValue: Idata;
}
export const Inquiry:React.FC<IInquiryProps>=({onNextStep,initialValue}):JSX.Element=>{
    const handleChange = (name: string, value: string) => {};
    const Authentication = () => {};
    const formik = useFormik({
      initialValues: {
        phone: initialValue.phone || "",
      },
      validationSchema,
      onSubmit: (data) => {
        onNextStep(data);
      },
    });
    return (
      <div className="lg:px-[88px] px-[100px] md:px-[60px] relative sm:bg-bgColor sm:py-[80px] py-0  flex justify-center items-center h-[100vh]">
        <form onSubmit={formik.handleSubmit}>
          <div className="flex justify-center  flex-col items-center sm:shadow-md bg-[#ffffff] sm:py-8 sm:px-10 px-5 py-4 rounded-xl w-[400px] sm:w-[500px] gap-4">
            <Link to={"/"}> 
              <h1 className="text-2xl font-bold text-center text-primary mb-1">
                JobReel
              </h1>
            </Link>
            <h2 className="text-xl text-center text-myblack mb-2 font-bold">
              ورود و یا ثبت نام
            </h2>
            <div className="w-full">
              <Input
                name={"phone"}
                id={"phone"}
                className={""}
                type={"text"}
                inputValue={formik.values.phone}
                onChange={formik.handleChange}
                hasLabel={true}
                label={"ایمیل و یا شماره همراه را وارد کنید"}
              ></Input>
            </div>
            <div className="w-full">
              <Button
                className={"w-full bg-primary hover:bg-primary text-[#ffffff]"}
                id={""}
                onClick={Authentication}
                title={"احراز هویت"}
              ></Button>
            </div>
            <div className="w-full">
              <Button
                className={"border-mygray w-full text-myblack"}
                title={"ورود با گوگل"}
                id={""}
                onClick={() => {}}
              ></Button>
            </div>
          </div>
        </form>
      </div>
    );
}