import React from "react";
import { useChangeMood } from "./ChangeMoodContext";

function EmojiChanger() {
  const { currentMood, changeMood } = useChangeMood();

  return (
    <div className="MoodChanger">
      Current Mood: {currentMood}
      <button onClick={() => changeMood("😂")}>Laughing Emoji</button>
      <button onClick={() => changeMood("😘")}>Kissing Emoji</button>
      <button onClick={() => changeMood("😎")}>Sunglasses Emoji</button>
      <button onClick={() => changeMood("😢")}>Sad Emoji</button>
    </div>
  );
}

export default EmojiChanger;
