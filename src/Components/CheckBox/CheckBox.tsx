import { InputProps } from "../../Types";
import "./Style.css";

const CheckBox = ({ ...rest }: InputProps) => {
  return (
    <label className="container">
      <input {...rest} type="checkbox" />
      <div className="checkmark"></div>
    </label>
  );
};

export default CheckBox;
