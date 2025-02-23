import React, { useContext, useState, useEffect } from "react";
import SpinContext from "../context/spin_context";
import { useNavigate } from "react-router-dom";

function DataTableComponent() {
  const navigate = useNavigate();
  const { save_edit_state, changeSaveEditState, changeTableData, reFillSpins, emptySpins,isArabic  } = useContext(SpinContext);
  const [newTableDataObj, setNewTableDataObj] = useState({
    col1: { c1r1: "", c1r2: "", c1r3: "", c1r4: "", c1r5: "", c1r6: "" },
    col2: { c2r1: "", c2r2: "", c2r3: "", c2r4: "", c2r5: "", c2r6: "" },
    col3: { c3r1: "", c3r2: "", c3r3: "", c3r4: "", c3r5: "", c3r6: "" },
    col4: { c4r1: "", c4r2: "", c4r3: "", c4r4: "", c4r5: "", c4r6: "" },
    col5: { c5r1: "", c5r2: "", c5r3: "", c5r4: "", c5r5: "", c5r6: "" },
    col6: { c6r1: "", c6r2: "", c6r3: "", c6r4: "", c6r5: "", c6r6: "" }
  });
  const [savedTables, setSavedTables] = useState([]);
  const [selectedTable, setSelectedTable] = useState(null);

  useEffect(() => {
    if (save_edit_state === "saved") {
      changeTableData(newTableDataObj);
      reFillSpins(newTableDataObj);
    } else if (save_edit_state === "editing") {
      emptySpins();
    }
  }, [save_edit_state]); // This effect runs whenever save_edit_state changes

  // Function to handle input changes
  const handleInputChange = (col, row, value) => {
    setNewTableDataObj((prevState) => ({
      ...prevState,
      [col]: {
        ...prevState[col],
        [row]: value
      }
    }));
  };
  
  function handleClick() {
    navigate("/prepare-table");
  }

  // Load saved tables from localStorage on mount
  useEffect(() => {
    const tables = JSON.parse(localStorage.getItem("spin_tables_db->zabuv")) || [];
    setSavedTables(tables);
  }, []);

  // Handle select change
  const handleSelectChange = (e) => {
    const selectedTitle = e.target.value;
    const table = savedTables.find(t => t.title === selectedTitle);
    
    if (table) {
      setSelectedTable(table.id);
      setNewTableDataObj(table.data);
      changeTableData(table.data);
      reFillSpins(table.data);
    }
  };

  return (
    <>
      <button
        onClick={() => {
          changeSaveEditState();
        }}
        className="table-control-button"
      >
        {save_edit_state === "editing" ? "Save" : "Edit"}
      </button>
      <span className="prepare_control_span">
      <select 
        className="import-data-select" 
        onChange={handleSelectChange}
        value={selectedTable?.title || ""}
      >
        <option value="">Select a table</option>
        {savedTables.map((table) => (
          <option key={table.id} value={table.title}>
            {table.title}
          </option>
        ))}
      </select>
        <button className="go-prepare-button" onClick={handleClick}>
          Prepare Data
        </button>     
      </span>
      <div className="data-table-container">
        {Object.keys(newTableDataObj).map((col) => (
          <div key={col} className={`data-table-column ${col}`}>
            {Object.keys(newTableDataObj[col]).map((row) => (
              <input
                key={row}
                type="text"
                id={row}
                value={newTableDataObj[col][row]}
                onChange={(e) => handleInputChange(col, row, e.target.value)}
                readOnly={save_edit_state !== "editing"}
                style={{ 
                  direction: isArabic ? "rtl" : "ltr",
                  textAlign: isArabic ? "right" : "left"
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default DataTableComponent;