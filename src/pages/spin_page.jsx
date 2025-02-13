import React ,{useContext}from "react";
import SpinContext from "../context/spin_context";
import SpinButton from "../components/button";

function SpinPage() {
  const { tableData, saveTableData, spinResults, startSpin, isSpinning } = useContext(SpinContext);

  return (
    <div>
      <SpinButton></SpinButton>
    </div>
  );
}

export default SpinPage;
