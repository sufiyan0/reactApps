import React, {  useState,useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import { type } from '@testing-library/user-event/dist/type';



const emailReducer = (state , action) => {

  if(action.type ==='USER_INPUT' ){
    return {value : action.val, isValid : action.val.includes('@')}
  }
  if(action.type === 'INPUT_BLUR'){
    return {value: action.val , isValid : state.value.includes('@')}
  }
  return {value : '', isValid : false}
};

const passwordReducer = (state, action) => {
  if(action.type === 'USER_INPUT' ){
    console.log(action.val)
    return {value : action.val, isValid : action.val.trim().length > 6}
  }
  if(action.type === 'INPUT_BLUR'){
    return {value: action.val , isValid : state.value.trim().length > 6}
  }
  return{ value:'', isValid:false};
}

const Login = (props) => {
  const [emailState , dispatchEmail] = useReducer(emailReducer, {value : '', isValid : null})
  const [passwordState, dispatchPassword] = useReducer(passwordReducer,{value: '' , isValid: null})
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const {isValid: emailIsValid} = emailState;
  const {isValid: passwordIsValid} = passwordState;

  useEffect(() => {
    const timer = setTimeout(() => {
      
      console.log("time out effect")
      setFormIsValid(
        emailState.isValid && passwordState.isValid
      );
    }, 500);

    return () => {
      console.log("cleanup  effect")
      clearTimeout(timer);
    }
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({type: 'USER_INPUT' , val: event.target.value});
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type: 'USER_INPUT', val:event.target.value});

    // setFormIsValid(
    //   passwordState.value.trim().length > 6 && emailState.isValid
    // );
  };

  const validateEmailHandler = () => {
    dispatchEmail({type: 'INPUT_BLUR'});
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type: 'INPUT_BLUR'});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
