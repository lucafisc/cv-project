import React from "react";
import Theme from "./Form-components/Theme";
import CoverForm from "./Form-components/CoverForm";
import ContactForm from "./Form-components/ContactForm";
import Skillsform from "./Form-components/SkillsForm";
import AboutForm from "./Form-components/AboutForm";
import WorkForm from "./Form-components/WorkForm";
import Section from "./Form-components/Section";

export default function Form(props) {
  const {
    formData,
    contactData,
    skillsData,
    aboutData,
    workData,
    changeBackground,
    changeFormData,
    changeContactData,
    changeskillsData,
    addSkill,
    changeAboutData,
    changeWorkData,
    addWork,
  } = props;
  const [colors, setcolors] = React.useState(["#eaeef9", "#f9e3d9", "#fffdde"]);
  const themes = colors.map((color) => (
    <Theme color={color} changeBackground={changeBackground} key={color} />
  ));
  const workForms = workData.map((work, index) => {
    return (
      <WorkForm
        workData={work}
        index={index}
        changeWorkData={changeWorkData}
        addWork={addWork}
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
        <CoverForm formData={formData} changeFormData={changeFormData} />
        <AboutForm aboutData={aboutData} changeAboutData={changeAboutData} />
        <ContactForm
          contactData={contactData}
          changeContactData={changeContactData}
        />
        {workForms}
        <Skillsform
          skillsData={skillsData}
          changeskillsData={changeskillsData}
          addSkill={addSkill}
        />

        <Section section="education" />
      </div>
    </div>
  );
}
