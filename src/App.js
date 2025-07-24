import "./App.css";
import { AddToDoComponent } from "./components/add-to-do.component";
import { ToDosComponent } from "./components/to-dos.component";
import { greetUser } from "./reactjs/App.util";
import Customers from "./reactjs/Customers";

function App() {
  const name = greetUser("John Doe");
  console.info("Greeting:", name);
  console.info("Hey ",name, " App is running...");

  return (
    <div className="App">
      <AddToDoComponent />
      <ToDosComponent />
      <Customers />
    </div>
  );
}

export default App;
