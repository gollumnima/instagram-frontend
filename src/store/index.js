import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import user from "./user";
import counter from "./counter";
import calculator from "./calculator";

const reducer = combineReducers({
  // reducer 목록 추가
  user,
  counter,
  calculator
});

const store = configureStore({
  reducer
});

export default store;
