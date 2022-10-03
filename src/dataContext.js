import React from "react";

const dataContext = React.createContext();

function DataContextProvider(props) {
  const [aboutData, setAboutData] = React.useState(
    JSON.parse(localStorage.getItem("about")) || ""
  );

  React.useEffect(() => {
    localStorage.setItem("about", JSON.stringify(aboutData));
  }, [aboutData]);

  function changeAboutData(value) {
    setAboutData(value);
  }

  return (
    <dataContext.Provider
      value={{
        aboutData,
        changeAboutData,
      }}
    >
      {props.children}
    </dataContext.Provider>
  );
}

export { DataContextProvider, dataContext };
