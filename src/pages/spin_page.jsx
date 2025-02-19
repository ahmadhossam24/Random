import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import DataTableComponent from './../components/table';
import SpinGame from "../components/spins";
import GameTitle from "../components/game_title";
import SpinContext from "../context/spin_context";

function SpinPage() {
  const { toggleLanguage, isArabic } = useContext(SpinContext);
  const navigate = useNavigate();

  function handleClick() {
    navigate("/prepare-table");
  }

  return (
    <div className="body">
      <div className="navButtons">
        <button
          onClick={toggleLanguage}
          className="language-button"
        >
          {isArabic ? "English" : "العربية"}
        </button>
        <button className="go-prepare-button" onClick={ handleClick}>
          Prepare Data
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
