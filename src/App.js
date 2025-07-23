import logo from "./logo.svg";
import "./App.css";
import { AddToDoComponent } from "./components/add-to-do.component";
import { ToDosComponent } from "./components/to-dos.component";
import { helloWorld } from "./reactjs/App.util";

function App() {
  const result = helloWorld();
  console.info("Result from App.util.js:", result);
  return (
    <div className="App">
      <AddToDoComponent />
      <ToDosComponent />
    </div>
  );
}

export default App;
