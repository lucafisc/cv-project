import React from "react";
import Cover from "./Resume-components/Cover";
import About from "./Resume-components/About";
import Work from "./Resume-components/Work";
import Education from "./Resume-components/Education";
import SectionTitle from "./Resume-components/SectionTitle";
import html2pdf from "html2pdf.js";
import SidebarSection from "./Resume-components/SidebarSection";
import { dataContext } from "../dataContext";
import { useContext } from "react";

export default function Resume(props) {
  const { workData, educationData, background, contactData, skillsData } =
    useContext(dataContext);

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
  const noWorkInfo = checkIfEmpty(workData);
  const noEducationInfo = checkIfEmpty(educationData);
  const noContactData = checkIfEmpty([contactData]);
  function downloadResume() {
    const element = document.getElementById("resume");
    const opt = {
      margin: 0,
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: {},
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };
    html2pdf().from(element).set(opt).save();
  }

  return (
    <div className="resume-container">
      <div
        style={{ backgroundColor: background }}
        className="resume"
        id="resume"
      >
        <div className="sidebar">
          <About />
          {!noContactData && (
            <SidebarSection title="contact" fields={contactData} />
          )}
          {Object.keys(skillsData).length > 0 && (
            <SidebarSection title="skills" fields={skillsData} />
          )}
        </div>
        <div className="main">
          <Cover />
          {!noWorkInfo && <SectionTitle title={"work"} />}
          {workDivs}
          {!noEducationInfo && <SectionTitle title={"education"} />}
          {educationDivs}
        </div>
      </div>
      <button className="download" onClick={downloadResume}>
        download
      </button>
    </div>
  );
}
