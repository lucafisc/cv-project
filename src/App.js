import React from "react";
import "./styles/App.css";
import "./styles/Form.css";
import "./styles/Resume.css";
import Form from "./Components/Form";
import Resume from "./Components/Resume";

function App() {
  const [background, setBackground] = React.useState(
    JSON.parse(localStorage.getItem("background")) || "#eaeef9"
  );
  const [formData, setFormData] = React.useState(
    JSON.parse(localStorage.getItem("form")) || {
      firstName: "",
      lastName: "",
      position: "",
    }
  );

  const [contactData, setContactData] = React.useState(
    JSON.parse(localStorage.getItem("contact")) || {
      phone: "",
      email: "",
      address1: "",
      address2: "",
      nationality: "",
      age: "",
    }
  );

  const [skillsData, setskillsData] = React.useState(
    JSON.parse(localStorage.getItem("skills")) || {
      0: "",
    }
  );

  const [aboutData, setAboutData] = React.useState(
    JSON.parse(localStorage.getItem("about")) || ""
  );

  const [workData, setWorkData] = React.useState(
    JSON.parse(localStorage.getItem("work")) || [
      {
        title: "",
        position: "",
        place: "",
        time: "",
        text: "",
      },
    ]
  );

  React.useEffect(() => {
    localStorage.setItem("background", JSON.stringify(background));
  }, [background]);

  React.useEffect(() => {
    localStorage.setItem("form", JSON.stringify(formData));
  }, [formData]);

  React.useEffect(() => {
    localStorage.setItem("contact", JSON.stringify(contactData));
  }, [contactData]);

  React.useEffect(() => {
    localStorage.setItem("skills", JSON.stringify(skillsData));
  }, [skillsData]);

  React.useEffect(() => {
    localStorage.setItem("about", JSON.stringify(aboutData));
  }, [aboutData]);

  React.useEffect(() => {
    localStorage.setItem("work", JSON.stringify(workData));
    console.log(workData);
  }, [workData]);

  function changeBackground(color) {
    setBackground(color);
  }

  function changeFormData(name, value) {
    setFormData((prevData) => {
      return { ...prevData, [name]: value };
    });
  }

  function changeContactData(name, value) {
    setContactData((prevData) => {
      return { ...prevData, [name]: value };
    });
  }

  function changeskillsData(name, value) {
    setskillsData((prevData) => {
      const newObj = { ...prevData, [name]: value };
      const cleanedObj = {};
      let newIndex = 0;
      Object.keys(newObj).forEach((key) => {
        if (newObj[key] !== "") {
          cleanedObj[newIndex] = newObj[key];
          newIndex++;
        }
      });
      return cleanedObj;
    });
  }

  function addSkill() {
    setskillsData((prevData) => {
      const key = Object.keys(prevData).length + 1;
      return { ...prevData, [key]: "" };
    });
  }

  function changeAboutData(value) {
    setAboutData(value);
  }

  function changeWorkData(key, value) {
    setWorkData((prevArray) => {
      const updatedArray = prevArray.map((object, index) => {
        if (index === key[0]) {
          return { ...object, [key[1]]: value };
        } else {
          return { ...object };
        }
      });
      const cleanedArray = updatedArray.map((object, index) => {
        const isEmpty = Object.values(object).every((value) => value === "");
        if (!isEmpty) {
          return object;
        }
      });
      console.log(cleanedArray);
      return updatedArray;
    });
  }

  function addWork() {
    setWorkData((prevData) => {
      return [
        ...prevData,
        {
          title: "",
          position: "",
          place: "",
          time: "",
          text: "",
        },
      ];
    });
  }

  function removeWork(key) {
    setWorkData((prevData) => {
      return prevData.filter((work, index) => {
        return index !== key;
      });
    });
  }

  return (
    <div className="App">
      <Resume
        background={background}
        formData={formData}
        contactData={contactData}
        skillsData={skillsData}
        aboutData={aboutData}
        workData={workData}
      />
      <Form
        formData={formData}
        contactData={contactData}
        skillsData={skillsData}
        aboutData={aboutData}
        workData={workData}
        changeBackground={changeBackground}
        changeFormData={changeFormData}
        changeContactData={changeContactData}
        changeskillsData={changeskillsData}
        addSkill={addSkill}
        changeAboutData={changeAboutData}
        changeWorkData={changeWorkData}
        addWork={addWork}
        removeWork={removeWork}
      />
    </div>
  );
}

export default App;
