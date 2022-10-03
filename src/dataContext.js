import React from "react";

const dataContext = React.createContext();

function DataContextProvider(props) {
  const [aboutData, setAboutData] = React.useState(
    JSON.parse(localStorage.getItem("about")) || ""
  );

  const [background, setBackground] = React.useState(
    JSON.parse(localStorage.getItem("background")) || "#eaeef9"
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
    JSON.parse(localStorage.getItem("skills")) || {}
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

  const [educationData, setEducationData] = React.useState(
    JSON.parse(localStorage.getItem("education")) || [
      {
        institution: "",
        degree: "",
        year: "",
      },
    ]
  );

  const [formData, setFormData] = React.useState(
    JSON.parse(localStorage.getItem("form")) || {
      firstName: "",
      lastName: "",
      position: "",
    }
  );

  React.useEffect(() => {
    localStorage.setItem("background", JSON.stringify(background));
  }, [background]);

  React.useEffect(() => {
    localStorage.setItem("contact", JSON.stringify(contactData));
  }, [contactData]);

  React.useEffect(() => {
    localStorage.setItem("skills", JSON.stringify(skillsData));
  }, [skillsData]);

  React.useEffect(() => {
    localStorage.setItem("work", JSON.stringify(workData));
  }, [workData]);

  React.useEffect(() => {
    localStorage.setItem("education", JSON.stringify(educationData));
  }, [educationData]);

  React.useEffect(() => {
    localStorage.setItem("about", JSON.stringify(aboutData));
  }, [aboutData]);

  React.useEffect(() => {
    localStorage.setItem("form", JSON.stringify(formData));
  }, [formData]);

  function changeAboutData(value) {
    setAboutData(value);
  }

  function changeFormData(name, value) {
    setFormData((prevData) => {
      return { ...prevData, [name]: value };
    });
  }

  function sampleData() {
    setFormData({
      firstName: "John",
      lastName: "Appleseed",
      position: "Frontend developer",
    });
    setContactData({
      phone: "0156 32029374",
      email: "john@sample.com",
      address1: "Musterstraße 42",
      address2: "10142 Berlin",
      nationality: "Italian",
      age: "30 years old",
    });
    setskillsData({ 0: "HTML, CSS, Javascript", 1: "React", 2: "Git" });
    setWorkData([
      {
        place: "Berlin - DE",
        position: "Frontend developer",
        text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
        time: "01/20 - 12/22",
        title: "Sample Workplace",
      },
      {
        place: "Berlin - DE",
        position: "Intern",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..",
        time: "06/18 - 12/19",
        title: "Another workplace",
      },
    ]);
    setAboutData(
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur duis aute irure dolor in reprehenderit in voluptate velit esse. "
    );
    setEducationData([
      {
        institution: "University Sample",
        degree: "Computer Science",
        year: "2015-2018",
      },
    ]);
  }

  function clearData() {
    setFormData({
      firstName: "",
      lastName: "",
      position: "",
    });
    setContactData({
      phone: "",
      email: "",
      address1: "",
      address2: "",
      nationality: "",
      age: "",
    });
    setskillsData({});
    setWorkData([
      {
        place: "",
        position: "",
        text: "",
        time: "",
        title: "",
      },
    ]);
    setAboutData("");
    setEducationData([
      {
        institution: "",
        degree: "",
        year: "",
      },
    ]);
  }

  function changeBackground(color) {
    setBackground(color);
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

  function changeEducationData(key, value) {
    setEducationData((prevArray) => {
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
      return updatedArray;
    });
  }

  function addEducation() {
    setEducationData((prevData) => {
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

  function removeEducation(key) {
    setEducationData((prevData) => {
      return prevData.filter((work, index) => {
        return index !== key;
      });
    });
  }

  return (
    <dataContext.Provider
      value={{
        background,
        contactData,
        skillsData,
        aboutData,
        workData,
        educationData,
        formData,
        changeFormData,
        sampleData,
        clearData,
        changeBackground,
        changeContactData,
        changeskillsData,
        changeAboutData,
        addSkill,
        changeWorkData,
        addWork,
        removeWork,
        changeEducationData,
        addEducation,
        removeEducation,
      }}
    >
      {props.children}
    </dataContext.Provider>
  );
}

export { DataContextProvider, dataContext };
