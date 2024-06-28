import { useCallback, useEffect, useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Result from "./components/Result";
import Tip from "./components/Tip";

function App() {
  const [error, setError] = useState(false);
  const [userInput, setUserInput] = useState({
    bill: "",
    tip: "",
    people: "",
  });
  const [result, setResult] = useState({
    tipAmount: "0.00",
    total: "0.00",
  });
  const [isDisabled, setIsDisabled] = useState(true);
  const buttons = document.querySelectorAll(".button");
  const resetButton = document.querySelector("#reset") as HTMLButtonElement;
  const custom = document.querySelector("#custom") as HTMLInputElement;

  function handleChange(identifier: string, newValue: string) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [identifier]: newValue,
      };
    });
  }

  const resetResult = useCallback(() => {
    setResult({
      tipAmount: "0.00",
      total: "0.00",
    });
    setIsDisabled(true);
    resetButton?.classList.remove("activeButton");
  }, [resetButton]);

  function reset() {
    resetResult();
    selected();
    setUserInput({
      bill: "",
      tip: "",
      people: "",
    });
    custom.value = "";
  }

  function selected(id?: string): void {
    buttons.forEach((button) => {
      button.classList.remove("selected");
      if (button.id == id) {
        button.classList.add("selected");
        if (id != "custom") {
          custom.value = "";
        }
      }
    });
  }

  const calculate = useCallback(() => {
    const input = document.querySelector("#people") as HTMLInputElement;

    if (userInput.bill == "" || userInput.people == "" || userInput.tip == "") {
      resetResult();
      setError(false);
      if (input) input.classList.remove("inputError");
      return;
    }

    if (userInput.people.charAt(0) == "0") {
      setError(true);
      resetResult();
      input.classList.add("inputError");
      resetButton?.classList.remove("activeButton");
      return;
    }

    if (error) {
      setError(!error);
      input.classList.remove("inputError");
    }

    const tip = (Number(userInput.bill) / 100) * Number(userInput.tip);
    const total = Number(userInput.bill) + tip;
    const tipPerPerson = (tip / Number(userInput.people)).toFixed(2);
    const totalPerPerson = (total / Number(userInput.people)).toFixed(2);
    setResult({ tipAmount: tipPerPerson, total: totalPerPerson });
    setIsDisabled(false);
    resetButton?.classList.add("activeButton");
  }, [userInput, error, resetResult, resetButton]);

  useEffect(() => {
    calculate();
  }, [userInput, calculate]);

  return (
    <>
      <img
        src="../logo.svg"
        alt="App logo - Splitter"
      />
      <div className="mainContainer">
        <div className="inputContainer">
          <Input
            name="Bill"
            id="bill"
            handleChange={handleChange}
            userInput={userInput}
          />
          <Tip
            handleChange={handleChange}
            selected={selected}
          />
          <Input
            name="Number of People"
            id="people"
            error={error}
            handleChange={handleChange}
            userInput={userInput}
          />
        </div>
        <div className="resultContainer">
          <div className="results">
            <Result
              title="Tip Amount"
              result={result.tipAmount}
            />
            <Result
              title="Total"
              result={result.total}
            />
          </div>
          <button
            type="reset"
            id="reset"
            onClick={reset}
            disabled={isDisabled}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
