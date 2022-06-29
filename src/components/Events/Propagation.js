import React, { useState } from "react";

/*Version con stop propagation*/
export const StopPropagation = (props) => {
  const [counter, setCounter] = useState(0);
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={() => setCounter((prevCounter) => prevCounter + 1)}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          setCounter((prevCounter) => prevCounter + 1);
          // setCounter(counter+1)
        }}
      >
        El valor del contador es: {counter}
      </button>
    </div>
  );
};

/*Version problematica*/
export const NoStopPropagation = (props) => {
  const [counter, setCounter] = useState(0);
  return (
    <div onClick={() => console.log("tercero")}>
      <div
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={() => setCounter((prevCounter) => prevCounter + 1)}
      >
        <button onClick={(e) => setCounter((prevCounter) => prevCounter + 1)}>
          El valor del contador es: {counter}
        </button>
      </div>
    </div>
  );
};