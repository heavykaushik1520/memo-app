import React, { useState } from "react";
import Display from "./Display";

function Counter() {
  let [counter, setCounter] = useState(0);
  return (
    <>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        {counter}
      </button>
      <Display />
    </>
  );
}

export default Counter;
