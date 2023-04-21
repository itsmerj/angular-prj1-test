import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import "./features/css/foldercreate.css";
import { IconButton } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { closeCreateFolder } from "./features/mailslice";

function Foldercreate() {
  const dispatch = useDispatch();
  const [to, setTo] = useState("");
  function onsubmit() {}
  return (
    <div className="foldercreate">
      <div className="folder-header">
        <p>New folder</p>
        <IconButton
          onClick={() => {
            dispatch(closeCreateFolder());
          }}
        >
          <CloseIcon />
        </IconButton>
      </div>
      <form onSubmit={onsubmit()}>
        <div className="folder-body">
          <input
            placeholder="Folder name"
            value={to}
            onChange={(e) => {
              setTo(e.target.value);
            }}
          ></input>
        </div>
        <div className="folder-foter">
          <button type="submit">create</button>
        </div>
      </form>
    </div>
  );
}

export default Foldercreate;
