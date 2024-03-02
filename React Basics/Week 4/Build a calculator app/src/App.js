import { useState } from "react";
import "./App.css";

const Title = () => {
  return (
    <div>
      <h1>Simplest Working Calculator</h1>
    </div>
  );
};

const Result = ({ result }) => <p>{result}</p>;

const Input = ({ value, onChange }) => {
  return (
    <input
      pattern="[0-9]"
      type="number"
      placeholder="Type a number"
      value={value}
      onChange={onChange}
    />
  );
};

const Button = ({ label, onClick }) => (
  <button onClick={onClick}>{label}</button>
);

function App() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState(0);

  const onChange = (e) => setValue(e.target.value);

  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(value));
  }

  function minus(e) {
    e.preventDefault();
    setResult((result) => result - Number(value));
  }

  function times(e) {
    e.preventDefault();
    setResult((result) => result * Number(value));
  }

  function divide(e) {
    e.preventDefault();
    setResult((result) => result / Number(value));
  }

  function resetInput(e) {
    e.preventDefault();
    setValue("");
  }

  function resetResult(e) {
    e.preventDefault();
    setResult(0);
  }

  return (
    <div className="App">
      <Title />
      <form>
        <Result result={result} />
        <Input value={value} onChange={onChange} />
        <Button label="add" onClick={plus} />
        <Button label="subtract" onClick={minus} />
        <Button label="multiply" onClick={times} />
        <Button label="divide" onClick={divide} />
        <Button label="resetInput" onClick={resetInput} />
        <Button label="resetResult" onClick={resetResult} />
      </form>
    </div>
  );
}

export default App;
