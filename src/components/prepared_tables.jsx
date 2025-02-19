import React from "react";
import DataTableComponent from "./table";

function PreparedTables() {

  return (
  <>
    <button
      onClick={() => { }}
      className="prepare-new-table-button"
    >
      Prepare new table +
    </button>

    <div className="controls">
      <DataTableComponent />
    </div>

  </>


  );
}

export default PreparedTables;