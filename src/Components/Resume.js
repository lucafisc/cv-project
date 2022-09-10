import React from "react";
import Cover from "./Resume-components/Cover";
import SidebarSection from "./Resume-components/SidebarSection";
export default function Resume(props) {
  const { background, formData } = props;
  const [contactFields, setContactFields] = React.useState([
    "phone",
    "email",
    "address1",
    "address2",
    "nationality",
    "age",
  ]);

  return (
    <div className="resume-container">
      <div style={{ backgroundColor: background }} className="resume">
        <div className="sidebar">
          <SidebarSection
            title="contact"
            formData={formData}
            fields={contactFields}
          />
        </div>
        <div className="main">
          <Cover formData={formData} />
        </div>
      </div>
    </div>
  );
}
