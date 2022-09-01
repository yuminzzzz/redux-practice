import { createStore } from "redux";

const initialState = {
  counter: 0,
  showCounter: true,
};

export const actionType = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  TOGGLE: "toggle",
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.INCREMENT:
      return { ...state, counter: state.counter + action.value };
    case actionType.DECREMENT:
      return { ...state, counter: state.counter - action.value };
    case actionType.TOGGLE:
      return { ...state, showCounter: !state.showCounter };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
