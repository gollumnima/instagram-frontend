import { createSlice } from "@reduxjs/toolkit";

// Slice
const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    // 아래의 두 개가 actions property
    increment: (state, action) => state + action.payload,
    decrement: (state, action) => state - action.payload
  }
});

// RTK 기본 문법임. 그냥 따르기.
export default counterSlice.reducer;

// Actions
const { increment, decrement } = counterSlice.actions;

export const INCREMENT = number => dispatch => dispatch(increment(number));

export const incrementDouble = number => dispatch => {
  dispatch(INCREMENT(number * 2));
};

export const DECREMENT = number => dispatch => dispatch(decrement(number));

export const addTwo = (num1, num2) => dispatch => {
  dispatch(INCREMENT(num1 + num2));
};
