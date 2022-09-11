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

  return (
    <div className="resume-container">
      <div style={{ backgroundColor: background }} className="resume">
        <div className="sidebar">
          {aboutData.length > 0 && <About aboutData={aboutData} />}
          <SidebarSection title="contact" fields={contactData} />
          {Object.keys(skillsData).length > 0 && (
            <SidebarSection title="skills" fields={skillsData} />
          )}
        </div>
        <div className="main">
          <Cover formData={formData} />
          {workData.length > 0 && <SectionTitle title={"work"} />}
          {workDivs}
          {educationData.length > 0 && <SectionTitle title={"education"} />}
          {educationDivs}
        </div>
      </div>
    </div>
  );
}
