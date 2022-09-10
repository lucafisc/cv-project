import React from "react";
import "./styles/App.css";
import "./styles/Form.css";
import "./styles/Resume.css";
import Form from "./Components/Form";
import Resume from "./Components/Resume";

function App() {
  const [background, setBackground] = React.useState("#eaeef9");
  const [formData, setFormData] = React.useState(
    JSON.parse(localStorage.getItem("form")) || {
      firstName: "",
      lastName: "",
      position: "",
    }
  );

  React.useEffect(() => {
    localStorage.setItem("form", JSON.stringify(formData));
  }, [formData]);

  function changeFormData(name, value) {
    setFormData((prevFormData) => {
      return { ...prevFormData, [name]: value };
    });
  }

  function changeBackground(color) {
    setBackground(color);
  }

  return (
    <div className="App">
      <Form
        changeBackground={changeBackground}
        changeFormData={changeFormData}
      />
      <Resume background={background} formData={formData} />
    </div>
  );
}

export default App;
