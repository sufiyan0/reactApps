import React from "react";

const InputBox = ({
  label,
  ammount,
  onAmoutChange,
  onCurrencyChange,
  currencyOptipons = [],
  selectedCurrency,
}) => {
  // console.log(currencyOptipons)
  return (
    <div className=" w-full flex  justify-center items-center bg-gray-200 p-5 rounded">
      <div className="flex flex-col m-2 p-2 mb-4">
        <label htmlFor="test" className="text-xl py-2">{label}</label>

        <input
          className="border border-gray-300 p-2 rounded"
          type="number"
          value={ammount}
          placeholder="Amount"
          onChange={(e) =>
            onAmoutChange && onAmoutChange(Number(e.target.value))
          }
        />
      </div>

      <div className="flex flex-col m-2 p-2 ">
        <label htmlFor="" className="text-xl py-2">Currency Type</label>
        <select
          className="border border-gray-300 p-2 rounded"
          name=""
          id=""
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptipons.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox;
