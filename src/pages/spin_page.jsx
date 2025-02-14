import React from "react";
import DataTableComponent from './../components/table';
import SpinGame from "../components/spins";

function SpinPage() {

  return (
    <div className="body">
      <DataTableComponent/>
      <SpinGame/>
    </div>
  );
}

export default SpinPage;
