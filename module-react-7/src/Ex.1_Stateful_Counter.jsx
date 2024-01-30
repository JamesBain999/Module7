import { useState } from "react";

function StatefulCounter() {
    const [count, setCount] = useState(0)

    const handleCountUp = () => {
        setCount(count + 1)
    }

    const handleCountDown = () => {
        setCount(count - 1)
    }
return (
  <div>
    <button onClick={handleCountUp}>Up</button>
    <br></br>
    {count}
    <br></br>
    <button onClick={handleCountDown}>Down</button>
  </div>
);}

export default StatefulCounter