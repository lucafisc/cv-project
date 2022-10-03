import Section from "./Section";
import InputText from "./InputText";
import { dataContext } from "../../dataContext";
import { useContext } from "react";

export default function CoverForm() {
  const { changeFormData, formData } = useContext(dataContext);
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
