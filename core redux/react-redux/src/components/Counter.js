import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const toggle = useSelector((state) => state.counter.toggle);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.isAuthenticated);

  const addHandler = () => {
    // dispatch({type : 'add'})
    dispatch(counterActions.add());
  };
  const increase = () => {
    // dispatch({type : 'increase', amount : 5})
    dispatch(counterActions.increase(5));
  };

  const subHandler = () => {
    dispatch({ type: "sub" });
    dispatch(counterActions.sub());
  };

  const toggleCounterHandler = () => {
    // dispatch({type : 'toggle'})
    dispatch(counterActions.toggle());
  };

  return (
    <>
      {auth && (
        <main className={classes.counter}>
          <h1>Redux Counter</h1>
          {toggle && <div className={classes.value}>{counter}</div>}
          <div>
            <button onClick={addHandler} disabled={!toggle}>
              Increment
            </button>
            <button onClick={increase} disabled={!toggle}>
              Increment by 5
            </button>
            <button onClick={subHandler} disabled={!toggle}>
              Decrement
            </button>
          </div>
          <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
      )}
    </>
  );
};

export default Counter;
