import React, { useState, useEffect } from "react";
import PrepareDataTableComponent from "./prepare_table";

function PreparedTables() {
  const [tables, setTables] = useState([]);

  // Load tables from local storage on mount
  useEffect(() => {
    const savedTables = JSON.parse(localStorage.getItem("spin_tables_db->zabuv")) || [];
    setTables(savedTables);
  }, []);

  // Add new table with default structure
  const addTable = () => {
    const newTable = {
      id: Date.now().toString(),
      title: "New Table",
      data: {
        col1: { c1r1: "", c1r2: "", c1r3: "", c1r4: "", c1r5: "", c1r6: "" },
        col2: { c2r1: "", c2r2: "", c2r3: "", c2r4: "", c2r5: "", c2r6: "" },
        col3: { c3r1: "", c3r2: "", c3r3: "", c3r4: "", c3r5: "", c3r6: "" },
        col4: { c4r1: "", c4r2: "", c4r3: "", c4r4: "", c4r5: "", c4r6: "" },
        col5: { c5r1: "", c5r2: "", c5r3: "", c5r4: "", c5r5: "", c5r6: "" },
        col6: { c6r1: "", c6r2: "", c6r3: "", c6r4: "", c6r5: "", c6r6: "" }
      }
    };
    setTables(prev => [...prev, newTable]);
  };

  // Update table and handle empty state
  const updateTable = (updatedTable) => {
    setTables(prevTables => {
      const isTitleEmpty = updatedTable.title.trim() === "";
      const isDataEmpty = Object.values(updatedTable.data).every(col => 
        Object.values(col).every(cell => cell.trim() === "")
      );
      
      const newTables = isTitleEmpty && isDataEmpty
        ? prevTables.filter(t => t.id !== updatedTable.id)
        : prevTables.map(t => t.id === updatedTable.id ? updatedTable : t);

      localStorage.setItem("spin_tables_db->zabuv", JSON.stringify(newTables));
      return newTables;
    });
  };

  // Delete table
  const deleteTable = (id) => {
    setTables(prev => {
      const newTables = prev.filter(t => t.id !== id);
      localStorage.setItem("spin_tables_db->zabuv", JSON.stringify(newTables));
      return newTables;
    });
  };

  return (
    <>
      <button onClick={addTable} className="prepare-new-table-button">
        Prepare new table +
      </button>
      
      {tables.map(table => (
        <div key={table.id} className=".prepare-data-table-container">
          <PrepareDataTableComponent
            key={table.id}
            id={table.id}
            initialTitle={table.title}
            initialData={table.data}
            onSave={updateTable}
            onDelete={deleteTable}
          />
        </div>
      ))}
    </>
  );
}

export default PreparedTables;