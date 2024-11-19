import { useReducer, useState } from "react";

const initialInputState = {
  value: '',
  isTouched: false
}

const inputReducer = (state, action) => {
  if(action.type === 'NAME') {
    return {
      value: action.value,
      isTouched: state.isTouched
    };
  }
  if(action.type === 'BLUR') {
    return {
      isTouched: true,
      value: state.value
    };
    if(action.type === 'RESET') {
      return {
        value: '',
        isTouched: false
      };
    }
    return initialInputState;
  }
  
};


const SimpleInputWithReducer = (props) => {
  // const [enteredName, setEnteredName] = useState('');
  // const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [inputState, dispatch] = useReducer(inputReducer, initialInputState);



  const nameIsValid = inputState.value.trim() !== ''
  const nameInputisValid = !nameIsValid && inputState.isTouched;



  const nameChangeHandler = (event) => {
    dispatch({type: 'NAME', value: event.target.value});
  };

  const nameBlurHandler = (event) => {
    dispatch({type: 'BLUR'});
    console.log(inputState)
  };

  const reset = () => {
    dispatch({type: 'RESET'});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({type: 'BLUR'});
    if (!nameIsValid) {
      return;
    }
    // console.log(enteredName);
    // setEnteredName('');
    // setEnteredNameTouched(false);
    reset();
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
        <button disabled={!nameIsValid} className={nameInputisValid ? '' : 'form-actions'}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInputWithReducer;
