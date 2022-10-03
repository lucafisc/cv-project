import Section from "./Section";
import InputText from "./InputText";
import { dataContext } from "../../dataContext";
import { useContext } from "react";

export default function WorkForm(props) {
  const { workData, index, length } = props;
  const { changeWorkData, addWork, removeWork } = useContext(dataContext);

  const { title, position, place, time, text } = workData;
  const isFirst = index === 0 ? true : false;
  const isLast = index === length - 1 ? true : false;

  return (
    <>
      {isFirst && <Section section="work" />}
      <div className="form-grid">
        <InputText
          name={[index, "title"]}
          value={title}
          label="title"
          changeHandle={changeWorkData}
        />
        <InputText
          name={[index, "position"]}
          value={position}
          label="position"
          changeHandle={changeWorkData}
        />
        <InputText
          name={[index, "place"]}
          value={place}
          label="place"
          changeHandle={changeWorkData}
        />
        <InputText
          name={[index, "time"]}
          value={time}
          label="time period"
          changeHandle={changeWorkData}
        />
        <textarea
          className="textarea"
          value={text}
          label="text"
          onChange={(event) =>
            changeWorkData([index, "text"], event.target.value)
          }
          type="textArea"
        />
        {!isFirst && (
          <button className="button" onClick={() => removeWork(index)}>
            remove entry
          </button>
        )}
        {isLast && (
          <button className="button" onClick={() => addWork(index)}>
            add work experience
          </button>
        )}
      </div>
    </>
  );
}
