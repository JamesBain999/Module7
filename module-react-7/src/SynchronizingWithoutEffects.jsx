import React, { useState } from "react";

const DynamicStyleComponentV2 = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const applyStyles = () => {
    const element = document.getElementById("dynamicStyleComponent");
    element.style.backgroundColor = isHovered ? "blue" : "green";
    element.style.color = isActive ? "red" : "white";
    element.style.cursor = isHovered ? "pointer" : "default";
  };

  return (
    <div
      id="dynamicStyleComponent"
      onMouseEnter={() => {
        setIsHovered(true);
        applyStyles();
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        applyStyles();
      }}
      onMouseDown={() => {
        setIsActive(true);
        applyStyles();
      }}
      onMouseUp={() => {
        setIsActive(false);
        applyStyles();
      }}
    >
      Dynamic Style Component
    </div>
  );
};

export default DynamicStyleComponentV2;
