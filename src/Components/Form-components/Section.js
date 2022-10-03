import { dataContext } from "../../dataContext";
import { useContext } from "react";

export default function Section(props) {
  const { section } = props;
  return <h4 className="section">{section}</h4>;
}
