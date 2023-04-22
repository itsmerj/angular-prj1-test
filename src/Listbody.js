import React, { useState } from "react";
import "./features/css/listfile.css";
import { IconButton } from "@material-ui/core";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import MoreVertIcon from "@material-ui/icons/MoreVert";
function Listbody({ name, ind }) {
  // let obj = name;
  // let index = ind;
  const [select, setselect] = useState(true);
  function selected() {
    if (select) console.log(name);
    setselect((prevselect) => !prevselect);
  }
  return (
    <div className="listbody">
      <div className="sp">
        <div hidden={!select} className="listbody-left">
          <IconButton onClick={selected}>
            <CheckBoxOutlineBlankIcon />
          </IconButton>
        </div>
        <div hidden={select} className="listbody-left">
          <IconButton onClick={selected}>
            <CheckBoxIcon />
          </IconButton>
        </div>
        <div className="listbody-right">
          <p>Test case no: {name["idtest_case"]}</p>
        </div>
        <div>
          <IconButton className="save">
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Listbody;
