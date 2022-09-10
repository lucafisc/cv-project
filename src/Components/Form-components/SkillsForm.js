import Section from "./Section";
import InputText from "./InputText";
export default function Skillsform(props) {
  const { skillsData } = props;
  const skillsInput = skillsData.map((skill, index) => {
    return (
      <InputText
        key={index}
        name={skill}
        value={skill}
        label={`skill ${index + 1}`}
        changeHandle={() => console.log("li")}
      />
    );
  });
  return (
    <>
      <Section section="skills" />
      <div className="form-grid">
        {skillsInput}
        <button className="add-field">add skill</button>
      </div>
    </>
  );
}
