import "./App.css";
import { AddToDoComponent } from "./components/add-to-do.component";
import { ToDosComponent } from "./components/to-dos.component";
import { greetUser, helloWorld } from "./reactjs/App.util";

function App() {
  const result = helloWorld();
  const name = greetUser("John Doe");
  console.info("Greeting:", name);
  console.info("Result from App.util.js:", result);
  console.info("Hey ",name, " App is running...");
  return (
    <div className="App">
      <AddToDoComponent />
      <ToDosComponent />
    </div>
  );
}

export default App;
