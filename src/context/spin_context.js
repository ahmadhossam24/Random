import { createContext, useState } from "react";

const SpinContext = createContext();

export function SpinProvider({ children }) {
  const [tableData, setTableData] = useState(
    {
      col1:{c1r1:"",c1r2:"",c1r3:"",c1r4:"",c1r5:"",c1r6:""},
      col2:{c2r1:"",c2r2:"",c2r3:"",c2r4:"",c2r5:"",c2r6:""},
      col3:{c3r1:"",c3r2:"",c3r3:"",c3r4:"",c3r5:"",c3r6:""},
      col4:{c4r1:"",c4r2:"",c4r3:"",c4r4:"",c4r5:"",c4r6:""},
      col5:{c5r1:"",c5r2:"",c5r3:"",c5r4:"",c5r5:"",c5r6:""},
      col6:{c6r1:"",c6r2:"",c6r3:"",c6r4:"",c6r5:"",c6r6:""}
    }
  );
  const [save_edit_state, setSave_edit_state] = useState("saved"); 
  const [C1SpinArr, setC1SpinArr] = useState([]); 
  const [C2SpinArr, setC2SpinArr] = useState([]); 
  const [C3SpinArr, setC3SpinArr] = useState([]); 
  const [C4SpinArr, setC4SpinArr] = useState([]); 
  const [C5SpinArr, setC5SpinArr] = useState([]); 
  const [C6SpinArr, setC6SpinArr] = useState([]); 

  const saveTableData = (newData) => {
    setTableData(newData);
  };

  const changeSaveEditState = () => {
    if(save_edit_state=="saved"){
      setSave_edit_state("editing")
    }else{
      setSave_edit_state("saved")
    }
  };

  const changeTableData = (newTableDataobj) => {
    setTableData(newTableDataobj);
  };

  const reFillSpins = (newTableDataobj) => {
    const c1arrayFeed = Object.values(newTableDataobj.col1).filter(value => value !== "");
    const c2arrayFeed = Object.values(newTableDataobj.col2).filter(value => value !== "");
    const c3arrayFeed = Object.values(newTableDataobj.col3).filter(value => value !== "");
    const c4arrayFeed = Object.values(newTableDataobj.col4).filter(value => value !== "");
    const c5arrayFeed = Object.values(newTableDataobj.col5).filter(value => value !== "");
    const c6arrayFeed = Object.values(newTableDataobj.col6).filter(value => value !== "");
    setC1SpinArr(c1arrayFeed);
    setC2SpinArr(c2arrayFeed);
    setC3SpinArr(c3arrayFeed);
    setC4SpinArr(c4arrayFeed);
    setC5SpinArr(c5arrayFeed);
    setC6SpinArr(c6arrayFeed);
  };

  const emptySpins=()=>{
    setC1SpinArr([]);
    setC2SpinArr([]);
    setC3SpinArr([]);
    setC4SpinArr([]);
    setC5SpinArr([]);
    setC6SpinArr([]);
  }



  return (
    <SpinContext.Provider value={{ tableData, saveTableData,save_edit_state,setSave_edit_state,changeSaveEditState,changeTableData,reFillSpins,emptySpins,C1SpinArr,C2SpinArr,C3SpinArr,C4SpinArr,C5SpinArr,C6SpinArr }}>
      {children}
    </SpinContext.Provider>
  );
}

export default SpinContext;
