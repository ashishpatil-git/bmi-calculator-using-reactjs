import React, { useState } from "react";
import "./App.css";

function App() {
  const [bmi, setbmi] = useState("__");
  const [height, setheight] = useState(0);
  const [weight, setweight] = useState(0);
  const [bmiClass, setBmiClass] = useState("__");

  const handleHeightChange = (e: any) => {
    let input = e.target.value;
    setheight(input);
  };
  const handleWeightChange = (e: any) => {
    let input = e.target.value;
    setweight(input);
  };
  const handleClear = (e: any) => {
    e.preventDefault();
    setweight(0);
    setheight(0);
    setBmiClass("");
    setbmi("");
  };
  function computeBmi(event: any) {
    event.preventDefault();
    if (height === 0 || weight === 0) alert("Enter valid details");
    else {
      const newLocal = weight / height;
      let bmiValue = newLocal / height;
      setbmi(bmiValue.toFixed(1).toString());
      let bmiClass = getBmiClass(bmiValue);
      setBmiClass(bmiClass);
    }
  }
  function getBmiClass(bmi: any): string {
    let str = "";
    if (bmi < 18.5) {
      str = "Underweight";
    }
    if (bmi >= 18.5 && bmi < 24.9) {
      str = "Normal weight";
    }
    if (bmi >= 25 && bmi < 29.9) {
      str = "Overweight";
    }
    if (bmi >= 30) {
      str = "Obesity";
    }
    return str;
  }

  return (
    <div className="App">
      <div className="bmi-form">
        <h1>Simple BMI Calculator</h1>
        <form onSubmit={computeBmi}>
          <div>
            <label className="input-label">Height : </label>
            <input
              value={height}
              type="number"
              placeholder="Enter height in meters"
              onChange={handleHeightChange}
            />
          </div>
          <div>
            <label className="input-label">Weight : </label>
            <input
              type="number"
              value={weight}
              placeholder="Enter weight in kg"
              onChange={handleWeightChange}
            />
          </div>
          <div>
            <button type="submit">Calculate your BMI</button>
          </div>
          <div>
            <button type="reset" onClick={handleClear}>
              Clear
            </button>
          </div>
          <p>Your current BMI : {bmi}</p>
          <p>Current BMI Status : {bmiClass}</p>
        </form>
      </div>
    </div>
  );
}

export default App;
