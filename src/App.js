import logo from "./logo.svg";
import "./App.css";
import { AddToDoComponent } from "./components/add-to-do.component";
import { ToDosComponent } from "./components/to-dos.component";

function App() {
  return (
    <div className="App">
      <AddToDoComponent />
      <ToDosComponent />
    </div>
  );
}

export default App;
