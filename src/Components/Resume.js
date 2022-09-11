import React from "react";
import Cover from "./Resume-components/Cover";
import About from "./Resume-components/About";
import SidebarSection from "./Resume-components/SidebarSection";
export default function Resume(props) {
  const { background, formData, contactData, skillsData, aboutData } = props;
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
        </div>
      </div>
    </div>
  );
}
