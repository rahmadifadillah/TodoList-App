import React from "react";
import Todos from "./component/Todos";

function App() {
  return (
    <div className="App">
      <h1>&diams; Todo Apps &diams;</h1>
      <h2>What's the plan for today?</h2>
      <div>
        <Todos />
      </div>
    </div>
  );
}

export default App;
