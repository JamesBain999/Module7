import { useEffect, useRef, useState } from "react";

export default function RefCounter() {
  const [countState, setCountState] = useState(0);
  const countRef = useRef(0);
  let count = 0;

  function handleClick() {
    countRef.current = countRef.current + 1;
    count = count + 1;
    alert(
      `You clicked the useRef: (${countRef.current}) times!\nYou clicked the count: (${count}) times!`
    );
  }

  

  useEffect(() => {
    const codeElement = document.getElementById("code");
    codeElement.innerText = code;
  }, [code]);

  return (
    <div className="RefCounter componentBox">
      <button onClick={handleClick}>REF COUNTER: Click me!</button> Ref:{" "}
      {countRef.current} Var: {count} <br />
      <button onClick={() => setCountState(countState + 1)}>
        STATE COUNTER: Click me to update!
      </button>
      State: {countState}
      <pre id="code">{code}</pre>
    </div>
  );
}
