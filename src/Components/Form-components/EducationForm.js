import Section from "./Section";
import InputText from "./InputText";
export default function EducationForm(props) {
  const {
    educationData,
    index,
    changeEducationData,
    addEducation,
    removeEducation,
    length,
  } = props;
  const { institution, degree, year } = educationData;
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
          <button className="add-field" onClick={() => removeEducation(index)}>
            remove entry
          </button>
        )}
        {isLast && (
          <button className="add-field" onClick={() => addEducation(index)}>
            add education
          </button>
        )}
      </div>
    </>
  );
}
