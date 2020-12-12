import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { INCREMENT, DECREMENT, incrementDouble, addTwo } from "store/counter";
import { add, setValue } from "store/calculator";
import { setOperator } from "../../store/calculator";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const calculator = useSelector(state => state.calculator);
  // 설명에는 { counter } 이렇게 되어있어서 에러 났는데 이제야 성공 대박!! 와~~ 했다!!
  return (
    <div>
      <p>
        Cicked: <span className="counter-value">{counter} </span>
        times
      </p>
      <button
        className="increment"
        onClick={() => dispatch(incrementDouble(1))}
        // onClick={() => dispatch(INCREMENT(1))}
        // 괄호 안에 counter를 넣어도 빼도 실행이 된다. 왜지?!
      >
        +
      </button>
      <button className="decrement" onClick={() => dispatch(DECREMENT(1))}>
        -
      </button>
      <p>{calculator.acc}</p>
      <p>내가 지금 누른 연산자는 {calculator.operator || "없슈"}</p>
      {["+", "-", "/", "*"].map(el => (
        <button key={el} onClick={() => dispatch(setOperator(el))}>
          {el}
        </button>
      ))}
      <input
        type="number"
        onChange={() => dispatch(setValue(1))}
        value={calculator.curr}
      ></input>
    </div>
  );
};

export default Counter;
