import AvatarSVG from "../../svgs/avatar.svg"
export const DefaultTemp:React.FC=():JSX.Element=>{
    return(
        <div className="grid  ">
         <div>
           <img src={AvatarSVG}/>
           <h1></h1>
           <div>
            <ul>
                <li>

                </li>
            </ul>
           </div>

         </div>
         <div>

         </div>
        </div>
    )
}