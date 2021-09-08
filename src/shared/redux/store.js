import { createStore } from "redux";

const fakeReducer = (state = { name: "FakeName" }, action) => {
  return state;
};

const store = createStore(fakeReducer);

export default store;
