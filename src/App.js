import "./styles/App.css";
import "./styles/Form.css";
import "./styles/Resume.css";
import Form from "./Components/Form";
import Resume from "./Components/Resume";

function App() {
  return (
    <div className="App">
      <Form />
      <Resume />
    </div>
  );
}

export default App;
