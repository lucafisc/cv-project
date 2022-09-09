import React from "react";
import "./styles/App.css";
import "./styles/Form.css";
import "./styles/Resume.css";
import Form from "./Components/Form";
import Resume from "./Components/Resume";

function App() {
  const [background, setBackground] = React.useState("#eaeef9");
  function changeBackground(color) {
    setBackground(color);
  }

  return (
    <div className="App">
      <Form changeBackground={changeBackground} />
      <Resume background={background} />
    </div>
  );
}

export default App;
