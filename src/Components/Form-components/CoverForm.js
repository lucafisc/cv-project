import Section from "./Section";
import InputText from "./InputText";
export default function CoverForm(props) {
  const { changeFormData, formData } = props;
  const { firstName, lastName, position } = formData;
  return (
    <>
      <Section section="cover" />
      <div className="form-grid">
        <InputText
          name="firstName"
          value={firstName}
          label="First name"
          changeHandle={changeFormData}
        />
        <InputText
          name="lastName"
          value={lastName}
          label="Last name"
          changeHandle={changeFormData}
        />
        <InputText
          name="position"
          value={position}
          label="Position"
          changeHandle={changeFormData}
        />
      </div>
    </>
  );
}
