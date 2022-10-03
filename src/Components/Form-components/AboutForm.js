import Section from "./Section";
import { dataContext } from "../../dataContext";
import { useContext } from "react";

export default function AboutForm() {
  const { aboutData, changeAboutData } = useContext(dataContext);
  return (
    <>
      <Section section="about" />
      <div className="form-grid">
        <textarea
          className="textarea"
          value={aboutData}
          label="about"
          onChange={(event) => changeAboutData(event.target.value)}
          type="textArea"
        />
      </div>
    </>
  );
}
