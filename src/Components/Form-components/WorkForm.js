import Section from "./Section";
import InputText from "./InputText";
export default function WorkForm(props) {
  const { workData, index, changeWorkData, addWork } = props;
  const { title, position, place, time, text } = workData;
  return (
    <>
      <Section section="work" />
      <div className="form-grid">
        <InputText
          key={index}
          name={[index, "title"]}
          value={title}
          label="title"
          changeHandle={changeWorkData}
        />
        <InputText
          //   key={index}
          //   name={[key]}
          value={position}
          label="position"
          //   changeHandle={changeskillsData}
        />
        <InputText
          //   key={index}
          //   name={[key]}
          value={place}
          label="place"
          //   changeHandle={changeskillsData}
        />
        <InputText
          //   key={index}
          //   name={[key]}
          value={time}
          label="time period"
          //   changeHandle={changeskillsData}
        />
        <textarea
          className="textarea"
          value={text}
          label="text"
          //   onChange={(event) => changeAboutData(event.target.value)}
          //   type="textArea"
        />
        {
          <button className="add-field" onClick={addWork}>
            add work experience
          </button>
        }
      </div>
    </>
  );
}
