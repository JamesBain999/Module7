import React, { createContext, useContext, useState } from "react";

const ChangeMoodContext = createContext();

export const ChangeMoodProvider = ({ children }) => {
  const [currentMood, setCurrentMood] = useState("😊");

  const changeMood = (newMood) => {
    setCurrentMood(newMood);
  };

  return (
    <ChangeMoodContext.Provider value={{ currentMood, changeMood }}>
      {children}
    </ChangeMoodContext.Provider>
  );
};

export const useChangeMood = () => {
  return useContext(ChangeMoodContext);
};
