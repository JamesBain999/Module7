import React, { useEffect, useState } from "react";

function TimerControlledCounter() {
  const [count, setCount] = useState(0);
  const [clock, setClock] = useState(0);

  // Counts up
  const handleCountUp = () => {
    setCount(count + 1);
  };

  // Counts down
  const handleCountDown = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    let intervalVariable;

    // Start or stop the timer based on the count value
    if (count !== 0) {
      console.log("The timer has started");

      intervalVariable = setInterval(() => {setClock((prevClock) => prevClock + 1)}, 1000);

      // Cleanup the interval when the component unmounts or count is reset
      return () => {
        console.log("Clock component unmounted...cleared interval");
        clearInterval(intervalVariable);
      };
    } else {
      // If count is zero, clear the interval and reset the clock
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
