import Section from "./Section";
import InputText from "./InputText";
export default function CoverForm(props) {
  const { changeFormData } = props;
  return (
    <>
      <Section section="cover" />
      <div className="form-grid">
        <InputText
          name="firstName"
          label="First name"
          changeHandle={changeFormData}
        />
        <InputText
          name="lastName"
          label="Last name"
          changeHandle={changeFormData}
        />
        <InputText
          name="position"
          label="Position"
          changeHandle={changeFormData}
        />
      </div>
    </>
  );
}
