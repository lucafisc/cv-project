import { dataContext } from "../../dataContext";
import { useContext } from "react";

export default function InputText(props) {
  const { label, name, changeHandle, value } = props;
  return (
    <div className="input-container">
      <label className="label">{label}</label>
      <input
        name={name}
        value={value}
        className="text-input"
        onChange={(event) => changeHandle(name, event.target.value)}
      ></input>
    </div>
  );
}
