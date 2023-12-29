import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IProps {
  hasLabel?: boolean;
  label?: string;
  id: string;
  name: string;
  inputValue?: string;
  hasIcon?: boolean;
  icon?: any;
  text?: string;
  styles: string;
  onChangeFile?: (name: string, value: any) => void;
}

export const File: React.FC<IProps> = ({
  inputValue,
  onChangeFile,
  id,
  name,
  hasLabel,
  label,
  text,
  hasIcon,
  icon,
  styles,
}): JSX.Element => {
//   const handleChange = (e) => {
//     if (inputValue) {
//       onChangeFile(name, "");
//     } else {
//       onChangeFile(e.target.name, e.target.files[0]);
//     }
//   };

  return (
    <div className="flex flex-row-reverse items-center">
      {hasLabel && (
        <label
          className="dark:text-[#bac4c8] text-black text-sm font-normal leading-normal mr-S"
          htmlFor={id}
        >
          {label}
        </label>
      )}
   
        <label className={`dark:text-[#bac4c8] ${styles}`}>
          {text}
          {hasIcon && <FontAwesomeIcon className="mr-2" icon={icon} />}
          {/* {hasIcon && <Icon icon={icon} />} */}
          <input
            value={inputValue}
            type="file"
            id={id}
            name={name}
            hidden
            // onChange={handleChange}
          />
        </label>

    </div>
  );
};


