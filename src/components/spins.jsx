import React ,{useContext}from "react";
import SpinContext from "../context/spin_context";

function SpinButton() {
  const { tableData, saveTableData, spinResults, startSpin, isSpinning } = useContext(SpinContext);

  return (
    <div>
      <button onClick={startSpin} disabled={isSpinning}>
        {isSpinning ? "Spinning..." : "Start Spin"}
      </button>
    </div>
  );
}

export default SpinButton;