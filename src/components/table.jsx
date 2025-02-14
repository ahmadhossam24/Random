import React ,{useContext,useState}from "react";
import SpinContext from "../context/spin_context";

function DataTableComponent() {
  const { save_edit_state,changeSaveEditState,changeTableData,reFillSpins,emptySpins } = useContext(SpinContext);
  const [newTableDataObj,setnewTableDataObj] = useState({
    col1:{c1r1:"",c1r2:"",c1r3:"",c1r4:"",c1r5:"",c1r6:""},
    col2:{c2r1:"",c2r2:"",c2r3:"",c2r4:"",c2r5:"",c2r6:""},
    col3:{c3r1:"",c3r2:"",c3r3:"",c3r4:"",c3r5:"",c3r6:""},
    col4:{c4r1:"",c4r2:"",c4r3:"",c4r4:"",c4r5:"",c4r6:""},
    col5:{c5r1:"",c5r2:"",c5r3:"",c5r4:"",c5r5:"",c5r6:""},
    col6:{c6r1:"",c6r2:"",c6r3:"",c6r4:"",c6r5:"",c6r6:""}
  });

  return (<>
    <button onClick={()=>{
      changeSaveEditState();
      if(save_edit_state=="saved"){
        changeTableData(newTableDataObj);
        reFillSpins(newTableDataObj);
      }else if(save_edit_state=="editing"){
        emptySpins();
      }
      }} className="table-control-button">
      {save_edit_state=="editing" ? "Save" : "Edit"}
    </button>
    <div className="data-table-container">
      <div className="data-table-column col1">
        <input type="text" id="c1r1" readOnly={save_edit_state==="editing"}/>
        <input type="text" id="c1r2" readOnly={save_edit_state==="editing"}/>
        <input type="text" id="c1r3" readOnly={save_edit_state==="editing"}/>
        <input type="text" id="c1r4" readOnly={save_edit_state==="editing"}/>
        <input type="text" id="c1r5" readOnly={save_edit_state==="editing"}/>
        <input type="text" id="c1r6" readOnly={save_edit_state==="editing"}/>
      </div>  

      <div className="data-table-column col2">
        <input type="text" id="c2r1" readOnly={save_edit_state==="editing"}/>
        <input type="text" id="c2r2" readOnly={save_edit_state==="editing"}/>
        <input type="text" id="c2r3" readOnly={save_edit_state==="editing"}/>
        <input type="text" id="c2r4" readOnly={save_edit_state==="editing"}/>
        <input type="text" id="c2r5" readOnly={save_edit_state==="editing"}/>
        <input type="text" id="c2r6" readOnly={save_edit_state==="editing"}/>
      </div>

      <div className="data-table-column col3">
        <input type="text" id="c3r1" readOnly={save_edit_state==="editing"}/>
        <input type="text" id="c3r2" readOnly={save_edit_state==="editing"}/>
        <input type="text" id="c3r3" readOnly={save_edit_state==="editing"}/>
        <input type="text" id="c3r4" readOnly={save_edit_state==="editing"}/>
        <input type="text" id="c3r5" readOnly={save_edit_state==="editing"}/>
        <input type="text" id="c3r6" readOnly={save_edit_state==="editing"}/>
      </div>

      <div className="data-table-column col4">
        <input type="text" id="c4r1" readOnly={save_edit_state==="editing"}/>
        <input type="text" id="c4r2" readOnly={save_edit_state==="editing"}/>
        <input type="text" id="c4r3" readOnly={save_edit_state==="editing"}/>
        <input type="text" id="c4r4" readOnly={save_edit_state==="editing"}/>
        <input type="text" id="c4r5" readOnly={save_edit_state==="editing"}/>
        <input type="text" id="c4r6" readOnly={save_edit_state==="editing"}/>
      </div>

      <div className="data-table-column col5">
        <input type="text" id="c5r1" readOnly={save_edit_state==="editing"}/>
        <input type="text" id="c5r2" readOnly={save_edit_state==="editing"}/>
        <input type="text" id="c5r3" readOnly={save_edit_state==="editing"}/>
        <input type="text" id="c5r4" readOnly={save_edit_state==="editing"}/>
        <input type="text" id="c5r5" readOnly={save_edit_state==="editing"}/>
        <input type="text" id="c5r6" readOnly={save_edit_state==="editing"}/>
      </div>

      <div className="data-table-column col6">
        <input type="text" id="c6r1" readOnly={save_edit_state==="editing"}/>
        <input type="text" id="c6r2" readOnly={save_edit_state==="editing"}/>
        <input type="text" id="c6r3" readOnly={save_edit_state==="editing"}/>
        <input type="text" id="c6r4" readOnly={save_edit_state==="editing"}/>
        <input type="text" id="c6r5" readOnly={save_edit_state==="editing"}/>
        <input type="text" id="c6r6" readOnly={save_edit_state==="editing"}/>
      </div>
    </div>
    </>);
}

export default DataTableComponent;