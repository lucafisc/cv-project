export default function Education(props) {
  const { educationData } = props;
  const { institution, degree, year } = educationData;
  return (
    <div className="education">
      <h2 className="education--insitution">{institution}</h2>
      <h3 className="education--degree">{degree}</h3>
      <h3 className="education--year">{year}</h3>
    </div>
  );
}
