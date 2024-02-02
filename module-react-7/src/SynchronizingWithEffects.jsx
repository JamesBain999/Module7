import React, { useState, useEffect } from "react";

const DynamicStyleComponent = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const element = document.getElementById("dynamicStyleComponent");

    element.style.backgroundColor = isHovered ? "blue" : "green";
    element.style.color = isActive ? "red" : "white";
    element.style.cursor = isHovered ? "pointer" : "default";
  }, [isHovered, isActive]);

  return (
    <div
      id="dynamicStyleComponent"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
    >
      Dynamic Style Component
    </div>
  );
};

export default DynamicStyleComponent;
