import { useState } from "react";
import currencyApiInfo from "./hooks/currencyApiInfo";
import InputBox from "./copmonents/InputBox";
function App() {
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('');
  const [amount, setAmount] = useState(0);
  const [totalAmmount, setTotalAmmount] = useState();

  const currencyInfo = currencyApiInfo(from);
  const options = Object.keys(currencyInfo);

  const convertedAmmount = () => {
    setTotalAmmount(amount * currencyInfo[to]);
  };

  return (


    <>
{      console.log(currencyInfo[to])}
      <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-800">
        <div className="w-1/2 h-1/3 flex flex-col justify-center items-center bg-gray-100 rounded-3xl">
          <h1 className="text-2xl font-bold text-gray-800">
            Currency Converter with exchangerate-api
          </h1>

          <form onSubmit={(e) => {

            e.preventDefault();
            convertedAmmount()
          }
          }>
            <InputBox
              label="From"
              ammount={amount}
              currencyOptipons={options}
              selectedCurrency={from}
              onAmoutChange={(amount) => setAmount(amount)}
              onCurrencyChange={(currency) => setAmount(amount)}
            />

            <InputBox
              label="To"
              ammount={totalAmmount}
              currencyOptipons={options}
              selectedCurrency={from}
              onCurrencyChange={(currency) => setTo(currency)}
            />

            <button>convert</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
