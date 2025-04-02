import { Link } from "react-router-dom";
import Child from "./Child";
import { useCallback, useMemo, useReducer, useRef, useState } from "react";

let initialState = {
  count: 0,
  count1: 100,
};
let reducer = (state = initialState, action) => {
  let { type } = action;

  switch (type) {
    case "INC_COUNT":
      return { ...state, count: state.count + 1 };

    case "INC_COUNT1":
      return { ...state, count1: state.count1 + 1 };

    default:
      return { ...state };
  }
};

function Home() {
  let inputRef = useRef(null);
  let [state, dispatch] = useReducer(reducer, { ...initialState });

  let result = useMemo(() => {
    return state.count1 % 5 === 0 ? "Its 5 divisible" : null;
  }, [state.count1]);

  let MoreCalc = useCallback(() => {
    if (result) {
      console.log("Make More Clac");
    } else {
      console.log("its not divisible");
    }
  }, [result]);

  let getInputValue = () => {
    console.log(inputRef.current);
    // if (inputRef.current.value === "") {
    //   inputRef.current.focus();
    //   inputRef.current.style.backgroundColor = "red";
    //   setTimeout(() => {
    //     inputRef.current.style.backgroundColor = "white";
    //   }, 1000);
    // }
  };
  return (
    <div>
      Home <Link to="/about-us">About</Link>
      <button onClick={() => dispatch({ type: "INC_COUNT" })}>
        INC {state.count}
      </button>
      <button onClick={() => dispatch({ type: "INC_COUNT1" })}>
        INC {state.count1}
      </button>
      <input type="text" />
      <button onClick={getInputValue}>Get Input Value</button>
      <Child ref={inputRef} MoreCalc={MoreCalc} />
    </div>
  );
}

export default Home;

// cache => comp => memo
// cache => data => useMemo
// cache => function => useCallback

// action => {type:"" , payload?:data}
