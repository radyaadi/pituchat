import "./styles/App.css";
import { Alert } from "./components/ui/alert";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Alert title="Alert Title">This is the alert description</Alert>
    </div>
  );
}

export default App;
