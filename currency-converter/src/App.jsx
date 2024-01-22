import { useState } from "react";
import currencyApiInfo from "./hooks/currencyApiInfo";

function App() {
  const [currencyOne, setCurrencyOne] = useState("USD");
  const [ammountOne, setAmmountOne] = useState(0);
  const [currencyTwo, setCurrencyTwo] = useState("PKR");
  const [ammountTwo, setAmmountTwo] = useState(0);
  const [count, setCount] = useState(0);
  const currencyInfo = currencyApiInfo(currencyOne);
  const options = Object.keys(currencyInfo)
  // console.log(currencyInfo)

  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-800">
        <div className="w-1/2 h-1/3 flex flex-col justify-center items-center bg-gray-100 rounded-3xl">
          <h1 className="text-2xl font-bold text-gray-800">
            Currency Converter
          </h1>

          <div className=" w-full h-1/3 flex  justify-center items-center bg-gray-200 rounded-3xl">
            <select
              name=""
              id=""
              onChange={(e) => setCurrencyOne(e.target.value)}
            >
             
              <option value="USD">USD</option>
              <option value="PKR">PKR</option>
            </select>
            

            <select name="" id="">
              <option value=""></option>
            </select>
            <input
              type="number"
              value={ammountOne}
              onChange={(e) => setAmmountOne(e.target.value)}
            />
          </div>
          <div className="w-full h-1/3 flex flex-col justify-center items-center bg-gray-200 rounded-3xl my-3"></div>
        </div>
      </div>
    </>
  );
}

export default App;
