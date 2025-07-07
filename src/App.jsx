import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Pravesh");

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        {name}
        <button onClick={() => setName("Pravesh Kartik Yadav ..😍")}>
          Change name
        </button>
      </div>
    </>
  );
}

export default App;
