import { dataContext } from "../../dataContext";
import { useContext } from "react";

export default function Theme(props) {
  const { color, changeBackground } = props;
  return (
    <div
      onClick={() => changeBackground(color)}
      className="theme"
      style={{ backgroundColor: color }}
    ></div>
  );
}
