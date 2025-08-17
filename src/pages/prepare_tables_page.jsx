import React, { useContext } from "react";
import PrepareTitle from "../components/prepare_title";
import SpinContext from "../context/spin_context";
import PreparedTables from './../components/prepared_tables';

function PrepareTablesPage() {
  const { toggleLanguage, isArabic } = useContext(SpinContext);

  return (
    <div className="body">
      <button
        onClick={toggleLanguage}
        className="language-button"
      >
        {isArabic ? "English" : "العربية"}
      </button>
      <PrepareTitle />
      <PreparedTables/>
    </div>
  );
}

export default PrepareTablesPage;