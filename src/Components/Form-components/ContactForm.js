import Section from "./Section";
import InputText from "./InputText";
import { dataContext } from "../../dataContext";
import { useContext } from "react";

export default function ContactForm() {
  const { changeContactData, contactData } = useContext(dataContext);
  const { phone, email, address1, address2, nationality, age } = contactData;
  return (
    <>
      <Section section="contact" />
      <div className="form-grid">
        <InputText
          name="phone"
          value={phone}
          label="phone"
          changeHandle={changeContactData}
        />
        <InputText
          name="email"
          value={email}
          label="email"
          changeHandle={changeContactData}
        />
        <InputText
          name="address1"
          value={address1}
          label="address line 1"
          changeHandle={changeContactData}
        />
        <InputText
          name="address2"
          value={address2}
          label="address line 2"
          changeHandle={changeContactData}
        />
        <InputText
          name="nationality"
          value={nationality}
          label="nationality"
          changeHandle={changeContactData}
        />
        <InputText
          name="age"
          value={age}
          label="age"
          changeHandle={changeContactData}
        />
      </div>
    </>
  );
}
