import { dataContext } from "../../dataContext";
import { useContext } from "react";

export default function SectionTitle(props) {
  const { title } = props;
  return <h1 className="section-title">{title}</h1>;
}
