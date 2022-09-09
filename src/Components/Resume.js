export default function Resume(props) {
  const { background } = props;
  return (
    <div className="resume-container">
      <div style={{ backgroundColor: background }} className="resume"></div>
    </div>
  );
}
