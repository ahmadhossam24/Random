import React, { useContext } from "react";
import DataTableComponent from './../components/table';
import SpinGame from "../components/spins";
import GameTitle from "../components/game_title";
import SpinContext from "../context/spin_context";

function SpinPage() {
  const { toggleLanguage, isArabic } = useContext(SpinContext);

  return (
    <div className="body">
      <button
        onClick={toggleLanguage}
        className="language-button"
      >
        {isArabic ? "English" : "العربية"}
      </button>
      <GameTitle />
      <div className="controls">
        <DataTableComponent />
      </div>
      <SpinGame />
    </div>
  );
}

export default SpinPage;
