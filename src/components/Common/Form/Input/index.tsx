interface IIcon {
    icon: string;
    color?: string;
    size?: number;
    className?: string;
    style?: {};
  }
interface IInputProps{
    name:string,
    className:string,
    type: "text" | "number" | "email" | "password" | "tel" | "hidden" | "file";
    label?: string;
    hasLabel?: boolean;
    placeholder?: string;
    icon?:IIcon;
    autoFocus?: boolean;

}
export const Input:React.FC<IInputProps>=({type,name,className,label,placeholder,icon}):JSX.Element=>{
    return(
        <label htmlFor={name}>
        <input type={type} name={name} placeholder={placeholder} id={name} className={`${className}`}></input>
        </label>
    )
}