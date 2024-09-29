import React, { useEffect, useState } from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

const Calculator = () => {
  const [userInput, setUserInput] = useState({
    initialInvestment: 100000,
    annualInvestment: 100000,
    expectedReturn: 6,
    duration: 10,
  });

  const resutldata = calculateInvestmentResults(userInput);

  console.log(resutldata);

  return (
    <div>
      <section id="user-input">
        <div className="input-group" id="input-group">
          <p>
            <label>Initial Investment</label>
            <input
              type="number"
              required
              onChange={(e) =>
                setUserInput((prevdata) => ({
                  ...prevdata,
                  initialInvestment: +e.target.value,
                }))
              }
              defaultValue={userInput.initialInvestment}
            />
          </p>
          <p>
            <label>Annual Investment</label>
            <input
              type="number"
              required
              onChange={(e) =>
                setUserInput((prevdata) => ({
                  ...prevdata,
                  annualInvestment: +e.target.value,
                }))
              }
              defaultValue={userInput.annualInvestment}
            />
          </p>
        </div>
        <div className="input-group" id="">
          <p>
            <label>Expected Return</label>
            <input
              type="number"
              required
              onChange={(e) =>
                setUserInput((prevdata) => ({
                  ...prevdata,
                  expectedReturn: +e.target.value,
                }))
              }
              defaultValue={userInput.expectedReturn}
            />
          </p>
          <p>
            <label>Duration</label>
            <input
              type="number"
              required
              onChange={(e) =>
                setUserInput((prevdata) => ({
                  ...prevdata,
                  duration: +e.target.value,
                }))
              }
              defaultValue={userInput.duration}
            />
          </p>
        </div>
      </section>
      <section>
        <table id="result">
          <thead>
            <tr>
              <th>Year</th>
              <th>Investment Value</th>
              <th>Interest (Year)</th>
              <th>Total Interest</th>
              <th>Invested Capital</th>
            </tr>
          </thead>
          <tbody>
            {resutldata.map((data) => {
              const totalInterest = data.valueEndOfYear - data.annualInvestment * data.year;
              const totalAmmountInvested = data.valueEndOfYear - totalInterest;
              return (
                <tr key={data.year}>
                  <td>{data.year}</td>
                  <td>{formatter.format(data.valueEndOfYear)}</td>
                  <td>{formatter.format(data.interest)}</td>
                  <td>{formatter.format(totalInterest)}</td>
                  <td>{formatter.format(totalAmmountInvested)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Calculator;
