export default function Work(props) {
  const { workData } = props;
  const { title, position, place, time, text } = workData;
  return (
    <div className="work">
      <h2 className="work--title">{title}</h2>
      <h3 className="work--position">{position}</h3>
      <h3 className="work--place">{place}</h3>
      <h3 className="work--time">{time}</h3>
      <h3 className="work--text">{text}</h3>
    </div>
  );
}
