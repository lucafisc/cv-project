import { dataContext } from "../../dataContext";
import { useContext } from "react";

export default function Cover() {
  const { formData } = useContext(dataContext);
  const { firstName, lastName, position } = formData;

  return (
    <div className="cover">
      <h1 className="first-name">{firstName}</h1>
      <h1 className="last-name">{lastName}</h1>
      <h3 className="position">{position}</h3>
    </div>
  );
}
