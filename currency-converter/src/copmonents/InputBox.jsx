import React from "react";

const InputBox = ({
  label,
  ammount ,
  onAmoutChange,
  onCurrencyChange,
  currencyOptipons = [],
  selectCurrency = "usd"
  
}) => {
  // console.log(currencyOptipons)
  return (
    <div className=" w-full h-1/3 flex  justify-center items-center bg-gray-200 rounded">
       <div className="">
        <label htmlFor="test">{label}</label>

        <input
          type="number"
          value={ammount}
          // onChange={(e) => onAmoutnChange(e.target.value)}
          onChange={(e) => onAmoutChange && onAmoutChange(Number(e.target.value))}
        />
      </div>

      
      <div className="">
        <label htmlFor="">Currency Type</label>
        <select  name="" id="" 
        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        // value={selectCurrency}
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


