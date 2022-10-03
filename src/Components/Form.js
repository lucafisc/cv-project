import React from "react";
import Theme from "./Form-components/Theme";
import CoverForm from "./Form-components/CoverForm";
import ContactForm from "./Form-components/ContactForm";
import Skillsform from "./Form-components/SkillsForm";
import AboutForm from "./Form-components/AboutForm";
import WorkForm from "./Form-components/WorkForm";
import EducationForm from "./Form-components/EducationForm";
import { dataContext } from "../dataContext";
import { useContext } from "react";

export default function Form(props) {
  const { sampleData, clearData, workData, educationData, changeBackground } =
    useContext(dataContext);
  const [colors, setcolors] = React.useState(["#eaeef9", "#f9e3d9", "#fffdde"]);
  const themes = colors.map((color) => (
    <Theme color={color} changeBackground={changeBackground} key={color} />
  ));
  const workForms = workData.map((work, index) => {
    return <WorkForm length={workData.length} workData={work} index={index} />;
  });

  const educationForms = educationData.map((education, index) => {
    return (
      <EducationForm
        length={educationData.length}
        educationData={education}
        index={index}
      />
    );
  });

  return (
    <div className="form-container">
      <div className="form-header">
        <h3 className="logo">CV Generator</h3>
        <div className="theme-container">{themes}</div>
      </div>

      <div className="form">
        <div className="form-grid">
          <button onClick={sampleData} className="button">
            sample data
          </button>
          <button onClick={clearData} className="button">
            clear data
          </button>
        </div>
        <CoverForm />
        <AboutForm />
        <ContactForm />
        {workForms}
        {educationForms}
        <Skillsform />
      </div>
    </div>
  );
}
