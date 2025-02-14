import React, { useState,useContext } from "react";
import { motion } from "framer-motion";
import SpinContext from "../context/spin_context";

const SpinGame = () => {
  const { C1SpinArr,C2SpinArr,C3SpinArr,C4SpinArr,C5SpinArr,C6SpinArr } = useContext(SpinContext);
  const [currentSpins, setCurrentSpins] = useState(["?", "?", "?", "?", "?", "?"]);
  const [winners, setWinners] = useState([false, false, false, false, false, false]);
  const [isSpinning, setIsSpinning] = useState(false);

  const spinDuration = 3; // Animation time in seconds

  // Function to spin and determine winners
  const handleSpin = () => {
    setWinners([false, false, false, false, false, false]);
    setIsSpinning(true);
    
    // Choose random values from each array
    const newSpins = [
      C1SpinArr[Math.floor(Math.random() * C1SpinArr.length)],
      C2SpinArr[Math.floor(Math.random() * C2SpinArr.length)],
      C3SpinArr[Math.floor(Math.random() * C3SpinArr.length)],
      C4SpinArr[Math.floor(Math.random() * C4SpinArr.length)],
      C5SpinArr[Math.floor(Math.random() * C5SpinArr.length)],
      C6SpinArr[Math.floor(Math.random() * C6SpinArr.length)],
    ];

    setTimeout(() => {
      setCurrentSpins(newSpins);

      // Determine winners (e.g., if value is '3' or 'Red', they win)
      const newWinners = newSpins.map((val) => val === 3 || val === "Red");
      setWinners(newWinners);

      setIsSpinning(false);
    }, spinDuration * 1000);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Spins Container */}
      <div className="spin-container">
        {currentSpins.map((spin, index) => (
          <motion.div
            key={index}
            className={`spin-box ${winners[index] ? "winner" : ""}`}
            animate={{ rotate: isSpinning ? 360 * 5 : 0 }}
            transition={{ duration: spinDuration, ease: "easeInOut" }}
          >
            {spin}
          </motion.div>
        ))}
      </div>

      {/* Spin Button */}
      <div className="spin-button-container">
        <button
          onClick={handleSpin}
          disabled={isSpinning}
          className="spin-button"
        >
          {isSpinning ? "Spinning..." : "Spin"}
        </button>
      </div>
    </div>
  );
};

export default SpinGame;
