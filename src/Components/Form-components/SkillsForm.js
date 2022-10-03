import Section from "./Section";
import InputText from "./InputText";
import { dataContext } from "../../dataContext";
import { useContext } from "react";

export default function Skillsform() {
  const { skillsData, changeskillsData, addSkill } = useContext(dataContext);
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
        <button onClick={addSkill} className="button">
          add skill
        </button>
      </div>
    </>
  );
}
