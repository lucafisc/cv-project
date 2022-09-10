import Cover from "./Resume-components/Cover";

export default function Resume(props) {
  const { background, formData } = props;

  return (
    <div className="resume-container">
      <div style={{ backgroundColor: background }} className="resume">
        <div className="sidebar"></div>
        <div className="main">
          <Cover formData={formData} />
        </div>
      </div>
    </div>
  );
}
