import React from "react";
import Cover from "./Resume-components/Cover";
import About from "./Resume-components/About";
import Work from "./Resume-components/Work";
import Education from "./Resume-components/Education";
import SectionTitle from "./Resume-components/SectionTitle";
import SidebarSection from "./Resume-components/SidebarSection";
export default function Resume(props) {
  const {
    background,
    formData,
    contactData,
    skillsData,
    aboutData,
    workData,
    educationData,
  } = props;
  const workDivs = workData.map((work) => {
    return <Work workData={work} />;
  });

  const educationDivs = educationData.map((education) => {
    return <Education educationData={education} />;
  });

  function checkIfEmpty(array) {
    let isEmpty = [];
    array.forEach((object) => {
      const valuesArray = Object.values(object);
      const result = valuesArray.every(
        (value) => value === "" || value === undefined
      );
      isEmpty.push(result);
    });

    const areAllEmpty = isEmpty.every((value) => value === true);
    return areAllEmpty;
  }
  function generatePDF() {
    const resume = document.querySelector("#resume");
  }

  const noWorkInfo = checkIfEmpty(workData);
  const noEducationInfo = checkIfEmpty(educationData);
  const noContactData = checkIfEmpty([contactData]);
  return (
    <div className="resume-container">
      <div
        style={{ backgroundColor: background }}
        className="resume"
        id="resume"
      >
        <div className="sidebar">
          {aboutData.length > 0 && <About aboutData={aboutData} />}
          {!noContactData && (
            <SidebarSection title="contact" fields={contactData} />
          )}
          {Object.keys(skillsData).length > 0 && (
            <SidebarSection title="skills" fields={skillsData} />
          )}
        </div>
        <div className="main">
          <Cover formData={formData} />
          {!noWorkInfo && <SectionTitle title={"work"} />}
          {workDivs}
          {!noEducationInfo && <SectionTitle title={"education"} />}
          {educationDivs}
        </div>
      </div>
      <button onClick={generatePDF}>download</button>
    </div>
  );
}
