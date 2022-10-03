import { dataContext } from "../../dataContext";
import { useContext } from "react";

export default function About() {
  const { aboutData } = useContext(dataContext);

  return aboutData.length > 0 && <h4 className="about">{aboutData}</h4>;
}
