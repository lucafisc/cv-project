import Section from "./Section";
import InputText from "./InputText";
import useForm from "../../Hooks/useForm";
import { useContext } from "react";
import { Context } from "../../App";
export default function AboutForm(props) {
  const { dataTest } = useContext(Context);
  const { data, handleUpdateField } = useForm();
  return (
    <>
      <Section section="about" />
      <div className="form-grid">
        <textarea
          className="textarea"
          value={data.about}
          label="about"
          onChange={handleUpdateField}
          type="textArea"
        />
      </div>
    </>
  );
}
