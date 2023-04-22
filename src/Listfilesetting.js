import React, { useState } from "react";
import "./features/css/listfile.css";
import { IconButton } from "@material-ui/core";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import RefreshIcon from "@material-ui/icons/Refresh";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

function Listfilesetting() {
  let [select, chaselect] = useState(false);
  function selected() {
    chaselect((pre) => !select);
  }
  return (
    <div className="listfilesetting">
      <div className="settingleft">
        <span hidden={select}>
          <IconButton onClick={selected}>
            <CheckBoxOutlineBlankIcon />
          </IconButton>
        </span>
        <span hidden={!select}>
          <IconButton onClick={selected}>
            <CheckBoxIcon />
          </IconButton>
        </span>
        <IconButton>
          <RefreshIcon />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Listfilesetting;
