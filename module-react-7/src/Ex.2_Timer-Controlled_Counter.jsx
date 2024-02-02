import React, { useEffect, useState } from "react";

function TimerControlledCounter() {
  const [count, setCount] = useState(0);
  const [clock, setClock] = useState(0);

  const handleCountUp = () => {
    setCount(count + 1);
  };

  const handleCountDown = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    let intervalVariable;

    if (count !== 0) {
      console.log("The timer has started");

      intervalVariable = setInterval(() => {setClock((prevClock) => prevClock + 1)}, 1000);

      return () => {
        console.log("Clock component unmounted...cleared interval");
        clearInterval(intervalVariable);
      };
    } else {
      clearInterval(intervalVariable);
      setClock(0);
    }
  }, [count]);

  return (
    <div>
      <button onClick={handleCountUp}>Up</button>
      <br />
      {count}
      <br />
      <button onClick={handleCountDown}>Down</button>
      <br />
      <div style={{ display: count !== 0 ? "block" : "none" }}>
        <span>Time since count was zero: </span>
        {clock}
      </div>
    </div>
  );
}

export default TimerControlledCounter;
