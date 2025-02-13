import { createContext, useState } from "react";

const SpinContext = createContext();

export function SpinProvider({ children }) {
  const [tableData, setTableData] = useState(
    Array(6).fill(Array(6).fill("")) // 6 rows, 6 columns empty
  );
  const [spinResults, setSpinResults] = useState(Array(6).fill(null));
  const [isSpinning, setIsSpinning] = useState(false);

  const saveTableData = (newData) => {
    setTableData(newData);
  };

  const startSpin = () => {
    setIsSpinning(true);
    // Simulate spinning and store random results
    setTimeout(() => {
      const newResults = tableData.map(
        (row) => row[Math.floor(Math.random() * row.length)]
      );
      setSpinResults(newResults);
      setIsSpinning(false);
    }, 2000);
  };

  return (
    <SpinContext.Provider value={{ tableData, saveTableData, spinResults, startSpin, isSpinning }}>
      {children}
    </SpinContext.Provider>
  );
}

export default SpinContext;
