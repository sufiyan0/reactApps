import { useState } from "react";
import currencyApiInfo from "./hooks/currencyApiInfo";
import InputBox from "./copmonents/InputBox";
function App() {
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("PKR");
  const [amount, setAmount] = useState();
  const [totalAmmount, setTotalAmmount] = useState();

  const currencyInfo = currencyApiInfo(from);
  const options = Object.keys(currencyInfo);

  const convertedAmmount = () => {
    setTotalAmmount((amount * currencyInfo[to]).toFixed(2));
  };

  const swap = (e) => {
    setFrom(to);
    setTo(from);
    setTotalAmmount(amount);
    setAmount(totalAmmount);
    {
      () => convertedAmmount();
    }
  };

  return (
    <>
      {console.log(currencyInfo[to])}
      <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-800">
        <div className="w-1/2 flex flex-col justify-center items-center bg-gray-100 rounded-3xl">
          <h1 className="text-2xl font-bold text-gray-800 p-4">
            Currency Converter with exchangerate-api
          </h1>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              convertedAmmount();
            }}
          >
            <InputBox
              label="From"
              ammount={amount}
              currencyOptipons={options}
              selectedCurrency={from}
              onAmoutChange={(amount) => setAmount(amount)}
              onCurrencyChange={(currency) => setFrom(currency)}
            />

            <button
              className="hover:bg-gray-300 border border-gray-500 p-2 rounded items-center justify-center flex my-2 font-semibold w-full"
              onClick={swap}
              type="button"
            >
              Swap
            </button>

            <InputBox
              label="To"
              ammount={totalAmmount}
              currencyOptipons={options}
              selectedCurrency={to}
              onCurrencyChange={(currency) => setTo(currency)}
              onAmoutChange={(amount) => setAmount(amount)}
            />

            <button className="hover:bg-gray-300 border border-gray-500 p-2 rounded items-center justify-center flex my-2 font-semibold w-full ">
              Convert {from} to {to}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
