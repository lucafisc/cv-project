import React from "react";
import Theme from "./Theme";
export default function Form() {
  const [colors, setcolors] = React.useState(["#eaeef9", "#f9e3d9", "#fffdde"]);
  const themes = colors.map((color) => <Theme color={color} />);

  return (
    <div className="form-container">
      <div className="form-header">
        <h3 className="logo">CV Generator</h3>
        <div className="theme-container">{themes}</div>
      </div>
    </div>
  );
}
