import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);


  
  const nameIsValid = enteredName.trim() !== ''
  const nameInputisValid = !nameIsValid && enteredNameTouched;



  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);
    if (!nameIsValid) {
      return;
    }
    console.log(enteredName);
    setEnteredName('');
    setEnteredNameTouched(false);
  };

  
  

  const nameInputClasses = !nameInputisValid
    ? 'form-control '
    : 'form-control invalid';
  return (
    <form onSubmit={handleSubmit}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameChangeHandler} onBlur={nameBlurHandler} />
        {nameInputisValid && (
            <p className="error-text">First name must not be empty.</p>
          )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
