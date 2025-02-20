import React, { useContext } from "react";
import DataTableComponent from './../components/table';
import SpinGame from "../components/spins";
import GameTitle from "../components/game_title";
import SpinContext from "../context/spin_context";

function SpinPage() {
  const { toggleLanguage, isArabic } = useContext(SpinContext);

  return (
    <div className="body">
      <div className="navButtons">
        <button
          onClick={toggleLanguage}
          className="language-button"
        >
          {isArabic ? "English" : "العربية"}
        </button>
      </div>
      <GameTitle />
      <div className="controls">
        <DataTableComponent />
      </div>
      <SpinGame />
    </div>
  );
}

export default SpinPage;
