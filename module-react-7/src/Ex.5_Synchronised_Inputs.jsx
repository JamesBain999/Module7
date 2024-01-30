import React, { useState, useEffect } from "react";

function SynchronizedInputFields() {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {

    const input2 = document.getElementById("input2");
    if (input2) {
      input2.value = inputValue;
    }
  }, [inputValue]);

  const handleInput2Change = (e) => {
    setInputValue(e.target.value);
  };

//ANOTHER WAY TO DO IT
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <label htmlFor="input1">Input 1:</label>
      <input
        type="text"
        id="input1"
        value={inputValue}
        onChange={handleInputChange}
      />

      <label htmlFor="input2">Input 2:</label>
      <input
        type="text"
        id="input2"
        value={inputValue}
        //ANOTHER WAY TO DO IT
        //onChange={handleInputChange}
        onChange={handleInput2Change}
      />
    </div>
  );
}

export default SynchronizedInputFields;
