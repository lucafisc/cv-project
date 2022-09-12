import React from "react";
import Theme from "./Form-components/Theme";
import CoverForm from "./Form-components/CoverForm";
import ContactForm from "./Form-components/ContactForm";
import Skillsform from "./Form-components/SkillsForm";
import AboutForm from "./Form-components/AboutForm";
import WorkForm from "./Form-components/WorkForm";
import EducationForm from "./Form-components/EducationForm";
export default function Form(props) {
  const {
    sampleData,
    formData,
    contactData,
    skillsData,
    aboutData,
    workData,
    educationData,
    changeBackground,
    changeFormData,
    changeContactData,
    changeskillsData,
    addSkill,
    changeAboutData,
    changeWorkData,
    addWork,
    removeWork,
    changeEducationData,
    addEducation,
    removeEducation,
  } = props;
  const [colors, setcolors] = React.useState(["#eaeef9", "#f9e3d9", "#fffdde"]);
  const themes = colors.map((color) => (
    <Theme color={color} changeBackground={changeBackground} key={color} />
  ));
  const workForms = workData.map((work, index) => {
    return (
      <WorkForm
        length={workData.length}
        workData={work}
        index={index}
        changeWorkData={changeWorkData}
        addWork={addWork}
        removeWork={removeWork}
      />
    );
  });

  const educationForms = educationData.map((education, index) => {
    return (
      <EducationForm
        length={educationData.length}
        educationData={education}
        index={index}
        changeEducationData={changeEducationData}
        addEducation={addEducation}
        removeEducation={removeEducation}
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
          <button className="button">download cv</button>
        </div>
        <CoverForm formData={formData} changeFormData={changeFormData} />
        <AboutForm aboutData={aboutData} changeAboutData={changeAboutData} />
        <ContactForm
          contactData={contactData}
          changeContactData={changeContactData}
        />
        {workForms}
        {educationForms}
        <Skillsform
          skillsData={skillsData}
          changeskillsData={changeskillsData}
          addSkill={addSkill}
        />
      </div>
    </div>
  );
}
