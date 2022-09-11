import Section from "./Section";
import InputText from "./InputText";

export default function AboutForm(props) {
  const { aboutData, changeAboutData } = props;
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
