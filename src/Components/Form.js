import React from "react";
import Theme from "./Form-components/Theme";
import CoverForm from "./Form-components/CoverForm";
import Section from "./Form-components/Section";
export default function Form(props) {
  const { changeBackground } = props;
  const [colors, setcolors] = React.useState(["#eaeef9", "#f9e3d9", "#fffdde"]);
  const themes = colors.map((color) => (
    <Theme color={color} changeBackground={changeBackground} />
  ));

  return (
    <div className="form-container">
      <div className="form-header">
        <h3 className="logo">CV Generator</h3>
        <div className="theme-container">{themes}</div>
      </div>
      <div className="form">
        <CoverForm />
        <Section section="contact" />
        <Section section="about" />
        <Section section="work" />
        <Section section="education" />
        <Section section="skills" />
      </div>
    </div>
  );
}
