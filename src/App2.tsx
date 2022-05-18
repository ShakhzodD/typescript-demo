import "./App.css";
import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { Input } from "./components/Input";

function App() {
  return (
    <div className="App">
      <Button
        handleClick={(e, id) => console.log("Button Click", e.target, id)}
        title="Click Hero"
      />
      <Input value="" handleChange={e => console.log(e.target.value)} />
      <Container styles={{ border: "1px solid red", padding: "1rem" }} />
    </div>
  );
}

export default App;
