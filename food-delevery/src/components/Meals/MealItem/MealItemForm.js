import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [isValid, setIsValid] = useState(true);
  const amountInputRef = useRef();
  const formSubmitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmountNumber === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!isValid && <p>Please Enter a Valid Number</p>}
    </form>
  );
};

export default MealItemForm;
