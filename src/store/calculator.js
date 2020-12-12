import { createSlice } from "@reduxjs/toolkit";

const calculateSlice = createSlice({
  name: "calculator",
  initialState: {
    acc: 0,
    curr: 0,
    operator: null
  },
  reducers: {
    changeAcc: (state, action) => {
      state.acc = action.payload;
    },
    changeCurr: (state, action) => {
      state.curr = state.curr + action.payload;
    },
    setOp: (state, action) => {
      state.operator = action.payload;
    }
  }
});

export default calculateSlice.reducer;

const { changeAcc, changeCurr, setOp } = calculateSlice.actions;

export const add = number => (dispatch, getState) => {
  const state = getState();
  dispatch(changeAcc(number + state.calculator.acc));
};

export const setValue = number => (dispatch, getState) => {
  const state = getState();
  dispatch(changeCurr(number));
  if (state.calculator.operator === null) {
    dispatch(changeAcc(number));
  }
};

export const setOperator = key => dispatch => {
  dispatch(setOp(key));
  console.log(key);
};

// ////////////
// 17 + 3; ////  ACC: 17, OP: NUL, CURR: 17L ////  ACC: 17, OP: +, CURR: NULL //// ACC: 17 + 3 = 20, OP: +, CURR: 3
// 31; /// ACC: 17 + 31 = 48, OP: +, CURR: 31
