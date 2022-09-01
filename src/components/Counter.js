import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { actionType } from "../store/index";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);
  const incrementHandler = () => {
    dispatch({ type: actionType.INCREMENT, value: 1 });
  };

  const incrementHandlerBy5 = () => {
    dispatch({ type: actionType.INCREMENT, value: 5 });
  };

  const decrementHandler = () => {
    dispatch({ type: actionType.DECREMENT, value: 1 });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: actionType.TOGGLE });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incrementHandlerBy5}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
