import Section from "./Section";
import InputText from "./InputText";
import { dataContext } from "../../dataContext";
import { useContext } from "react";

export default function EducationForm(props) {
  const { educationData, index, length } = props;
  const { institution, degree, year } = educationData;

  const { changeEducationData, addEducation, removeEducation } =
    useContext(dataContext);

  const isFirst = index === 0 ? true : false;
  const isLast = index === length - 1 ? true : false;

  return (
    <>
      {isFirst && <Section section="education" />}
      <div className="form-grid">
        <InputText
          name={[index, "institution"]}
          value={institution}
          label="institution"
          changeHandle={changeEducationData}
        />
        <InputText
          name={[index, "degree"]}
          value={degree}
          label="degree"
          changeHandle={changeEducationData}
        />
        <InputText
          name={[index, "year"]}
          value={year}
          label="year"
          changeHandle={changeEducationData}
        />
        {!isFirst && (
          <button className="button" onClick={() => removeEducation(index)}>
            remove entry
          </button>
        )}
        {isLast && (
          <button className="button" onClick={() => addEducation(index)}>
            add education
          </button>
        )}
      </div>
    </>
  );
}
