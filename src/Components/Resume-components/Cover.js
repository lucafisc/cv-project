export default function Cover(props) {
  const { formData } = props;
  const { firstName, lastName, position } = formData;

  return (
    <div className="cover">
      <h1 className="first-name">{firstName}</h1>
      <h1 className="last-name">{lastName}</h1>
      <h3 className="position">{position}</h3>
    </div>
  );
}
