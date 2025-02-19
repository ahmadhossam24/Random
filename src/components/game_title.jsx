// components/game_title.jsx
import React from "react";

const GameTitle = () => {
  const colors = ["#ff5733", "#33c3ff", "#33ff57", "#f4d03f", "#9b59b6", "#ff8c00"];
  const text = "build your story!";
  
  return (
    <div className="game-title">
      {text.split("").map((char, index) => (
        <span 
          key={index} 
          style={{ color: colors[index % colors.length] }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default GameTitle;