import { useState, useEffect } from "react";
// Renders a digital time that updates every second
function Clock() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    // first arg is usually an arrow function
    let clockInterval = setInterval(() => tick(), 1000);
    console.log("Clock component mounted");
    return () => {
      console.log("Clock component unmounted...cleared interval");
      clearInterval(clockInterval);
    };
  }, []); // second arg is an array of dependencies

  const tick = () => {
    setDate(new Date());
    console.log("tick"); // track the effect frequency
  };

  return (
    <div className="Clock">
      <h3>Digital Clock</h3>
      {date.toLocaleTimeString()}
    </div>
  );
}

function ClockDisplay() {
 const [showClock, setShowClock] = useState(false);
 const toggleClock = () => {
 setShowClock(!showClock);
 }
 return (
 <div className="ClockDisplay componentBox">
 {showClock && <Clock />}
 <button onClick={toggleClock}>Toggle Clock</button>
 </div>
 )
}

export {ClockDisplay, Clock};
// ++ Add both components into Clock.jsx and render
// <ClockDisplay /> from App.jsx
// ++ Watch the console when the Clock is removed -
// does the ticking still continue?

// ++ Try removing the dependency array from useEffect
// and notice the difference in ‘tick’ log messages
// ++ Why do the console messages appear double?
