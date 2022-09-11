import Section from "./Section";
import InputText from "./InputText";
export default function Skillsform(props) {
  const { skillsData, changeskillsData, addSkill } = props;
  const skillsInput = [];
  Object.keys(skillsData).forEach((key, index) => {
    skillsInput.push(
      <InputText
        key={index}
        name={[key]}
        value={skillsData[key]}
        label={`skill ${index + 1}`}
        changeHandle={changeskillsData}
      />
    );
  });

  return (
    <>
      <Section section="skills" />
      <div className="form-grid">
        {skillsInput}
        <button onClick={addSkill} className="add-field">
          add skill
        </button>
      </div>
    </>
  );
}
