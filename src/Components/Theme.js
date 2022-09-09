export default function Theme(props) {
  const { color } = props;
  return <div className="theme" style={{ backgroundColor: color }}></div>;
}
