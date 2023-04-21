import React from "react";
import "./features/css/listfile.css";
import { IconButton } from "@material-ui/core";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";

function Listbody({ name }) {
  return (
    <div className="listbody">
      <div className="sp">
        <div className="listbody-left">
          <IconButton>
            <CheckBoxOutlineBlankIcon />
          </IconButton>
        </div>
        <div className="listbody-right">
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
}

export default Listbody;
