import "./css/main.css";
import { Helmet } from "react-helmet";
import DisplayTodos from "./component/DisplayTodos";
import Todos from "./component/Todos";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>To-do List App</title>
      </Helmet>
      <h1>&diams; To-do List Apps &diams;</h1>
      <h2>What's the plan for today?</h2>
      <div>
        <ToastContainer />
        <Todos />
        <DisplayTodos />
      </div>
    </div>
  );
}

export default App;
