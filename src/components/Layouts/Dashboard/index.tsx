import { Outlet } from "react-router-dom"
import {Header} from "../../../components/Header"
import {Footer} from "../../../components/Footer"
export const Dashboard:React.FC=():JSX.Element=>{
    return(
        <div>
        <Header/>
           <Outlet/>
           {/* <Footer/> */}
        </div>
    )
}