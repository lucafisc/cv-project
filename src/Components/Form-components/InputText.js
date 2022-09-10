export default function InputText(props) {
  const { label, name, changeHandle } = props;
  return (
    <div className="input-container">
      <label className="label">{label}</label>
      <input
        name={name}
        className="text-input"
        onChange={(event) => changeHandle(name, event.target.value)}
      ></input>
    </div>
  );
}
