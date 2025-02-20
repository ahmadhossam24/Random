import React, { useState,useContext } from "react";
import SpinContext from "../context/spin_context";

function PrepareDataTableComponent({ id, initialTitle, initialData, onSave, onDelete }) {
  const { isArabic  } = useContext(SpinContext);

  const [saveState, setSaveState] = useState("editing");
  const [title, setTitle] = useState(initialTitle);
  const [tableData, setTableData] = useState(initialData);

  const handleInputChange = (col, row, value) => {
    setTableData(prev => ({
      ...prev,
      [col]: { ...prev[col], [row]: value }
    }));
  };

  const handleSave = () => {
    const isTitleEmpty = title.trim() === "";
    const isDataEmpty = Object.values(tableData).every(col => 
      Object.values(col).every(cell => cell.trim() === "")
    );

    if (isTitleEmpty && isDataEmpty) {
      alert("Cannot save empty table. Please add a title or data.");
      return;
    }

    onSave({ id, title, data: tableData });
    setSaveState("saved");
  };

  const toggleEditState = () => {
    saveState === "editing" ? handleSave() : setSaveState("editing");
  };

  return (
    <div className="table-container">
      <div className="table-header">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          readOnly={saveState === "saved"}
          className="table-title-input"
          style={{ 
            direction: isArabic ? "rtl" : "ltr",
            textAlign: isArabic ? "right" : "left"
          }}
        />
        <div className="table-controls">
          <button onClick={toggleEditState} className="table-edit-save-control-button">
            {saveState === "editing" ? "Save" : "Edit"}
          </button>
          <button 
            onClick={() => onDelete(id)}
            className="delete-table-button"
          >
            Delete
          </button>
        </div>
      </div>
      
      <div className="prepare-inside-data-table-container">
        {Object.keys(tableData).map(col => (
          <div key={col} className={`data-table-column ${col}`}>
            {Object.keys(tableData[col]).map(row => (
              <input
                key={row}
                type="text"
                value={tableData[col][row]}
                onChange={(e) => handleInputChange(col, row, e.target.value)}
                readOnly={saveState === "saved"}
                style={{ 
                  direction: isArabic ? "rtl" : "ltr",
                  textAlign: isArabic ? "right" : "left"
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PrepareDataTableComponent;