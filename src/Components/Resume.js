import React from "react";
import Cover from "./Resume-components/Cover";
import SidebarSection from "./Resume-components/SidebarSection";
export default function Resume(props) {
  const { background, formData, contactData, skillsData } = props;
  return (
    <div className="resume-container">
      <div style={{ backgroundColor: background }} className="resume">
        <div className="sidebar">
          <SidebarSection title="contact" fields={contactData} />
          <SidebarSection title="skills" fields={skillsData} />
        </div>
        <div className="main">
          <Cover formData={formData} />
        </div>
      </div>
    </div>
  );
}
