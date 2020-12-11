import { createSlice } from "@reduxjs/toolkit";

// Slice
const countetSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    // 아래의 두 개가 actions property
    increment: state => state + 1,
    decrement: state => state - 1
  }
});

console.log(countetSlice, "slislislisils");

// 왜 이게 export 기본값인지 이해 안감...!!! 도움!! help!!!
export default countetSlice.reducer;

// Actions
const { increment, decrement } = countetSlice.actions;

export const INCREMENT = state => {
  dispatch(increment);
};
